"use client";

import { useEffect, useRef } from "react";

export function ProductMockup() {
  const mockupRef = useRef<HTMLDivElement>(null);

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

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={mockupRef}
      className="px-6 md:px-[60px] pb-[100px] max-w-[1200px] mx-auto opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="bg-navy-mid border border-border-dim rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="flex items-center gap-2 p-[14px_20px] bg-[rgba(255,255,255,0.03)] border-b border-border-dim">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-4 bg-[rgba(255,255,255,0.05)] rounded-md py-1.5 px-3 text-[11px] text-muted flex items-center gap-1.5">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className="opacity-50 shrink-0"
            >
              <rect
                x="1"
                y="1"
                width="9"
                height="9"
                rx="1.5"
                stroke="var(--color-muted)"
                strokeWidth="1"
              />
              <path
                d="M1 4H10"
                stroke="var(--color-muted)"
                strokeWidth="1"
              />
            </svg>
            app.delivami.com/dashboard
          </div>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="bg-navy-light border border-[rgba(212,175,55,0.3)] rounded-xl overflow-hidden transition-colors duration-250 hover:border-[rgba(212,175,55,0.4)]">
            <div className="h-[140px] bg-[linear-gradient(135deg,#112040_0%,#1a2d52_100%)] flex items-center justify-center relative overflow-hidden">
              <div className="w-11 h-11 bg-gold-glow border border-[rgba(212,175,55,0.3)] rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 3L13 8L5 13V3Z" fill="var(--color-gold)" />
                </svg>
              </div>
              <div className="absolute top-3 right-3 p-[4px_10px] rounded-full text-[10px] font-semibold tracking-[1px] uppercase flex items-center gap-1.5 bg-gold-glow text-gold border border-[rgba(212,175,55,0.25)]">
                <div className="w-[5px] h-[5px] rounded-full bg-current" />
                In Review
              </div>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Kofi Brands — Launch Film v3
              </div>
              <div className="text-[12px] text-muted flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-50"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 3V6L8 8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                Sent 2 hours ago · 1 revision
              </div>
            </div>
            <div className="p-[12px_16px] border-t border-border-dim flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ivory">
                GHS 3,200
              </span>
              <button className="py-1.5 px-3.5 rounded-md border-none bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy text-[11px] font-bold cursor-pointer font-sans tracking-[0.3px]">
                Approve ✓
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-navy-light border border-border-dim rounded-xl overflow-hidden transition-colors duration-250 hover:border-[rgba(212,175,55,0.2)]">
            <div className="h-[140px] bg-[linear-gradient(135deg,#1a1530_0%,#251a40_100%)] relative overflow-hidden">
              <div className="grid grid-cols-2 gap-1 p-4">
                <div className="rounded-md bg-[rgba(255,255,255,0.06)] h-[50px]"></div>
                <div className="rounded-md bg-[rgba(255,255,255,0.06)] h-[50px] opacity-60"></div>
                <div className="rounded-md bg-[rgba(255,255,255,0.06)] h-[50px] opacity-40"></div>
                <div className="rounded-md bg-[rgba(255,255,255,0.06)] h-[50px] opacity-30"></div>
              </div>
              <div className="absolute top-3 right-3 p-[4px_10px] rounded-full text-[10px] font-semibold tracking-[1px] uppercase flex items-center gap-1.5 bg-[rgba(76,175,80,0.12)] text-[#81c784] border border-[rgba(76,175,80,0.2)]">
                <div className="w-[5px] h-[5px] rounded-full bg-current" />
                Approved
              </div>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Accra Fashion Week — Gallery
              </div>
              <div className="text-[12px] text-muted flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-50"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 3V6L8 8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                Approved yesterday · Paid
              </div>
            </div>
            <div className="p-[12px_16px] border-t border-border-dim flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ivory">
                GHS 1,800
              </span>
              <button className="py-1.5 px-3.5 rounded-md border border-border-gold bg-transparent text-muted text-[11px] font-medium cursor-pointer font-sans">
                View
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-navy-light border border-border-dim rounded-xl overflow-hidden transition-colors duration-250 hover:border-[rgba(212,175,55,0.2)]">
            <div className="h-[140px] bg-[linear-gradient(135deg,#0d2015_0%,#152a1e_100%)] flex items-center justify-center relative overflow-hidden">
              <div className="flex items-center gap-[3px] px-6">
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[20px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[35px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[28px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[45px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[22px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[38px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[50px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[32px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[25px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[42px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[30px]" />
                <span className="block w-[3px] rounded-sm bg-[rgba(212,175,55,0.4)] h-[18px]" />
              </div>
              <div className="absolute top-3 right-3 p-[4px_10px] rounded-full text-[10px] font-semibold tracking-[1px] uppercase flex items-center gap-1.5 bg-[rgba(255,107,107,0.1)] text-[#ff8a80] border border-[rgba(255,107,107,0.2)]">
                <div className="w-[5px] h-[5px] rounded-full bg-current" />
                Revision
              </div>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-semibold text-ivory mb-1">
                MTN Ghana — Motion Package
              </div>
              <div className="text-[12px] text-muted flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-50"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 3V6L8 8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                2 comments from client
              </div>
            </div>
            <div className="p-[12px_16px] border-t border-border-dim flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ivory">
                GHS 5,500
              </span>
              <button className="py-1.5 px-3.5 rounded-md border border-border-gold bg-transparent text-muted text-[11px] font-medium cursor-pointer font-sans">
                View Feedback
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-navy-light border border-border-dim rounded-xl overflow-hidden transition-colors duration-250 hover:border-[rgba(212,175,55,0.2)]">
            <div className="h-[140px] bg-[linear-gradient(135deg,#1a1008_0%,#2a1a0a_100%)] relative overflow-hidden">
              <div className="flex flex-col gap-1.5 p-[16px_24px] w-full">
                <div className="h-2 bg-[rgba(212,175,55,0.2)] rounded-sm w-[70%]" />
                <div className="h-2 bg-[rgba(212,175,55,0.1)] rounded-sm w-[50%]" />
                <div className="h-[1px] bg-[rgba(255,255,255,0.06)] my-1.5" />
                <div className="flex justify-between items-center">
                  <div className="h-2 bg-[rgba(255,255,255,0.08)] rounded-sm w-[35%]" />
                  <div className="p-[4px_10px] bg-[rgba(212,175,55,0.2)] rounded-sm text-[10px] text-gold font-semibold">
                    INVOICE
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 p-[4px_10px] rounded-full text-[10px] font-semibold tracking-[1px] uppercase flex items-center gap-1.5 bg-gold-glow text-gold border border-[rgba(212,175,55,0.25)]">
                <div className="w-[5px] h-[5px] rounded-full bg-current" />
                Pending
              </div>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-semibold text-ivory mb-1">
                Stanbic Bank — Brand Refresh
              </div>
              <div className="text-[12px] text-muted flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-50"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 3V6L8 8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                Invoice sent · Awaiting payment
              </div>
            </div>
            <div className="p-[12px_16px] border-t border-border-dim flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ivory">
                GHS 8,000
              </span>
              <button className="py-1.5 px-3.5 rounded-md border border-border-gold bg-transparent text-muted text-[11px] font-medium cursor-pointer font-sans">
                Remind
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
