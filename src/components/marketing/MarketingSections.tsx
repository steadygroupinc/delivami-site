"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  const [error, setError] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
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
            className="flex flex-col sm:flex-row gap-[10px] w-full max-w-[420px] mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 p-[14px_18px] bg-[rgba(255,255,255,0.04)] border ${error ? "border-red-500" : "border-border-dim"} rounded-[10px] text-ivory font-sans text-[14px] outline-none transition-all duration-250 placeholder-muted focus:border-[rgba(212,175,55,0.4)] focus:bg-gold-glow focus:shadow-[0_0_0_3px_rgba(212,175,55,0.07)]`}
              placeholder="your@email.com"
            />
            <button
              type="submit"
              className="p-[14px_24px] border-none rounded-[10px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-sans text-[14px] font-bold cursor-pointer transition-all duration-250 whitespace-nowrap tracking-[0.2px] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(212,175,55,0.4)]"
            >
              Get Early Access
            </button>
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
    <footer className="border-t border-border-dim py-8 px-6 md:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link href="/" className="flex items-center gap-[9px] no-underline">
          <div className="w-7 h-7 bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] rounded-md flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z"
                stroke="#0A1628"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M2 5.5L9 9L16 5.5"
                stroke="#0A1628"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 9V16" stroke="#0A1628" strokeWidth="1.6" />
            </svg>
          </div>
          <span className="font-serif text-[14px] font-bold tracking-[2.5px] text-ivory uppercase leading-none">
            Delivami
          </span>
        </Link>
        <span className="text-[12px] text-muted opacity-50">© 2026 Delivami · A Steady Group Product</span>
        <span className="text-[12px] text-muted opacity-40">Built for Africans</span>
      </div>
      <div className="flex gap-5">
        <Link href="#" className="text-[12px] text-muted no-underline opacity-50 transition-all duration-200 hover:opacity-100 hover:text-gold">
          Twitter
        </Link>
        <Link href="#" className="text-[12px] text-muted no-underline opacity-50 transition-all duration-200 hover:opacity-100 hover:text-gold">
          Instagram
        </Link>
        <Link href="#" className="text-[12px] text-muted no-underline opacity-50 transition-all duration-200 hover:opacity-100 hover:text-gold">
          LinkedIn
        </Link>
        <Link href="#" className="text-[12px] text-muted no-underline opacity-50 transition-all duration-200 hover:opacity-100 hover:text-gold">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
