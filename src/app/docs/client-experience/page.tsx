// src/app/docs/client-experience/page.tsx
import React from "react";
import Link from "next/link";
import { 
  Eye, 
  MousePointer2, 
  ShieldCheck, 
  ArrowRight,
  Download,
  Smartphone,
  Laptop,
  CheckCircle2
} from "lucide-react";

export default function ClientExperienceDocsPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Client Experience</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Deliver your creative work through a secure portal. Enable 
          seamless reviews, approvals, and automated payment collection.
        </p>
      </header>

      <div className="space-y-12">
      <section id="access" className="mb-8">
        <h2 className="text-lg font-bold mb-3">1. Access & Security</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Clients access projects through a unique link. You can add 
          passcodes for high-priority deliveries to ensure restricted access.
        </p>
      </section>

      <section id="review" className="mb-8">
        <h2 className="text-lg font-bold mb-3">2. Review & Feedback</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          The portal provides high-fidelity previews for video, images, and 
          PDFs. Clients can leave timestamped feedback directly on the work.
        </p>
      </section>

      <section id="settlement" className="mb-0">
        <h2 className="text-lg font-bold mb-3">3. Approval & Settlement</h2>
        <p className="text-sm text-muted leading-relaxed m-0">
          Once approved, clients are prompted to settle the project invoice. 
          The download link is unlocked only after payment is verified.
        </p>
        <div className="border-l border-gold/20 pl-4 py-1 my-4">
          <p className="m-0 text-[11px] text-muted leading-relaxed">
            <span className="text-gold font-bold">Standard:</span> Pay-before-download is 
            enforced by default on all professional deliveries.
          </p>
        </div>
      </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Audit and track all delivery activity through secure <Link href="/docs/audit-logs" className="text-gold hover:underline">Audit Logs</Link>.
        </p>
      </footer>
    </div>
  );
}
