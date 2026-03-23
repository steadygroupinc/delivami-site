"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";
import Link from "next/link";
import { Users, CheckCircle2, Layout, Shield } from "lucide-react";

export default function StudiosSolution() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy text-ivory pb-20 overflow-hidden">
        {/* Hero */}
        <section className="pt-[160px] pb-32 px-6 md:px-[60px] max-w-[1200px] mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-glow blur-[120px] opacity-20 -z-10" />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[11px] text-[#4A90E2] tracking-[2px] uppercase font-bold mb-8">
            Solutions for Creative Studios
          </div>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] font-bold leading-[1.05] tracking-[-2px] mb-8">
            Sync your team. <br />
            <em className="italic text-gold">Surprise your clients.</em>
          </h1>
          <p className="text-[19px] text-muted leading-relaxed max-w-[700px] mx-auto font-light">
            Centralized asset management and multi-user workflows for boutique studios that demand high-speed delivery without sacrificing brand integrity.
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 md:px-[60px] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1 bg-navy-mid border border-border-dim rounded-[40px] p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#4A90E2]/10 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center text-white mb-8">
                    <Layout className="w-10 h-10" />
                 </div>
                 <h3 className="font-serif text-[32px] font-bold mb-4">"Our internal chaos ended overnight."</h3>
                 <p className="text-muted italic">"We were juggling Dropbox folders and Slack files. Delivami unified our delivery process across all 5 of our editors. It's the infrastructure we didn't know we needed."</p>
                 <div className="mt-8">
                    <div className="font-bold text-ivory">Sarah Juma</div>
                    <div className="text-[#4A90E2] text-[12px] uppercase tracking-wider">Creative Director, NeoVibe Studio</div>
                 </div>
              </div>
           </div>
           <div className="order-1 md:order-2">
              <h2 className="font-serif text-[clamp(32px,3vw,48px)] font-bold mb-8 tracking-[-1px]">Built for collaborative <br /> excellence</h2>
              <div className="space-y-6">
                 {[
                    { title: "Team Workspaces", desc: "Shared libraries and collaborative review rooms. No more 'v2_final_final' confusion." },
                    { title: "Client Hierarchies", desc: "Organize projects by client, department, or campaign with granular access controls." },
                    { title: "Consolidated Billing", desc: "One workspace, one invoice. Manage your team's subscription and storage from a single dashboard." }
                 ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-[#4A90E2] shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-[14px] text-muted font-light">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Features Toggle */}
        <section className="py-32 bg-navy-mid/20">
           <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
              <div className="text-center mb-16 px-4">
                 <h2 className="font-serif text-[36px] font-bold mb-4">Scale with Confidence</h2>
                 <p className="text-muted font-light">Professional tools for growing creative teams.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-12">
                 <div className="text-center">
                    <Shield className="w-8 h-8 text-[#4A90E2] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Permission Management</h4>
                    <p className="text-[14px] text-muted font-light">Define exactly who can upload, delete, or view specific project files.</p>
                 </div>
                 <div className="text-center">
                    <Users className="w-8 h-8 text-[#4A90E2] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Team Activity Logs</h4>
                    <p className="text-[14px] text-muted font-light">Trace every upload and client interaction for total accountability.</p>
                 </div>
                 <div className="text-center">
                    <Layout className="w-8 h-8 text-[#4A90E2] mx-auto mb-6" />
                    <h4 className="font-bold mb-2">Bulk Delivery</h4>
                    <p className="text-[14px] text-muted font-light">Deliver hundreds of files simultaneously with high-speed async processing.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-32 flex flex-col items-center">
           <h2 className="font-serif text-[42px] font-bold text-ivory mb-6 tracking-[-1px]">Ready to level up your team?</h2>
           <Link href="https://app.delivami.com/register" className="bg-gold text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all">
              Start Studio Trial
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
