"use client";

import Link from "next/link";
import { useState } from "react";
import "./changelog.css";

// Rich UI Placeholders
const FeatureGraphic = ({ type }: { type: string }) => {
  if (type === "video") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[60%] bg-[#0A1622] border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden flex flex-col shadow-2xl">
          <div className="flex-1 bg-[rgba(255,255,255,0.03)] flex items-center justify-center relative">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#D4AF37" opacity="0.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#D4AF37] border-2 border-[#0A1622] flex items-center justify-center shadow-lg transform -translate-x-4 translate-y-4">
               <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="h-2 bg-[rgba(255,255,255,0.05)] flex">
            <div className="w-[40%] bg-[#F2EDE3] h-full relative">
               <div className="absolute right-[-4px] top-[-3px] w-2 h-4 bg-white rounded-sm shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "payout") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] bg-[#0A1622] p-5 rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="h-3 w-16 bg-[rgba(255,255,255,0.1)] rounded-md"></div>
            <div className="px-3 py-1 bg-[rgba(53,208,115,0.15)] text-[#35D073] text-[10px] uppercase font-bold tracking-wider rounded-md">Paid</div>
          </div>
          <div className="text-[28px] text-white font-serif mb-2">$2,450<span className="text-[14px] text-[#5E7080]">.00</span></div>
          <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden mt-4">
             <div className="h-full bg-[#35D073] w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "workspace") {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-[85%] h-10 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center px-4 gap-3 shadow-lg">
           <div className="w-5 h-5 bg-[#F2EDE3] rounded-[4px] opacity-80"></div>
           <div className="h-2 w-24 bg-[rgba(255,255,255,0.2)] rounded-sm"></div>
        </div>
        <div className="w-[85%] h-10 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center px-4 gap-3 translate-x-4 shadow-lg">
           <div className="w-5 h-5 bg-[#D4AF37] rounded-[4px] opacity-80"></div>
           <div className="h-2 w-32 bg-[rgba(255,255,255,0.2)] rounded-sm"></div>
           <div className="ml-auto w-6 h-6 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"></div>
        </div>
      </div>
    );
  }

  if (type === "versioning") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[60%] h-[50%]">
          <div className="absolute top-0 right-0 w-full h-full bg-[#0A1622] border border-[rgba(255,255,255,0.05)] rounded-lg transform translate-x-4 translate-y-4 opacity-40 flex items-end p-3"><div className="text-[10px] text-white/50 font-mono">v1_final.mp4 (Archived)</div></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[#0B1A2A] border border-[rgba(255,255,255,0.1)] rounded-lg transform translate-x-2 translate-y-2 opacity-70 flex items-end p-3"><div className="text-[10px] text-white/70 font-mono">v2_fixes.mp4 (Locked)</div></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[#0D1D30] border-2 border-[#D4AF37] rounded-lg shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex items-end p-3">
             <div className="flex w-full justify-between items-center">
                <div className="text-[11px] text-[#D4AF37] font-bold font-mono">v3_approved.mp4</div>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // Default geometry graphic
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    </div>
  );
};

