// src/app/docs/audit-logs/page.tsx
import React from "react";
import { Activity, ShieldCheck, Clock, FileText } from "lucide-react";

export default function AuditLogsDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Audit Logs</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Maintain full visibility over your creative pipeline. Delivami 
          automatically logs administrative interactions and client file access.
        </p>
        <div className="mt-6 flex items-start gap-3 p-4 bg-white/[0.02] border-l-2 border-white/10 rounded-r-lg">
          <Activity size={16} className="text-muted shrink-0 mt-0.5" />
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-ivory font-bold uppercase mr-2">Why Audit Logs?</span>
            Professional studios require an immutable record of asset access and 
            payout modifications. Audit logs provide the forensic evidence needed 
            to resolve disputes, verify client downloads, and audit team 
            permissions for SOC2 and internal compliance.
          </p>
        </div>
      </header>

      <div className="space-y-12">
      <section id="events" className="mb-10">
        <h2 className="text-lg font-bold mb-3">System Events</h2>
        <p className="text-sm text-muted leading-relaxed mb-6">
          The Audit Trail records administrative and client-side actions in real-time. 
          Monitor login attempts, project visits, and file previews.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">User Auth</div>
            <p className="m-0 text-xs text-muted leading-relaxed">Login attempts, 2FA triggers, and session initiations.</p>
          </div>
          <div className="p-5 border border-white/5 bg-white/[0.01]">
            <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Access Control</div>
            <p className="m-0 text-xs text-muted leading-relaxed">Client-side link visits, IP addresses, and previews.</p>
          </div>
        </div>
      </section>

      <section id="export" className="mb-0">
        <h2 className="text-lg font-bold mb-3">Exporting Logs</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Preserve your complete history of creative operations. Export audit 
          data as CSV or JSON for external compliance reporting.
        </p>
        <div className="border-l border-gold/20 pl-4 py-1 my-6">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold uppercase">Studio Tier:</span> Historical 
            log persistence (365 days) and CSV/JSON export tools are exclusive 
            to the <span className="text-white">Studio</span> plan.
          </p>
        </div>
      </section>
      </div>

    </div>
  );
}
