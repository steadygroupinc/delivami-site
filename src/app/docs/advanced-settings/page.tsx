// src/app/docs/advanced-settings/page.tsx
import React from "react";
import Link from "next/link";
import { UserCheck, Sliders, Globe, Palette, Star, ShieldCheck } from "lucide-react";

export default function AdvancedSettingsDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Advanced Settings</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Account Governance & Personalization. Learn how to manage your identity 
          verification, custom branding, and professional payout details.
        </p>
      </header>

      <div className="space-y-12">
        <section id="identity" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Identity Verification (KYC)</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Compliance is the bedrock of secure payouts. Updating your document 
            or ID number automatically triggers a "PENDING" review status.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Review Cycle</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Submissions are reviewed by our financial compliance team within 
                24-48 business hours.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Sliders size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Status Lock</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Studio users must achieve <span className="text-white">APPROVED</span> status 
                before their first withdrawal request.
              </p>
            </div>
          </div>
        </section>

        <section id="branding" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Studio Governance</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Maintain a consistent professional presence across all client touchpoints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Palette size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Brand Memory</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Logos, banners, and studio colors are saved globally and applied 
                automatically to all new projects.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Globe size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">DNS Management</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Custom domains require a specific CNAME record pointing to 
                the Delivami edge cluster.
              </p>
            </div>
          </div>
        </section>

        <section id="notifications" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Notification Management</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Stay informed on critical account movements. Delivami supports 
            granular notification filtering and starring for long-term tracking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Star size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Starred Alerts</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Star critical notifications (e.g., specific project approvals or large payments) 
                to prevent them from being archived or missed.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Security Triage</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Critical security events (new device logins, profile changes) 
                trigger immediate system notifications that bypass standard filters.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Need to update your payout details? Visit the <Link href="/docs/payments" className="text-gold hover:underline">Settlements Guide</Link>.
        </p>
      </footer>
    </div>
  );
}
