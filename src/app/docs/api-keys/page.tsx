// src/app/docs/api-keys/page.tsx
import React from "react";
import { Key, ShieldAlert, Zap, RefreshCw } from "lucide-react";

export default function ApiKeysDocsPage() {
  return (
    <div className="docs-page">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Managing Keys</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Secure your programmatic access with API Keys. Learn how to generate, 
          manage, and rotate your keys.
        </p>
      </header>

      <section id="generating">
        <h2>Setup</h2>
        <p>
          API keys are generated in <strong>Settings &gt; Developer API</strong>. 
          New keys are shown only once—save them securely.
        </p>
      </section>

      <section id="usage" className="mt-10">
        <h2>Authentication</h2>
        <p className="text-sm mb-4">
          Pass your key in the <code>x-api-key</code> header.
        </p>
        <pre className="!p-4 bg-black/40 text-[11px]">
          <code>curl -H "x-api-key: dv_live_..." https://api.delivami.com/v1/projects</code>
        </pre>
      </section>

      <section id="rotation" className="mt-10">
        <h2>Revocation</h2>
        <p className="text-sm mb-6">
          If a key is compromised, revoke it immediately from the dashboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
            <h4 className="font-bold text-sm mb-1 uppercase text-gold">Immediate</h4>
            <p className="text-[11px] text-muted leading-relaxed m-0">
              Revoked keys return <code>401 Unauthorized</code> instantly.
            </p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
            <h4 className="font-bold text-sm mb-1 uppercase text-gold">Rotation</h4>
            <p className="text-[11px] text-muted leading-relaxed m-0">
              Replace keys regularly to minimize security risks.
            </p>
          </div>
        </div>
      </section>
      
      <section id="limits" className="mt-10 pt-8 border-t border-white/5">
        <p className="text-xs text-muted mb-4">Key limits vary by subscription plan.</p>
        <div className="table-wrapper border-none !bg-white/[0.01]">
          <table className="!bg-transparent text-xs">
            <thead>
              <tr className="!bg-transparent border-b border-white/5">
                <th className="!bg-transparent">Plan</th>
                <th className="!bg-transparent">Max Active Keys</th>
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
                <td className="text-gold font-bold">Up to 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
