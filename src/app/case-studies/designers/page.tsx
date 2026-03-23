"use client";

import Link from "next/link";
import "./designers.css";

export default function DesignersCaseStudy() {
  return (
    <div className="de-shell">
      <div className="kente"></div>

      <nav>
        <a className="nav-logo" href="#">
          <div className="nav-lb">
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
              <path d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z" stroke="#0A1628" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M2 5.5L9 9L16 5.5" stroke="#0A1628" strokeWidth="1.8"/>
              <path d="M9 9V16" stroke="#0A1628" strokeWidth="1.8"/>
            </svg>
          </div>
          <span className="nav-wm">Delivami</span>
        </a>
        <div className="nav-links">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link active">Case Studies</a>
          <a href="#" className="nav-link">Blog</a>
        </div>
        <button className="nav-cta">Start free</button>
      </nav>

      <div className="breadcrumb">
        <Link href="/case-studies" className="bc-link">Case Studies</Link>
        <span className="bc-sep">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
        <span className="bc-current">Designers & UI/UX</span>
      </div>

      {/* ═══════ HERO ═══════ */}
      <div className="hero">
        <div className="hero-mesh"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
            Case Study &nbsp;&middot;&nbsp; Design &amp; UI/UX
          </div>
          <h1 className="hero-h1">
            Your brand identity<br/>shouldn&apos;t live in<br/><em>a Figma share link.</em>
          </h1>
          <p className="hero-deck">How UI/UX and graphic designers across Africa use Delivami to deliver interactive prototypes, design systems and brand assets — in a white-labelled environment that reflects the quality of the work itself.</p>

          <div className="hero-strip">
            <div className="hs-item">
              <div className="hs-label">Discipline</div>
              <div className="hs-val"><span>Design</span> &amp; UI/UX</div>
            </div>
            <div className="hs-item">
              <div className="hs-label">Review friction</div>
              <div className="hs-val">Down <span>50%</span> with version control</div>
            </div>
            <div className="hs-item">
              <div className="hs-label">Brand consistency</div>
              <div className="hs-val"><span>100%</span> white-labelled</div>
            </div>
            <div className="hs-item">
              <Link href="https://app.delivami.com/register" className="btn-purple">
                Start free
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Design asset type cards */}
          <div className="hero-visual-strip">
            <div className="hv-card">
              <div className="hvc-top">
                <div className="hvc-icon" style={{background: "rgba(167,139,250,0.1)", borderColor: "var(--purpleb)"}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 21V9"/>
                  </svg>
                </div>
                <div className="hvc-label">Design System</div>
                <div className="hvc-sub">Component library + tokens</div>
              </div>
              <div className="hvc-bottom">
                <div className="hvc-status" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Approved
                </div>
                <div className="hvc-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hv-card">
              <div className="hvc-top">
                <div className="hvc-icon" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.25)"}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className="hvc-label">UI Prototype</div>
                <div className="hvc-sub">Interactive Figma export</div>
              </div>
              <div className="hvc-bottom">
                <div className="hvc-status" style={{background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.2)", color: "var(--amber)"}}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  In Review
                </div>
                <div className="hvc-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hv-card">
              <div className="hvc-top">
                <div className="hvc-icon" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.25)"}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="hvc-label">Brand Identity</div>
                <div className="hvc-sub">Logo, palette, typography</div>
              </div>
              <div className="hvc-bottom">
                <div className="hvc-status" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Approved
                </div>
                <div className="hvc-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hv-card">
              <div className="hvc-top">
                <div className="hvc-icon" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.25)"}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <div className="hvc-label">Asset Pack</div>
                <div className="hvc-sub">Social, print, web exports</div>
              </div>
              <div className="hvc-bottom">
                <div className="hvc-status" style={{background: "rgba(248,113,113,0.08)", borderColor: "rgba(248,113,113,0.2)", color: "var(--red)"}}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                    <path d="M21 3v5h-5"/>
                  </svg>
                  Revision R2
                </div>
                <div className="hvc-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ CHALLENGE ═══════ */}
      <div className="sec">
        <div className="wrap">
          <div className="s-eyebrow">The challenge</div>
          <h2 className="s-h2">Designers present premium work<br/>through <em>tools that undermine it.</em></h2>

          <div className="challenge-grid">
            <div className="narrative">
              <p>A graphic designer spends six weeks building a brand identity — wordmark, colour system, typography scale, photography direction. The work is exceptional. Then they share it via a Figma link, a Google Drive folder or a WeTransfer download that expires in seven days.</p>
              <p>The client&apos;s first impression isn&apos;t the work. It&apos;s the <strong>interface of a platform that has nothing to do with the designer&apos;s brand</strong>. The professionalism ends the moment the delivery begins.</p>
              <p>Version control is worse. Feedback arrives on v3 when the designer is already on v5. The file is called &quot;LogoFinal_USE_THIS_ONE_v2_REAL.zip&quot;. The client cannot remember which version they saw last. Neither, honestly, can the designer.</p>
              <p>And when it comes to approval — the sign-off is a voice note. Or an emoji. Or a &quot;this is perfect!&quot; in an email thread buried under forty replies. None of which holds up two months later when the client claims they wanted something different.</p>
            </div>
            <div>
              <div className="pain-list">
                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">Platform disconnect</div>
                    <div className="pi-desc">Delivering bespoke brand work through generic &quot;Big Tech&quot; file-sharing interfaces sends the wrong signal before the client sees a single pixel of actual work.</div>
                    <div className="pi-impact" style={{background: "rgba(248,113,113,0.07)", borderColor: "rgba(248,113,113,0.2)", color: "var(--red)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/>
                        <path d="M12 17h.01"/>
                      </svg>
                      First impression is the file host, not the designer
                    </div>
                  </div>
                </div>
                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">The &quot;Final_v2_v3_REAL&quot; mess</div>
                    <div className="pi-desc">Managing design iterations and ensuring the client reviews the correct version is a constant operational battle. Clients give feedback on old versions. Confusion is the default state.</div>
                    <div className="pi-impact" style={{background: "rgba(251,191,36,0.07)", borderColor: "rgba(251,191,36,0.2)", color: "var(--amber)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      Avg 4+ rounds of revision per brand project
                    </div>
                  </div>
                </div>
                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(167,139,250,0.08)", border: "1px solid var(--purpleb)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 2H3v16h5l3 3 3-3h7V2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">No formal sign-off</div>
                    <div className="pi-desc">Design approvals are conversational. &quot;Looks great!&quot; in a DM is not a legally meaningful sign-off. When scope creep starts, there&apos;s no record of what was agreed and when.</div>
                    <div className="pi-impact" style={{background: "var(--purpleg)", borderColor: "var(--purpleb)", color: "var(--purple)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="11" height="11" x="3" y="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      Scope creep starts here, every time
                    </div>
                  </div>
                </div>
                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(53,208,115,0.08)", border: "1px solid rgba(53,208,115,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">Payment disconnected from completion</div>
                    <div className="pi-desc">There is no natural moment in the old workflow where &quot;project complete&quot; transitions into &quot;send invoice.&quot; The creative manually creates and sends a PDF invoice and hopes for the best.</div>
                    <div className="pi-impact" style={{background: "rgba(53,208,115,0.06)", borderColor: "rgba(53,208,115,0.18)", color: "var(--green)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      2–4 weeks from delivery to payment received
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ THE BRAND PROBLEM ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="s-eyebrow">The platform mismatch</div>
          <h2 className="s-h2">The delivery experience<br/>should match <em>the work&apos;s quality.</em></h2>
          <p className="s-p" style={{maxWidth: "540px"}}>Here is the exact moment the client&apos;s perception shifts — before they&apos;ve seen a single deliverable.</p>

          <div className="brand-problem">
            {/* Before */}
            <div className="bp-left">
              <div className="bp-section-label" style={{color: "var(--red)"}}>
                <div style={{width: "22px", height: "22px", borderRadius: "6px", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </div>
                What the client sees before Delivami
              </div>
              <div className="bp-example">
                <div className="bpe-topbar">
                  <div className="bpe-dot" style={{background: "#FF5F57"}}></div>
                  <div className="bpe-dot" style={{background: "#FEBC2E"}}></div>
                  <div className="bpe-dot" style={{background: "#28C840"}}></div>
                  <div className="bpe-url">drive.google.com/drive/folders/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74...</div>
                </div>
                <div className="bpe-body">
                  <div style={{fontSize: "11px", color: "var(--muted)", marginBottom: "8px"}}>Shared folder · Owner: sipho.design@gmail.com</div>
                  <div className="bpe-mockfile">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    </svg>
                    Logo_Final_USE_THIS.pdf
                  </div>
                  <div className="bpe-mockfile">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    </svg>
                    Logo_Final_v2_ACTUAL.pdf
                  </div>
                  <div className="bpe-mockfile">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    </svg>
                    Brand_Guidelines_FINAL_v3_USE.pdf
                  </div>
                  <div style={{fontSize: "10px", color: "rgba(248,113,113,0.7)", marginTop: "8px", display: "flex", alignItems: "center", gap: "5px"}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                      <path d="M12 9v4"/>
                      <path d="M12 17h.01"/>
                    </svg>
                    Link expires in 7 days
                  </div>
                </div>
              </div>
              <div style={{marginTop: "14px", fontSize: "12px", color: "var(--muted)", lineHeight: "1.65"}}>The client sees Google Drive. A list of confusingly named files. No brand context. No guidance on which version to review. The designer&apos;s identity is completely absent.</div>
            </div>

            {/* After */}
            <div className="bp-right">
              <div className="bp-section-label" style={{color: "var(--purple)"}}>
                <div style={{width: "22px", height: "22px", borderRadius: "6px", background: "var(--purpleg)", border: "1px solid var(--purpleb)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                What the client sees with Delivami
              </div>
              <div className="bp-example" style={{borderColor: "var(--purpleb)"}}>
                <div className="bpe-topbar" style={{background: "var(--purpleg)"}}>
                  <div className="bpe-dot" style={{background: "#FF5F57"}}></div>
                  <div className="bpe-dot" style={{background: "#FEBC2E"}}></div>
                  <div className="bpe-dot" style={{background: "#28C840"}}></div>
                  <div className="bpe-url" style={{color: "var(--purple)"}}>designs.siphostudio.com/kofi-brands-identity</div>
                </div>
                <div className="bpe-body">
                  <div className="bpe-logo-zone" style={{borderColor: "var(--purpleb)", background: "var(--purpleg)"}}>
                    <div style={{width: "28px", height: "28px", borderRadius: "8px", background: "var(--purpleg)", border: "1px solid var(--purpleb)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "13px", color: "var(--purple)", flexShrink: 0}}>S</div>
                    <div>
                      <div className="bpe-name">Sipho Studio</div>
                      <div className="bpe-role">Brand Identity Delivery</div>
                    </div>
                    <div style={{marginLeft: "auto", padding: "2px 8px", borderRadius: "5px", background: "rgba(53,208,115,0.08)", border: "1px solid rgba(53,208,115,0.2)", fontSize: "9px", fontWeight: 700, color: "var(--green)"}}>v3 · Current</div>
                  </div>
                  <div className="bpe-mockfile" style={{borderColor: "var(--purpleb)"}}>
                    <div className="bds-file-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                    Kofi Brands — Brand Guidelines.pdf
                  </div>
                  <div className="bpe-mockfile" style={{borderColor: "var(--purpleb)"}}>
                    <div className="bds-file-ic" style={{background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)"}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                      </svg>
                    </div>
                    Logo Files — All Formats.zip
                  </div>
                  <div style={{display: "flex", gap: "6px", marginTop: "10px"}}>
                    <div style={{flex: 1, padding: "8px", borderRadius: "7px", background: "var(--purpleg)", border: "1px solid var(--purpleb)", fontSize: "10px", fontWeight: 700, color: "var(--purple)", textAlign: "center", cursor: "pointer"}}>Approve</div>
                    <div style={{flex: 1, padding: "8px", borderRadius: "7px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--bdr)", fontSize: "10px", color: "var(--muted)", textAlign: "center", cursor: "pointer"}}>Request revision</div>
                  </div>
                </div>
              </div>
              <div style={{marginTop: "14px", fontSize: "12px", color: "var(--muted)", lineHeight: "1.65"}}>The client sees the designer&apos;s studio name. A branded URL. The correct version, clearly labelled. Clean files. And two clear actions — approve or request revision.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ SOLUTION ═══════ */}
      <div className="sec">
        <div className="wrap">
          <div className="solution-intro">
            <div>
              <div className="s-eyebrow">The Delivami solution</div>
              <h2 className="s-h2">Three features that<br/><em>fix the design workflow.</em></h2>
              <p className="s-p">Each targets a specific moment where the design delivery process fails — and replaces it with something that actually works.</p>
            </div>
            <div style={{padding: "22px 24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--bdr)"}}>
              <div style={{fontSize: "9.5px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: "12px"}}>What gets fixed</div>
              <div style={{display: "flex", flexDirection: "column", gap: "9px"}}>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Generic platforms replaced by your branded page
                </div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Version chaos replaced by clean locked history
                </div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Chat approvals replaced by timestamped sign-off
                </div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  PDF invoice replaced by one-click mobile payment
                </div>
              </div>
            </div>
          </div>

          <div className="solution-grid">
            <div className="sol-card" style={{"--sol-accent": "var(--color-purple)" as any}}>
              <div className="sol-num">01</div>
              <div className="sol-icon" style={{background: "var(--purpleg)", borderColor: "var(--purpleb)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="sol-title">White-Label Branding</div>
              <div className="sol-desc">Your logo, your studio colours, your custom domain. Every delivery page looks like it was built by your studio — because it was. Not a Delivami page that happens to have your work on it.</div>
              <div className="sol-detail">Clients see your name in the browser tab, your avatar in the header, and your brand colour on the approve button. Delivami is invisible. You are not.</div>
            </div>
            <div className="sol-card" style={{"--sol-accent": "var(--color-blue)" as any}}>
              <div className="sol-num">02</div>
              <div className="sol-icon" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.28)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                  <path d="M10 9H8"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                </svg>
              </div>
              <div className="sol-title">Clean Version History</div>
              <div className="sol-desc">Every iteration is uploaded as a new version. The client always sees the current version by default. Previous versions are archived — viewable and downloadable, but clearly labelled as superseded.</div>
              <div className="sol-detail">No more &quot;which file should I be looking at?&quot; Revision round counts are visible on the project. When v4 is uploaded, v3 is automatically locked.</div>
            </div>
            <div className="sol-card" style={{"--sol-accent": "var(--color-gold)" as any}}>
              <div className="sol-num">03</div>
              <div className="sol-icon" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.28)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="sol-title">Instant Sign-Off</div>
              <div className="sol-desc">When the client clicks Approve, the action is timestamped, version-locked and tied to their session. This becomes your irrefutable record of what was agreed and when.</div>
              <div className="sol-detail">The approval certificate includes client name, date, time, version number and files covered. From that record, one click creates the invoice. Payment follows within hours.</div>
            </div>
          </div>

          {/* Branded delivery demo */}
          <div className="brand-demo">
            <div className="bd-kente"></div>
            <div className="bd-inner">
              <div className="bd-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Three studios, three brands — all powered by Delivami
              </div>
              <div className="bd-screens">

                {/* Studio 1 — purple */}
                <div className="bd-screen">
                  <div className="bds-header" style={{background: "rgba(167,139,250,0.04)"}}>
                    <div className="bds-av" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)", color: "var(--purple)"}}>S</div>
                    <div>
                      <div className="bds-name">Sipho Studio</div>
                      <div style={{fontSize: "9px", color: "var(--muted)"}}>Brand Identity</div>
                    </div>
                    <div className="bds-tag" style={{background: "var(--purpleg)", borderColor: "var(--purpleb)", color: "var(--purple)"}}>v3</div>
                  </div>
                  <div className="bds-body">
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                      </div>
                      Brand Guidelines.pdf
                    </div>
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                        </svg>
                      </div>
                      Logo Pack.zip
                    </div>
                    <div className="bds-btn" style={{background: "var(--purple)", color: "var(--navy)"}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      Approve
                    </div>
                  </div>
                </div>

                {/* Studio 2 — blue */}
                <div className="bd-screen">
                  <div className="bds-header" style={{background: "rgba(91,164,245,0.04)"}}>
                    <div className="bds-av" style={{background: "rgba(91,164,245,0.1)", border: "1px solid rgba(91,164,245,0.25)", color: "var(--blue)"}}>A</div>
                    <div>
                      <div className="bds-name">Ama Design</div>
                      <div style={{fontSize: "9px", color: "var(--muted)"}}>UI Prototype</div>
                    </div>
                    <div className="bds-tag" style={{background: "rgba(91,164,245,0.08)", borderColor: "rgba(91,164,245,0.25)", color: "var(--blue)"}}>v2</div>
                  </div>
                  <div className="bds-body">
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "rgba(91,164,245,0.1)", border: "1px solid rgba(91,164,245,0.2)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                          <path d="M3 9h18"/>
                          <path d="M9 21V9"/>
                        </svg>
                      </div>
                      Dashboard UI.fig
                    </div>
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "rgba(53,208,115,0.08)", border: "1px solid rgba(53,208,115,0.18)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                        </svg>
                      </div>
                      Components.zip
                    </div>
                    <div className="bds-btn" style={{background: "var(--blue)", color: "var(--navy)"}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      Approve
                    </div>
                  </div>
                </div>

                {/* Studio 3 — gold */}
                <div className="bd-screen">
                  <div className="bds-header" style={{background: "rgba(212,175,55,0.04)"}}>
                    <div className="bds-av" style={{background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--gold)"}}>K</div>
                    <div>
                      <div className="bds-name">Kojo Creative</div>
                      <div style={{fontSize: "9px", color: "var(--muted)"}}>Design System</div>
                    </div>
                    <div className="bds-tag" style={{background: "rgba(212,175,55,0.08)", borderColor: "rgba(212,175,55,0.25)", color: "var(--gold)"}}>v4</div>
                  </div>
                  <div className="bds-body">
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      </div>
                      Token Library.json
                    </div>
                    <div className="bds-file">
                      <div className="bds-file-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                        </svg>
                      </div>
                      Style Guide.pdf
                    </div>
                    <div className="bds-btn" style={{background: "var(--gold)", color: "var(--navy)"}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      Approve
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ BEFORE / AFTER ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="s-eyebrow">The difference</div>
          <h2 className="s-h2">The same brand project.<br/><em>Two completely different outcomes.</em></h2>
          <p className="s-p" style={{maxWidth: "520px"}}>Sipho Ndlovu in Johannesburg. Brand identity project. Six weeks of work. Same client type. Before and after Delivami.</p>

          <div className="ba-grid">
            <div className="ba-card" style={{background: "rgba(248,113,113,0.015)"}}>
              <div className="ba-header" style={{background: "rgba(248,113,113,0.04)", borderColor: "rgba(248,113,113,0.15)"}}>
                <div style={{width: "26px", height: "26px", borderRadius: "8px", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </div>
                <span className="ba-label" style={{color: "var(--red)"}}>Before Delivami</span>
              </div>
              <div className="ba-rows">
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  Delivers via Google Drive. Client opens the wrong version of the logo file. Gives feedback on v2 when Sipho is on v4.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  Feedback via WhatsApp voice note, email thread with twelve replies, and a screenshot with annotations drawn by hand.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  After five rounds: &quot;yes this is perfect!&quot; in DMs. No formal approval. No record. Sipho sends PDF invoice.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  Invoice goes unread. Sipho calls. Client says &quot;I thought we were doing one more revision first.&quot; Sipho has nothing to prove otherwise.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  Another two rounds. Invoice revised. Payment eventually arrives — 5 weeks after the project was finished.
                </div>
              </div>
              <div className="ba-summary" style={{color: "var(--red)"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                5 revision rounds · 5 weeks to payment
              </div>
            </div>

            <div className="ba-card" style={{background: "rgba(167,139,250,0.015)"}}>
              <div className="ba-header" style={{background: "var(--purpleg)", borderColor: "var(--purpleb)"}}>
                <div style={{width: "26px", height: "26px", borderRadius: "8px", background: "var(--purpleg)", border: "1px solid var(--purpleb)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <span className="ba-label" style={{color: "var(--purple)"}}>With Delivami</span>
              </div>
              <div className="ba-rows">
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  Delivers via branded Sipho Studio page at designs.siphostudio.com. Client opens the page — current version is prominently labelled.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  Client leaves feedback as text comments on the delivery page, attached to specific files. Sipho sees exactly what applies to what.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  Sipho uploads v2. Previous version is locked automatically. Client is notified. Client reviews the current, correct version.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  Client clicks Approve. Timestamped, version-locked, permanent. Sipho creates invoice from the same screen in one click.
                </div>
                <div className="ba-row">
                  <div className="ba-ic" style={{background: "var(--purpleg)", border: "1px solid var(--purpleb)"}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  Client pays via EFT from the payment link. Funds arrive same day. Sipho downloads the receipt. Project closed.
                </div>
              </div>
              <div className="ba-summary" style={{color: "var(--green)"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                2 revision rounds · Same-day payment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ IMPACT ═══════ */}
      <div className="sec">
        <div className="wrap">
          <div style={{textAlign: "center", maxWidth: "520px", margin: "0 auto"}}>
            <div className="s-eyebrow" style={{justifyContent: "center"}}>The numbers</div>
            <h2 className="s-h2" style={{textAlign: "center"}}>What design studios<br/>report after <em>switching.</em></h2>
            <p className="s-p" style={{textAlign: "center", maxWidth: "420px", margin: "0 auto"}}>Across designers in Ghana, South Africa, Nigeria and Senegal using Delivami for brand identity and UI/UX delivery.</p>
          </div>
          <div className="impact-row">
            <div className="impact-item" style={{"--ii-glow": "rgba(167,139,250,0.12)"}}>
              <div className="ii-val" style={{color: "var(--purple)"}}>100%</div>
              <div className="ii-label">Brand consistency on every delivery — no platform branding visible to clients</div>
              <div className="ii-detail">was 0% white-labelled</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(91,164,245,0.1)"}}>
              <div className="ii-val" style={{color: "var(--blue)"}}>50%</div>
              <div className="ii-label">Reduction in review friction with clean version history and locked iterations</div>
              <div className="ii-detail">was avg 4+ rounds · now 2</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(212,175,55,0.1)"}}>
              <div className="ii-val" style={{color: "var(--gold)"}}>0</div>
              <div className="ii-label">Scope creep disputes for designers with a timestamped sign-off on record</div>
              <div className="ii-detail">was the standard experience</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(53,208,115,0.1)"}}>
              <div className="ii-val" style={{color: "var(--green)"}}>2x</div>
              <div className="ii-label">Higher perceived project value reported by clients viewing branded delivery pages</div>
              <div className="ii-detail">professionalism drives price</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="testi-wrap">
            <div className="tw-left">
              <div className="tw-kente"></div>
              <p className="tw-text">
                <span className="tw-qm">&quot;</span>
                I have been freelancing as a brand designer for five years. Every single scope creep conversation I ever had started from the same place — no formal record of what the client approved. The moment I started using Delivami, that stopped happening. The client sees their name, the date, the version, the files. They clicked that button. There is nothing left to dispute. My project rate went up thirty percent because the client experience went up — and they noticed.
              </p>
              <div className="tw-person">
                <div className="tw-av">S</div>
                <div>
                  <div className="tw-name">Sipho Ndlovu</div>
                  <div className="tw-role">Brand Designer &middot; Johannesburg, South Africa &middot; 5 years freelance</div>
                </div>
              </div>
            </div>
            <div className="tw-right">
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--purple)"}}>30%</div>
                <div className="tw-sl">Increase in project rate after switching to branded delivery</div>
              </div>
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--gold)"}}>0</div>
                <div className="tw-sl">Scope creep disputes since switching</div>
              </div>
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--green)"}}>Same day</div>
                <div className="tw-sl">Payment after client approval via EFT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ WORKFLOW COMPARISON ═══════ */}
      <div className="workflow-sec">
        <div className="wrap">
          <div className="wf-grid">
            <div>
              <div className="s-eyebrow">How the workflow changes</div>
              <h2 className="s-h2">What Delivami replaces<br/>step by <em>step.</em></h2>
              <p className="s-p" style={{marginBottom: "32px"}}>Every painful step in the design delivery process has a direct Delivami replacement. Nothing added — everything improved.</p>
              <div className="wf-timeline">
                <div className="wt-item">
                  <div className="wt-left">
                    <div className="wt-dot" style={{background: "var(--purpleg)", borderColor: "var(--purpleb)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                    </div>
                  </div>
                  <div className="wt-body">
                    <div className="wt-title">Branded page replaces Google Drive</div>
                    <div className="wt-text">Your delivery page carries your studio identity from the first second. Custom domain, your logo, your accent colour on every button. The platform disappears. You don&apos;t.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left">
                    <div className="wt-dot" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.3)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="wt-body">
                    <div className="wt-title">Version history replaces filename chaos</div>
                    <div className="wt-text">Upload v2 and v3 locks automatically. The client always sees the current version. No more confusion. No more feedback on the wrong file. The version number is right there in the header.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left">
                    <div className="wt-dot" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.3)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2H3v16h5l3 3 3-3h7V2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="wt-body">
                    <div className="wt-title">Structured feedback replaces WhatsApp threads</div>
                    <div className="wt-text">Clients leave feedback attached to specific files on the delivery page. Each note is logged with a timestamp. You can see exactly what applies to what — no more decoding voice notes.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left">
                    <div className="wt-dot" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.3)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="wt-body">
                    <div className="wt-title">Timestamped sign-off replaces informal approval</div>
                    <div className="wt-text">The Approve button generates a permanent record: client name, date, time, version, files. This is your defence against scope creep and your proof of project completion.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left">
                    <div className="wt-dot" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.4)", boxShadow: "0 0 0 3px rgba(212,175,55,0.08)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                  </div>
                  <div className="wt-body" style={{paddingBottom: "0"}}>
                    <div className="wt-title" style={{color: "var(--gold)"}}>Mobile payment replaces the invoice chase</div>
                    <div className="wt-text">Invoice created from the approval screen in one click. Client pays via EFT, MoMo or mobile banking. Funds arrive the same day. No follow-up required.</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{fontSize: "9.5px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: "14px"}}>Tool-by-tool comparison</div>
              <div className="comparison-table">
                <div className="ct-header">
                  <div className="cth">Task</div>
                  <div className="cth">Old approach</div>
                  <div className="cth">Delivami</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">File delivery</div>
                  <div className="ct-cell before">Google Drive / WeTransfer</div>
                  <div className="ct-cell after">White-labelled branded page</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Version control</div>
                  <div className="ct-cell before">Logo_Final_v3_USE_THIS.zip</div>
                  <div className="ct-cell after">Version history, previous locked</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Client review</div>
                  <div className="ct-cell before">Client downloads, prints, annotates</div>
                  <div className="ct-cell after">Comments on files in the browser</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Feedback</div>
                  <div className="ct-cell before">WhatsApp / email / voice note</div>
                  <div className="ct-cell after">Logged, timestamped, per-file</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Approval</div>
                  <div className="ct-cell before">&quot;This is perfect!&quot; in DMs</div>
                  <div className="ct-cell after">Timestamped, version-locked record</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Scope control</div>
                  <div className="ct-cell before">Nothing. Relying on memory.</div>
                  <div className="ct-cell after">Approval certificate as evidence</div>
                </div>
                <div className="ct-row">
                  <div className="ct-cell topic">Payment</div>
                  <div className="ct-cell before">PDF invoice, chased for weeks</div>
                  <div className="ct-cell after">One-click invoice, same-day MoMo/EFT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ OTHER ROLES ═══════ */}
      <div className="other-roles">
        <div className="wrap">
          <div className="s-eyebrow">Other disciplines</div>
          <h2 className="s-h2">The same infrastructure<br/>built for <em>every creative role.</em></h2>
          <p className="s-p" style={{maxWidth: "480px"}}>Every discipline has its own friction points. Every discipline gets its own solution page.</p>
          <div className="roles-grid">
            <a className="role-card" href="#">
              <div className="rc-icon" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.25)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 8-6 4 6 4V8z"/>
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
                </svg>
              </div>
              <div className="rc-title">Video Editors</div>
              <div className="rc-sub">4K streaming, frame-accurate comments, version control. Cut revision rounds by 60%.</div>
              <div className="rc-link" style={{color: "var(--blue)"}}>See the solution 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </a>
            <a className="role-card" href="#">
              <div className="rc-icon" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.25)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
              <div className="rc-title">Photography</div>
              <div className="rc-sub">Secure galleries, pay-to-unlock, instant digital delivery. Get paid 3x faster.</div>
              <div className="rc-link" style={{color: "var(--green)"}}>See the solution 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </a>
            <a className="role-card" href="#">
              <div className="rc-icon" style={{background: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.25)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className="rc-title">Motion Graphics</div>
              <div className="rc-sub">Loop previews and composition reviews in one link. No downloads required.</div>
              <div className="rc-link" style={{color: "var(--amber)"}}>See the solution 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="cta-sec">
        <div className="cta-bg"></div>
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "22px", position: "relative", zIndex: 1}}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <path d="M3 9h18"/>
            <path d="M9 21V9"/>
          </svg>
          Own your client experience
        </div>
        <h2 className="cta-h2">Your brand identity<br/>deserves a <em>better stage.</em></h2>
        <p className="cta-sub">Start free. Your first branded delivery page takes thirty seconds to create.</p>
        <div className="cta-btns">
          <button className="btn-p">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
            Start your free account
          </button>
          <button className="btn-g">View all case studies</button>
        </div>
        <a href="#" className="back-link" style={{display: "flex", margin: "16px auto 0", width: "fit-content"}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Case Studies
        </a>
      </div>

      <footer>
        <a className="fl" href="#">
          <div className="fl-lb">
            <svg width="11" height="11" viewBox="0 0 18 18" fill="none">
              <path d="M2 5.5L9 2L16 5.5V12.5L9 16L2 12.5Z" stroke="#0A1628" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 5.5L9 9L16 5.5" stroke="#0A1628" strokeWidth="2"/>
              <path d="M9 9V16" stroke="#0A1628" strokeWidth="2"/>
            </svg>
          </div>
          <span className="fl-wm">Delivami</span>
        </a>
        <div className="footer-copy">&copy; 2024 Delivami &middot; Built in Africa, for Africa</div>
        <div className="footer-links">
          <a href="#" className="footer-link">Case Studies</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">hello@delivami.com</a>
        </div>
      </footer>
    </div>
  );
}

function StatusIcon({ type }: { type: string }) {
  if (type === "Approved") return <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
  if (type === "In Review") return <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  return <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>;
}

function PainItem({ icon, title, desc, impact, color }: { icon: string, title: string, desc: string, impact: string, color: string }) {
  return (
    <div className="pain-item">
      <div className="pi-icon" style={{ background: `rgba(var(--${color}-rgb), 0.08)`, border: `1px solid var(--${color}b)` }}>
        <PainIcon type={icon} color={`var(--${color})`} />
      </div>
      <div>
        <div className="pi-title">{title}</div>
        <div className="pi-desc">{desc}</div>
        <div className="pi-impact" style={{ background: `rgba(var(--${color}-rgb), 0.07)`, borderColor: `var(--${color}b)`, color: `var(--${color})` }}>
           <ImpactIcon type={icon} />
           {impact}
        </div>
      </div>
    </div>
  );
}

function PainIcon({ type, color, size = 18 }: { type: string, color: string, size?: number }) {
  if (type === "platform" || type === "monitor") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
  if (type === "file") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>;
  if (type === "chat") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5l3 3 3-3h7V2z"/></svg>;
  if (type === "lock") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
}

function ImpactIcon({ type }: { type: string }) {
  if (type === "platform") return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>;
  if (type === "chat") return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="11" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
  return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

function LinkCheckItem({ text }: { text: string }) {
  return <div style={{ fontSize: '12.5px', color: 'var(--iv2)', display: 'flex', alignItems: 'center', gap: '8px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{text}</div>;
}

function SolutionCard({ num, title, desc, detail, color }: { num: string, title: string, desc: string, detail: string, color: string }) {
  return (
    <div className="sol-card" style={{ ['--sol-accent' as any]: `var(--${color})` }}>
      <div className="sol-num">{num}</div>
      <div className="sol-icon" style={{ background: color === "purple" ? "var(--purpleg)" : `rgba(var(--${color}-rgb), 0.1)`, border: `1px solid ${color === "purple" ? "var(--purpleb)" : `rgba(var(--${color}-rgb), 0.28)`}` }}>
        {num === "01" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
        {num === "02" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>}
        {num === "03" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      </div>
      <div className="sol-title">{title}</div>
      <div className="sol-desc">{desc}</div>
      <div className="sol-detail">{detail}</div>
    </div>
  );
}

function DemoScreen({ name, initial, type, version, color, files }: { name: string, initial: string, type: string, version: string, color: string, files: {name: string, type: string}[] }) {
  return (
    <div className="bd-screen">
      <div className="bds-header" style={{ background: `rgba(var(--${color}-rgb), 0.04)` }}>
        <div className="bds-av" style={{ background: `var(--${color}g)`, border: `1px solid var(--${color}b)`, color: `var(--${color})` }}>{initial}</div>
        <div>
          <div className="bds-name">{name}</div>
          <div style={{ fontSize: '9px', color: 'var(--muted)' }}>{type}</div>
        </div>
        <div className="bds-tag" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)`, color: `var(--${color})` }}>{version}</div>
      </div>
      <div className="bds-body">
        {files.map((f, i) => (
          <div key={i} className="bds-file">
            <div className="bds-file-ic" style={{ background: f.type === "zip" && color === "purple" ? 'rgba(212,175,55,0.1)' : `var(--${color}g)`, border: `1px solid ${f.type === "zip" && color === "purple" ? 'rgba(212,175,55,0.2)' : `var(--${color}b)`}` }}>
               <SmallFileIcon type={f.type} color={f.type === "zip" && color === "purple" ? "var(--gold)" : `var(--${color})`} />
            </div>
            {f.name}
          </div>
        ))}
        <div className="bds-btn" style={{ background: `var(--${color})`, color: 'var(--navy)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Approve
        </div>
      </div>
    </div>
  );
}

function SmallFileIcon({ type, color }: { type: string, color: string }) {
  if (type === "zip") return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>;
  if (type === "monitor") return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
  if (type === "bolt") return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
  return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}

function BACard({ type, rows, summary }: { type: string, rows: string[], summary: string }) {
  const isBefore = type === "before";
  const accent = isBefore ? "var(--red)" : "var(--purple)";
  const bg = isBefore ? "rgba(248,113,113,0.015)" : "rgba(167,139,250,0.015)";
  const headBg = isBefore ? "rgba(248,113,113,0.04)" : "var(--purpleg)";
  const headBdr = isBefore ? "rgba(248,113,113,0.15)" : "var(--purpleb)";

  return (
    <div className="ba-card" style={{ background: bg }}>
      <div className="ba-header" style={{ background: headBg, borderColor: headBdr }}>
        <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: isBefore ? 'rgba(248,113,113,0.1)' : 'var(--purpleg)', border: `1px solid ${isBefore ? 'rgba(248,113,113,0.2)' : 'var(--purpleb)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isBefore ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                   : <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
        </div>
        <span className="ba-label" style={{ color: accent }}>{isBefore ? "Before Delivami" : "With Delivami"}</span>
      </div>
      <div className="ba-rows">
        {rows.map((r, i) => (
          <div key={i} className="ba-row">
            <div className="ba-ic" style={{ background: isBefore ? 'rgba(248,113,113,0.08)' : 'var(--purpleg)', border: `1px solid ${isBefore ? 'rgba(248,113,113,0.18)' : 'var(--purpleb)'}` }}>
              {isBefore ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                       : <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
            </div>
            {r}
          </div>
        ))}
      </div>
      <div className="ba-summary" style={{ color: isBefore ? 'var(--red)' : 'var(--green)' }}>
        {isBefore ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                 : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
        {summary}
      </div>
    </div>
  );
}

function ImpactItem({ val, label, detail, color }: { val: string, label: string, detail: string, color: string }) {
  return (
    <div className="impact-item" style={{ ['--ii-glow' as any]: `var(--${color}g)` }}>
      <div className="ii-val" style={{ color: `var(--${color})` }}>{val}</div>
      <div className="ii-label">{label}</div>
      <div className="ii-detail">{detail}</div>
    </div>
  );
}

function StatItem({ val, label, color }: { val: string, label: string, color: string }) {
  return (
    <div className="tw-stat">
      <div className="tw-sv" style={{ color: `var(--${color})` }}>{val}</div>
      <div className="tw-sl">{label}</div>
    </div>
  );
}

function TimelineItem({ title, icon, color, desc, isLast }: { title: string, icon: string, color: string, desc: string, isLast?: boolean }) {
  return (
    <div className="wt-item">
      <div className="wt-left">
        <div className="wt-dot" style={{ background: `var(--${color}g)`, border: `1.5px solid var(--${color}b)` }}>
          <PainIcon type={icon} color={`var(--${color})`} size={14} />
        </div>
      </div>
      <div className="wt-body" style={{ paddingBottom: isLast ? 0 : '26px' }}>
        <div className="wt-title">{title}</div>
        <div className="wt-text">{desc}</div>
      </div>
    </div>
  );
}

function TableRow({ topic, before, after }: { topic: string, before: string, after: string }) {
  return (
    <div className="ct-row">
      <div className="ct-cell topic">{topic}</div>
      <div className="ct-cell before">{before}</div>
      <div className="ct-cell after">{after}</div>
    </div>
  );
}

function RoleCard({ title, sub, color, href }: { title: string, sub: string, color: string, href: string }) {
  return (
    <Link className="role-card" href={href}>
      <div className="rc-icon" style={{ background: `rgba(var(--${color}-rgb), 0.1)`, borderColor: `var(--${color}b)` }}>
        <HeroIcon type={title === "Video Editors" ? "video" : title === "Photography" ? "pack" : "bolt"} color={`var(--${color})`} />
      </div>
      <div className="rc-title">{title}</div>
      <div className="rc-sub">{sub}</div>
      <div className="rc-link" style={{ color: `var(--${color})` }}>
        See the solution <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </Link>
  );
}
