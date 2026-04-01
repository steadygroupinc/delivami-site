// src/app/docs/branding/page.tsx
import React from "react";
import Link from "next/link";
import { Globe, Palette, Camera, Fingerprint, CheckCircle2, Share2, Layers, ShieldCheck } from "lucide-react";

export default function BrandingDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Branding & Domains</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Personalize your studio's visual footprint through custom 
          palettes and white-label domains.
        </p>
      </header>

      <div className="space-y-12">
      <section id="identity" className="mb-8">
        <h2 className="text-lg font-bold mb-3">Brand Identity</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Upload your studio logo and favicon to skin the interface, 
          email ecosystem, and invoice metadata.
        </p>
        <div className="border-l border-gold/20 pl-4 py-1 my-4">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold">Studio Tier:</span> Custom 
            branding (removing Delivami signatures) is exclusive to the Studio plan.
          </p>
        </div>
      </section>

      <section id="domains" className="mb-0">
        <h2 className="text-lg font-bold mb-3">Custom Domains</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Host projects on your own domain (e.g., <code>portal.yourstudio.com</code>) 
          for a professional experience.
        </p>
        <div className="mt-6 p-6 border border-white/5 rounded-lg bg-white/[0.01]">
          <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">DNS Configuration</div>
          <div className="space-y-2 font-mono text-[10px]">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="opacity-40 uppercase">Type</span>
              <span className="text-gold">CNAME</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-40 uppercase">Value</span>
              <span className="text-gold">cname.delivami.com</span>
            </div>
          </div>
        </div>
      </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Looking for team collaboration? View <Link href="/docs/teams" className="text-gold hover:underline">Team Workspaces</Link>.
        </p>
      </footer>
    </div>
  );
}
