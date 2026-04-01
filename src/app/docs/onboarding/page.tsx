// src/app/docs/onboarding/page.tsx
import React from "react";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="docs-page max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Onboarding</h1>
        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl">
          Quickly configure your workspace, invite your team, and start delivering 
          professional assets.
        </p>
      </header>

      <section className="mb-24">
        <div className="docs-stepper">
          <div className="docs-step-item">
            <div className="docs-step-number">1</div>
            <div>
              <h3 className="mt-0 text-xl font-bold">Workspace Setup</h3>
              <p className="text-sm text-muted font-light leading-relaxed mb-4">
                Set up your Studio name and timezone to ensure accurate project 
                timing and payout regionality.
              </p>
              <div className="border-l border-gold/20 pl-4 py-1 my-4">
                <p className="m-0 text-[11px] text-muted leading-relaxed">
                  Invite your team or accountant during this stage to ensure 
                  billing data is accurate from the start.
                </p>
              </div>
            </div>
          </div>

          <div className="docs-step-item">
            <div className="docs-step-number">2</div>
            <div>
              <h3 className="mt-0 text-xl font-bold">Project Settings</h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                Define your project categories to keep your workspace organized 
                and your invoicing consistent across all collaborations.
              </p>
            </div>
          </div>

          <div className="docs-step-item">
            <div className="docs-step-number">3</div>
            <div>
              <h3 className="mt-0 text-xl font-bold">Dashboard Overview</h3>
              <p className="text-sm text-muted font-light leading-relaxed mb-6">
                The Delivami interface focuses on active projects and pending payouts.
              </p>
              <div className="flex gap-8 border-t border-white/5 pt-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-gold/60 mb-1">Projects</div>
                  <p className="text-[10px] text-muted m-0">Live delivery status and link tracking.</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gold/60 mb-1">Settlements</div>
                  <p className="text-[10px] text-muted m-0">Real-time status of all client payments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-white/5">
        <p className="text-[11px] text-muted">
          Next steps: Configure your <Link href="/docs/branding" className="text-gold hover:underline">studio branding</Link> or 
          setup your <Link href="/docs/payments" className="text-gold hover:underline">payment methods</Link>.
        </p>
      </footer>
    </div>
  );
}
