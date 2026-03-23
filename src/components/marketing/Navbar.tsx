"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="h-[3px] w-full bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_18px,#1a3a6e_18px_36px,#b83a1a_36px_54px,#1a3a6e_54px_72px,var(--color-gold)_72px_90px)]" />
      <nav className="sticky top-0 z-[200] flex items-center justify-between px-6 md:px-[60px] h-[68px] bg-[#0a1628eb] backdrop-blur-[20px] border-b border-border-gold">
        <Link href="/" className="flex items-center gap-[11px] no-underline">
          <div className="w-[36px] h-[36px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] rounded-[9px] flex items-center justify-center shrink-0 shadow-[0_0_0_1px_rgba(212,175,55,0.3),0_4px_20px_rgba(212,175,55,0.25)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z"
                stroke="#0A1628"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M2 5.5L9 9L16 5.5"
                stroke="#0A1628"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M9 9V16" stroke="#0A1628" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="flex flex-col gap-[1px]">
            <span className="font-serif text-[17px] font-bold tracking-[2.5px] text-ivory uppercase leading-none">
              Delivami
            </span>
            <span className="text-[8px] tracking-[3px] text-gold uppercase font-medium opacity-80">
              Creative Delivery
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-[13px] text-muted no-underline font-normal transition-colors duration-200 tracking-[0.3px] hover:text-ivory"
          >
            About
          </Link>
          
          {/* Solutions Mega Menu */}
          <div className="group relative py-4">
            <button className="flex items-center gap-1 text-[13px] text-muted font-normal transition-colors duration-200 tracking-[0.3px] hover:text-ivory outline-none cursor-default">
              Solutions
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:rotate-180">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[480px] pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-navy-mid border border-border-gold rounded-[20px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[11px] text-gold tracking-[2px] uppercase font-bold mb-4 opacity-70">By Creative Role</h4>
                  <ul className="space-y-4">
                    <li><Link href="/case-studies/video-editors" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Video Production</span>
                      <span className="text-[11px] text-muted">Frame-accurate reviews</span>
                    </Link></li>
                    <li><Link href="/case-studies/designers" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Design & UI/UX</span>
                      <span className="text-[11px] text-muted">Branded asset delivery</span>
                    </Link></li>
                    <li><Link href="/case-studies/photographers" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Photography</span>
                      <span className="text-[11px] text-muted">Secure client galleries</span>
                    </Link></li>
                  </ul>
                </div>
                <div className="border-l border-white/5 pl-8">
                  <h4 className="text-[11px] text-gold tracking-[2px] uppercase font-bold mb-4 opacity-70">By Team Scale</h4>
                  <ul className="space-y-4">
                    <li><Link href="/case-studies/solopreneurs" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Solopreneurs</span>
                      <span className="text-[11px] text-muted">Professionalize your side-hustle</span>
                    </Link></li>
                    <li><Link href="/case-studies/studios" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Creative Studios</span>
                      <span className="text-[11px] text-muted">Collaborate with your team</span>
                    </Link></li>
                    <li><Link href="/case-studies/agencies" className="group/item flex flex-col no-underline">
                      <span className="text-[14px] text-ivory font-semibold group-hover/item:text-gold transition-colors">Full Agencies</span>
                      <span className="text-[11px] text-muted">Enterprise-grade security</span>
                    </Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="text-[13px] text-muted no-underline font-normal transition-colors duration-200 tracking-[0.3px] hover:text-ivory"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-[13px] text-muted no-underline font-normal transition-colors duration-200 tracking-[0.3px] hover:text-ivory"
          >
            Docs
          </Link>
          <Link
            href="/case-studies"
            className="text-[13px] text-muted no-underline font-normal transition-colors duration-200 tracking-[0.3px] hover:text-ivory"
          >
            Case Studies
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://app.delivami.com/login"
              className="py-2 px-5 border border-border-dim rounded-lg bg-transparent text-muted font-sans text-[13px] font-medium transition-all duration-200 no-underline hover:border-border-gold hover:text-ivory"
            >
              Log in
            </Link>
            <Link
              href="#waitlist"
              className="py-[9px] px-[22px] border-none rounded-lg bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-sans text-[13px] font-bold transition-all duration-250 tracking-[0.3px] no-underline hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(212,175,55,0.35)]"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-ivory focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[150] md:hidden">
          <div className="absolute inset-0 bg-navy/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative h-full flex flex-col p-8 pt-24 animate-fade-up">
            <div className="flex flex-col gap-6 text-center">
              <Link
                href="/about"
                className="text-[24px] font-serif font-bold text-ivory no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-4 text-left">
                <span className="text-[11px] text-gold tracking-[2px] uppercase font-bold opacity-70">Solutions</span>
                <div className="grid grid-cols-1 gap-3 pl-2">
                  <Link href="/case-studies/video-editors" className="text-[16px] text-ivory no-underline" onClick={() => setIsMobileMenuOpen(false)}>Video Production</Link>
                  <Link href="/case-studies/designers" className="text-[16px] text-ivory no-underline" onClick={() => setIsMobileMenuOpen(false)}>Design & UI/UX</Link>
                  <Link href="/case-studies/studios" className="text-[16px] text-ivory no-underline" onClick={() => setIsMobileMenuOpen(false)}>Creative Studios</Link>
                  <Link href="/case-studies/agencies" className="text-[16px] text-ivory no-underline" onClick={() => setIsMobileMenuOpen(false)}>Full Agencies</Link>
                </div>
              </div>

              <Link
                href="/pricing"
                className="text-[24px] font-serif font-bold text-ivory no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-[24px] font-serif font-bold text-ivory no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/case-studies"
                className="text-[24px] font-serif font-bold text-ivory no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <div className="h-[1px] w-full bg-border-dim my-4" />
              <Link
                href="https://app.delivami.com/login"
                className="text-[18px] font-medium text-muted no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="#waitlist"
                className="py-4 px-6 rounded-xl bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-bold text-[16px] no-underline mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
