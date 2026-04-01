// src/lib/plans.ts
// Delivami subscription plan definitions — single source of truth
// Plans: free | creator | pro | agency

export type PlanId = "free" | "creator" | "pro" | "agency";

export interface PlanConfig {
    id: PlanId;
    name: string;
    tagline: string;
    // NOTE: despite the variable names, these values are currently treated as **GHS**
    // across the app + Paystack (amount sent in pesewas). Rename later if desired.
    priceMonthlyUSD: number;
    priceAnnualUSD: number; // total when billed annually
    // Paystack plan codes — set after creating plans in Paystack dashboard
    paystackMonthlyCode: string | null;
    paystackAnnualCode: string | null;
    // Manual local price overrides (to avoid calculation rounding issues)
    localMonthlyPrices?: Record<string, number>;
    localAnnualPrices?: Record<string, number>;
    limits: {
        projects: number | "unlimited"; // max active projects
        storageGB: number | "unlimited"; // total storage across account
        storageGBPerProject?: number | "unlimited"; // optional per-project cap
        teamMembers: number; // 1 = solo (no team)
    };
    features: {
        // Delivery
        deliveryLink: boolean;
        passwordProtection: boolean;
        expiringLinks: boolean;
        customDomain: boolean;
        // Review
        clientComments: boolean;
        approvalSystem: boolean;
        versionUploads: boolean;
        versionComparison: boolean;
        // Client experience
        customBranding: boolean; // remove Delivami branding
        watermarkedPreviews: boolean;
        activityTracking: boolean;
        clientPortal: boolean;
        // Payments
        paystackPayments: boolean;
        payBeforeDownload: boolean;
        downloadProtection: boolean;
        // Platform
        // Commission/platform fee taken from paid invoices
        // (e.g. 5 => 5%)
        platformFeePercent: number;
        teamWorkspaces: boolean;
        analytics: boolean;
        apiAccess: boolean;
        prioritySupport: boolean;
    };
    highlighted: boolean; // show as "most popular"
    badge?: string;
}

export interface CurrencyConfig {
    code: string;
    symbol: string;
    rate: number; // 1 USD = X Local Currency
    name: string;
}

export const AFRICAN_CURRENCIES: Record<string, CurrencyConfig> = {
    USD: { code: "USD", symbol: "$", rate: 1, name: "US Dollar" },
    GHS: { code: "GHS", symbol: "₵", rate: 14.50, name: "Ghanaian Cedi" },
    NGN: { code: "NGN", symbol: "₦", rate: 1550.00, name: "Nigerian Naira" },
    ZAR: { code: "ZAR", symbol: "R", rate: 19.00, name: "South African Rand" },
    XAF: { code: "XAF", symbol: "CFA", rate: 605.00, name: "Central African CFA franc" },
};

