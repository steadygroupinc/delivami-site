"use client";

import { useEffect, useRef } from "react";

export function ProblemSection() {
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
      id="problem"
      className="py-[100px] px-6 md:px-[60px] max-w-[1200px] mx-auto"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-gold before:opacity-50">
            The Problem
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out font-serif text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.05] tracking-[-1px] text-ivory mb-5">
            You&apos;re too talented
            <br />
            for <em className="italic text-gold">this chaos.</em>
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-[16px] text-muted leading-[1.75] max-w-[480px] font-light">
            Every creative in West Africa lives this. The work is world-class.
            The delivery process says otherwise. You deserve a tool that matches
            your talent.
          </p>
        </div>
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col gap-3">
          <div className="flex items-start gap-4 p-5 bg-navy-mid border border-border-dim rounded-xl transition-all duration-250 hover:border-[rgba(212,175,55,0.15)] hover:translate-x-1">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                />
                <path
                  d="M6 4V3M12 4V3"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M2 8H16"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Google Drive + WhatsApp chaos
              </div>
              <div className="text-[13px] text-muted leading-[1.55] font-light">
                Folder links buried in voice note chats. No structure, no trail.
                Client can&apos;t find the file tomorrow.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-navy-mid border border-border-dim rounded-xl transition-all duration-250 hover:border-[rgba(212,175,55,0.15)] hover:translate-x-1">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9H15M9 3L15 9L9 15"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Revision feedback is a nightmare
              </div>
              <div className="text-[13px] text-muted leading-[1.55] font-light">
                &quot;Change the color&quot; — which color, which version, which file?
                Feedback lost across 200 messages.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-navy-mid border border-border-dim rounded-xl transition-all duration-250 hover:border-[rgba(212,175,55,0.15)] hover:translate-x-1">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2V10M9 10L6 7M9 10L12 7"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 13H15"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M3 16H15"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  opacity=".4"
                />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Chasing payment for weeks
              </div>
              <div className="text-[13px] text-muted leading-[1.55] font-light">
                Invoice sent as a screenshot on WhatsApp. Mobile money awkward.
                No paper trail. No professionalism.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-navy-mid border border-border-dim rounded-xl transition-all duration-250 hover:border-[rgba(212,175,55,0.15)] hover:translate-x-1">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                />
                <path
                  d="M9 5V9.5L12 11.5"
                  stroke="var(--color-gold)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Looking unprofessional
              </div>
              <div className="text-[13px] text-muted leading-[1.55] font-light">
                Your work is world-class. Your delivery process says otherwise.
                Clients don&apos;t see your full value.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
