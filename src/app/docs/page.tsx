// src/app/docs/page.tsx
import React from "react";
import Link from "next/link";
import { 
  Zap, 
  CreditCard, 
  Users, 
  ArrowRight,
  Terminal,
  Lock,
  Smartphone,
  Palette,
  ShieldCheck,
  HelpCircle
} from "lucide-react";

export default function DocsHomePage() {
  return (
    <div className="docs-home">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Welcome to Delivami Docs</div>
        <h1>Your work. Their approval. One link.</h1>
        <p className="lead">
          Delivami gives professional creators a world-class way to deliver work, 
          manage client approvals, and get paid reliably from anywhere in the world.
        </p>
      </header>

      <section id="quick-start">
        <h2 id="quick-start-title">Quick start</h2>
        <p>Get up and running with Delivami in minutes. Choose a path below to begin.</p>
        
        <div className="grid-cards">
          <Link href="/docs/payments" className="docs-card">
            <div className="docs-card-icon">
              <CreditCard size={24} />
            </div>
            <h4>Accept Payments</h4>
            <p>Generate professional invoices and collect payments securely via global and local methods.</p>
          </Link>

          <Link href="/docs/delivery" className="docs-card">
            <div className="docs-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h4>Deliver Work</h4>
            <p>Secure your assets with passwords, watermarks, and pay-before-download locks.</p>
          </Link>

          <Link href="/docs/getting-started" className="docs-card">
            <div className="docs-card-icon">
              <Zap size={24} />
            </div>
            <h4>First Project</h4>
            <p>A step-by-step guide to setting up your workspace and sending your first link.</p>
          </Link>

          <Link href="/docs/api" className="docs-card">
            <div className="docs-card-icon">
              <Terminal size={24} />
            </div>
            <h4>Developer Tools</h4>
            <p>Explore our API and integrate Delivami into your existing creative workflows.</p>
          </Link>

          <Link href="/docs/branding" className="docs-card">
            <div className="docs-card-icon">
              <Palette size={24} />
            </div>
            <h4>Branding & Domains</h4>
            <p>Make every project yours with custom logos, colors, and white-labeled domains.</p>
          </Link>

          <Link href="/docs/security" className="docs-card">
            <div className="docs-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h4>Trust & Security</h4>
            <p>Learn how we protect your creative assets and financial data with enterprise encryption.</p>
          </Link>

          <Link href="/docs/troubleshooting" className="docs-card">
            <div className="docs-card-icon">
              <HelpCircle size={24} />
            </div>
            <h4>Troubleshooting</h4>
            <p>Find answers to common questions about trials, payouts, and project management.</p>
          </Link>
        </div>
      </section>

      <section id="popular" className="mt-24 pt-12 border-t border-white/5">
        <h2 id="popular-guides">Popular Guides</h2>
        
        <div className="space-y-12 mt-8">
          <Link href="/docs/delivery" className="flex gap-8 group cursor-pointer border-b border-white/5 pb-8 no-underline">
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold/10 transition-colors">
              <Lock size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-ivory group-hover:text-gold transition-colors">
                Secure Client Portals <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Learn how to brand your delivery pages and protect them with multi-factor passwords and time-limited access.
              </p>
            </div>
          </Link>

          <Link href="/docs/payments" className="flex gap-8 group cursor-pointer border-b border-white/5 pb-8 no-underline">
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold/10 transition-colors">
              <Smartphone size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-ivory group-hover:text-gold transition-colors">
                Global Payment Methods <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Understand the checkout experience for your clients using international cards, 
                bank transfers, and localized mobile wallets.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/teams" className="flex gap-8 group cursor-pointer no-underline">
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold/10 transition-colors">
              <Users size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-ivory group-hover:text-gold transition-colors">
                Managing Team Access <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Invite collaborators to your organization and manage their permissions for projects and financial data.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
