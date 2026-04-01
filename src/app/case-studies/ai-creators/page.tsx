"use client";

import Link from "next/link";

export default function AICreatorsCaseStudy() {
  return (
    <>      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[1200px] mx-auto overflow-hidden">
        {/* Hero */}
        <section className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-glow blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 p-[5px_14px_5px_6px] bg-[rgba(212,175,55,0.1)] border border-border-gold rounded-full text-[11px] text-gold tracking-[2px] uppercase font-medium mb-8">
            Case Study: AI-Driven Production
          </div>
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-bold leading-[1.05] tracking-[-1.5px] text-ivory mb-6">
            Scale your output. <em className="italic text-gold">Not your workload.</em>
          </h1>
          <p className="text-muted text-[17px] font-light max-w-[700px] mx-auto leading-relaxed">
            How AI-first creators use Delivami to manage massive volumes of synthetic media and deliver high-quality results to clients globally.
          </p>
        </section>

        {/* The Challenge */}
        <section className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-8 tracking-[-1px]">The Scale Challenge</h2>
            <div className="space-y-8">
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-gold font-semibold mb-2">Infinite Asset Bloat</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Generating hundreds of variants with AI leads to asset management chaos. Delivering the 'right' final versions felt impossible.</p>
               </div>
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-gold font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Clients often worry about the final quality of AI assets. Proving the 'human-in-the-loop' polish was a struggle.</p>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-navy border border-border-dim rounded-3xl p-4 aspect-square relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000')] bg-cover bg-center opacity-40 grayscale" />
             <div className="relative z-10 w-24 h-24 bg-gold-glow backdrop-blur-md rounded-full flex items-center justify-center border border-gold/30">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/><circle cx="12" cy="12" r="5"/></svg>
             </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-32">
          <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-16 tracking-[-1px] text-center">AI Workflow Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10M7 17h10"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Smart Cataloging</h3>
               <p className="text-muted leading-relaxed font-light">Organize massive AI outputs into clean, searchable galleries for client selection and rapid iteration.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Fast Payouts</h3>
               <p className="text-muted leading-relaxed font-light">Integrated Mobile Money payouts ensure you get paid for your high-volume work without waiting weeks.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-gold/20 transition-all">
               <div className="w-12 h-12 bg-gold-glow border border-border-gold rounded-xl flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Secure Delivery</h3>
               <p className="text-muted leading-relaxed font-light">Encrypted delivery tunnels protect your proprietary AI models and confidential training assets.</p>
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
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">10x</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Production Speed</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">500k+</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Assets Managed</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-gold mb-2">0%</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Delivery Failures</div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-border-dim flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Scale your AI business today?</h2>
           
           <Link href="/case-studies" className="mt-8 text-muted hover:text-gold text-[14px] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m7 7-7-7 7-7"/></svg> Back to Case Studies
           </Link>
        </section>
      </main>    </>
  );
}
