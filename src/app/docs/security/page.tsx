// src/app/docs/security/page.tsx
import React from "react";
import { ShieldCheck, Lock, Globe, Server } from "lucide-react";

export default function SecurityDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Trust & Safety</div>
        <h1>Security & Infrastructure</h1>
        <p className="lead">
          Your creative work is your most valuable asset. We use 
          industry-standard encryption and secure infrastructure to ensure your 
          files and financial data stay protected.
        </p>
      </header>

      <section id="data-protection">
        <h2>Data Protection</h2>
        <p>
          All files uploaded to Delivami are encrypted at rest using AES-256 
          encryption. Our storage layer is built on top of world-class 
          cloud infrastructure providers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl">
            <Lock size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Encryption at Rest</h4>
            <p className="text-sm text-muted leading-relaxed">
              Every asset you deliver is encrypted before it's saved to our 
              storage buckets, ensuring that only authorized links can decrypt them.
            </p>
          </div>
          <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl">
            <Globe size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Encryption in Transit</h4>
            <p className="text-sm text-muted leading-relaxed">
              All data transmitted between your browser and our servers is 
              protected by 256-bit SSL/TLS encryption.
            </p>
          </div>
        </div>
      </section>

      <section id="infrastructure" className="mt-20">
        <h2>Infrastructure</h2>
        <p>
          Delivami is hosted on highly available, redundant server clusters 
          designed to provide 99.9% uptime for your professional deliveries.
        </p>
        <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl mt-8">
          <div className="flex items-center gap-4 mb-6">
            <Server size={20} className="text-gold" />
            <h4 className="m-0 text-lg text-ivory">Global CDN</h4>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            We use a Global Content Delivery Network (CDN) to ensure that your 
            clients can download large assets at high speeds, regardless of 
            where they are in the world.
          </p>
        </div>
      </section>

      <section id="compliance" className="mt-20">
        <h2>Payment Security</h2>
        <p>
          We do not store sensitive payment information on our servers. All 
          financial transactions are handled by our PCI-DSS Level 1 compliant 
          payment partners.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Payments</td>
                <td>PCI-DSS Level 1 Compliant</td>
              </tr>
              <tr>
                <td className="font-bold">Cloud Data</td>
                <td>SOC2 Type II / ISO 27001</td>
              </tr>
              <tr>
                <td className="font-bold">Authentication</td>
                <td>Argon2 Password Hashing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
