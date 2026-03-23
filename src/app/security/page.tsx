"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 p-[5px_14px_5px_6px] bg-[rgba(53,208,115,0.1)] border border-[rgba(53,208,115,0.2)] rounded-full text-[11px] text-[#35D073] tracking-[2px] uppercase font-medium mb-8">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 
            Built for Trust
          </div>
          <h1 className="font-serif text-[clamp(44px,5vw,72px)] font-bold leading-[1.05] tracking-[-1.5px] text-ivory mb-6">
            Your creative assets are <em className="italic text-gold">safe with us.</em>
          </h1>
          <p className="text-muted text-[17px] font-light max-w-[700px] mx-auto leading-relaxed">
            We understand that your work is your livelihood. That’s why we’ve built Delivami with bank-grade security and industry-leading infrastructure to ensure your files and payments are always protected.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Asset Protection */}
          <div className="bg-navy-mid border border-border-dim rounded-[32px] p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            </div>
            <h3 className="text-ivory font-serif text-[28px] font-bold mb-6">Asset Protection</h3>
            <ul className="space-y-6 text-muted font-light leading-relaxed">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Encrypted Storage:</strong> All files are stored using industry-standard AES-256 encryption at rest on Cloudflare R2 infrastructure.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Secure Video Delivery:</strong> Videos are streamed using Cloudflare Stream with signed URLs, preventing unauthorized downloads and sharing.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Access Control:</strong> Password protection, expiration dates, and one-time links give you total control over who sees your work.</span>
              </li>
            </ul>
          </div>

          {/* Payment Security */}
          <div className="bg-navy-mid border border-border-dim rounded-[32px] p-12 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
             </div>
            <h3 className="text-ivory font-serif text-[28px] font-bold mb-6">Payment Security</h3>
            <ul className="space-y-6 text-muted font-light leading-relaxed">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>PCI Compliance:</strong> All payments are processed via Paystack, ensuring PCI DSS Level 1 compliance for every transaction.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Secure Payouts:</strong> We use secure, verified payout channels to ensure your earnings reach your Bank or Mobile Money account safely.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Fraud Monitoring:</strong> Our system actively monitors for suspicious activities to protect both creators and their clients.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Infrastructure Footer */}
        <section className="text-center py-20 border-t border-border-dim">
           <p className="text-muted text-[14px] mb-8 uppercase tracking-[3px]">Powered by industry leaders</p>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 contrast-0 grayscale">
              <span className="font-bold text-[20px] text-ivory">CLOUDFLARE</span>
              <span className="font-bold text-[20px] text-ivory">PAYSTACK</span>
              <span className="font-bold text-[20px] text-ivory">PRISMA</span>
              <span className="font-bold text-[20px] text-ivory">NEXT.JS</span>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
