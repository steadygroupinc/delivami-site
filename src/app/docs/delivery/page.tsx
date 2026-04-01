// src/app/docs/delivery/page.tsx
import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Clock,
  Video
} from "lucide-react";

export default function DeliveryDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Secure Delivery</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Protect your creative work from unauthorized access and scraping. 
          Delivami provides integrated security layers tailored to each plan.
        </p>
      </header>

      <section id="password" className="mb-10">
        <h2 className="text-lg font-bold mb-3">Password Protection</h2>
        <p className="text-sm text-muted leading-relaxed mb-0">
          Secure any project workspace with a unique password. Clients must authenticate 
          before viewing files, comments, or invoices.
        </p>
        <div className="border-l border-gold/20 pl-4 py-1 my-4">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold uppercase">Plan Note:</span> Password 
            protection and link expiration are available on <span className="text-white">Creator, Pro, and Studio</span> tiers.
          </p>
        </div>
      </section>

      <section id="pay-before-download" className="mb-10">
        <h2 className="text-lg font-bold mb-3">Pay-before-Download</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Locks the "Download" button until the attached invoice is marked as PAID. 
          Our server verifies payment status in real-time before authorizing the asset transfer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Instant Locking</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Auto-locks high-resolution assets immediately upon project creation.
            </p>
          </div>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Gated Tiers</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Available on <span className="text-white font-medium">Creator+</span> plans to ensure you get paid on time.
            </p>
          </div>
        </div>
      </section>

      <section id="anti-scraping" className="mb-0">
        <h2 className="text-lg font-bold mb-3">Anti-Scraping & Graphics</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Modern browser techniques prevent simple right-clicking or inspection of your high-res originals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Video size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Signed Tokens</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Videos are delivered with temporary signed tokens, preventing external embedding.
            </p>
          </div>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <EyeOff size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Watermarking</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Dynamic CSS watermarking is available on <span className="text-blue-400 font-bold uppercase">Pro</span> and <span className="text-gold font-bold uppercase">Studio</span> tiers.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Looking for custom branding? Check the <Link href="/docs/branding" className="text-gold hover:underline">Branding Guide</Link>.
        </p>
      </footer>
    </div>
  );
}
