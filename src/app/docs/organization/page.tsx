// src/app/docs/organization/page.tsx
import React from "react";
import { Search, FolderPlus, Layers, Zap } from "lucide-react";

export default function OrganizationDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Organization & Search</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          High-Velocity Asset Management. Navigate complex Studio workspaces 
          with unified discovery tools and batch-organization workflows.
        </p>
      </header>

      <div className="space-y-12">
        <section id="search" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Unified Global Search</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Locate any project, invoice, or client record instantly with our 
            cross-entity engine.
          </p>
          <div className="table-wrapper border-none !bg-white/[0.01]">
            <table className="!bg-transparent text-xs">
              <thead>
                <tr className="!bg-transparent border-b border-white/5">
                  <th className="!bg-transparent py-2">Category</th>
                  <th className="!bg-transparent py-2">Searchable Attributes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Projects</td><td>Title, Client Email, Company Name</td></tr>
                <tr><td>Invoices</td><td>Invoice #, Project Association</td></tr>
                <tr><td>Clients</td><td>Email, Phone, Business Identity</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="folders" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Asset Hierarchy</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami uses a nested folder structure to segregate deliverables 
            within a single project environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <FolderPlus size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Quick-Add Workflow</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Studio users can instantly create sub-folders for their <span className="text-white">Most Recent Project</span> directly 
                from the sidebar search bar.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Slotted Deliveries</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Every folder generates a unique 10-character <span className="text-white">Delivery Slug</span> for isolated 
                client access to specific asset batches.
              </p>
            </div>
          </div>
        </section>

        <section id="shortcuts" className="mb-0">
          <h2 className="text-lg font-bold mb-3">Studio Productivity</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Accelerate your delivery cycle with automated metadata inheritance.
          </p>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Contextual Memory</span>
            </div>
            <p className="m-0 text-xs text-muted leading-relaxed">
              Folders automatically inherit client identities and branding 
              profiles from their parent projects, ensuring 100% brand consistency 
              without manual entry.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Optimized for high-density workspaces. Use <span className="font-mono text-gold">CMD+K</span> to trigger search.
        </p>
      </footer>
    </div>
  );
}
