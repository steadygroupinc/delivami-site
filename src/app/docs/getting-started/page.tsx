// src/app/docs/getting-started/page.tsx
import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Settings, 
  PlusCircle, 
  Send,
  Zap,
  ArrowRight
} from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Tutorial</div>
        <h1>Getting Started</h1>
        <p className="lead">
          New to Delivami? This guide will walk you through setting up your account 
          and sending your first professional project delivery.
        </p>
      </header>

      <section id="step-1">
        <h2 id="setup-brand">1. Configure your Brand</h2>
        <p>
          Before sending work, ensure your profile reflects your creative identity. 
          Upload your logo and choose your brand colors in the settings.
        </p>
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mb-8">
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-muted">Go to <strong>Settings &gt; Brand</strong>.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-muted">Upload a high-quality logo (PNG or SVG).</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-muted">Set your primary brand color to match your portfolio.</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="step-2" className="mt-20">
        <h2 id="create-project">2. Create your First Project</h2>
        <p>
          Projects are the core of Delivami. Each project generates a unique link 
          where your client can view, approve, and pay for your work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 bg-navy-mid border border-white/5 rounded-2xl">
            <PlusCircle size={32} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">New Project</h4>
            <p className="text-xs text-muted mb-4">Click "New Project" in the sidebar to begin.</p>
          </div>
          <div className="p-6 bg-navy-mid border border-white/5 rounded-2xl">
            <Zap size={32} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Configure Tools</h4>
            <p className="text-xs text-muted mb-4">Enable passwords or "Pay-before-download" if needed.</p>
          </div>
        </div>
      </section>

      <section id="step-3" className="mt-20">
        <h2 id="share-collect">3. Share & Collect</h2>
        <p>
          Once you've uploaded your files, it's time to send the link to your client. 
          Delivami handles the rest.
        </p>
        <div className="endpoint-block">
          <div className="endpoint-header">
            <Send size={16} className="text-gold" />
            <div className="font-bold text-sm tracking-widest uppercase">The Client Experience</div>
          </div>
          <div className="p-6">
            <p className="text-sm leading-relaxed mb-0">
              Your client visits his unique link, sees your beautiful branded portal, 
              leaves feedback, and pays your invoice directly on the page. 
              The work is only unlocked for download once payment is verified.
            </p>
          </div>
        </div>
      </section>
      
      <div className="mt-32 p-12 bg-gold/5 border border-gold/10 rounded-3xl text-center">
        <h3 className="mt-0">Ready to automate?</h3>
        <p className="max-w-md mx-auto">
          Explore our API and integrate Delivami into your existing creative tools for even faster workflows.
        </p>
        <Link href="/docs/api" className="btn-secondary no-underline inline-flex items-center gap-2">
          Read API Reference <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