export const PLANS: Record<PlanId, PlanConfig> = {
    free: {
        id: "free",
        name: "Free",
        tagline: "Perfect for freelancers just starting out",
        priceMonthlyUSD: 0,
        priceAnnualUSD: 0,
        paystackMonthlyCode: null,
        paystackAnnualCode: null,
        // 2GB total storage across up to 3 projects
        limits: { projects: 3, storageGB: 2, storageGBPerProject: 2, teamMembers: 1 },
        features: {
            deliveryLink: true,
            passwordProtection: false,
            expiringLinks: false,
            customDomain: false,
            clientComments: true,
            approvalSystem: true,
            versionUploads: true,
            versionComparison: false,
            customBranding: false,
            watermarkedPreviews: false,
            activityTracking: false,
            clientPortal: false,
            paystackPayments: true,
            payBeforeDownload: false,
            downloadProtection: false,
            platformFeePercent: 2.5,
            teamWorkspaces: false,
            analytics: false,
            apiAccess: false,
            prioritySupport: false,
        },
        highlighted: false,
    },

    creator: {
        id: "creator",
        name: "Creator",
        tagline: "For freelance creatives delivering work to clients",
        priceMonthlyUSD: 7,
        priceAnnualUSD: 70, 
        paystackMonthlyCode: process.env.PAYSTACK_PLAN_CREATOR_MONTHLY || null,
        paystackAnnualCode: process.env.PAYSTACK_PLAN_CREATOR_ANNUAL || null,
        localMonthlyPrices: {
            GHS: 101.50, NGN: 10850, ZAR: 133, XAF: 4235
        },
        localAnnualPrices: {
            GHS: 1015, NGN: 108500, ZAR: 1330, XAF: 42350
        },
        limits: { projects: 25, storageGB: 50, storageGBPerProject: 5, teamMembers: 1 }, 
        features: {
            deliveryLink: true,
            passwordProtection: true,
            expiringLinks: true,
            customDomain: false,
            clientComments: true,
            approvalSystem: true,
            versionUploads: true,
            versionComparison: false,
            customBranding: true,
            watermarkedPreviews: false,
            activityTracking: true,
            clientPortal: false,
            paystackPayments: true,
            payBeforeDownload: true,
            downloadProtection: true,
            platformFeePercent: 0,
            teamWorkspaces: false,
            analytics: true,
            apiAccess: false,
            prioritySupport: true,
        },
        highlighted: true,
        badge: "Most Popular",
    },

    pro: {
        id: "pro",
        name: "Pro",
        tagline: "For working creatives delivering to multiple clients",
        priceMonthlyUSD: 15,
        priceAnnualUSD: 150,
        paystackMonthlyCode: process.env.PAYSTACK_PLAN_PRO_MONTHLY || null,
        paystackAnnualCode: process.env.PAYSTACK_PLAN_PRO_ANNUAL || null,
        localMonthlyPrices: {
            GHS: 217.50, NGN: 23250, ZAR: 285, XAF: 9075
        },
        localAnnualPrices: {
            GHS: 2175, NGN: 232500, ZAR: 2850, XAF: 90750
        },
        limits: { projects: "unlimited", storageGB: 150, storageGBPerProject: "unlimited", teamMembers: 1 }, 
        features: {
            deliveryLink: true,
            passwordProtection: true,
            expiringLinks: true,
            customDomain: false,
            clientComments: true,
            approvalSystem: true,
            versionUploads: true,
            versionComparison: true,
            customBranding: true,
            watermarkedPreviews: true,
            activityTracking: true,
            clientPortal: true,
            paystackPayments: true,
            payBeforeDownload: true,
            downloadProtection: true,
            platformFeePercent: 0,
            teamWorkspaces: false,
            analytics: true,
            apiAccess: false,
            prioritySupport: true,
        },
        highlighted: false,
    },

    agency: {
        id: "agency",
        name: "Studio",
        tagline: "For studios, agencies, and teams delivering at scale",
        priceMonthlyUSD: 40,
        priceAnnualUSD: 400,
        paystackMonthlyCode: process.env.PAYSTACK_PLAN_AGENCY_MONTHLY || null,
        paystackAnnualCode: process.env.PAYSTACK_PLAN_AGENCY_ANNUAL || null,
        localMonthlyPrices: {
            GHS: 580, NGN: 62000, ZAR: 760, XAF: 24200
        },
        localAnnualPrices: {
            GHS: 5800, NGN: 620000, ZAR: 7600, XAF: 242000
        },
        limits: { projects: "unlimited", storageGB: 500, teamMembers: 5 }, 
        features: {
            deliveryLink: true,
            passwordProtection: true,
            expiringLinks: true,
            customDomain: true,
            clientComments: true,
            approvalSystem: true,
            versionUploads: true,
            versionComparison: true,
            customBranding: true,
            watermarkedPreviews: true,
            activityTracking: true,
            clientPortal: true,
            paystackPayments: true,
            payBeforeDownload: true,
            downloadProtection: true,
            platformFeePercent: 0,
            teamWorkspaces: true,
            analytics: true,
            apiAccess: true,
            prioritySupport: true,
        },
        highlighted: false,
        badge: "Best for Teams",
    },
};

/** Returns the plan config for a user or "free" as fallback */
export function getUserPlan(user: {
    subscriptionPlan?: string | null;
    subscriptionStatus?: string | null;
    trialEndsAt?: Date | string | null;
}): PlanConfig {
    const isActive = user.subscriptionStatus === "active";
    const isTrialing = user.subscriptionStatus === "trialing";
    
    let planId = (isActive ? user.subscriptionPlan : "free") as PlanId;

    if (isTrialing && user.trialEndsAt) {
        const trialEnd = new Date(user.trialEndsAt);
        const now = new Date();
        
        // 14 days + 3 days grace = 17 days
        const graceEnd = new Date(trialEnd);
        graceEnd.setDate(graceEnd.getDate() + 3);

        if (now <= graceEnd) {
            planId = (user.subscriptionPlan || "free") as PlanId;
        } else {
            // Trial and grace expired
            planId = "free";
        }
    }

    return PLANS[planId] ?? PLANS.free;
}

