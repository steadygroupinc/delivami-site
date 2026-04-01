"use client";

import Link from "next/link";

export default function PhotographersCaseStudy() {
  return (
    <>      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[1200px] mx-auto overflow-hidden">
        {/* Hero */}
        <section className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[rgba(53,208,115,0.1)] blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 p-[5px_14px_5px_6px] bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.2)] rounded-full text-[11px] text-[#35D073] tracking-[2px] uppercase font-medium mb-8">
            Case Study: Professional Photography
          </div>
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-bold leading-[1.05] tracking-[-1.5px] text-ivory mb-6">
            Deliver galleries that <em className="italic text-[#35D073]">sell themselves.</em>
          </h1>
          <p className="text-muted text-[17px] font-light max-w-[700px] mx-auto leading-relaxed">
            How wedding and commercial photographers use Delivami to showcase their best work and get paid instantly before high-res files are even downloaded.
          </p>
        </section>

        {/* The Challenge */}
        <section className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="bg-navy border border-border-dim rounded-3xl p-4 aspect-4/3 relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000')] bg-cover bg-center opacity-40 grayscale" />
             <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
             </div>
          </div>
          <div>
            <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-8 tracking-[-1px]">The Challenge</h2>
            <div className="space-y-8">
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-[#35D073] font-semibold mb-2">The "Non-Paying" Client</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Sending full-res images before payment meant chasing invoices for weeks. Sending watermarked low-res proofs looked unprofessional.</p>
               </div>
               <div className="p-8 bg-navy-mid border border-border-dim rounded-2xl relative">
                  <h4 className="text-[#35D073] font-semibold mb-2">Clunky Selection Process</h4>
                  <p className="text-muted text-[15px] font-light leading-relaxed">Clients struggled to pick their favorite shots using traditional file managers, leading to endless back-and-forth emails.</p>
               </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-32">
          <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold text-ivory mb-16 tracking-[-1px] text-center">The Delivami Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-[#35D073]/20 transition-all">
               <div className="w-12 h-12 bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.2)] rounded-xl flex items-center justify-center text-[#35D073]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Immersive Galleries</h3>
               <p className="text-muted leading-relaxed font-light">Showcase your images in a beautiful, high-speed gallery that works flawlessly on mobile and desktop.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-[#35D073]/20 transition-all">
               <div className="w-12 h-12 bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.2)] rounded-xl flex items-center justify-center text-[#35D073]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Pay-to-Unlock</h3>
               <p className="text-muted leading-relaxed font-light">Clients can view low-res previews but must pay the final invoice to unlock high-res downloads automatically.</p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-navy-mid border border-border-dim rounded-[32px] hover:border-[#35D073]/20 transition-all">
               <div className="w-12 h-12 bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.2)] rounded-xl flex items-center justify-center text-[#35D073]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.42 4.58a5 5 0 0 1 0 7.07l-7.07 7.07-7.07-7.07a5 5 0 0 1 7.07-7.07L12 5.5l1.41-1.42a5 5 0 0 1 7.01 0z"/></svg>
               </div>
               <h3 className="text-ivory font-serif text-[24px] font-bold">Smart Selection</h3>
               <p className="text-muted leading-relaxed font-light">Allow clients to 'heart' their favorite shots, giving you an instant list for final editing or retouching.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-[rgba(53,208,115,0.05)] border border-[rgba(53,208,115,0.2)] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden mb-32">
           <div className="relative z-10 grid sm:grid-cols-3 gap-12">
              <div>
                 <div className="text-[56px] font-serif font-bold text-[#35D073] mb-2">80%</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Faster Payment Collection</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-[#35D073] mb-2">2x</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Higher Client Satisfaction</div>
              </div>
              <div>
                 <div className="text-[56px] font-serif font-bold text-[#35D073] mb-2">0</div>
                 <div className="text-ivory text-[13px] uppercase tracking-widest font-medium">Asset Theft</div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-border-dim flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Focus on the shot. We’ll handle the rest.</h2>
           <Link href="https://app.delivami.com/register" className="bg-[#35D073] text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_12px_40px_rgba(53,208,115,0.3)] transition-all">
              Join the Waitlist
           </Link>
           <Link href="/case-studies" className="mt-8 text-muted hover:text-gold text-[14px] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m7 7-7-7 7-7"/></svg> Back to Case Studies
           </Link>
        </section>
      </main>    </>
  );
}
