"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Turnstile } from "../common/Turnstile";

export function WhoItsFor() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.08 }
    );

    const children = sectionRef.current?.querySelectorAll(".reveal");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="who"
      className="py-[100px] px-6 md:px-[60px] max-w-[1200px] mx-auto"
      ref={sectionRef}
    >
      <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-gold before:opacity-50">
        Who It&apos;s For
      </p>
      <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out font-serif text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.05] tracking-[-1px] text-ivory mb-5">
        Built for the
        <br />
        <em className="italic text-gold">African creative.</em>
      </h2>
      <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[16px] text-muted leading-[1.75] max-w-[480px] font-light">
        If you create work for clients and you&apos;re tired of WhatsApp as
        your delivery platform — Delivami was made for you.
      </p>

      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-wrap gap-2.5 mt-10">
        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2H12V10L7 12.5L2 10V2Z"
                stroke="var(--color-gold)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M2 2L7 4.5L12 2"
                stroke="var(--color-gold)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M7 4.5V12.5"
                stroke="var(--color-gold)"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          Video Editors
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.2" />
               <circle cx="7" cy="7" r="2.5" stroke="var(--color-gold)" strokeWidth="1.2" />
               <circle cx="10.5" cy="3.5" r="1" fill="var(--color-gold)" />
             </svg>
          </div>
          Photographers
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.8 5.2H13L9.6 7.8L11 12L7 9.4L3 12L4.4 7.8L1 5.2H5.2Z" stroke="var(--color-gold)" strokeWidth="1.1" strokeLinejoin="round" />
            </svg>
          </div>
          Motion Designers
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 10L5 7L7.5 9.5L10 5L12 8" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.2" />
            </svg>
          </div>
          Graphic Designers
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
           <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                 <rect x="2" y="3" width="10" height="8" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.2" />
                 <path d="M5 3V2M9 3V2" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" />
                 <path d="M5 7.5L6.5 9L9 6" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
           </div>
           UI/UX Designers
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3H11V9L7 11.5L3 9V3Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          Filmmakers
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
          <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <circle cx="7" cy="5" r="2.5" stroke="var(--color-gold)" strokeWidth="1.2" />
               <path d="M2 12C2 9.8 4.2 8 7 8C9.8 8 12 9.8 12 12" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          Creative Agencies
        </div>

        <div className="flex items-center gap-2.5 p-[12px_20px] bg-navy-mid border border-border-dim rounded-full text-[13px] text-ivory-dim transition-all duration-200 cursor-default hover:border-[rgba(212,175,55,0.25)] hover:text-gold">
           <div className="w-7 h-7 bg-[rgba(212,175,55,0.08)] rounded-full flex items-center justify-center shrink-0">
             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M5 7C5 5.3 5.9 4 7 4C8.1 4 9 5.3 9 7V9C9 10 8.1 10.5 7 10.5C5.9 10.5 5 10 5 9V7Z" stroke="var(--color-gold)" strokeWidth="1.2" />
               <path d="M3 8C3 10.2 4.8 12 7 12C9.2 12 11 10.2 11 8" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" />
             </svg>
           </div>
           Podcast Editors
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.08 }
    );

    const children = sectionRef.current?.querySelectorAll(".reveal");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-turnstile-token": turnstileToken,
        },
        body: JSON.stringify({ 
          email,
          creatorType: "final_cta_user"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Connection failure.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-[140px] px-6 md:px-[60px] text-center" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(212,175,55,0.07)_0%,transparent_65%)]" />
      <div className="hero-grid absolute inset-0" />
      
      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out relative z-10">
        <h2 className="font-serif text-[clamp(42px,6vw,80px)] font-bold leading-[1.05] tracking-[-1.5px] mb-5">
          Deliver like a
          <br />
          <em className="italic text-gold">professional.</em>
        </h2>
        <p className="text-[16px] text-muted mb-12 font-light">
          Join the waitlist. Be first when we launch.
        </p>

        {!submitted ? (
          <form
            className="flex flex-col gap-[10px] w-full max-w-[420px] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-[10px] w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 p-[14px_18px] bg-[rgba(255,255,255,0.04)] border ${error ? "border-red-500" : "border-border-dim"} rounded-[10px] text-ivory font-sans text-[14px] outline-none transition-all duration-250 placeholder-muted focus:border-[rgba(212,175,55,0.4)] focus:bg-gold-glow focus:shadow-[0_0_0_3px_rgba(212,175,55,0.07)]`}
                placeholder="your@email.com"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`p-[14px_24px] border-none rounded-[10px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-sans text-[14px] font-bold cursor-pointer transition-all duration-250 whitespace-nowrap tracking-[0.2px] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(212,175,55,0.4)] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Joining..." : "Get Early Access"}
              </button>
            </div>

            <Turnstile 
              onVerify={(token) => setTurnstileToken(token)} 
              options={{ theme: "dark" }}
            />

            {error && (
              <p className="text-red-500 text-[12px] mt-2 font-medium">{error}</p>
            )}
          </form>
        ) : (
          <div className="p-[14px_24px] bg-[rgba(76,175,80,0.08)] border border-[rgba(76,175,80,0.25)] rounded-[10px] text-[#81c784] text-[14px] w-full max-w-[420px] mx-auto">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        )}
        <p className="text-[12px] text-muted opacity-50 mt-3.5 tracking-[0.3px]">
          Free to join · No credit card · Built for Africans
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-dim pt-20 pb-12 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-[9px] no-underline">
            <div className="w-8 h-8 bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] rounded-lg flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z" stroke="#0A1628" strokeWidth="2.0" strokeLinejoin="round" />
                <path d="M2 5.5L9 9L16 5.5" stroke="#0A1628" strokeWidth="2.0" strokeLinejoin="round" />
                <path d="M9 9V16" stroke="#0A1628" strokeWidth="2.0" />
              </svg>
            </div>
            <span className="font-serif text-[18px] font-bold tracking-[2.5px] text-ivory uppercase leading-none">
              Delivami
            </span>
          </Link>
          <p className="text-[14px] text-muted leading-relaxed font-light pr-4">
            The professional delivery platform for the next generation of African creators.
          </p>
          <div className="flex gap-4">
             <a href="#" className="p-2 border border-border-dim rounded-lg hover:border-gold transition-colors opacity-60 hover:opacity-100">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
             </a>
             <a href="#" className="p-2 border border-border-dim rounded-lg hover:border-gold transition-colors opacity-60 hover:opacity-100">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
             </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
           <h4 className="text-ivory font-semibold text-[14px] tracking-wide uppercase">Product</h4>
           <Link href="/case-studies" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Case Studies</Link>
           <Link href="/#features" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Features</Link>
           <Link href="/pricing" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Pricing</Link>
           <Link href="/#how" className="text-muted text-[14px] font-light hover:text-gold transition-colors">How it works</Link>
        </div>

        <div className="flex flex-col gap-5">
           <h4 className="text-ivory font-semibold text-[14px] tracking-wide uppercase">Resources</h4>
           <Link href="/docs" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Documentation</Link>
           <Link href="/security" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Security</Link>
           <Link href="/changelog" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Changelog</Link>
           <Link href="/case-studies#emerging-roles" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Creative Roles</Link>
           <Link href="/status" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Systems Status</Link>
        </div>

        <div className="flex flex-col gap-5">
           <h4 className="text-ivory font-semibold text-[14px] tracking-wide uppercase">Company</h4>
           <Link href="/about" className="text-muted text-[14px] font-light hover:text-gold transition-colors">About Us</Link>
           <Link href="/contact" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Contact</Link>
           <Link href="/privacy" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Privacy Policy</Link>
           <Link href="/terms" className="text-muted text-[14px] font-light hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-border-dim pt-8 gap-4">
        <span className="text-[12px] text-muted opacity-50">© 2026 Delivami · A Steady Group Product</span>
      </div>
    </footer>
  );
}
