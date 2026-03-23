"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";

const updates = [
  {
    date: "March 20, 2026",
    version: "v1.2.0",
    title: "Subdomain Architecture & Landing Page Separation",
    description: "Successfully decoupled the core application from the marketing website for better performance and scalability. The app now lives on app.delivami.com.",
    tags: ["Core", "Infra"],
  },
  {
    date: "March 15, 2026",
    version: "v1.1.5",
    title: "Enhanced Video Review Flow",
    description: "Added frame-accurate commenting and professional review tools for videographers delivering high-fidelity assets.",
    tags: ["Feature", "Review"],
  },
  {
    date: "March 10, 2026",
    version: "v1.1.0",
    title: "Paystack Local Integration",
    description: "Deep integration with Paystack for seamless Mobile Money and local bank transfer payouts across West Africa.",
    tags: ["Finance", "Payment"],
  },
  {
    date: "March 01, 2026",
    version: "v1.0.0",
    title: "Platform Launch",
    description: "The official launch of Delivami—the professional delivery platform for the next generation of African creators.",
    tags: ["Milestone"],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[900px] mx-auto">
        <header className="mb-20">
          <h1 className="font-serif text-[48px] font-bold text-ivory mb-4 tracking-[-1px]">Changelog</h1>
          <p className="text-muted text-[17px] font-light font-sans max-w-[600px] leading-relaxed">
            New features, improvements, and fixes we’ve shipped to help you streamline your creative workflow.
          </p>
        </header>

        <div className="space-y-16">
          {updates.map((update, idx) => (
            <div key={idx} className="relative pl-12 border-l border-border-dim pb-4">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-muted text-[14px] font-medium">{update.date}</span>
                  <span className="px-3 py-1 bg-gold-glow border border-border-gold rounded-full text-gold text-[11px] font-bold uppercase tracking-wider">{update.version}</span>
                </div>
                
                <h3 className="text-ivory font-serif text-[24px] font-bold group-hover:text-gold transition-colors">{update.title}</h3>
                
                <p className="text-muted leading-[1.8] font-light max-w-[700px]">{update.description}</p>
                
                <div className="flex gap-2">
                  {update.tags.map(tag => (
                    <span key={tag} className="text-[11px] text-muted-dim bg-white/5 px-2.5 py-1 rounded-md border border-white/5">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-navy-mid border border-border-dim rounded-[32px] text-center">
           <h3 className="text-ivory font-serif text-[24px] font-bold mb-4">Never miss an update</h3>
           <p className="text-muted mb-8 max-w-[400px] mx-auto">Sign up for our newsletter to get the latest features and tutorials delivered to your inbox.</p>
           <form className="flex max-w-[400px] mx-auto gap-2">
              <input type="email" placeholder="kofi@mensah.com" className="flex-1 bg-navy border border-border-dim rounded-xl px-4 text-ivory text-[14px] outline-none" />
              <button className="bg-gold text-navy font-bold px-6 py-3 rounded-xl whitespace-nowrap">Join Waitlist</button>
           </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
