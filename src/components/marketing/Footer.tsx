"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border-dim pt-24 pb-12 px-6 md:px-[60px] overflow-hidden">
      {/* Artisan Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-[11px] no-underline group">
              <div className="w-9 h-9 bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] rounded-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z" stroke="#0A1628" strokeWidth="2.0" strokeLinejoin="round" />
                  <path d="M2 5.5L9 9L16 5.5" stroke="#0A1628" strokeWidth="2.0" strokeLinejoin="round" />
                  <path d="M9 9V16" stroke="#0A1628" strokeWidth="2.0" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-[18px] font-bold tracking-[2.5px] text-ivory uppercase leading-none">
                  Delivami
                </span>
                <span className="text-[8px] tracking-[3px] text-gold uppercase font-medium opacity-60">
                  Artisan Delivery
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-muted leading-relaxed font-light pr-4">
              Providing a premium delivery and payment infrastructure for the next generation of African creatives. 
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-border-dim rounded-lg text-muted hover:border-gold hover:text-gold transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-border-dim rounded-lg text-muted hover:border-gold hover:text-gold transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-ivory font-bold text-[14px] tracking-[1px] uppercase">Product</h4>
            <div className="flex flex-col gap-4">
              <Link href="/case-studies" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Case Studies</Link>
              <Link href="/#features" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Features</Link>
              <Link href="/pricing" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Pricing</Link>
              <Link href="/#how" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">How it works</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-ivory font-bold text-[14px] tracking-[1px] uppercase">Resources</h4>
            <div className="flex flex-col gap-4">
              <Link href="/docs" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Documentation</Link>
              <Link href="/security" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Security</Link>
              <Link href="/changelog" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Changelog</Link>
              <Link href="/case-studies#emerging-roles" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Creative Roles</Link>
              <Link href="/status" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Systems Status</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-ivory font-bold text-[14px] tracking-[1px] uppercase">Company</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">About Us</Link>
              <Link href="/contact" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Contact</Link>
              <Link href="/privacy" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Privacy Policy</Link>
              <Link href="/terms" className="text-muted text-[13px] font-normal hover:text-gold transition-colors no-underline">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
          <div className="flex flex-col gap-1 sm:items-start items-center">
            <span className="text-[12px] text-muted opacity-50">© 2026 Delivami · A Steady Group Product</span>
            <span className="text-[10px] text-gold/40 tracking-[2px] uppercase font-bold">Woven in Africa</span>
          </div>
          
          {/* Subtle Kente Accent */}
          <div className="h-[2px] w-32 bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_8px,#1a3a6e_8px_16px,#b83a1a_16px_24px)] rounded-full opacity-60" />
        </div>
      </div>
    </footer>
  );
}