const updates = [
  {
    date: "Coming Next",
    version: "In Beta",
    title: "Automated Split Payments",
    description: "Collaborating with other freelancers? Automatically route exactly 20% to your editor and 80% to your agency the second a client invoice is paid. Zero manual transfers required.",
    tags: [
      { name: "Finance", color: "#35D073" },
      { name: "Agencies", color: "#D4AF37" }
    ],
    graphic: "payout",
    isUpcoming: true
  },
  {
    date: "Coming Next",
    version: "In Beta",
    title: "Client Tipping & Gratitude Payouts",
    description: "Allow clients to add a discretionary tip or bonus directly on top of the final invoice payment to reward your exceptional creative work.",
    tags: [
      { name: "Payments", color: "#35D073" }
    ],
    graphic: "payout",
    isUpcoming: true
  },
  {
    date: "Coming Soon",
    version: "In Development",
    title: "Client Approvals & Digital Sign-offs",
    description: "Built-in approval workflows with legally binding digital signatures. Clients can officially 'Approve' a deliverable, instantly triggering your final invoice through Paystack.",
    tags: [
      { name: "Workflow", color: "#D4AF37" },
      { name: "Legal", color: "#F2EDE3" }
    ],
    graphic: "payout",
    isUpcoming: true
  },
  {
    date: "Coming Soon",
    version: "In Development",
    title: "Frame-Accurate Video Review Engine",
    description: "Say goodbye to ambiguous feedback. Clients will soon be able to click directly on high-res video frames to leave timestamped, spatial comments right in the browser.",
    tags: [
      { name: "Feature", color: "#D4AF37" },
      { name: "Client Portal", color: "#F2EDE3" }
    ],
    graphic: "video",
    isUpcoming: true
  },
  {
    date: "Coming Soon",
    version: "Planned",
    title: "Automated Copyright Watermarking",
    description: "Before a client pays, your files and videos will feature an automated digital watermark overlay. Upon successful payment verification, the clean, high-res assets are automatically unlocked.",
    tags: [
      { name: "Security", color: "#35D073" },
      { name: "Protection", color: "#F2EDE3" }
    ],
    graphic: "video",
    isUpcoming: true
  },
  {
    date: "March 25, 2026",
    version: "v1.4.0",
    title: "Universal Inline Renaming & CMDK",
    description: "Implemented a pure artisan-quality inline renaming system across Projects, Workspaces, and Files without triggering accidental navigation. Paired with a new lightning-fast Global Command Menu (Cmd+K).",
    tags: [
      { name: "Workflow", color: "#D4AF37" },
      { name: "UX", color: "#F2EDE3" }
    ],
    graphic: "workspace"
  },
  {
    date: "March 23, 2026",
    version: "v1.3.0",
    title: "Paystack Local Settlements & Invoicing",
    description: "Deep integration with Paystack for seamless Mobile Money and local bank transfer payouts across West Africa. The moment a client hits approve on the invoice preview, funds settle to your configured payout method within 24-48 hours.",
    tags: [
      { name: "Finance", color: "#35D073" },
      { name: "Integration", color: "#D4AF37" }
    ],
    graphic: "payout"
  },
  {
    date: "March 20, 2026",
    version: "v1.2.0",
    title: "Advanced Security: WebAuthn & 2FA",
    description: "Added biometric Passkey support and Two-Factor Authentication capabilities, ensuring your agency's highest-value client deliverables are strictly protected by military-grade security.",
    tags: [
      { name: "Security", color: "#F2EDE3" }
    ],
    graphic: "versioning"
  },
  {
    date: "March 15, 2026",
    version: "v1.1.0",
    title: "Studio Brand Customization",
    description: "Your client delivery portals no longer look like standard templates. We've introduced deep brand identity controls, letting studios inject their own colors and typography directly into the client-facing presentation layers.",
    tags: [
      { name: "Branding", color: "#D4AF37" }
    ],
    graphic: "video"
  },
  {
    date: "March 05, 2026",
    version: "v1.0.5",
    title: "Isolated Client Delivery Portals",
    description: "Instead of sending scattered WeTransfer links and Google Drive folders, every client gets their own secure, read-only delivery hub where they can view, approve, and pay for assets in a single workflow.",
    tags: [
      { name: "Collaboration", color: "#F2EDE3" }
    ],
    graphic: "workspace"
  },
  {
    date: "March 01, 2026",
    version: "v1.0.0",
    title: "Platform Official Launch",
    description: "The official launch of Delivami—the professional delivery platform for the next generation of African creators. We are redefining how creatives deliver value and collect payments.",
    tags: [
      { name: "Milestone", color: "#D4AF37" }
    ],
    graphic: "default"
  },
];

