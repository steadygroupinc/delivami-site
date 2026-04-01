"use client";

import Link from "next/link";
import { User, CheckCircle2, Award, Zap } from "lucide-react";

export default function SolopreneursSolution() {
  return (
    <>      <main className="min-h-screen bg-navy text-ivory pb-20 overflow-hidden">
        {/* Hero */}
        <section className="pt-[160px] pb-32 px-6 md:px-[60px] max-w-[1200px] mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-glow blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-[11px] text-gold tracking-[2px] uppercase font-bold mb-8">
            Solutions for Solopreneurs
          </div>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] font-bold leading-[1.05] tracking-[-2px] mb-8">
            Professionalize your <br />
            <em className="italic text-gold">one-person powerhouse.</em>
          </h1>
          <p className="text-[19px] text-muted leading-relaxed max-w-[700px] mx-auto font-light">
            Stop losing credits to messy WeTransfer links. Delivami gives you the branded appearance and secure workflow of a top-tier agency—at a fraction of the cost.
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 md:px-[60px] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold mb-8 tracking-[-1px]">Why solo creators <br /> choose Delivami</h2>
              <div className="space-y-6">
                 {[
                    { title: "Instant Trust", desc: "Show up with a custom-branded portal that proves you're a professional, not just another freelancer." },
                    { title: "Secure Payouts", desc: "Get paid before they download. Lock assets behind Mobile Money payments and protect your revenue." },
                    { title: "No Tech Headache", desc: "No complex setup. Upload, watermark, and send in under 60 seconds." }
                 ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-[14px] text-muted font-light">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="bg-navy-mid border border-border-dim rounded-[40px] p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold-glow opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-navy mb-8">
                    <Award className="w-10 h-10" />
                 </div>
                 <h3 className="font-serif text-[32px] font-bold mb-4">"The client closed the deal as soon as I sent the portal."</h3>
                 <p className="text-muted italic">"Previously I was sending Google Drive links. Now, clients know I'm the real deal. It literally paid for itself in one week."</p>
                 <div className="mt-8">
                    <div className="font-bold text-ivory">Kofi Mensah</div>
                    <div className="text-gold text-[12px] uppercase tracking-wider">Freelance Motion Designer</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features */}
        <section className="py-32 bg-navy-mid/20">
           <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
              <div className="text-center mb-16">
                 <h2 className="font-serif text-[36px] font-bold mb-4">Your Solo Toolkit</h2>
                 <p className="text-muted font-light">Everything you need to run a professional delivery business.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-12">
                 <div className="text-center">
                    <Zap className="w-8 h-8 text-gold mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Auto-Watermarking</h4>
                    <p className="text-[14px] text-muted font-light">Protect previews automatically until final payment is secured.</p>
                 </div>
                 <div className="text-center">
                    <User className="w-8 h-8 text-gold mx-auto mb-6" />
                    <h4 className="font-bold mb-2">White Labeling</h4>
                    <p className="text-[14px] text-muted font-light">Your logo, your brand. Our platform is invisible to your clients.</p>
                 </div>
                 <div className="text-center">
                    <div className="w-8 h-8 text-gold mx-auto mb-6 text-[24px] font-bold font-serif">$</div>
                    <h4 className="font-bold mb-2">Direct Payouts</h4>
                    <p className="text-[14px] text-muted font-light">Withdraw your earnings instantly to Mobile Money across Africa.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-32 flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Ready to professionalize?</h2>
           <Link href="https://app.delivami.com/register" className="bg-gold text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all">
              Go Pro for Free
           </Link>
           <Link href="/case-studies" className="mt-8 text-muted hover:text-gold text-[14px] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m7 7-7-7 7-7"/></svg> Explore all solutions
           </Link>
        </section>
      </main>    </>
  );
}
