"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";
import Link from "next/link";
import { Building2, ShieldCheck, History, Globe, CheckCircle2 } from "lucide-react";

export default function AgenciesSolution() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy text-ivory pb-20 overflow-hidden">
        {/* Hero */}
        <section className="pt-[160px] pb-32 px-6 md:px-[60px] max-w-[1200px] mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-glow blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-[11px] text-[#35D073] tracking-[2px] uppercase font-bold mb-8">
            Enterprise Solutions for Agencies
          </div>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] font-bold leading-[1.05] tracking-[-2px] mb-8">
            Scale your agency. <br />
            <em className="italic text-gold">Protect your excellence.</em>
          </h1>
          <p className="text-[19px] text-muted leading-relaxed max-w-[700px] mx-auto font-light">
            Infrastructure designed for high-end creative agencies that handle sensitive intellectual property for world-class brands across Africa and beyond.
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 md:px-[60px] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold mb-8 tracking-[-1px]">Why leading agencies <br /> scale on Delivami</h2>
              <div className="space-y-6">
                 {[
                    { title: "Military-Grade Security", desc: "End-to-end encryption for every file transfer. Protect your clients' most valuable intellectual property." },
                    { title: "Granular Audit Logs", desc: "Track exactly when a client views, downloads, or comments on a file. Total transparency for your account managers." },
                    { title: "Regional Optimization", desc: "Fast uploads and payouts across all major African markets, ensuring your global team feels local everywhere." }
                 ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-[#35D073] shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-[14px] text-muted font-light">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="bg-navy-mid border border-border-dim rounded-[40px] p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#35D073]/10 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-[#35D073] rounded-full flex items-center justify-center text-white mb-8">
                    <Building2 className="w-10 h-10" />
                 </div>
                 <h3 className="font-serif text-[32px] font-bold mb-4">"It's the industry standard we've been waiting for."</h3>
                 <p className="text-muted italic">"Delivering high-budget campaigns for multinational brands requires more than just cloud storage. Delivami gives our agency the security and professionalism our clients demand."</p>
                 <div className="mt-8">
                    <div className="font-bold text-ivory">Amara Okafor</div>
                    <div className="text-[#35D073] text-[12px] uppercase tracking-wider">Managing Director, Zenith Creative Group</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features Table Style */}
        <section className="py-32 bg-navy-mid/20">
           <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
              <div className="text-center mb-16 px-4">
                 <h2 className="font-serif text-[36px] font-bold mb-4">Agency-Grade Features</h2>
                 <p className="text-muted font-light">Built for the complexity of multi-client, multi-team management.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-12">
                 <div className="text-center">
                    <ShieldCheck className="w-8 h-8 text-[#35D073] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Advanced Security</h4>
                    <p className="text-[14px] text-muted font-light">Two-factor authentication and role-based access for all team members.</p>
                 </div>
                 <div className="text-center">
                    <History className="w-8 h-8 text-[#35D073] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Version Control</h4>
                    <p className="text-[14px] text-muted font-light">Maintain a complete history of project revisions and client sign-offs.</p>
                 </div>
                 <div className="text-center">
                    <Globe className="w-8 h-8 text-[#35D073] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Custom Domains</h4>
                    <p className="text-[14px] text-muted font-light">Host your delivery portal on your own domain (e.g., delivery.youragency.com).</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-32 flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Ready for the enterprise edge?</h2>
           <Link href="https://app.delivami.com/register" className="bg-gold text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all">
              Partner with Delivami
           </Link>
           <Link href="/case-studies" className="mt-8 text-muted hover:text-gold text-[14px] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m7 7-7-7 7-7"/></svg> Explore all solutions
           </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
