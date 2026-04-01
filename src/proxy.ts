import { NextRequest, NextResponse } from "next/server";
import { validateTurnstile } from "@/lib/turnstile";

// Enhanced bot detection patterns
const BOT_PATTERNS = [
  /bot/i, /crawler/i, /spider/i, /scraper/i,
  /curl/i, /wget/i, /python/i, /java/i,
  /headless/i, /phantom/i, /selenium/i,
  /puppeteer/i, /playwright/i,
];

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_PATTERNS.some(pattern => pattern.test(userAgent));
}

function shouldProtectWithTurnstile(path: string): boolean {
  const protectedPaths = [
    '/api/contact',
    '/api/waitlist',
  ];
  return protectedPaths.some(protectedPath => path.startsWith(protectedPath));
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico).*)",
  ],
};

export default async function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const ip = req.headers.get("x-forwarded-for") || "local";
  const userAgent = req.headers.get("user-agent");

  // 1. Bot Detection for APIs
  if (isBot(userAgent) && url.pathname.startsWith("/api")) {
    return NextResponse.json(
      { error: 'Access denied. Automated access is restricted.' },
      { status: 403 }
    );
  }

  // 2. Turnstile Validation
  if (shouldProtectWithTurnstile(url.pathname)) {
    const { secureConfig } = require("@/lib/secureConfig");
    const secretKey = secureConfig.getTurnstileSecretKey();

    // Only enforce Turnstile if the secret key is configured
    if (secretKey) {
      const turnstileToken = req.headers.get('x-turnstile-token') || 
                            (req.method === 'POST' ? 
                              await req.clone().json().then(body => body?.turnstileToken).catch(() => null) : 
                              null);
      
      if (!turnstileToken && req.method === 'POST') {
        return NextResponse.json(
          { error: 'Security check required. Please complete CAPTCHA.' },
          { status: 403 }
        );
      }

      if (turnstileToken) {
        const isValidTurnstile = await validateTurnstile(turnstileToken, ip);
        if (!isValidTurnstile) {
          return NextResponse.json(
            { error: 'Security check failed. Please try again.' },
            { status: 403 }
          );
        }
      }
    }
  }

  const response = NextResponse.next();
  
  // CRITICAL: For API routes in development, return immediately to avoid
  // ERR_CONTENT_LENGTH_MISMATCH caused by adding security headers to streamed/buffered responses.
  if (url.pathname.startsWith("/api") && process.env.NODE_ENV === 'development') {
    return response;
  }

  const headers = response.headers;

  // Security Headers
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}
