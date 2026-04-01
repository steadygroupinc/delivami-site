import React from "react";
import Link from "next/link";
// Removing generic lucide-react imports for custom premium SVGs

export default function DocsHomePage() {
  return (
    <div className="docs-home relative">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Learn how to deliver high-res media, manage client approvals, 
          and capture international payments with Delivami.
        </p>
      </header>

      <section id="guides">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/docs/collaboration" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Collaboration</h4>
            <p className="text-[11px] text-muted m-0">Approvals, revisions, and threaded feedback.</p>
          </Link>
          <Link href="/docs/automations" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Automations</h4>
            <p className="text-[11px] text-muted m-0">In-depth status lifecycles and webhooks.</p>
          </Link>
          <Link href="/docs/billing" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Billing</h4>
            <p className="text-[11px] text-muted m-0">Currencies, cycles, and platform fees.</p>
          </Link>
          <Link href="/docs/scaling" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Scaling</h4>
            <p className="text-[11px] text-muted m-0">Add-ons for storage and team expansion.</p>
          </Link>
          <Link href="/docs/organization" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Organization</h4>
            <p className="text-[11px] text-muted m-0">Asset hierarchy and unified search.</p>
          </Link>
          <Link href="/docs/security-hardening" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Hardening</h4>
            <p className="text-[11px] text-muted m-0">2FA, session logic, and audit trails.</p>
          </Link>
          <Link href="/docs/advanced-settings" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Advanced Settings</h4>
            <p className="text-[11px] text-muted m-0">KYC, Branding, and DNS Management.</p>
          </Link>
          <Link href="/docs/api" className="premium-card !p-4 !rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
            <h4 className="text-sm font-bold mb-1">Developer API</h4>
            <p className="text-[11px] text-muted m-0">RESTful endpoints and technical triggers.</p>
          </Link>
        </div>
      </section>

      <section id="reference" className="mt-12 pt-8 border-t border-white/5">
        <h3 className="text-lg font-bold mb-4">Reference</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/docs/audit-logs" className="text-xs text-muted hover:text-gold transition-colors">Audit Logs</Link>
          <Link href="/docs/kyc-verification" className="text-xs text-muted hover:text-gold transition-colors">Identity/KYC</Link>
          <Link href="/docs/api-keys" className="text-xs text-muted hover:text-gold transition-colors">Managing Keys</Link>
          <Link href="/docs/troubleshooting" className="text-xs text-muted hover:text-gold transition-colors">Troubleshooting</Link>
        </div>
      </section>
    </div>
  );
}
