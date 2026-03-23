"use client";

import { useEffect, useRef } from "react";

export function Features() {
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
      id="features"
      className="py-[100px] px-6 md:px-[60px] max-w-[1200px] mx-auto"
      ref={sectionRef}
    >
      <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-gold before:opacity-50">
        Features
      </p>
      <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out font-serif text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.05] tracking-[-1px] text-ivory mb-5">
        Everything in
        <br />
        <em className="italic text-gold">one place.</em>
      </h2>

      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border-dim border border-border-dim rounded-2xl overflow-hidden mt-16">
        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 7L11 3L19 7V15L11 19L3 15Z"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M3 7L11 11L19 7"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M11 11V19"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
            Branded Delivery Pages
          </div>
          <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
            Every project gets a clean page with your name, logo, and colours. Looks like a funded studio — because that&apos;s what you are.
          </div>
          <div className="inline-block mt-4 py-1 px-2.5 rounded-full text-[10px] tracking-[1.5px] uppercase font-semibold bg-[rgba(212,175,55,0.08)] text-gold border border-[rgba(212,175,55,0.15)] relative z-10">
            Core Feature
          </div>
        </div>

        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
              <path
                d="M8 11L10 13L14 9"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
            Approval Workflow
          </div>
          <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
            One-click approve or revision request. Every action timestamped and saved. No more &quot;I never said that.&quot;
          </div>
        </div>

        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 5H19M3 11H13M3 17H10"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle
                cx="17"
                cy="15"
                r="4"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
              <path
                d="M15.5 15H17V13.5"
                stroke="var(--color-gold)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
            Timestamped Comments
          </div>
          <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
            Clients comment at specific moments in your video. Like Frame.io — but priced for Ghana, not San Francisco.
          </div>
        </div>

        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect
                x="3"
                y="5"
                width="16"
                height="12"
                rx="2"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
              <path
                d="M3 9H19"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
              <path
                d="M7 14H11"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
            Built-in Invoicing
          </div>
          <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
            Generate professional invoices in your local currency, attach to any project, and collect payment without switching tools.
          </div>
        </div>

        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
             <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 3C7.7 3 5 5.7 5 9C5 13.5 11 19 11 19C11 19 17 13.5 17 9C17 5.7 14.3 3 11 3Z"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
              <circle
                cx="11"
                cy="9"
                r="2.5"
                stroke="var(--color-gold)"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
            Secure Local Payments
          </div>
          <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
             Accept payment how your clients actually pay. MTN MoMo, Vodafone Cash, and Cards — all natively supported.
          </div>
          <div className="inline-block mt-4 py-1 px-2.5 rounded-full text-[10px] tracking-[1.5px] uppercase font-semibold bg-[rgba(212,175,55,0.08)] text-gold border border-[rgba(212,175,55,0.15)] relative z-10">
            Africa-First
          </div>
        </div>

        <div className="bg-navy p-[36px_32px] transition-colors duration-300 relative overflow-hidden group hover:bg-navy-mid">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0_0,rgba(212,175,55,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
           <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 relative z-10">
               <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                 <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.4" />
                 <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.4" />
                 <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.4" />
                 <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="var(--color-gold)" strokeWidth="1.4" />
               </svg>
           </div>
           <div className="text-[16px] font-semibold text-ivory mb-2.5 relative z-10">
             Project Dashboard
           </div>
           <div className="text-[13px] text-muted leading-[1.65] font-light relative z-10">
             All your projects, approval statuses, outstanding invoices, and revenue in one clean, fast dashboard.
           </div>
        </div>

      </div>
    </section>
  );
}
