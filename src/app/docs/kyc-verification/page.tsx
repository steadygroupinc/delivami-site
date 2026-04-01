// src/app/docs/kyc-verification/page.tsx
import React from "react";
import { UserCheck, Shield, FileText, Smartphone, Lock } from "lucide-react";

export default function KYCVerificationDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Identity & KYC</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          To comply with global financial regulations and ensure secure payouts, 
          creators must complete a verification process based on their transaction volume.
        </p>
        <div className="mt-6 flex items-start gap-3 p-4 bg-gold/5 border-l-2 border-gold/30 rounded-r-lg">
          <Shield size={16} className="text-gold shrink-0 mt-0.5" />
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold uppercase mr-2">Why Verification?</span>
            To ensure the security of your payout pipeline and comply with 
            standard anti-money laundering (AML) protocols, we verify the identity 
            of creators processing significant volumes. This protects your 
            earnings, prevents fraud, and ensures your settlements reach the 
            correct bank account every time.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        <section id="tiers" className="mb-10">
          <h2 className="text-lg font-bold mb-4">Verification Tiers</h2>
          <div className="table-wrapper border-none !bg-white/[0.01]">
            <table className="!bg-transparent text-[11px]">
              <thead>
                <tr className="!bg-transparent border-b border-white/5">
                  <th className="!bg-transparent py-4 text-left font-bold text-muted uppercase tracking-wider">Tier / Plan</th>
                  <th className="!bg-transparent py-4 text-left font-bold text-muted uppercase tracking-wider">Requirement</th>
                  <th className="!bg-transparent py-4 text-left font-bold text-gold uppercase tracking-wider text-right">Monthly Payout Limit</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-white/5">
                  <td className="py-4 font-bold text-ivory">Free</td>
                  <td className="py-4">Profile & Email</td>
                  <td className="py-4 text-right font-mono text-gold">$1,000 / mo</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 font-bold text-ivory">Creator</td>
                  <td className="py-4">Phone Verification</td>
                  <td className="py-4 text-right font-mono text-gold">$2,500 / mo</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 font-bold text-ivory">Pro</td>
                  <td className="py-4">Government ID</td>
                  <td className="py-4 text-right font-mono text-gold">$15,000 / mo</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-ivory">Studio</td>
                  <td className="py-4">Business Reg. & Proof of Address</td>
                  <td className="py-4 text-right font-mono text-gold">Unlimited</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-[10px] text-muted italic">
              * Limits reset on the 1st of every month. Verifying your identity increases your lifetime 
              trust score and unlocks higher recurring volume.
            </p>
          </div>
        </section>

        <section id="process" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Verification Process</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Submissions are reviewed asynchronously by our compliance team. Most accounts are 
            verified within 24-48 hours of document upload.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Accepted Docs</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Passports, National ID, Business incorporation certificates, and Utility bills (for Proof of Address).
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Lock size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Data Privacy</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">Documents are processed via encrypted channels and never shared.</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Looking for payout details? View <a href="/docs/payments" className="text-gold hover:underline">Payments & Settlements</a>.
        </p>
      </footer>
    </div>
  );
}
