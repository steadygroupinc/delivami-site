// src/app/docs/payments/page.tsx
import React from "react";
import { 
  CreditCard, 
  Wallet, 
  Landmark, 
  ShieldCheck, 
  Globe, 
  Banknote,
  Clock,
  Lock
} from "lucide-react";

export default function PaymentsDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Payments & Settlements</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Automate your studio's billing with professional invoicing and 
          cross-border payouts.
        </p>
      </header>

      <div className="space-y-12">
      <section id="settlement" className="mb-12">
        <h2 className="text-lg font-bold mb-3">Settlement Timeline</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Once a client settles an invoice, the Delivami engine synchronizes 
          with your local provider for automated reconciliation.
        </p>
        <div className="flex gap-1">
          <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
            <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Stage 01</div>
            <div className="text-xs font-bold">Client Pays</div>
            <div className="text-[10px] text-gold mt-1">Instant</div>
          </div>
          <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
            <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Stage 02</div>
            <div className="text-xs font-bold">Verification</div>
            <div className="text-[10px] text-gold mt-1">Escrow Gate</div>
          </div>
          <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
            <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Stage 03</div>
            <div className="text-xs font-bold">Settled</div>
            <div className="text-[10px] text-gold mt-1">24-48 Hours</div>
          </div>
        </div>
      </section>

      <section id="methods" className="mb-12">
        <h2 className="text-lg font-bold mb-3">Supported Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Wallet size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Mobile Money</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">MTN, Telecel (Vodafone), AirtelTigo, M-PESA, OPay, and PalmPay.</p>
          </div>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Landmark size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Bank Transfers</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">Direct settlements to domestic and international bank accounts.</p>
          </div>
        </div>
      </section>

      <section id="trust-tiers" className="mb-0">
        <h2 className="text-lg font-bold mb-3">Trust Tiers</h2>
        <div className="table-wrapper border-none !bg-white/[0.01]">
          <table className="!bg-transparent text-xs">
            <thead>
              <tr className="!bg-transparent border-b border-white/5">
                <th className="!bg-transparent py-2">Plan</th>
                <th className="!bg-transparent py-2">Platform Fee</th>
                <th className="!bg-transparent py-2">Settlement Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Free</td>
                <td className="text-red-400">2.5% per txn</td>
                <td className="text-gold">$1,000 / mo</td>
              </tr>
              <tr>
                <td className="font-bold font-serif italic text-gold">Creator</td>
                <td>0% fee</td>
                <td className="text-gold">$2,500 / mo</td>
              </tr>
              <tr>
                <td className="font-bold text-blue-400">Pro</td>
                <td>0% fee</td>
                <td className="text-gold">$15,000 / mo</td>
              </tr>
              <tr>
                <td className="font-bold uppercase text-gold tracking-tighter">Studio</td>
                <td>0% fee</td>
                <td className="text-gold">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-l border-gold/20 pl-4 py-1 my-6">
          <p className="m-0 text-[10px] text-muted leading-relaxed">
            <span className="text-gold font-bold uppercase">Trial Policy:</span> Paid 
            plans include a 14-day trial followed by a <span className="text-white">3-day grace period</span> 
            before settlement limits revert to the Free tier.
          </p>
        </div>
      </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          All payments are processed through enterprise-grade secure infrastructure. 
          Payouts are initiated automatically upon verification.
        </p>
      </footer>
    </div>
  );
}
