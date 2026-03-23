"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";
import Link from "next/link";

export default function VideoContentCreatorsCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[1200px] mx-auto overflow-hidden">
        {/* Hero */}
        <section className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-glow blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 p-[5px_14px_5px_6px] bg-[rgba(255,0,80,0.1)] border border-[rgba(255,0,80,0.2)] rounded-full text-[11px] text-[#FF0050] tracking-[2px] uppercase font-medium mb-8">
            Case Study: Social Content
          </div>
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-bold leading-[1.05] tracking-[-1.5px] text-ivory mb-6">
            From TikTok drafts to <em className="italic text-gold">viral delivery.</em>
          </h1>
          <p className="text-muted text-[17px] font-light max-w-[700px] mx-auto leading-relaxed">
            How short-form creators use Delivami to manage high-volume social assets and get instant client approval on vertical edits.
          </p>
        </section>

        {/* The Challenge */}
        <section className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-8 tracking-[-1px]">The Vertical Challenge</h2>
            <div className="space-y-8">
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-gold font-semibold mb-2">High Volume Chaos</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Managing 30+ vertical clips per month for multiple brands across different social platforms was a metadata nightmare.</p>
               </div>
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-gold font-semibold mb-2">Mobile Approval Friction</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Clients needed to review work on their phones, but desktop-first delivery links made mobile inspection difficult.</p>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-navy border border-border-dim rounded-3xl p-4 aspect-[9/16] max-w-[300px] mx-auto relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000')] bg-cover bg-center opacity-40 grayscale" />
             <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-32">
          <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-16 tracking-[-1px] text-center">Mobile-First Delivery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Native Mobile Review</h3>
               <p className="text-muted leading-relaxed font-light">Delivery pages optimized specifically for vertical video and mobile browsers for seamless client sign-off.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">One-Tap Downloads</h3>
               <p className="text-muted leading-relaxed font-light">Clients can download approved assets directly to their camera roll, ready for immediate social posting.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Asset Protection</h3>
               <p className="text-muted leading-relaxed font-light">Custom watermarking on every preview ensures your creative value is protected until the project is finalized.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-gold-glow border border-border-gold rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden mb-32">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
           </div>
           <div className="relative z-10 grid sm:grid-cols-3 gap-12">
              <div>
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">5x</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Post Frequency</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">12m</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Avg Approval Time</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">94%</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Client Retention</div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-border-dim flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Ready to scale your content?</h2>
           <Link href="https://app.delivami.com/register" className="bg-gold text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_12px_40_rgba(212,175,55,0.3)] transition-all">
              Start Free Trial
           </Link>
           <Link href="/case-studies" className="mt-8 text-muted hover:text-gold text-[14px] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m7 7-7-7 7-7"/></svg> Back to Case Studies
           </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
