"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";

export default function TermsPage() {
  const lastUpdated = "March 20, 2026";
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[900px] mx-auto">
        <header className="mb-16">
          <h1 className="font-serif text-[48px] font-bold text-ivory mb-4 tracking-[-1px]">Terms of Service</h1>
          <p className="text-muted text-[14px]">Last Updated: {lastUpdated}</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-12">
          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">1. Agreement to Terms</h2>
            <p className="text-muted leading-[1.8] font-light">
              By accessing or using Delivami, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">2. Use License</h2>
            <p className="text-muted leading-[1.8] font-light">
              Permission is granted to temporarily download one copy of the materials (information or software) on Delivami's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-decimal pl-6 space-y-3 text-muted font-light">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Delivami's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">3. Service Fees & Commission</h2>
            <p className="text-muted leading-[1.8] font-light">
              Delivami provides tools for creators to deliver work and collect payments. We may charge fees for the use of our services, including platform commissions on paid invoices. These fees are clearly stated in our pricing and may change with notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">4. Disclaimer</h2>
            <p className="text-muted leading-[1.8] font-light">
              The materials on Delivami's website are provided on an 'as is' basis. Delivami makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">5. Limitations of Liability</h2>
            <p className="text-muted leading-[1.8] font-light">
              In no event shall Delivami or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Delivami's website, even if Delivami or a Delivami authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>
        </section>

        <div className="mt-20 p-8 border-t border-border-dim">
           <p className="text-muted text-[14px]">If you have any questions about these Terms, please contact us at <a href="mailto:support@delivami.com" className="text-gold font-semibold hover:underline">support@delivami.com</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
