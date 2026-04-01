// src/app/docs/collaboration/page.tsx
import React from "react";
import { MessageSquare, CheckCircle2, RotateCcw, UserPlus } from "lucide-react";

export default function CollaborationDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Client Collaboration</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Refine with precision. Learn how to manage client approvals, 
          revision requests, and threaded feedback inside your project links.
        </p>
      </header>

      <div className="space-y-12">
        <section id="approvals" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Approval Workflows</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            A specialized portal for your clients to sign-off on creative work 
            or request specific changes without messy email chains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Formal Approval</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Triggers a "PROJECT_APPROVED" status and immediate WhatsApp 
                notification to the creative team.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <RotateCcw size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Revision Cycle</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Resets the project state to REVISION. Creative is notified 
                along with any optional client notes.
              </p>
            </div>
          </div>
        </section>

        <section id="feedback" className="mb-10">
          <h2 className="text-lg font-bold mb-3">Contextual Feedback</h2>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Delivami supports localized comments within specific asset folders 
            to ensure that feedback is always context-aware.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Threaded Comments</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Allow clients to reply directly to specific files or folders. 
                Notifications are sent instantly upon posting.
              </p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <UserPlus size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Organization Sharing</span>
              </div>
              <p className="m-0 text-xs text-muted leading-relaxed">
                Studio users can collaborate internally on client feedback 
                before responding officially.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Collaborative features vary by plan. View <a href="/docs/payments#trust-tiers" className="text-gold hover:underline">Plan Limits</a>.
        </p>
      </footer>
    </div>
  );
}
