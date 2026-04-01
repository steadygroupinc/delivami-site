"use client";

import Link from "next/link";
import "./case-studies.css";

export default function CaseStudiesPage() {
  return (
    <>      <div className="cs-shell">
        {/* HERO */}
        <div className="hero">
          <div className="hero-bg"></div>
          <div className="hero-grid"></div>
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Case Studies &amp; Solutions
              </div>
              <h1 className="hero-h1">Built for the most<br /><em>demanding creatives.</em></h1>
              <p className="hero-lead">Delivami isn&apos;t a file host. It&apos;s a professional edge. See how creators, studios and agencies across Africa are redefining what it means to deliver work.</p>
              <button className="btn-p">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                Browse all stories
              </button>
            </div>

            {/* Quick-nav cards */}
            <div className="hero-cards">
              <Link href="#solopreneurs" className="hero-card" style={{ borderColor: 'rgba(212,175,55,0.18)' }}>
                <div className="hc-icon" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className="hc-label">Solopreneurs</div>
                  <div className="hc-sub">Independent creatives going professional</div>
                </div>
                <div className="hc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
              <Link href="#studios" className="hero-card">
                <div className="hc-icon" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <div className="hc-label">Creative Studios</div>
                  <div className="hc-sub">Teams collaborating at scale</div>
                </div>
                <div className="hc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
              <Link href="#agencies" className="hero-card">
                <div className="hc-icon" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                  <div className="hc-label">Full Agencies</div>
                  <div className="hc-sub">Enterprise-grade control for studios</div>
                </div>
                <div className="hc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
              <Link href="#roles" className="hero-card">
                <div className="hc-icon" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                </div>
                <div>
                  <div className="hc-label">By Professional Role</div>
                  <div className="hc-sub">Video, photography, design, motion</div>
                </div>
                <div className="hc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="wrap">
          <div className="stat-strip">
            <div className="stat-item">
              <div className="si-val" style={{ color: '#D4AF37' }}>73%</div>
              <div className="si-label">of African freelancers have experienced at least one unpaid invoice</div>
            </div>
            <div className="stat-item">
              <div className="si-val" style={{ color: '#35D073' }}>36h</div>
              <div className="si-label">average time to payment for Delivami users after sending a delivery link</div>
            </div>
            <div className="stat-item">
              <div className="si-val" style={{ color: '#5BA4F5' }}>60%</div>
              <div className="si-label">reduction in revision rounds reported by studios using timestamped comments</div>
            </div>
            <div className="stat-item">
              <div className="si-val" style={{ color: '#A78BFA' }}>0</div>
              <div className="si-label">disputed approvals for any creator using Delivami&apos;s locked record system</div>
            </div>
          </div>
        </div>

        {/* FEATURED CASE STUDY */}
        <div className="wrap" style={{ paddingBottom: '20px' }}>
          <div className="s-eyebrow">Featured story</div>
          <div className="featured-case">
            <div className="fc-left">
              <div>
                <div className="fc-kente-bar"></div>
                <div className="fc-type-badge" style={{ background: 'rgba(212,175,55,0.08)', borderColor: 'rgba(212,175,55,0.25)', color: '#D4AF37' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Solopreneur &nbsp;&middot;&nbsp; Video Production &nbsp;&middot;&nbsp; Lagos
                </div>
                <h2 className="fc-headline">From six weeks of chasing payments to thirty-six hours — without a single follow-up call.</h2>
                <p className="fc-body">Tunde Okonkwo had been freelancing in Lagos for four years. His work was exceptional. His payment cycle was not. When a brand film client disputed an approval that had happened over WhatsApp, he lost three weeks of revenue re-doing work he&apos;d already completed. Delivami changed the equation entirely.</p>
              </div>
              <div>
                <div className="fc-person">
                  <div className="fc-av" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.28)', color: '#D4AF37' }}>T</div>
                  <div>
                    <div className="fc-pname">Tunde Okonkwo</div>
                    <div className="fc-prole">Motion Designer &middot; Lagos, Nigeria &middot; 4 years freelance</div>
                  </div>
                </div>
                <div style={{ marginTop: '22px' }}>
                  <button className="btn-read">
                    Read full story
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="fc-right">
              <div className="fc-metric-label">Impact at a glance</div>
              <div className="fc-metric-row">
                <div className="fc-metric">
                  <div className="fm-val" style={{ color: '#35D073' }}>36h</div>
                  <div className="fm-label">Time to payment</div>
                </div>
                <div className="fc-metric">
                  <div className="fm-val" style={{ color: '#D4AF37' }}>0</div>
                  <div className="fm-label">Disputed approvals</div>
                </div>
                <div className="fc-metric">
                  <div className="fm-val" style={{ color: '#5BA4F5' }}>11</div>
                  <div className="fm-label">Projects delivered</div>
                </div>
              </div>
              <div className="fc-quote">
                <p className="fc-quote-text">&quot;The timestamp changed everything. My client could not argue with a locked record. I got paid the same evening.&quot;</p>
                <div className="fc-quote-attr">— Tunde O. &nbsp;&middot;&nbsp; Motion Designer, Lagos</div>
              </div>
              <div style={{ marginTop: '16px', padding: '16px 18px', borderRadius: '12px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.068)' }}>
                <div className="fc-metric-label" style={{ marginBottom: '10px' }}>The situation before</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '12px', color: '#5E7080' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                    Files delivered over WhatsApp
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '12px', color: '#5E7080' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                    No approval record — only chat messages
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '12px', color: '#5E7080' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                    6-week payment cycle, manual follow-up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MORE CASE STUDIES */}
        <div className="wrap" style={{ paddingBottom: '80px' }}>
          <div className="s-eyebrow" style={{ marginTop: 0 }}>More creator stories</div>
          <h2 className="s-h2" style={{ marginBottom: '8px' }}>From every corner<br />of <em>the continent.</em></h2>
          <p className="s-p" style={{ maxWidth: '520px', marginBottom: '36px' }}>Real workflows. Real numbers. Real creatives who stopped sending work over WhatsApp.</p>

          <div className="cs-grid">
            {/* Card 1 */}
            <Link className="cs-card" href="/case-studies/photographers">
              <div className="cs-card-accent" style={{ background: 'linear-gradient(90deg, #35D073, rgba(53,208,115,0.4))' }}></div>
              <div className="cs-card-top">
                <div className="cs-type" style={{ background: 'rgba(53,208,115,0.07)', borderColor: 'rgba(53,208,115,0.2)', color: '#35D073' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  Photography
                </div>
                <div className="cs-title">How Aisha halved her approval time with one branded link</div>
                <p className="cs-excerpt">Nairobi-based photographer Aisha Kamau was spending more time managing client feedback than shooting. After switching to Delivami&apos;s delivery page, her clients paid via M-Pesa within hours, not weeks.</p>
                <div className="cs-person-row">
                  <div className="cs-pav" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.25)', color: '#35D073' }}>A</div>
                  <div>
                    <div className="cs-pname">Aisha Kamau</div>
                    <div className="cs-ploc">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-card-bottom">
                <div className="cs-metric-pair">
                  <div className="cs-metric">
                    <div className="cs-mval" style={{ color: '#35D073' }}>2x</div>
                    <div className="cs-mlabel">Faster payment</div>
                  </div>
                  <div className="cs-metric">
                    <div className="cs-mval">18</div>
                    <div className="cs-mlabel">Projects/month</div>
                  </div>
                </div>
                <div className="cs-read-link">
                  Read story
                  <svg className="cs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link className="cs-card" href="/case-studies/video-editors">
              <div className="cs-card-accent" style={{ background: 'linear-gradient(90deg, #5BA4F5, rgba(91,164,245,0.4))' }}></div>
              <div className="cs-card-top">
                <div className="cs-type" style={{ background: 'rgba(91,164,245,0.07)', borderColor: 'rgba(91,164,245,0.2)', color: '#5BA4F5' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                  Video Production
                </div>
                <div className="cs-title">A studio in Dakar that eliminated revision disputes entirely</div>
                <p className="cs-excerpt">Two-person creative studio in Dakar managing five concurrent clients. Version history and timestamped comments cut their revision rounds from four per project to one-point-two on average.</p>
                <div className="cs-person-row">
                  <div className="cs-pav" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.25)', color: '#5BA4F5' }}>L</div>
                  <div>
                    <div className="cs-pname">L&eacute;a &amp; Mamadou</div>
                    <div className="cs-ploc">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Dakar, Senegal
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-card-bottom">
                <div className="cs-metric-pair">
                  <div className="cs-metric">
                    <div className="cs-mval" style={{ color: '#5BA4F5' }}>1.2</div>
                    <div className="cs-mlabel">Avg revisions</div>
                  </div>
                </div>
                <div className="cs-read-link">
                  Read story
                  <svg className="cs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link className="cs-card" href="/case-studies/designers">
              <div className="cs-card-accent" style={{ background: 'linear-gradient(90deg, #A78BFA, rgba(167,139,250,0.4))' }}></div>
              <div className="cs-card-top">
                <div className="cs-type" style={{ background: 'rgba(167,139,250,0.07)', borderColor: 'rgba(167,139,250,0.2)', color: '#A78BFA' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  Design &amp; UI/UX
                </div>
                <div className="cs-title">Brand designer in Johannesburg closes deals 40% faster with a showcase page</div>
                <p className="cs-excerpt">Sipho Ndlovu&apos;s pitch meetings used to start with email attachments that clients couldn&apos;t open. His Delivami showcase page replaced the PDF deck — and converted three out of four new inquiries.</p>
                <div className="cs-person-row">
                  <div className="cs-pav" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.25)', color: '#A78BFA' }}>S</div>
                  <div>
                    <div className="cs-pname">Sipho Ndlovu</div>
                    <div className="cs-ploc">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Johannesburg, South Africa
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-card-bottom">
                <div className="cs-metric-pair">
                  <div className="cs-metric">
                    <div className="cs-mval" style={{ color: '#A78BFA' }}>40%</div>
                    <div className="cs-mlabel">Faster closes</div>
                  </div>
                </div>
                <div className="cs-read-link">
                  Read story
                  <svg className="cs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link className="cs-card" href="/case-studies/motion-graphics">
              <div className="cs-card-accent" style={{ background: 'linear-gradient(90deg, #FBBF24, rgba(251,191,36,0.4))' }}></div>
              <div className="cs-card-top">
                <div className="cs-type" style={{ background: 'rgba(251,191,36,0.07)', borderColor: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Motion Graphics
                </div>
                <div className="cs-title">How a Nairobi motion designer went from part-time to full-time in ninety days</div>
                <p className="cs-excerpt">Daniel Mwangi was freelancing evenings while holding a day job, losing projects because his follow-up was too slow. Delivami&apos;s automated invoice reminders and instant approval links freed up six hours a week.</p>
                <div className="cs-person-row">
                  <div className="cs-pav" style={{ background: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.25)', color: '#FBBF24' }}>D</div>
                  <div>
                    <div className="cs-pname">Daniel Mwangi</div>
                    <div className="cs-ploc">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-card-bottom">
                <div className="cs-metric-pair">
                  <div className="cs-metric">
                    <div className="cs-mval" style={{ color: '#FBBF24' }}>6h</div>
                    <div className="cs-mlabel">Saved per week</div>
                  </div>
                </div>
                <div className="cs-read-link">
                  Read story
                  <svg className="cs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>

            {/* Card 5 */}
            <Link className="cs-card" href="/case-studies/studios">
              <div className="cs-card-accent" style={{ background: 'linear-gradient(90deg, #F87171, rgba(248,113,113,0.4))' }}></div>
              <div className="cs-card-top">
                <div className="cs-type" style={{ background: 'rgba(248,113,113,0.07)', borderColor: 'rgba(248,113,113,0.2)', color: '#F87171' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Creative Studio
                </div>
                <div className="cs-title">How a Dakar-based studio scaled to five constant clients without losing track of a single revision</div>
                <p className="cs-excerpt">For two to five person creative teams, disorganized feedback kills margins. See how this video production studio uses Delivami&apos;s shared workspaces and locked versioning to eliminate review disputes.</p>
                <div className="cs-person-row">
                  <div className="cs-pav" style={{ background: 'rgba(248,113,113,0.1)', borderColor: 'rgba(248,113,113,0.25)', color: '#F87171' }}>LM</div>
                  <div>
                    <div className="cs-pname">Léa & Mamadou</div>
                    <div className="cs-ploc">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Dakar, Senegal
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-card-bottom">
                <div className="cs-metric-pair">
                  <div className="cs-metric">
                    <div className="cs-mval" style={{ color: '#F87171' }}>1.2</div>
                    <div className="cs-mlabel">Avg revisions</div>
                  </div>
                </div>
                <div className="cs-read-link">
                  Read story
                  <svg className="cs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>

            {/* Card 6 — coming soon teaser */}
            <div className="cs-card" style={{ cursor: 'default', opacity: '.55', pointerEvents: 'none' }}>
              <div className="cs-card-accent" style={{ background: 'rgba(255,255,255,0.068)' }}></div>
              <div className="cs-card-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '220px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1.5px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E7080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#5E7080', marginBottom: '4px' }}>More stories coming</div>
                <div style={{ fontSize: '12px', color: '#5E7080', opacity: '.7' }}>New case studies added monthly</div>
              </div>
              <div className="cs-card-bottom" style={{ justifyContent: 'center' }}>
                <div style={{ fontSize: '11px', color: '#5E7080' }}>Submit your story</div>
              </div>
            </div>
          </div>
        </div>

        {/* BY PROFESSIONAL ROLE */}
        <div className="role-section" id="roles">
          <div className="wrap">
            <div className="s-eyebrow">By professional role</div>
            <h2 className="s-h2">Specific workflows for<br />specific <em>disciplines.</em></h2>
            <p className="s-p" style={{ maxWidth: '500px' }}>Different creative roles have different friction points. Each solution page is built around a specific workflow.</p>

            <div className="role-grid">
              <Link className="role-card" href="/case-studies/video-editors" style={{ '--rc-accent': '#5BA4F5' } as any}>
                <div className="rc-icon" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.25)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                </div>
                <div className="rc-title">Video Production</div>
                <p className="rc-desc">Frame-accurate reviews, 4K streaming, version control. Approval times cut by 60% with timestamped comments directly on the timeline.</p>
                <div className="rc-link" style={{ color: '#5BA4F5' }}>
                  See how it works
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>

              <Link className="role-card" href="/case-studies/photographers" style={{ '--rc-accent': '#35D073' } as any}>
                <div className="rc-icon" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.25)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
                <div className="rc-title">Photography</div>
                <p className="rc-desc">Secure galleries and pay-to-unlock features. Photographers get paid 3x faster with instant digital delivery and per-image download controls.</p>
                <div className="rc-link" style={{ color: '#35D073' }}>
                  See how it works
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>

              <Link className="role-card" href="/case-studies/designers" style={{ '--rc-accent': '#A78BFA' } as any}>
                <div className="rc-icon" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.25)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div className="rc-title">Design &amp; UI/UX</div>
                <p className="rc-desc">White-labelled prototypes and brand guides delivered with clarity. Designers keep their brand front and centre — not a file-sharing platform.</p>
                <div className="rc-link" style={{ color: '#A78BFA' }}>
                  See how it works
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>

              <Link className="role-card" href="/case-studies/motion-graphics" style={{ '--rc-accent': '#FBBF24' } as any}>
                <div className="rc-icon" style={{ background: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.25)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div className="rc-title">Motion Graphics</div>
                <p className="rc-desc">Loop previews, composition reviews and asset handoffs in a single link. Clients review animations without downloading a single file.</p>
                <div className="rc-link" style={{ color: '#FBBF24' }}>
                  See how it works
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* BY TEAM SCALE */}
        <div className="scale-section" id="solopreneurs">
          <div className="wrap">
            <div className="s-eyebrow">By team scale</div>
            <h2 className="s-h2">One platform, three<br />stages of <em>creative growth.</em></h2>
            <p className="s-p" style={{ maxWidth: '520px' }}>Whether you&apos;re a single freelancer or a five-person studio, the workflow is built around where you actually are.</p>

            <div className="scale-grid">
              {/* Solopreneurs */}
              <Link className="scale-card" href="/case-studies/solopreneurs" id="solopreneurs-card">
                <div className="sc-num">01</div>
                <div className="sc-icon" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="sc-title">Solopreneurs</div>
                <div className="sc-sub">The independent creative</div>
                <p className="sc-desc">Replace messy storage links and WhatsApp threads with a branded storefront that builds instant trust with high-end clients and closes deals faster.</p>
                <div className="sc-features">
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Branded delivery page with your logo and colours
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Timestamped approvals — irrefutable record
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    MoMo and bank payments, 24–48h
                  </div>
                </div>
                <div className="sc-cta">
                  Read solopreneur stories
                  <svg className="sc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>

              {/* Creative Studios */}
              <Link className="scale-card" href="#" id="studios" style={{ background: 'rgba(91,164,245,0.02)', borderRightColor: 'rgba(255,255,255,0.068)' }}>
                <div className="sc-num">02</div>
                <div className="sc-icon" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="sc-title">Creative Studios</div>
                <div className="sc-sub">Two to five person teams</div>
                <p className="sc-desc">Multi-user workspaces and shared client libraries designed for teams that need to deliver high-volume projects without the chaos of email threads and shared drives.</p>
                <div className="sc-features">
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(91,164,245,0.1)', border: '1px solid rgba(91,164,245,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Shared project workspace — no more version confusion
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(91,164,245,0.1)', border: '1px solid rgba(91,164,245,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Version history with locked previous versions
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(91,164,245,0.1)', border: '1px solid rgba(91,164,245,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Analytics showing how clients engage with deliveries
                  </div>
                </div>
                <div className="sc-cta" style={{ color: '#5BA4F5' }}>
                  Read studio stories
                  <svg className="sc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>

              {/* Agencies */}
              <Link className="scale-card" href="#" id="agencies">
                <div className="sc-num">03</div>
                <div className="sc-icon" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div className="sc-title">Full Agencies</div>
                <div className="sc-sub">Studio-scale operations</div>
                <p className="sc-desc">Encrypted delivery tunnels and advanced audit logs for agencies handling sensitive assets for global brands. White-label everything — no Delivami branding anywhere a client sees.</p>
                <div className="sc-features">
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Full white-label — completely invisible to clients
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Advanced audit logs for every action
                  </div>
                  <div className="sc-feat">
                    <div className="sc-feat-ic" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    API access and custom integrations
                  </div>
                </div>
                <div className="sc-cta" style={{ color: '#A78BFA' }}>
                  Read agency stories
                  <svg className="sc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* INSIGHTS STRIP */}
        <div className="insights-strip">
          <div className="wrap">
            <div className="s-eyebrow">What the data tells us</div>
            <h2 className="s-h2" style={{ marginBottom: '8px' }}>The African creative economy<br />is <em>underserved by design.</em></h2>
            <p className="s-p" style={{ maxWidth: '520px' }}>These numbers are not just statistics. Each one represents a delayed payment, a disputed approval, or a project done twice.</p>

            <div className="insight-grid">
              <div className="insight-card">
                <div className="ic-eyebrow">Payment infrastructure</div>
                <div className="ic-val" style={{ color: '#F87171' }}>3 weeks</div>
                <p className="ic-label">Average time to payment for African freelancers using traditional delivery methods — email, WhatsApp, Google Drive — before Delivami.</p>
              </div>
              <div className="insight-card">
                <div className="ic-eyebrow">Approval disputes</div>
                <div className="ic-val" style={{ color: '#FBBF24' }}>1 in 3</div>
                <p className="ic-label">Projects reported having some form of approval dispute when the only record was a chat thread. With Delivami, this drops to zero.</p>
              </div>
              <div className="insight-card">
                <div className="ic-eyebrow">Revision rounds</div>
                <div className="ic-val" style={{ color: '#5BA4F5' }}>4.2</div>
                <p className="ic-label">Average revision rounds per project when feedback is given over email and phone calls. With frame-accurate timestamped comments, this falls to 1.4.</p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL PULL QUOTE */}
        <div className="testi-pull">
          <div className="wrap">
            <div className="tp-inner">
              <div className="tp-quote-mark">&quot;</div>
              <p className="tp-text">I used to spend my Sunday evenings chasing invoice payments from clients who had already approved and disappeared. Now the system does that work. I spend Sunday evenings on creative work.</p>
              <div className="tp-kente"></div>
              <div style={{ marginTop: '24px' }}>
                <div className="tp-person">
                  <div className="tp-av">A</div>
                  <div>
                    <div className="tp-name">Aisha Kamau</div>
                    <div className="tp-role">Photographer &middot; Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-sec">
          <div className="cta-bg"></div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 600, marginBottom: '22px', position: 'relative', zIndex: 1 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            Ready to deliver like a pro
          </div>
          <h2 className="cta-h2">Your work is too good<br />for <em>WhatsApp delivery.</em></h2>
          <p className="cta-sub">Join African creatives who have already made the switch. Your first delivery link takes thirty seconds to create.</p>
          <div className="cta-btns">
            
            <button className="btn-g">Get Early Access</button>
          </div>
        </div>
      </div>    </>
  );
}
