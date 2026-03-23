// src/lib/currency.ts
import { AFRICAN_CURRENCIES } from "./plans";

const API_KEY = process.env.FREE_CURRENCY_API_KEY;
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

export interface LiveRates {
    [key: string]: number;
}

/**
 * Fetches the latest exchange rates from FreeCurrencyAPI.
 * Uses Next.js fetch caching (revalidates every 24 hours by default).
 */
export async function getLiveRates(): Promise<LiveRates | null> {
    if (!API_KEY) {
        console.warn("FREE_CURRENCY_API_KEY is not set.");
        return null;
    }

    try {
        const url = `${BASE_URL}?apikey=${API_KEY}`;
        
        const res = await fetch(url, {
            next: { revalidate: 86400 }, // 24 hours
        });

        if (!res.ok) {
            console.error(`Failed to fetch live rates: ${res.status} ${res.statusText}`);
            return null;
        }

        const data = await res.json();
        return data.data || null;
    } catch (error) {
        console.error("Error fetching live rates:", error);
        return null;
    }
}

/**
 * Merges live rates into existing currency configurations as a fallback.
 */
export function applyLiveRates(baseCurrencies: typeof AFRICAN_CURRENCIES, liveRates: LiveRates | null) {
    if (!liveRates) return baseCurrencies;

    const updated = { ...baseCurrencies };
    for (const code in liveRates) {
        if (updated[code]) {
            updated[code] = {
                ...updated[code],
                rate: liveRates[code],
            };
        }
    }
    return updated;
}
