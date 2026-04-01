// src/app/docs/invoices-payouts/page.tsx
import React from "react";
import Link from "next/link";
import { FileText, Banknote, RefreshCcw, TrendingUp } from "lucide-react";

export default function InvoicesPayoutsDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Invoices & Settlements</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Complete the financial loop. Automatically generate compliant 
          invoices for your clients and settle funds directly to your primary wallet.
        </p>
      </header>

      <div className="space-y-12">
        <section id="invoicing" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Professional Invoicing</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Every project link acts as an invoice gateway. Clients settle through 
            a secure portal, and Delivami handles the metadata and tax ID injection 
            required for your studio's compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Tax Compliance</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Auto-injection of Tax IDs and VAT metadata for <span className="text-white">Pro & Studio</span> plans.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Reconciliation</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Detailed breakdown of transaction fees and settlements for internal accounting.
              </p>
            </div>
          </div>
        </section>

        <section id="lifecycle" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Status Lifecycle</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Track the movement of funds from project creation to final bank settlement.
          </p>
          <div className="flex gap-1">
            <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
              <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Status 01</div>
              <div className="text-xs font-bold">Draft</div>
              <div className="text-[10px] text-muted mt-1">Pending</div>
            </div>
            <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
              <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Status 02</div>
              <div className="text-xs font-bold text-gold">Paid</div>
              <div className="text-[10px] text-gold mt-1">Locked</div>
            </div>
            <div className="flex-1 p-4 bg-white/[0.02] border border-white/5 text-center">
              <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Status 03</div>
              <div className="text-xs font-bold">Settled</div>
              <div className="text-[10px] text-muted mt-1">Transfer</div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Looking for payout timelines? View our <Link href="/docs/payments#settlement" className="text-gold hover:underline">Settlement Guide</Link>.
        </p>
      </footer>
    </div>
  );
}
