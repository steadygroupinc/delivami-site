// src/app/docs/branding/page.tsx
import React from "react";
import { Globe, Palette, Camera, Fingerprint, CheckCircle2 } from "lucide-react";

export default function BrandingDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="flex items-center gap-3 text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">
          <Fingerprint size={16} /> Identity & White-labeling
        </div>
        <h1>Branding & Domains</h1>
        <p className="lead">
          Make Delivami yours. Personalize every touchpoint your clients see 
          with your own logos, colors, and a custom domain.
        </p>
      </header>

      <section id="basics">
        <h2 id="brand-basics">Brand Basics</h2>
        <p>
          Your brand identity is applied to every project link, invoice, and 
          email notification sent from your organization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl">
            <Camera size={32} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Logo & Favicon</h4>
            <p className="text-sm text-muted">
              Upload your high-res logo to replace the Delivami branding on 
              client delivery pages.
            </p>
          </div>
          <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl">
            <Palette size={32} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Custom Colors</h4>
            <p className="text-sm text-muted">
              Set your primary brand color. We'll automatically generate 
              accessible shades for buttons, links, and accents.
            </p>
          </div>
        </div>
      </section>

      <section id="domains" className="mt-20">
        <h2 id="custom-domains">Custom Domains</h2>
        <p>
          On the <strong>Studio</strong> plan, you can host your projects on your own domain 
          (e.g., <code>deliveries.yourstudio.com</code>) for a completely 
          seamless white-label experience.
        </p>
        <div className="p-8 bg-gold/5 border border-gold/10 rounded-2xl">
          <h4 className="flex items-center gap-2 mb-4"><Globe size={18} className="text-gold" /> DNS Configuration</h4>
          <p className="text-sm text-muted mb-4">
            To set up a custom domain, you'll need to add a CNAME record to your 
            DNS provider pointing to <code>cname.delivami.com</code>.
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Hostname</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-xs">CNAME</td>
                  <td className="font-mono text-xs">deliveries</td>
                  <td className="font-mono text-xs">cname.delivami.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="experience" className="mt-20 pt-12 border-t border-white/5 text-center">
        <CheckCircle2 size={40} className="text-gold mx-auto mb-6" />
        <h3 className="mt-0">Strengthen your professionalism</h3>
        <p className="max-w-md mx-auto text-muted">
          A branded experience builds trust. Clients are 30% more likely to 
          approve work faster when delivered through a professional, branded portal.
        </p>
      </section>
    </div>
  );
}
