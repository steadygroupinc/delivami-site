"use client";

import { useEffect, useRef } from "react";

export function HowItWorks() {
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
      id="how"
      className="bg-[linear-gradient(180deg,transparent,rgba(13,27,62,0.4),transparent)]"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto py-[100px] px-6 md:px-[60px]">
        <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-gold before:opacity-50">
          How It Works
        </p>
        <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out font-serif text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.05] tracking-[-1px] text-ivory mb-5">
          Four steps.
          <br />
          <em className="italic text-gold">One link.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mt-16 relative before:content-[''] before:hidden lg:before:block before:absolute before:top-7 before:left-[14%] before:right-[14%] before:h-[1px] before:bg-[linear-gradient(90deg,transparent,var(--color-border-dim),var(--color-border-dim),transparent)] before:z-0">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center px-4 relative z-10 group">
            <div className="w-14 h-14 rounded-full mx-auto mb-6 bg-navy-mid border border-border-dim flex items-center justify-center font-serif text-[24px] font-bold text-gold transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.35)] group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.06)]">
              1
            </div>
            <div className="text-[16px] font-semibold text-ivory mb-2.5">
              Upload Your Work
            </div>
            <div className="text-[13px] text-muted leading-[1.6] font-light">
              Upload video, photos, or files. Optimised for African connection
              speeds — no buffering, no frustration.
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center px-4 relative z-10 group">
            <div className="w-14 h-14 rounded-full mx-auto mb-6 bg-navy-mid border border-border-dim flex items-center justify-center font-serif text-[24px] font-bold text-gold transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.35)] group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.06)]">
              2
            </div>
            <div className="text-[16px] font-semibold text-ivory mb-2.5">
              Share One Link
            </div>
            <div className="text-[13px] text-muted leading-[1.6] font-light">
              Send your branded delivery page via WhatsApp, email, or SMS. Client
              needs zero account to view it.
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center px-4 relative z-10 group">
            <div className="w-14 h-14 rounded-full mx-auto mb-6 bg-navy-mid border border-border-dim flex items-center justify-center font-serif text-[24px] font-bold text-gold transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.35)] group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.06)]">
              3
            </div>
            <div className="text-[16px] font-semibold text-ivory mb-2.5">
              Collect Approval
            </div>
            <div className="text-[13px] text-muted leading-[1.6] font-light">
              Client leaves timestamped comments, clicks Approve or Request
              Revision. Every action is logged.
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center px-4 relative z-10 group">
            <div className="w-14 h-14 rounded-full mx-auto mb-6 bg-navy-mid border border-border-dim flex items-center justify-center font-serif text-[24px] font-bold text-gold transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.35)] group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.06)]">
              4
            </div>
            <div className="text-[16px] font-semibold text-ivory mb-2.5">
              Get Paid
            </div>
            <div className="text-[13px] text-muted leading-[1.6] font-light">
              Invoice attached to the project. Client pays via Paystack or
              mobile money from the same link.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
