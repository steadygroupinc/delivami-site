// src/app/docs/client-experience/page.tsx
import React from "react";
import { MousePointer2, CheckCircle, CreditCard, Download } from "lucide-react";

export default function ClientExperiencePage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">The Work-to-Paid Flow</div>
        <h1>Client Experience</h1>
        <p className="lead">
          Understanding the journey your client takes from receiving a link to 
          downloading their final assets. Delivami is built to make you look professional.
        </p>
      </header>

      <section id="receiving">
        <h2 id="receiving-link">1. Receiving the Link</h2>
        <p>
          When you share a Delivami link, your client lands on a secure, branded 
          portal. If you've set a password, they will be prompted to enter it 
          immediately.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mb-8">
          <h4 className="flex items-center gap-2 mb-2"><MousePointer2 size={18} className="text-gold" /> First Impressions</h4>
          <p className="text-sm text-muted mb-0">
            The page features your brand logo and colors, ensuring the client 
            knows they are in the right place and that you are a professional.
          </p>
        </div>
      </section>

      <section id="review" className="mt-20">
        <h2 id="reviewing-work">2. Reviewing Work</h2>
        <p>
          Clients can view images, documents, and videos directly in their browser. 
          Our secure player ensures they can't download or scrap high-quality 
          video assets until they've settled their invoice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <CheckCircle size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Internal Approvals</h4>
            <p className="text-xs text-muted leading-relaxed">
              Clients can mark versions as "Approved" or request changes directly 
              through the link, centralizing feedback.
            </p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Download size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Locked Assets</h4>
            <p className="text-xs text-muted leading-relaxed">
              Downloads remain locked behind a paywall if "Pay-before-Download" 
              is enabled, ensuring you are paid before you release the assets.
            </p>
          </div>
        </div>
      </section>

      <section id="payment" className="mt-20">
        <h2 id="client-payment">3. Seamless Payment</h2>
        <p>
          Clients can pay their invoices directly from the project link. We 
          support international cards and local payment methods via our 
          global payment partners.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Supported Methods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">International</td>
                <td>Visa, Mastercard, American Express</td>
              </tr>
              <tr>
                <td className="font-bold">Local (Various)</td>
                <td>Bank Transfers, Digital Wallets, Mobile Money</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
