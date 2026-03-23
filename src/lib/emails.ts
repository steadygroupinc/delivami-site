// landing-page/src/lib/emails.ts

/**
 * Normalizes an email address to prevent multiple accounts for the same inbox.
 */
export function normalizeEmail(email: string): string {
    if (!email || typeof email !== "string") return "";

    const [localPart, domain] = email.toLowerCase().trim().split("@");
    let local = localPart;
    if (!local || !domain) return email.toLowerCase().trim();

    // 1. Remove sub-addressing (+anything)
    local = local.split("+")[0];

    // 2. Gmail specific: remove dots
    if (domain === "gmail.com" || domain === "googlemail.com") {
        local = local.replace(/\./g, "");
    }

    return `${local}@${domain}`;
}
