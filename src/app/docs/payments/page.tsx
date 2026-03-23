// src/app/docs/payments/page.tsx
import React from "react";
import { 
  CreditCard, 
  Wallet, 
  Landmark, 
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function PaymentsDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Core Feature</div>
        <h1>Payments & Invoices</h1>
        <p className="lead">
          Delivami simplifies your billing. Send professional invoices and 
          get paid via cards, bank transfers, and mobile money without any hidden fees.
        </p>
      </header>

      <section id="invoicing">
        <h2 id="billing-invoices">Creating Invoices</h2>
        <p>
          Invoices are attached directly to projects. You can create a single invoice 
          for the full amount or split the project into multiple milestones.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gold/10 rounded-lg text-gold"><TrendingUp size={20} /></div>
            <h4 className="m-0 text-lg">Smart Fee Calculation</h4>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            On our <strong>Free</strong> plan, a small platform fee (2.5%) is applied to paid invoices. 
            All other plans (<strong>Creator, Pro, and Studio</strong>) enjoy 0% platform fees.
            You can also choose to pass the transaction fees to your client during invoice creation.
          </p>
        </div>
      </section>

      <section id="checkout" className="mt-20">
        <h2 id="checkout-experience">The Checkout Experience</h2>
        <p>
          When your client clicks "Pay Now," they are presented with a secure, 
          branded checkout portal linked to our global payment infrastructure.
        </p>
        <div className="endpoint-block">
          <div className="endpoint-header">
            <CreditCard size={16} className="text-gold" />
            <div className="font-bold text-sm tracking-widest uppercase">Supported Methods</div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <Wallet size={20} className="text-gold mt-1" />
                <div>
                  <h5 className="font-bold mb-1">Local Wallets</h5>
                  <p className="text-xs text-muted">Mobile money and digital wallets in supported markets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Landmark size={20} className="text-gold mt-1" />
                <div>
                  <h5 className="font-bold mb-1">Bank Transfers</h5>
                  <p className="text-xs text-muted">Direct domestic and international bank transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="payouts" className="mt-20">
        <h2 id="payout-settlement">Payouts & Settlements</h2>
        <p>
          We know you need your money fast. Funds are settled to your linked 
          bank account or mobile money wallet on a T+1 schedule (the next business day).
        </p>
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex gap-2 items-center text-gold font-bold text-xs uppercase mb-4 tracking-widest">
            <ShieldCheck size={14} /> Settlement Security
          </div>
          <p className="text-sm text-muted mb-0 leading-relaxed">
            Delivami uses fully-regulated, PCI-compliant infrastructure to handle all financial 
            movements. We never store your full bank details on our servers, 
            ensuring your financial security.
          </p>
        </div>
      </section>

      <section id="kyc" className="mt-20">
        <h2>Verification & KYC</h2>
        <p>
          To comply with global financial regulations and ensure secure payouts, 
          all creators must complete a Know Your Customer (KYC) verification. 
          The level of verification determines your payout limits.
        </p>
        
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Requirement</th>
                <th>What you do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Basic</td>
                <td>Profile & Phone</td>
                <td>Verify your phone number via OTP and complete your profile name.</td>
              </tr>
              <tr>
                <td className="font-bold">Personal</td>
                <td>Identity ID</td>
                <td>For <strong>Individual Freelancers</strong>. Upload a government ID (Passport, National ID).</td>
              </tr>
              <tr>
                <td className="font-bold">Studio</td>
                <td>Business Docs</td>
                <td>For <strong>Registered Entities</strong>. Upload your registration certificate.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-6 italic">
          <strong>Note for Freelancers:</strong> If you operate as an individual, you do 
          not need business registration documents. Simply complete the "Personal" 
          verification tier to unlock professional payout limits.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mt-12">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-gold" /> Technical Implementation Note
          </h4>
          <p className="text-xs text-muted leading-relaxed mb-4">
            KYC data is handled with enterprise-grade security. Document images are stored 
            in encrypted storage buckets (AWS S3 or Cloudflare R2). Verification is 
            performed asynchronously via our payment partner's <strong>Identity API</strong>.
          </p>
          <ul className="text-[10px] text-muted space-y-2 list-none p-0">
            <li className="flex gap-2"><strong>Storage:</strong> Multi-region secure silos with restricted access.</li>
            <li className="flex gap-2"><strong>Verification:</strong> Asynchronous via Paystack Webhooks.</li>
            <li className="flex gap-2"><strong>Status:</strong> Tracked in real-time within the User dashboard.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
