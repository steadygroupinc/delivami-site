import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { resend } from "@/lib/resend";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  creatorType: z.string().min(1, "Please select a creator type"),
  region: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, creatorType, region } = waitlistSchema.parse(body);

    const entry = await prisma.waitlist.upsert({
      where: { email },
      update: { creatorType, region },
      create: { email, creatorType, region },
    });

    // Send Confirmation & Alert Emails
    if (process.env.RESEND_API_KEY) {
      try {
        // 1. Send Confirmation to User
        await resend.emails.send({
          from: "Delivami <hello@delivami.com>",
          to: email,
          subject: "You're on the Delivami waitlist",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0a1628;">
              <h2 style="color: #d4af37;">Thanks for joining the Delivami waitlist.</h2>
              <p>We're building a simpler way for creatives to deliver work, get approvals, and receive payments — all in one link.</p>
              <p>We'll let you know when early access opens.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 14px; color: #8896b3;">&mdash; The Delivami Team<br/>A Steady Group Product</p>
            </div>
          `,
        });

        // 2. Send Alert to Owner
        await resend.emails.send({
          from: "Delivami Alerts <alerts@delivami.com>",
          to: "hello@delivami.com",
          subject: `New Waitlist Signup: ${email} (${creatorType})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
              <h2 style="color: #0a1628;">New Waitlist Entry</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Source:</strong> ${creatorType}</p>
              <p><strong>Region:</strong> ${region || 'Not specified'}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