export default function ChangelogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featureForm, setFeatureForm] = useState({ title: "", description: "", email: "" });
  const [modalState, setModalState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalState("submitting");
    // Simulate network request
    setTimeout(() => {
      setModalState("success");
      setFeatureForm({ title: "", description: "", email: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setModalState("idle");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="cl-shell">
      {/* ═══════ HERO ═══════ */}
      <header className="cl-hero">
        <div className="cl-hero-bg"></div>
        <div className="cl-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Changelog & Updates
        </div>
        <h1 className="cl-title">
          Building the perfect<br />
          <span>delivery engine.</span>
        </h1>
        <p className="cl-subtitle">
          New features, performance upgrades, and workflow reinforcements we've shipped to help centralize your creative business.
        </p>

        <button onClick={() => setIsModalOpen(true)} className="btn-cl-outline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>
          Suggest a Feature
        </button>
      </header>

      {/* ═══════ TIMELINE GRID ═══════ */}
      <section className="cl-feed">
        {updates.map((update, idx) => (
          <div key={idx} className="cl-entry">
            {/* Meta Left Side */}
            <div className="cl-meta-col">
              <div className="cl-meta-sticky">
                <span className="cl-date">{update.date}</span>
                <span className={`cl-version-badge ${update.isUpcoming ? "cl-version-upcoming" : ""}`}>{update.version}</span>
                <div className={`cl-node ${update.isUpcoming ? "cl-node-upcoming" : ""}`}></div>
              </div>
            </div>

            {/* Content Right Side */}
            <div className={`cl-content-col ${update.isUpcoming ? "opacity-60 grayscale-[50%]" : ""}`}>
              <div className="cl-card">
                {/* Dynamically Rendered High-Fidelity UI Placeholder */}
                <div className="cl-card-feature">
                  <div className="cl-feature-glow"></div>
                  <FeatureGraphic type={update.graphic} />
                </div>

                <h3 className="cl-item-title">{update.title}</h3>
                <p className="cl-desc">{update.description}</p>
                
                <div className="cl-tags">
                  {update.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="cl-tag-sleek">
                      <span className="cl-tag-dot" style={{ backgroundColor: tag.color }}></span>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <div className="cl-cta-modern">
        <h3>
          Stop sharing links.<br />
          <em className="text-gold">Start delivering experiences.</em>
        </h3>
        <p>Join the top studios and autonomous creators across Africa managing their deliveries flawlessly.</p>
        <Link href="/signup" className="btn-cl-glow">
          Get Early Access
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>

      {/* ═══════ SUGGEST FEATURE MODAL ═══════ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#06101D]/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-[#0A1622] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 w-full max-w-md shadow-2xl transform transition-all">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Suggest a Feature</h2>
            <p className="text-sm text-white/60 mb-6 font-sans">
              Help us build the perfect creative engine. What's missing from your delivery workflow?
            </p>

            {modalState === "success" ? (
              <div className="bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.3)] rounded-xl p-6 text-center text-[#35D073]">
                <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <div className="font-bold mb-1">Feedback Received!</div>
                <div className="text-sm opacity-80">Our product team will review this shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5 ml-1">Feature Title</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Notion Integration, Custom Domains..." 
                    value={featureForm.title}
                    onChange={(e) => setFeatureForm({...featureForm, title: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5 ml-1">How would it work?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe how this feature would improve your workflow..." 
                    value={featureForm.description}
                    onChange={(e) => setFeatureForm({...featureForm, description: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5 ml-1">Your Email (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="so we can ask follow up questions..." 
                    value={featureForm.email}
                    onChange={(e) => setFeatureForm({...featureForm, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={modalState === "submitting"}
                  className="mt-2 w-full bg-[#D4AF37] hover:bg-[#E8BF45] text-[#06101D] font-bold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  {modalState === "submitting" ? "Sending..." : "Submit Suggestion"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
