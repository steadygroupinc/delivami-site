"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PLANS, AFRICAN_CURRENCIES, getPlanPrice } from "@/lib/plans";
import { Globe } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";
import "./pricing.css";

interface Props {
  user: {
    subscriptionPlan?: string | null;
    subscriptionStatus?: string | null;
    currency?: string | null;
    country?: string | null;
  } | null;
  currencies?: Record<string, any>;
}

type Billing = "monthly" | "annual";

export default function PricingClient({ user, currencies = AFRICAN_CURRENCIES }: Props) {
  const router = useRouter();
  const [billing, setBilling] = useState<Billing>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [currency, setCurrency] = useState(user?.currency || "USD");

  // Keep your existing subscribe flow (Paystack + API endpoint)
  const handleSubscribe = async (planId: string) => {
    // Free plan should always feel actionable.
    if (planId === "free") {
      if (!user) window.location.href = "https://app.delivami.com/register";
      else window.location.href = "https://app.delivami.com/dashboard";
      return;
    }

    if (!user) {
      window.location.href = `https://app.delivami.com/login?redirectTo=${encodeURIComponent(window.location.href)}`;
      return;
    }

    setLoading(planId);
    try {
      // 1. Check if user is eligible for trial
      // (Simplified: We try the trial endpoint, if it fails they might have used it)
      const trialRes = await fetch("https://app.delivami.com/api/subscriptions/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const trialData = await trialRes.json();

      if (trialRes.ok && trialData.success) {
        toast.success("14-day trial activated!");
        router.push("/dashboard");
        return;
      }

      // 2. If trial not available or already used, proceed to Paystack
      const res = await fetch("https://app.delivami.com/api/subscriptions/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, billing }),
      });
      const data = await res.json();
      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl;
      } else {
        toast.error(data.error || "Failed to initiate subscription");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(null);
    }
  };

  const isCurrentPlan = (planId: string) => {
    if (!user) return planId === "free";
    const isActive = user.subscriptionStatus === "active";
    if (!isActive) return planId === "free";
    return user.subscriptionPlan === planId;
  };

  const currentCurrency = currencies[currency] || currencies.USD || AFRICAN_CURRENCIES.USD;

  const plans = useMemo(() => {
    // Mockup-aligned cards, but IDs match backend expectations.
    // Mockup: Free | Pro | Studio. Backend: free | pro | agency (and creator exists too).
    // We map Studio -> agency.
    return [
      {
        id: "free",
        name: "Free",
        popular: false,
        tagline: "Perfect for freelancers just starting out or running a light workload.",
        billingText: "Forever free · No credit card",
        ctaVariant: "outline" as const,
        cta: "Start Free",
        commissionText: "2.5% platform fee per paid invoice",
        features: [
          { ok: true, text: "3 active projects" },
          { ok: true, text: "2GB project storage" },
          { ok: true, text: "Basic invoicing" },
          { ok: true, text: "Email notifications" },
          { ok: false, text: "No custom branding" },
          { ok: false, text: "No password protection" },
        ],
      },
      {
        id: "creator",
        name: "Creator",
        popular: false,
        tagline: "For freelance creatives delivering work regularly.",
        ctaVariant: "outline" as const,
        cta: "Start 14-day free trial",
        commissionText: "0% platform fee per paid invoice",
        features: [
          { ok: true, text: "25 active projects" },
          { ok: true, text: "50GB total storage" },
          { ok: true, text: "Custom brand colours" },
          { ok: true, text: "Password-protected links" },
          { ok: true, text: "WhatsApp review alerts" },
          { ok: true, text: "Client activity tracking" },
          { ok: false, text: "No watermark protection" },
          { ok: false, text: "No pay-to-unlock" },
        ],
      },
      {
        id: "pro",
        name: "Pro",
        popular: true,
        tagline: "For established creatives with high volume.",
        ctaVariant: "gold" as const,
        cta: "Start 14-day free trial",
        commissionText: "0% platform fee per paid invoice",
        features: [
          { ok: true, text: "Unlimited projects" },
          { ok: true, text: "150GB total storage" },
          { ok: true, text: "0% Platform Commission" },
          { ok: true, text: "Pay-to-Unlock downloads" },
          { ok: true, text: "Portfolio Showcase" },
          { ok: true, text: "Secure Client Portal" },
          { ok: true, text: "Priority support" },
        ],
      },
      {
        id: "agency",
        name: "Studio",
        popular: false,
        tagline: "For small teams and production houses.",
        ctaVariant: "outline" as const,
        cta: "Start 14-day free trial",
        commissionText: "0% platform fee per paid invoice",
        features: [
          { ok: true, text: "Up to 5 team seats" },
          { ok: true, text: "500GB total storage" },
          { ok: true, text: "0% Platform Commission" },
          { ok: true, text: "Custom domain hosting" },
          { ok: true, text: "White-label experience" },
          { ok: true, text: "Advanced analytics" },
          { ok: true, text: "API access" },
        ],
      },
    ] as const;
  }, []);

  const faqs = useMemo(
    () => [
      {
        q: "Do I need a credit card to start?",
        a: "No. The Free plan is genuinely free forever — no credit card required. You only need a payment method if you decide to upgrade to a premium plan.",
      },
      {
        q: "How does the platform commission work?",
        a: "Delivami fees are automatically deducted from each client payment. You don't need to do anything — your balance always reflects your net earnings (Free: 2.5%, Creator/Pro/Studio: 0%).",
      },
      {
        q: "Can clients pay in local African currencies?",
        a: "Yes! We support secure payments in GHS, NGN, KES, ZAR and more. You can set your preferred stable currency (like USD) and we handle the conversion for your clients securely.",
      },
      {
        q: "What is the Secure Client Portal?",
        a: "It's a private area where your clients can log in with their email to see every project you've ever delivered to them, track progress, and pay pending invoices in one place.",
      },
      {
        q: "How quickly do I receive my funds?",
        a: "Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway.",
      },
      {
        q: "Can I add more storage later?",
        a: "Yes. All premium plans can add extra storage in 50GB increments for just $5/month if you ever run out.",
      },
    ],
    []
  );

  const primaryCta = () => {
    if (!user) window.location.href = "https://app.delivami.com/register";
    else window.location.href = "https://app.delivami.com/dashboard";
  };

  return (
    <div className="pricing-shell">
      <Navbar />
      {/* Hero */}
      <div className="pricing-hero">
        <div className="ph-bg" />
        <div className="ph-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v20" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Honest, simple pricing
        </div>
        <div className="ph-title">Pay only when you get paid.</div>
        <div className="ph-sub">
          Start free. Keep using Delivami as long as you need. We only take a small commission when your client pays.
        </div>

        <div className="billing-toggle" role="tablist" aria-label="Billing period">
          <button className={`bt-opt ${billing === "monthly" ? "active" : ""}`} onClick={() => setBilling("monthly")}>
            Monthly
          </button>
          <button className={`bt-opt ${billing === "annual" ? "active" : ""}`} onClick={() => setBilling("annual")}>
            Annual <span className="bt-save">2 Months Free</span>
          </button>
        </div>

        <div className="currency-selector" style={{ marginBottom: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          < Globe size={16} className="text-muted" />
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--bdr)', 
              borderRadius: 8, 
              padding: '6px 12px', 
              color: 'var(--ivory)',
              fontSize: 12,
              outline: 'none'
            }}
          >
            {Object.values(AFRICAN_CURRENCIES).map(c => (
              <option key={c.code} value={c.code} style={{ background: 'var(--navy)' }}>
                {c.name} ({c.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Commission callout */}
      <div className="commission-callout">
        <div className="cc-inner">
          <div className="cc-kente" />
          <div className="cc-body">
            <div className="cc-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14.5 7.5-5 9" />
                <circle cx="9.5" cy="9" r="0.5" fill="currentColor" />
                <circle cx="14.5" cy="15" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <div className="cc-text">
              <div className="cc-title">Only pay when you get paid.</div>
              <div className="cc-sub">Delivami takes a small platform fee from paid invoices. Free: 2.5% · Creator/Pro/Studio: 0%.</div>
            </div>
            <div className="cc-number">2.5%</div>
          </div>
        </div>
      </div>

      {/* Plan cards */}
      <div className="plan-grid">
        {plans.map((p) => {
          const annual = billing === "annual";
          const current = isCurrentPlan(p.id);
          
          const planData = (PLANS as any)[p.id];
          const pricing = getPlanPrice(planData, currency, billing, currencies);

          const billingText =
            p.id === "free"
              ? p.billingText
              : annual
                ? `Billed ${pricing.currency.symbol}${pricing.totalForCycle.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}/year`
                : `Billed monthly · Cancel anytime`;

          return (
            <div key={p.id} className={`plan-card ${p.popular ? "popular" : ""}`}>
              {p.popular ? (
                <div className="popular-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Most Popular
                </div>
              ) : null}

              <div className="pc-kente" />
              <div className="pc-inner">
                <div className="pc-name">{p.name}</div>
                <div className="pc-price">
                  {pricing.formatted}
                  <span>/mo</span>
                </div>
                <div className="pc-billing">{billingText}</div>
                <div className="pc-tagline">{p.tagline}</div>

                <button
                  className={`pc-cta ${p.ctaVariant}`}
                  onClick={() => handleSubscribe(p.id)}
                  disabled={loading === p.id || (current && p.id !== "free")}
                >
                  {loading === p.id ? "Loading…" : p.id === "free" ? "Start Free" : current ? "Current Plan" : p.cta}
                </button>

                <div className="pc-divider" />
                <div className="pc-feat-label">What&apos;s included</div>
                {p.features.map((f, idx) => (
                  <div key={idx} className={`pc-feat ${f.ok ? "" : "muted"}`}>
                    <div
                      className="feat-check"
                      aria-hidden="true"
                      style={
                        f.ok
                          ? { background: "rgba(53,208,115,0.1)", border: "1px solid rgba(53,208,115,0.2)" }
                          : { background: "rgba(255,255,255,0.04)", border: "1px solid var(--bdr)" }
                      }
                    >
                      {f.ok ? (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                        </svg>
                      )}
                    </div>
                    {f.text}
                  </div>
                ))}

                <div className="pc-divider" style={{ marginTop: 10 }} />
                <div className="pc-feat-label">Commission</div>
                <div className="pc-feat">
                  <div
                    className="feat-check"
                    aria-hidden="true"
                    style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  {p.commissionText}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <div className="faq-title">Frequently asked</div>

        {faqs.map((f, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpenFaq(isOpen ? null : idx)}>
                {f.q}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
