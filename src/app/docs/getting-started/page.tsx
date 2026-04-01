// src/app/docs/getting-started/page.tsx
import React from "react";
import Link from "next/link";
import { 
  Palette, 
  PlusCircle, 
  Settings,
  ShieldCheck,
  ArrowRight,
  Code2
} from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="docs-page">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Learn how to configure your studio, initialize projects, 
          and automate your creative delivery pipeline.
        </p>
      </header>

      <div className="space-y-12">
      <section id="branding" className="mb-8">
        <h2 className="text-lg font-bold mb-3">1. Configure Branding</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Align your delivery portal with your studio's identity. Upload 
          your logo and set your brand colors in the settings.
        </p>
      </section>

      <section id="project" className="mb-8">
        <h2 className="text-lg font-bold mb-3">2. Create a Project</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Projects are secure containers for your deliveries. Add files, 
          configure "Pay-before-download" locks, and set custom descriptions.
        </p>
        <div className="border-l border-white/10 pl-4 py-1 my-4">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold">Recommended:</span> Enable 
            pay-before-download and custom domains for a professional experience.
          </p>
        </div>
      </section>

      <section id="secure" className="mb-0">
        <h2 className="text-lg font-bold mb-3">3. Secure Delivery</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Share your project link with your client. They can review work 
          and settle invoices directly through your branded portal.
        </p>
      </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Ready for more? Scale with our <Link href="/docs/api" className="text-gold hover:underline">Developer API</Link>.
        </p>
      </footer>
    </div>
  );
}
