import React from "react";
import Link from "next/link";
import { ShieldAlert, Smartphone, Fingerprint, History } from "lucide-react";

export default function SecurityHardeningDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Security Hardening</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Zero-Trust Governance. Protect your creative assets and financial 
          ledger with multi-factor authentication and real-time security instrumentation.
        </p>
      </header>

      <div className="space-y-12">
        <section id="two-factor" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Multi-Factor Authentication (MFA)</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami supports industry-standard 2FA to prevent unauthorized access 
            even in the event of credential compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Authenticator App (TOTP)</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Connect Google Authenticator or Authy for time-based 6-digit 
                codes. The most secure method for professional studios.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Email OTP Fallback</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                One-time codes delivered to your verified email. Useful for 
                quick access when your mobile device is unavailable.
              </p>
            </div>
          </div>
        </section>

        <section id="audit-trail" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Security instrumentation</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami monitors and logs security-sensitive events to provide 
            an immutable audit trail of account activity.
          </p>
          <div className="table-wrapper border-none !bg-white/[0.01]">
            <table className="!bg-transparent text-xs">
              <thead>
                <tr className="!bg-transparent border-b border-white/5">
                  <th className="!bg-transparent py-2">Monitored Event</th>
                  <th className="!bg-transparent py-2">Metadata Captured</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>New Device Login</td><td>IP Address, User Agent, Geolocation</td></tr>
                <tr><td>MFA Configuration Change</td><td>Timestamp, SessionID</td></tr>
                <tr><td>Payout Detail Update</td><td>Verified ID, Change Source</td></tr>
                <tr><td>Security Exceptions</td><td>Developer Tool Injections, Console Errors</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="sessions" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Session Management</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Studio-tier users can view and revoke active sessions globally to 
            protect their workspace from remote access.
          </p>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <History size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Sign-out</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Instantly invalidate all active JWT tokens across all devices. 
              Recommended after every primary password change.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Security features are available on all plans. 2FA setup is highly 
          recommended for <Link href="/docs/kyc-verification" className="text-gold hover:underline">KYC-verified users</Link>.
        </p>
      </footer>
    </div>
  );
}
