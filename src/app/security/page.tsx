"use client";

import Link from "next/link";
import "./security.css";

export default function SecurityPage() {
  return (
    <>
      <main className="min-h-screen pb-24 relative overflow-hidden">
        
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[rgba(212,175,55,0.03)] blur-[150px] pointer-events-none -z-10"></div>

        {/* ═══════ HERO SECTION ═══════ */}
        <section className="sec-hero">
          <div className="sec-hero-illustration">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
          </div>
          <h1 className="font-serif text-[clamp(44px,6vw,72px)] font-bold leading-[1.05] tracking-[-1.5px] text-ivory mb-6">
            Bank-grade security to control access to your <em className="italic text-gold">creative assets</em>
          </h1>
          <p className="text-muted text-[18px] font-light max-w-[600px] mx-auto leading-relaxed">
            Delivami lets you manage client access with precision. Assign passwords, set expirations, and control who can download assets across all your studios.
          </p>
          
          <div className="sec-trust-badges">
            <div className="sec-trust-badge">AES-256</div>
            <div className="sec-trust-badge" style={{ borderColor: 'rgba(53,208,115,0.3)', color: '#35D073' }}>PCI</div>
            <div className="sec-trust-badge">2FA</div>
            <div className="sec-trust-badge">GDPR</div>
          </div>
        </section>

        {/* ═══════ BLOCK 1: ASSET PROTECTION (LIGHT CONTAINER) ═══════ */}
        <section className="px-4">
          <div className="sec-block-light">
            <div className="sec-block-header">
              <span className="sec-block-subtitle">Asset Control</span>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold leading-tight text-ivory">
                Define and enforce what clients can view and download
              </h2>
            </div>

            <div className="sec-feature-grid">
              
              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                </div>
                <h3 className="sec-feature-title">Contextual Sharing</h3>
                <p className="sec-feature-desc">Generate one-time secure links or specific passwords for individual reviewers. Revoke access instantly if a project scope changes.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="sec-feature-title">Encrypted Storage</h3>
                <p className="sec-feature-desc">All unedited source files and final renders are stored using AES-256 encryption at rest, ensuring your raw IP is untouchable.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                </div>
                <h3 className="sec-feature-title">Signed Video URLs</h3>
                <p className="sec-feature-desc">Video assets are streamed directly through Cloudflare via signed cryptographic URLs, mathematically preventing unauthorized downloads.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="sec-feature-title">Expiration Controls</h3>
                <p className="sec-feature-desc">Ensure clients don't access proofs three months after a project has ended. Set hard cut-off dates for all shared delivery boards.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════ BLOCK 2: PAYMENT & AUTHENTICATION (DARK CONTAINER) ═══════ */}
        <section className="px-4">
          <div className="sec-block-dark">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,208,115,0.05),transparent_40%)] pointer-events-none"></div>
            
            <div className="sec-block-header">
              <span className="sec-block-subtitle" style={{ color: 'var(--green)' }}>Financial Governance</span>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold leading-tight text-ivory">
                Scale securely with financial infrastructure built for agencies
              </h2>
            </div>

            <div className="sec-feature-grid">

              <div className="sec-feature-item">
                <div className="sec-feature-icon green">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="sec-feature-title">PCI Compliance by Design</h3>
                <p className="sec-feature-desc">Integrated securely with Paystack. All client card metadata is tokenized and stored remotely meeting strict PCI-DSS Level 1 specifications.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon green">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="sec-feature-title">Dispute & Fraud Holds</h3>
                <p className="sec-feature-desc">Incoming transactions are dynamically checked against continental fraud matrices. Suspicious invoices are held automatically.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="sec-feature-title">WebAuthn Passkeys</h3>
                <p className="sec-feature-desc">Eliminate password phishing entirely for your studio team by linking authentication directly to biometric device passkeys.</p>
              </div>

              <div className="sec-feature-item">
                <div className="sec-feature-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <h3 className="sec-feature-title">2FA Studio Lockdowns</h3>
                <p className="sec-feature-desc">Mandate Time-based One Time Passwords (TOTP) constraints for any client attempting to access a high-value confidential workspace.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════ FAQ SECTION ═══════ */}
        <section className="sec-faq-overlay">
          <div>
            <h2 className="font-serif text-[32px] font-bold text-ivory mb-4">Frequently Asked<br/>Questions</h2>
            <p className="text-muted text-[15px] max-w-[250px]">
              Find the answers to common questions about how we secure your data.
            </p>
          </div>
          <div className="sec-faq-list">
            <div className="sec-faq-item">
              <span>Where are my high-res assets stored?</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
            </div>
            <div className="sec-faq-item">
              <span>Can I restrict access to specific clients?</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
            </div>
            <div className="sec-faq-item">
              <span>Are your payments compliant with security standards?</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
            </div>
            <div className="sec-faq-item">
              <span>Do you back up the version history?</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
            </div>
          </div>
        </section>

        {/* ═══════ CTA BLOCK ═══════ */}
        <section className="px-4">
          <div className="sec-cta-block flex flex-col items-center">
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-bold text-ivory mb-6 text-center max-w-[600px] leading-tight">
              Ready to build the perfect <br/><em className="italic text-gold">backoffice for your creative operations?</em>
            </h2>
            <p className="text-muted text-[16px] max-w-[450px] text-center mb-8">
              Join top studios across the continent who naturally embed trust into their delivery pipeline with us.
            </p>
            <Link href="/signup" className="btn-cl-glow" style={{ background: '#D4AF37', color: '#06101D', border: 'none', boxShadow: 'none' }}>
              Create your Workspace
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
