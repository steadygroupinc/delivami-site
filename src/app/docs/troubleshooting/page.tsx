// src/app/docs/troubleshooting/page.tsx
import React from "react";
import { HelpCircle, Clock, Mail, AlertTriangle } from "lucide-react";

export default function TroubleshootingDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Support Reference</div>
        <h1>Troubleshooting & FAQ</h1>
        <p className="lead">
          Get answers to common questions and learn how to resolve issues 
          with your Delivami account and deliveries.
        </p>
      </header>

      <section id="trial">
        <h2>The Free Trial</h2>
        <p>
          We offer a full-featured 14-day free trial on our premium plans. 
          Enjoy all the features of Creator, Pro, or Studio before you're charged.
        </p>
        <div className="p-8 bg-gold/5 border border-gold/10 rounded-2xl flex gap-6 mt-8">
          <div className="p-4 bg-gold/10 rounded-xl text-gold shrink-0 h-fit">
            <Clock size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-2">Grace Period</h4>
            <p className="text-sm text-muted mb-0 leading-relaxed">
              If your trial ends, we provide a 3-day grace period where you can 
              still access your files and finalize active projects before your 
              account reverts to the Free tier.
            </p>
          </div>
        </div>
      </section>

      <section id="payouts" className="mt-20">
        <h2>Payout Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 border border-white/5 rounded-2xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-gold" /> Why is my payout delayed?
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Payouts are typically processed on a T+1 (next business day) schedule. 
              Delays can occur due to bank processing times, public holidays, or incomplete 
              <a href="/docs/payments#kyc" className="text-gold hover:underline">KYC verification</a> in your dashboard.
            </p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <HelpCircle size={18} className="text-gold" /> Supported Bank accounts?
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              We support direct transfers to all major local and international 
              banks, as well as mobile money wallets in supported markets.
            </p>
          </div>
        </div>
      </section>

      <section id="emails" className="mt-20">
        <h2>Email Notifications</h2>
        <p>
          If you or your clients are not receiving delivery notifications:
        </p>
        <ul className="list-disc pl-5 mt-6 space-y-3 text-sm text-muted">
          <li>Check the <strong>Spam or Junk</strong> folder of the recipient's email.</li>
          <li>Verify the email address provided in the project settings.</li>
          <li>Ensure your organization's domain (if using a custom domain) has the correct SPF/DKIM records.</li>
        </ul>
      </section>

      <section id="support" className="mt-24 pt-12 border-t border-white/5 text-center">
        <Mail size={40} className="text-gold mx-auto mb-6" />
        <h3 className="mt-0">Still need help?</h3>
        <p className="max-w-md mx-auto text-muted mb-8">
          Our support team is ready to assist you with any technical or account issues.
        </p>
        <a 
          href="https://support.delivami.com" 
          target="_blank" 
          className="inline-block px-8 py-3 bg-white/5 border border-white/10 hover:border-gold/50 rounded-xl font-bold transition-all text-ivory hover:text-gold"
        >
          Contact Support Center
        </a>
      </section>
    </div>
  );
}
