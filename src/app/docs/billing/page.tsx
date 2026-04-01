// src/app/docs/billing/page.tsx
import React from "react";
import { CreditCard, Globe, Calendar, Percent } from "lucide-react";

export default function BillingDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Billing & Currencies</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Unified Professional Billing. Learn about our multi-currency support, 
          annual savings, and the 17-day trial lifecycle.
        </p>
      </header>

      <div className="space-y-12">
        <section id="cycles" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Subscription Lifecycle</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami offers a generous trial period to ensure our platform 
            fits your studio's workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">17-Day Trial</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Includes a 14-day full feature trial plus a <span className="text-white">3-day grace period</span> for 
                finalizing active projects before account locking.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Percent size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Annual Savings</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Save approximately <span className="text-white">15-20%</span> by switching to annual 
                billing. This locks in your rate for 12 months.
              </p>
            </div>
          </div>
        </section>

        <section id="currencies" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Global & Local Currencies</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            We support automated conversion for major African markets using 
            real-time exchange rates against the USD.
          </p>
          <div className="table-wrapper border-none !bg-white/[0.01]">
            <table className="!bg-transparent text-xs">
              <thead>
                <tr className="!bg-transparent border-b border-white/5">
                  <th className="!bg-transparent py-2">Market</th>
                  <th className="!bg-transparent py-2">Currency</th>
                  <th className="!bg-transparent py-2">Paystack Integration</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Ghana</td><td className="font-mono text-gold">GHS</td><td>Native (MoMo + Card)</td></tr>
                <tr><td>Nigeria</td><td className="font-mono text-gold">NGN</td><td>Native (Bank + Card)</td></tr>
                <tr><td>South Africa</td><td className="font-mono text-gold">ZAR</td><td>Native (Bank + Card)</td></tr>
                <tr><td>Cameroon</td><td className="font-mono text-gold">XAF</td><td>Native (MoMo + Card)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="fees" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Platform Fees</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Transparency in every transaction. Delivami fees are designed to 
            scale down as your studio grows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-muted mb-1">Free Tier</div>
              <div className="text-xs font-bold text-white">2.5%</div>
              <p className="text-[10px] text-muted mt-1 m-0">Standard Fee</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-gold/40 mb-1">Creator/Pro</div>
              <div className="text-xs font-bold text-gold">0%</div>
              <p className="text-[10px] text-muted mt-1 m-0">No Platform Fee</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-gold/40 mb-1">Studio</div>
              <div className="text-xs font-bold text-gold">0%</div>
              <p className="text-[10px] text-muted mt-1 m-0">Priority Payouts</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          All billing is processed securely via Paystack. Delivami does not store card data.
        </p>
      </footer>
    </div>
  );
}
