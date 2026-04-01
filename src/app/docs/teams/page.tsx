// src/app/docs/teams/page.tsx
import React from "react";
import Link from "next/link";
import { Users, Shield, Settings, Info } from "lucide-react";

export default function TeamWorkspacesPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Team Workspaces</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Collaborate with other creatives and managers. Share projects, 
          invoices, and payouts across your entire organization.
        </p>
      </header>

      <section id="orgs" className="mb-10">
        <h2 className="text-lg font-bold mb-3">Organization Structure</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          While <span className="text-white font-medium">Free, Creator, and Pro</span> plans are optimized 
          for solo creatives, the <span className="text-gold font-bold">Studio</span> plan allows you 
          to invite team members for centralized operations.
        </p>
        <div className="border-l border-gold/20 pl-4 py-1">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold uppercase">Plan Note:</span> Organization 
            features are exclusive to the <Link href="/docs/payments#trust-tiers" className="text-gold hover:underline">Studio Tier</Link>. 
            Solo plans are limited to 1 member (the owner).
          </p>
        </div>
      </section>

      <section id="roles" className="mb-10">
        <h2 className="text-lg font-bold mb-3">Roles & Access</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Control access to sensitive financial data while enabling project collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Admins & Owners</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Full access to branding, payout account management, and team invitations.
            </p>
          </div>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Users size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Team Members</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Full project management (create, edit, delete) but cannot view sensitive payout data.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Need to scale beyond 5 members? Add-ons are available in the 
          <Link href="/docs/payments" className="text-gold hover:underline ml-1">Billing section</Link>.
        </p>
      </footer>
    </div>
  );
}
