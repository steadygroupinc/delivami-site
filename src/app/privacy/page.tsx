"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";

export default function PrivacyPage() {
  const lastUpdated = "March 20, 2026";
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-[60px] max-w-[900px] mx-auto">
        <header className="mb-16">
          <h1 className="font-serif text-[48px] font-bold text-ivory mb-4 tracking-[-1px]">Privacy Policy</h1>
          <p className="text-muted text-[14px]">Last Updated: {lastUpdated}</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-12">
          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">1. Introduction</h2>
            <p className="text-muted leading-[1.8] font-light">
              Welcome to Delivami. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">2. The Data We Collect</h2>
            <p className="text-muted leading-[1.8] font-light">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted font-light">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">3. How Your Data is Used</h2>
            <p className="text-muted leading-[1.8] font-light">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted font-light">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-ivory text-[24px] font-semibold">4. Data Security</h2>
            <p className="text-muted leading-[1.8] font-light">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </div>

          <div className="space-y-4">
             <h2 className="text-ivory text-[24px] font-semibold">5. Your Legal Rights</h2>
             <p className="text-muted leading-[1.8] font-light">
               Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, and the right to withdraw consent.
             </p>
          </div>
        </section>

        <div className="mt-20 p-8 bg-navy-mid border border-border-dim rounded-2xl text-center">
           <p className="text-ivory font-medium mb-4">Have questions about your data?</p>
           <p className="text-muted text-[14px] mb-6">If you have any questions about this privacy policy, please contact us at:</p>
           <a href="mailto:privacy@delivami.com" className="text-gold font-semibold hover:underline">privacy@delivami.com</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
