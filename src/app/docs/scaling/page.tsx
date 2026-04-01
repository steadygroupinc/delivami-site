// src/app/docs/scaling/page.tsx
import React from "react";
import { PlusCircle, Layers, Users, Monitor } from "lucide-react";

export default function ScalingDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Scaling & Add-ons</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Pay-as-you-grow. Extend your Studio's capabilities with on-demand 
          storage, team expansions, and professional white-labeling services.
        </p>
      </header>

      <div className="space-y-12">
        <section id="storage-addons" className="mb-10">
          <h2 className="text-lg font-bold mb-3">On-Demand Storage</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Never hit a ceiling. Supplement your base plan storage with 
            permanent add-ons billed monthly in USD.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-xs font-bold">+100 GB</div>
              <div className="text-[10px] text-gold mt-1">$10/mo</div>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-xs font-bold">+200 GB</div>
              <div className="text-[10px] text-gold mt-1">$15/mo</div>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-xs font-bold">+500 GB</div>
              <div className="text-[10px] text-gold mt-1">$30/mo</div>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.01] text-center">
              <div className="text-xs font-bold">+1 TB</div>
              <div className="text-[10px] text-gold mt-1">$50/mo</div>
            </div>
          </div>
        </section>

        <section id="team-expansion" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Team & Workspace Scaling</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            For large agencies, Delivami allows for granular seat management 
            beyond the standard Studio plan limits.
          </p>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Users size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Additional Seats</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Add extra team members to your Studio workspace for <span className="text-white">$10/seat</span> monthly. 
              Each seat includes full organization management permissions.
            </p>
          </div>
        </section>

        <section id="services" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Enterprise Services</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Professional upgrades for high-stakes deliveries and absolute brand isolation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Monitor size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">White-Labeling</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Remove all Delivami branding from client portals for <span className="text-white">$25/mo</span>. 
                Includes custom favicons and unified CSS overrides.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Custom Domains</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Delivery projects via your own subdomain (e.g., <span className="font-mono text-white">client.yourstudio.com</span>) 
                for <span className="text-white">$15/mo</span>.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Add-ons require an active paid subscription. Managed via <a href="/settings?tab=billing" className="text-gold hover:underline">Billing Settings</a>.
        </p>
      </footer>
    </div>
  );
}
