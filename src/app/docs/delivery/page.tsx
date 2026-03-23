// src/app/docs/delivery/page.tsx
import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Calendar,
  CloudLightning,
  Video
} from "lucide-react";

export default function DeliveryDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Core Feature</div>
        <h1>Secure Delivery</h1>
        <p className="lead">
          Protect your creative work from unauthorized downloads and scraping. 
          Delivami provides multiple layers of security to ensure your intellectual property is safe.
        </p>
      </header>

      <section id="password">
        <h2 id="password-protection">Password Protection</h2>
        <p>
          Every project can be secured with a unique password. Clients will be prompted to enter 
          the password before they can view any files or invoices.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mb-8 flex gap-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
            <Lock size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-2">Multi-Factor Readiness</h4>
            <p className="text-xs text-muted leading-relaxed">
              Passwords are encrypted server-side and are never stored in plain text. 
              You can update or remove the password at any time from your project settings.
            </p>
          </div>
        </div>
      </section>

      <section id="pay-before-download" className="mt-20">
        <h2 id="pbd-locking">Pay-before-Download</h2>
        <p>
          The ultimate protection for freelancers. This feature locks the "Download" 
          button until the attached invoice is marked as <code>PAID</code>.
        </p>
        <div className="endpoint-block">
          <div className="endpoint-header">
            <ShieldCheck size={16} className="text-gold" />
            <div className="font-bold text-sm tracking-widest uppercase">The Locking Logic</div>
          </div>
          <div className="p-6">
            <p className="text-sm leading-relaxed mb-0">
              When a client attempts to download a file, our server verifies the payment status in real-time. 
              If unpaid, the client is redirected to the checkout page. Once paid, the download link is 
              automatically generated and authorized for a limited time.
            </p>
          </div>
        </div>
      </section>

      <section id="anti-scraping" className="mt-20">
        <h2 id="security-measures">Anti-Scraping & Watermarking</h2>
        <p>
          We use modern browser techniques to prevent clients from simply right-clicking or 
          inspecting the source to find your original high-resolution assets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Video size={24} className="text-gold mb-4" />
            <h4 className="font-bold text-sm mb-2">Signed Video Tokens</h4>
            <p className="text-[12px] text-muted leading-relaxed">
              Video content is delivered via Cloudflare Stream with signed tokens, 
              preventing external embedding or direct URL scraping.
            </p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <EyeOff size={24} className="text-gold mb-4" />
            <h4 className="font-bold text-sm mb-2">Visual Watermarking</h4>
            <p className="text-[12px] text-muted leading-relaxed">
              Previews are overlaid with a dynamic, non-removable CSS watermark 
              containing your brand name.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
