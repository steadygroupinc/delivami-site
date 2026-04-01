// src/app/docs/automations/page.tsx
import React from "react";
import { Zap, RefreshCcw, ShieldCheck, Clock } from "lucide-react";

export default function AutomationsDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Automations & Lifecycles</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Understanding the Delivami Engine. Learn how financial triggers, 
          webhook reconciliation, and status-locking protect your creative workflow.
        </p>
      </header>

      <div className="space-y-12">
        <section id="project-lifecycle" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Project Status Lifecycle</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            The engine automatically transitions projects through four distinct 
            security states based on client interactions and payment events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-muted mb-1">State 01</div>
              <div className="text-xs font-bold">DRAFT</div>
              <p className="text-[10px] text-muted mt-1 m-0">Owner-only access.</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-gold/40 mb-1">State 02</div>
              <div className="text-xs font-bold text-gold">SENT</div>
              <p className="text-[10px] text-muted mt-1 m-0">Link active & public.</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-green-400/40 mb-1">State 03</div>
              <div className="text-xs font-bold text-green-400">PAID</div>
              <p className="text-[10px] text-muted mt-1 m-0">Assets unlocked.</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-[9px] uppercase tracking-widest text-blue-400/40 mb-1">State 04</div>
              <div className="text-xs font-bold text-blue-400">SETTLED</div>
              <p className="text-[10px] text-muted mt-1 m-0">Funds in wallet.</p>
            </div>
          </div>
        </section>

        <section id="payout-engine" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Settlement Logic</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami enforces bank-grade settlement delays to ensure 
            transaction security and fraud prevention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">24-Hour Clearing</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Net earnings from paid invoices typically require <span className="text-white">24 hours</span> to 
                be cleared for withdrawal.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Manual Gate</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Withdrawals over <span className="text-white">GHS 5,000</span> undergo manual 
                payout verification for security.
              </p>
            </div>
          </div>
        </section>

        <section id="webhooks" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Webhook Integration</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            The Delivami gateway reconciles events from major providers to 
            trigger high-resolution asset delivery instantly.
          </p>
          <div className="table-wrapper border-none !bg-white/[0.01]">
            <table className="!bg-transparent text-xs">
              <thead>
                <tr className="!bg-transparent border-b border-white/5">
                  <th className="!bg-transparent py-2">Event</th>
                  <th className="!bg-transparent py-2">Internal Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-gold">charge.success</td>
                  <td>Invoice status set to PAID. Triggers WhatsApp notification.</td>
                </tr>
                <tr>
                  <td className="font-mono text-gold">transfer.success</td>
                  <td>Payout status set to SUCCESS. Funds confirmed in bank/wallet.</td>
                </tr>
                <tr>
                  <td className="font-mono text-gold">transfer.failed</td>
                  <td>Payout reversed. Creative is notified for bank detail correction.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Looking for custom integration? Explore the <a href="/docs/api" className="text-gold hover:underline">API Reference</a>.
        </p>
      </footer>
    </div>
  );
}
