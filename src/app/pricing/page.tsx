// src/app/pricing/page.tsx
import { Metadata } from "next";
import PricingClient from "./PricingClient";
import { getLiveRates, applyLiveRates } from "@/lib/currency";
import { AFRICAN_CURRENCIES } from "@/lib/plans";

export const metadata: Metadata = {
    title: "Pricing — Delivami",
    description: "Simple, transparent pricing for African creatives. Deliver your work and get paid faster.",
};

export default async function PricingPage() {
    const session = null;
    const liveRates = await getLiveRates();
    const currencies = applyLiveRates(AFRICAN_CURRENCIES, liveRates);

    return (
        <div className="min-h-screen bg-[#07101E] text-white">
            <PricingClient user={null} currencies={currencies} />
        </div>
    );
}
