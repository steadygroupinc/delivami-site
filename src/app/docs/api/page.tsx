// src/app/docs/api/page.tsx
import React from "react";
import { Metadata } from "next";
import { 
  Terminal, 
  Cpu, 
  ArrowRight,
  Code2,
  ShieldCheck,
  Key
} from "lucide-react";

export const metadata: Metadata = {
  title: "REST API Documentation — Delivami",
  description: "Learn how to use the Delivami REST API to automate your project management and workflows.",
};

export default function ApiDocsPage() {
  return (
    <div className="api-docs max-w-5xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">API Reference</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Build integrations with the Delivami engine using standard RESTful 
          endpoints and JSON-encoded responses.
        </p>
      </header>

      <section id="auth" className="mb-12">
        <h2 className="m-0 text-xl mb-4" id="authentication">Authentication</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-sm font-light text-muted">
              Authenticate via API keys. Manage your keys in 
              <a href="/settings" className="text-gold hover:underline decoration-gold/30 underline-offset-4 font-medium ml-1">Settings</a>.
            </p>
            <div className="border-l border-gold/20 pl-4 py-1 my-4">
              <p className="m-0 text-[11px] text-muted leading-relaxed">
                Provide your API key via the <code className="text-gold">x-api-key</code> header 
                in every request.
              </p>
            </div>
          </div>

          <div className="premium-card bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-gold" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted">Header Example</span>
              </div>
            </div>
            <pre className="!bg-transparent !border-none !p-0 !m-0 !shadow-none">
              <code className="text-gold">x-api-key: dv_live_xxxxxxxxxxxxxxxx</code>
            </pre>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-12">
        <h2 className="m-0 text-xl mb-4" id="project-management">Projects</h2>
        <p className="text-sm font-light text-muted mb-8 leading-relaxed max-w-xl">
          Programmatically control your deliveries, invoices, and client portals. 
          Use these endpoints to initialize project containers and manage lifecycle states.
        </p>
        
        <div className="endpoint-block mb-10 border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden shadow-2xl">
          <div className="endpoint-header bg-white/[0.02] px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 font-bold rounded tracking-wider">GET</span>
              <code className="text-[11px] font-mono text-white/50">/api/projects</code>
            </div>
            <span className="text-[10px] text-muted font-medium uppercase tracking-widest opacity-50">List Projects</span>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="mt-0 text-[15px] font-bold mb-3">Fetch All Containers</h3>
              <p className="text-xs text-muted mb-6 leading-relaxed">Returns a paginated list of your project containers, including status and metadata.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[11px] font-mono text-gold">id</span>
                  <span className="text-[10px] text-muted italic">Unique string identifier</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[11px] font-mono text-gold">status</span>
                  <span className="text-[10px] text-muted italic">"pending" | "paid" | "delivered"</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-3 right-3 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/20" />
                <div className="w-2 h-2 rounded-full bg-green-400/20" />
              </div>
              <pre className="inline-block w-full bg-black/60 p-6 rounded-xl text-[11px] font-mono leading-relaxed border border-white/5">
                <code className="text-ivory/80">
{`curl -X GET "https://api.delivami.com/projects" \\
     -H "x-api-key: dv_live_xxxx" \\
     -H "Content-Type: application/json"`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="endpoint-block border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden shadow-2xl">
          <div className="endpoint-header bg-white/[0.02] px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 font-bold rounded tracking-wider">POST</span>
              <code className="text-[11px] font-mono text-white/50">/api/projects</code>
            </div>
            <span className="text-[10px] text-muted font-medium uppercase tracking-widest opacity-50">Create Project</span>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="mt-0 text-[15px] font-bold mb-3">Initialize Delivery</h3>
              <p className="text-xs text-muted mb-6 leading-relaxed">Provision a new secure project container for your client.</p>
              
              <div className="table-wrapper">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5"><th className="pb-3 text-[10px] text-muted font-bold uppercase tracking-wider">Field</th><th className="pb-3 text-[10px] text-muted font-bold uppercase tracking-wider">Type</th><th className="pb-3 text-[10px] text-muted font-bold uppercase tracking-wider">Note</th></tr>
                  </thead>
                  <tbody className="text-[11px]">
                    <tr className="border-b border-white/5"><td className="py-3 font-mono text-gold">title</td><td className="text-muted">string</td><td className="text-muted italic opacity-60">Required</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 font-mono text-gold">clientEmail</td><td className="text-muted">string</td><td className="text-muted italic opacity-60">Required</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 font-mono text-gold">pricePesewas</td><td className="text-muted">int</td><td className="text-muted italic opacity-60">Minor units</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 font-mono text-gold">category</td><td className="text-muted">string</td><td className="text-muted italic opacity-60">Optional</td></tr>
                    <tr><td className="py-3 font-mono text-gold">currency</td><td className="text-muted">string</td><td className="text-muted italic opacity-60">Default: GHS</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative">
              <pre className="bg-black/60 p-6 rounded-xl text-[11px] font-mono leading-relaxed border border-white/5 text-blue-300">
{`{
  "title": "Summer Campaign",
  "clientEmail": "marketing@nike.com",
  "pricePesewas": 125000,
  "category": "Photography",
  "currency": "GHS"
}`}
              </pre>
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="m-0 text-[10px] text-muted leading-relaxed italic">
                  Success returns <code className="text-gold">201 Created</code> with the 
                  newly generated <code className="text-white">deliverySlug</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="endpoints" className="mb-12">
        <h2 className="m-0 text-xl mb-4" id="endpoints-ref">Endpoints Reference</h2>
        <div className="space-y-4">
          <div className="p-6 border border-white/5 bg-white/[0.01] rounded-2xl flex items-center justify-between group hover:bg-white/[0.02] transition-all">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 font-bold rounded">GET</span>
                <code className="text-[11px] font-mono text-white">/api/projects/[id]</code>
              </div>
              <p className="text-xs text-muted m-0">Fetch project metadata and <span className="text-white">deliverySlug</span>.</p>
            </div>
            <ArrowRight size={14} className="text-muted opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Need support? Visit the <a href="https://support.delivami.com" className="text-gold hover:underline">Support Center</a> or 
          view all <a href="/docs/api-keys" className="text-gold hover:underline">API Key limits</a>.
        </p>
      </footer>
    </div>
  );
}
