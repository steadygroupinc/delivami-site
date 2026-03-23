import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { normalizeEmail } from "@/lib/emails";
import { APIError } from "better-auth/api";
import {
  twoFactor,
  emailOTP,
  magicLink,
  multiSession,
  jwt,
  haveIBeenPwned,
  deviceAuthorization,
  organization,
} from "better-auth/plugins";
import { passkey } from "@better-auth/passkey";

// Create dedicated Prisma client for Better Auth
const authDb = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(authDb, {
    provider: "postgresql",
  }),

  plugins: [
    twoFactor({
      issuer: "Delivami",
      backupCodeOptions: {
        enabled: true,
        amount: 10,
      },
    }),
    passkey(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        const { sendEmail } = await import("@/lib/email");
        const subjects: Record<string, string> = {
          "sign-in": "Your Delivami Sign-in Code",
          "email-verification": "Verify your Delivami Email",
          "forget-password": "Reset your Delivami Password",
        };
        await sendEmail({
          to: email,
          subject: subjects[type] || "Your Delivami Verification Code",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #D4AF37;">Verification Code</h2>
              <p style="font-size: 16px; color: #374151;">Your verification code is:</p>
              <div style="background: #f3f4f6; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #0A1628; border-radius: 6px;">
                ${otp}
              </div>
              <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">This code will expire shortly. If you didn't request this, you can safely ignore this email.</p>
            </div>
          `,
        });
      },
    }),
    magicLink({
      async sendMagicLink({ email, url }) {
        const { sendEmail } = await import("@/lib/email");
        await sendEmail({
          to: email,
          subject: "Sign in to Delivami",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #D4AF37;">Sign in to Delivami</h2>
              <p style="font-size: 16px; color: #374151;">Click the button below to sign in to your account. This link will expire in 1 hour.</p>
              <div style="margin: 32px 0;">
                <a href="${url}" style="background-color: #D4AF37; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Sign In to Dashboard</a>
              </div>
              <p style="font-size: 14px; color: #6b7280;">If the button doesn't work, copy and paste this link: ${url}</p>
            </div>
          `,
        });
      },
    }),
    multiSession(),
    jwt(),
    haveIBeenPwned(),
    deviceAuthorization(),
    organization({
      async sendInvitationEmail({ email, invitation }) {
        const { sendEmail } = await import("@/lib/email");
        const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/accept-invitation?invitationId=${invitation.id}`;
        await sendEmail({
          to: email,
          subject: "You've been invited to join a team on Delivami",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #D4AF37;">Team Invitation</h2>
              <p style="font-size: 16px; color: #374151;">You've been invited to join a team on Delivami.</p>
              <div style="margin: 32px 0;">
                <a href="${invitationUrl}" style="background-color: #D4AF37; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Accept Invitation</a>
              </div>
              <p style="font-size: 14px; color: #6b7280;">If the button doesn't work, copy and paste this link: ${invitationUrl}</p>
            </div>
          `,
        });
      },
    }),
  ],

  hooks: {
    before: async (context: unknown) => {
      const ctx = context as { path?: string; body?: unknown };
      const path = ctx.path || "";

      // 1. Normalize email for all relevant auth paths
      if (path.includes("sign-up") || path.includes("sign-in")) {
        const body = (ctx.body ?? {}) as Record<string, unknown>;

        const email = typeof body.email === "string" ? body.email : "";
        if (email) body.email = email.toLowerCase().trim();

        // 2. Normalized Email Duplicate Check (strictly for sign-up)
        if (path.includes("sign-up") && typeof body.email === "string" && body.email) {
          const normalized = normalizeEmail(body.email);
          const existing = await (authDb as any).user.findUnique({
            where: { normalizedEmail: normalized }
          });
          if (existing) {
            throw new APIError("BAD_REQUEST", { message: "An account with this email/inbox already exists." });
          }
          // Inject it into the creation data
          ctx.body = { ...body, normalizedEmail: normalized };
        }
      }

      return ctx;
    },
  },

  // Email + password auth for v1
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true, // enabled for security
    sendResetPasswordEmail: async ({ user, url }: { user: { email: string; name?: string | null }, url: string }) => {
      const { sendResetPasswordEmail } = await import("@/lib/email");
      await sendResetPasswordEmail({
        to: user.email,
        url,
        userName: user.name || undefined,
      });
    },
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const { sendEmail } = await import("@/lib/email");
      await sendEmail({
        to: user.email,
        subject: "Verify your Delivami account",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h1 style="color: #D4AF37; margin-bottom: 24px;">Welcome to Delivami!</h1>
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">Hi ${user.name ?? "there"},</p>
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">Thank you for joining Delivami. To get started, please verify your email address by clicking the button below:</p>
            <div style="margin: 32px 0;">
              <a href="${url}" style="background-color: #D4AF37; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Verify Email Address</a>
            </div>
            <p style="font-size: 14px; color: #6b7280;">This link expires in 24 hours. If you didn't create an account, you can safely ignore this email.</p>
            <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="font-size: 14px; color: #9ca3af;">&copy; ${new Date().getFullYear()} Delivami. All rights reserved.</p>
          </div>
        `,
      });
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24,       // refresh if older than 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes client-side cache
    },
    cookie: {
      domain: process.env.NODE_ENV === "production" ? ".delivami.com" : "localhost",
    },
  },

  user: {
    // Allow updating these fields via Better Auth
    additionalFields: {
      brandName: { type: "string", required: false },
      brandLogo: { type: "string", required: false },
      brandColor: { type: "string", required: false, defaultValue: "#D4AF37" },
      slug: { type: "string", required: false },
      customDomain: { type: "string", required: false },
      subscriptionPlan: { type: "string", required: false },
      subscriptionStatus: { type: "string", required: false },
      trialEndsAt: { type: "date", required: false },
      hasUsedTrial: { type: "boolean", required: false, defaultValue: false },
      hasCompletedOnboarding: { type: "boolean", required: false, defaultValue: false },
      extraStorageGB: { type: "number", required: false },
      extraTeamMembers: { type: "number", required: false },
    },
  },

  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ],
  rateLimit: {
    window: 60, // 60 seconds
    max: 10,    // 10 requests per window
    enabled: true,
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
