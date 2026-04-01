// src/app/docs/troubleshooting/page.tsx
import React from "react";
import { HelpCircle, Clock, Mail, AlertTriangle } from "lucide-react";

export default function TroubleshootingDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Troubleshooting</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Answers to common questions and resolution paths for your Delivami 
          account and project deliveries.
        </p>
      </header>

      <section id="trial">
        <h2>Free Trial</h2>
        <p className="text-sm">
          We offer a full-featured 14-day free trial on our premium plans 
          (<strong>Creator, Pro, and Studio</strong>). A 3-day grace period 
          is provided after the trial ends for finalizing projects.
        </p>
      </section>

      <section id="payouts" className="mt-10">
        <h2>Payouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-white/5 rounded-lg bg-white/[0.01]">
            <h4 className="font-bold text-sm mb-2 text-gold">Delayed Payouts?</h4>
            <p className="text-[11px] text-muted leading-relaxed m-0">
              Processed on a next-business-day schedule. Delays may be due to 
              incomplete KYC or bank processing times.
            </p>
          </div>
          <div className="p-4 border border-white/5 rounded-lg bg-white/[0.01]">
            <h4 className="font-bold text-sm mb-2 text-gold">Supported Banks?</h4>
            <p className="text-[11px] text-muted leading-relaxed m-0">
              Direct transfers to all major banks and mobile wallets in supported markets.
            </p>
          </div>
        </div>
      </section>

      <section id="emails" className="mt-10">
        <h2>Notifications</h2>
        <p className="text-sm"> If you are not receiving delivery notifications: </p>
        <ul className="list-disc pl-5 mt-4 space-y-1 text-[11px] text-muted">
          <li>Check Spam or Junk folders.</li>
          <li>Verify the email address in project settings.</li>
          <li>Ensure SPF/DKIM records are correct if using a custom domain.</li>
        </ul>
      </section>

      <section id="support" className="mt-10 pt-8 border-t border-white/5 text-center">
        <p className="text-sm text-muted mb-4">Still need help? Visit our support center.</p>
        <a 
          href="https://support.delivami.com" 
          target="_blank" 
          className="text-gold font-bold text-xs uppercase hover:underline"
        >
          Contact Support →
        </a>
      </section>
    </div>
  );
}
