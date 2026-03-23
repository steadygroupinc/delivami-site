// landing-page/src/lib/email.ts

/**
 * Mock email sender for landing-page as transactional emails are handled by the main app.
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  console.log(`[Landing Page Email Mock] To: ${to}, Subject: ${subject}`);
  return { id: "mock-id" };
}

export async function sendResetPasswordEmail({
  to,
  url,
  userName,
}: {
  to: string;
  url: string;
  userName?: string;
}) {
  console.log(`[Landing Page Email Mock] Reset password for ${userName} (${to}) at ${url}`);
  return { id: "mock-id" };
}