/** Check if a user can create more projects */
export function canCreateProject(
    user: { subscriptionPlan?: string | null; subscriptionStatus?: string | null },
    currentActiveCount: number
): { allowed: boolean; limit: number | "unlimited" } {
    const plan = getUserPlan(user);
    const limit = plan.limits.projects;
    if (limit === "unlimited") return { allowed: true, limit };
    return { allowed: currentActiveCount < limit, limit };
}

/** Get total storage limit (Base Plan + Add-ons) */
export function getStorageLimitGB(user: {
    subscriptionPlan?: string | null;
    subscriptionStatus?: string | null;
    extraStorageGB?: number | null;
}): number | "unlimited" {
    const plan = getUserPlan(user);
    if (plan.limits.storageGB === "unlimited") return "unlimited";
    return plan.limits.storageGB + (user.extraStorageGB || 0);
}

/**
 * Optional per-project storage cap.
 * If not set, treat as unlimited (only total storage cap applies).
 */
export function getPerProjectStorageLimitGB(user: {
    subscriptionPlan?: string | null;
    subscriptionStatus?: string | null;
    extraStorageGB?: number | null;
}): number | "unlimited" {
    const plan = getUserPlan(user);
    const perProject = plan.limits.storageGBPerProject;
    if (!perProject || perProject === "unlimited") return "unlimited";
    // Add-ons apply to total storage, not per-project.
    return perProject;
}

/** Get total team limit (Base Plan + Add-ons) */
export function getTeamLimit(user: {
    subscriptionPlan?: string | null;
    subscriptionStatus?: string | null;
    extraTeamMembers?: number | null;
}): number {
    return getUserPlan(user).limits.teamMembers + (user.extraTeamMembers || 0);
}

/** Formatted storage label */
export function formatStorage(gb: number | "unlimited"): string {
    if (gb === "unlimited") return "Unlimited";
    if (gb >= 1000) return `${gb / 1000} TB`;
    return `${gb} GB`;
}

// Add-On Prices (Monthly USD)
export const ADD_ONS = {
    TEAM_MEMBER: 10,
    STORAGE_50GB: 5,
    STORAGE_100GB: 10,
    STORAGE_200GB: 15,
    STORAGE_500GB: 30,
    STORAGE_1TB: 50,
    CUSTOM_DOMAIN: 15,
    WHITE_LABEL: 25,
};

/**
 * Calculates the platform fee for a given amount based on the user's plan.
 * Returns the fee in local currency units (e.g. pesewas, kobo).
 */
export function calculatePlatformFee(amountInUnits: number, plan: PlanConfig): number {
    const feePercent = (plan.features.platformFeePercent || 0) / 100;
    return Math.round(amountInUnits * feePercent);
}

/**
 * Gets the localized price for a plan.
 */
export function getPlanPrice(
    plan: PlanConfig,
    currencyCode: string = "USD",
    billing: "monthly" | "annual" = "monthly",
    currencies: Record<string, CurrencyConfig> = AFRICAN_CURRENCIES
) {
    const currency = currencies[currencyCode] || currencies.USD || AFRICAN_CURRENCIES.USD;
    
    // Check for manual overrides first
    const overrides = billing === "annual" ? plan.localAnnualPrices : plan.localMonthlyPrices;
    if (overrides && overrides[currencyCode] !== undefined) {
        const totalAmount = overrides[currencyCode];
        const monthlyEquivalent = billing === "annual" ? totalAmount / 12 : totalAmount;
        return {
            amount: monthlyEquivalent,
            formatted: `${currency.symbol}${monthlyEquivalent.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`,
            totalForCycle: totalAmount,
            currency
        };
    }

    const baseUSD = billing === "annual" ? plan.priceAnnualUSD / 12 : plan.priceMonthlyUSD;
    const localPrice = baseUSD * currency.rate;
    
    return {
        amount: localPrice,
        formatted: `${currency.symbol}${localPrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`,
        totalForCycle: billing === "annual" ? plan.priceAnnualUSD * currency.rate : localPrice,
        currency
    };
}
