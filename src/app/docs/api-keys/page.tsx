// src/app/docs/api-keys/page.tsx
import React from "react";
import { Key, ShieldAlert, Zap, RefreshCw } from "lucide-react";

export default function ApiKeysDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Developer Tool</div>
        <h1>Managing Keys</h1>
        <p className="lead">
          Secure your programmatic access with API Keys. Learn how to generate, 
          manage, and rotate your keys for maximum security.
        </p>
      </header>

      <section id="generating">
        <h2>Generating Keys</h2>
        <p>
          API keys are generated in the <strong>Settings &gt; Developer API</strong> section. 
          When you create a new key, it will be shown to you <strong>only once</strong>.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mb-8 flex gap-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
            <Key size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-2">Key Scoping</h4>
            <p className="text-xs text-muted leading-relaxed">
              Keys are currently scoped to your organization. Any action performed 
              with a key will be attributed to the organization owner.
            </p>
          </div>
        </div>
      </section>

      <section id="usage" className="mt-20">
        <h2>Using your Key</h2>
        <p>
          Pass your API key in the <code>x-api-key</code> request header.
        </p>
        <pre>
          <code>curl -H "x-api-key: dv_live_..." https://delivami.com/api/projects</code>
        </pre>
      </section>

      <section id="rotation" className="mt-20">
        <h2>Rotation & Revocation</h2>
        <p>
          If you suspect a key has been compromised, you should revoke it 
          immediately from the dashboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <ShieldAlert size={24} className="text-red-400 mb-4" />
            <h4 className="font-bold mb-2">Immediate Revocation</h4>
            <p className="text-[12px] text-muted leading-relaxed">
              Once revoked, any request using that key will immediately return 
              a <code>401 Unauthorized</code> error.
            </p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <RefreshCw size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Key Rotation</h4>
            <p className="text-[12px] text-muted leading-relaxed">
              We recommend rotating your keys every 90 days. Generate a new key, 
              update your systems, then revoke the old one.
            </p>
          </div>
        </div>
      </section>
      
      <section id="limits" className="mt-20 pt-12 border-t border-white/5">
        <h2>Key Limits</h2>
        <p>The number of active API keys depends on your subscription plan.</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Max Active Keys</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Free</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="font-bold">Creator</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="font-bold">Pro</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="font-bold">Studio</td>
                <td>Up to 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
