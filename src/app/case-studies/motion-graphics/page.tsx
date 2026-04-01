"use client";

import Link from "next/link";
import "./motion-graphics.css";

export default function MotionGraphicsCaseStudy() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/case-studies" className="bc-link">Case Studies</Link>
        <span className="bc-sep">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </span>
        <span className="bc-current">Motion Graphics</span>
      </div>

      {/* ═══════ HERO ═══════ */}
      <div className="hero">
        <div className="hero-mesh"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Case Study &nbsp;·&nbsp; Motion Graphics
          </div>

          <h1 className="hero-h1">
            Your motion work<br/>
            should be felt, not<br/>
            <em>downloaded and guessed at.</em>
          </h1>

          <p className="hero-deck">How motion graphics artists across Africa use Delivami to deliver loop previews, animated title sequences and explainer videos — with frame-accurate client feedback and payment within 24-48 hours baked in.</p>

          <div className="hero-strip">
            <div className="hs-item">
              <div className="hs-label">Discipline</div>
              <div className="hs-val"><span>Motion</span> Graphics &amp; 2D</div>
            </div>
            <div className="hs-item">
              <div className="hs-label">Revision rounds</div>
              <div className="hs-val">Down to <span>1.4</span> avg from 4.8</div>
            </div>
            <div className="hs-item">
              <div className="hs-label">Client review</div>
              <div className="hs-val"><span>In-browser</span>, no download</div>
            </div>
            <div className="hs-item">
              
            </div>
          </div>

          <div className="motion-preview">
            <div className="mp-card">
              <div className="mp-screen tall">
                <div className="mp-bg-1"></div>
                <div className="mp-orbit" style={{width: "130px", height: "130px", border: "1px solid rgba(249,115,22,0.12)", animationDuration: "12s"}}></div>
                <div className="mp-orbit" style={{width: "80px", height: "80px", border: "1px solid rgba(249,115,22,0.2)", animationDuration: "7s", animationDirection: "reverse"}}></div>
                <div className="mp-pulse" style={{width: "20px", height: "20px", background: "rgba(249,115,22,0.35)", animationDelay: "0.8s"}}></div>
                <div className="mp-line" style={{width: "60%", height: "1.5px", background: "rgba(249,115,22,0.25)", top: "40%", left: "20%"}}></div>
                <div className="mp-line" style={{width: "40%", height: "1px", background: "rgba(249,115,22,0.15)", top: "60%", left: "30%", animationDelay: "1s", animationDirection: "alternate-reverse"}}></div>
                <div className="mp-overlay" style={{position: "relative", zIndex: 3}}>
                  <div className="mp-icon-ring" style={{background: "rgba(249,115,22,0.12)", borderColor: "var(--orb)"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <div className="mp-label-box" style={{background: "rgba(6,16,29,0.8)", border: "1px solid var(--orb)", color: "var(--or)"}}>Logo Sting · 0:08</div>
                </div>
                <div style={{position: "absolute", top: "10px", left: "12px", display: "flex", alignItems: "center", gap: "5px", padding: "3px 9px", borderRadius: "5px", background: "rgba(6,16,29,0.8)", border: "1px solid var(--orb)", zIndex: 4}}>
                  <div style={{width: "6px", height: "6px", borderRadius: "50%", background: "var(--or)", animation: "mp-p 1.5s ease infinite"}}></div>
                  <span style={{fontSize: "9px", fontWeight: 700, color: "var(--or)"}}>Looping</span>
                </div>
              </div>
              <div className="mp-scrubber">
                <div className="mp-track">
                  <div className="mp-fill" style={{width: "55%", background: "var(--or)"}}></div>
                  <div className="mp-scrub-dot" style={{left: "55%", background: "var(--or)", border: "2px solid rgba(249,115,22,0.4)", boxShadow: "0 0 0 2px rgba(249,115,22,0.2)"}}></div>
                  <div className="mp-ts-marker" style={{left: "30%", background: "var(--amber)", borderColor: "var(--amber)"}}></div>
                  <div className="mp-ts-marker" style={{left: "72%", background: "var(--red)", borderColor: "var(--red)"}}></div>
                </div>
                <div className="mp-ctrls">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span style={{color: "var(--or)"}}>0:04</span> / <span>0:08</span>
                  <span style={{marginLeft: "auto", color: "var(--or)"}}>2 comments</span>
                </div>
              </div>
              <div className="mp-footer">
                <div className="mp-title">Kofi Brands — Logo Animation</div>
                <div className="mp-meta">
                  <span>v3 · 1920×1080 · ProRes</span>
                  <div className="mp-status" style={{background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.2)", color: "var(--amber)"}}>In Review</div>
                </div>
              </div>
            </div>

            <div className="mp-card">
              <div className="mp-screen short">
                <div className="mp-bg-3"></div>
                <div className="mp-orbit" style={{width: "80px", height: "80px", border: "1px solid rgba(212,175,55,0.15)", animationDuration: "9s"}}></div>
                <div className="mp-pulse" style={{width: "14px", height: "14px", background: "rgba(212,175,55,0.4)", animationDelay: "0.4s"}}></div>
                <div className="mp-overlay" style={{position: "relative", zIndex: 3}}>
                  <div className="mp-icon-ring" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.28)"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mp-scrubber">
                <div className="mp-track">
                  <div className="mp-fill" style={{width: "38%", background: "var(--gold)"}}></div>
                  <div className="mp-scrub-dot" style={{left: "38%", background: "var(--gold)"}}></div>
                  <div className="mp-ts-marker" style={{left: "60%", background: "var(--blue)", borderColor: "var(--blue)"}}></div>
                </div>
                <div className="mp-ctrls">
                  <span style={{color: "var(--gold)"}}>0:46</span> / <span>2:02</span>
                  <span style={{marginLeft: "auto"}}>1 comment</span>
                </div>
              </div>
              <div className="mp-footer">
                <div className="mp-title">eduroam — Explainer</div>
                <div className="mp-meta">
                  <span>v2 · 2:02</span>
                  <div className="mp-status" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>Approved</div>
                </div>
              </div>
            </div>

            <div className="mp-card">
              <div className="mp-screen short">
                <div className="mp-bg-2"></div>
                <div className="mp-orbit" style={{width: "70px", height: "70px", border: "1px solid rgba(53,208,115,0.18)", animationDuration: "6s"}}></div>
                <div className="mp-pulse" style={{width: "12px", height: "12px", background: "rgba(53,208,115,0.5)", animationDelay: "1s"}}></div>
                <div style={{position: "absolute", top: "8px", right: "9px", fontSize: "8px", fontWeight: 700, padding: "2px 7px", borderRadius: "4px", background: "rgba(6,16,29,0.8)", border: "1px solid rgba(53,208,115,0.25)", color: "var(--green)"}}>Loop</div>
                <div className="mp-overlay" style={{position: "relative", zIndex: 3}}>
                  <div className="mp-icon-ring" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.28)"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mp-scrubber">
                <div className="mp-track">
                  <div className="mp-fill" style={{width: "80%", background: "var(--green)"}}></div>
                  <div className="mp-scrub-dot" style={{left: "80%", background: "var(--green)"}}></div>
                </div>
                <div className="mp-ctrls">
                  <span style={{color: "var(--green)"}}>0:04</span> / <span>0:05</span>
                  <span style={{marginLeft: "auto"}}>0 comments</span>
                </div>
              </div>
              <div className="mp-footer">
                <div className="mp-title">TechHub — Icon Loop</div>
                <div className="mp-meta">
                  <span>v1 · 0:05</span>
                  <div className="mp-status" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>Paid</div>
                </div>
              </div>
            </div>

            <div className="mp-card">
              <div className="mp-screen short">
                <div className="mp-bg-4"></div>
                <div className="mp-orbit" style={{width: "75px", height: "75px", border: "1px solid rgba(91,164,245,0.18)", animationDuration: "10s", animationDirection: "reverse"}}></div>
                <div className="mp-pulse" style={{width: "11px", height: "11px", background: "rgba(91,164,245,0.5)", animationDelay: "0.6s"}}></div>
                <div className="mp-overlay" style={{position: "relative", zIndex: 3}}>
                  <div className="mp-icon-ring" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.28)"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mp-scrubber">
                <div className="mp-track">
                  <div className="mp-fill" style={{width: "20%", background: "var(--blue)"}}></div>
                  <div className="mp-scrub-dot" style={{left: "20%", background: "var(--blue)"}}></div>
                </div>
                <div className="mp-ctrls">
                  <span style={{color: "var(--blue)"}}>0:06</span> / <span>0:30</span>
                  <span style={{marginLeft: "auto"}}>Revision R2</span>
                </div>
              </div>
              <div className="mp-footer">
                <div className="mp-title">Summer Drop — Social Cut</div>
                <div className="mp-meta">
                  <span>v2 · 0:30</span>
                  <div className="mp-status" style={{background: "rgba(248,113,113,0.08)", borderColor: "rgba(248,113,113,0.2)", color: "var(--red)"}}>Revision</div>
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
          <h2 className="s-h2">Motion work is made to be<br/><em>experienced, not downloaded.</em></h2>

          <div className="challenge-grid">
            <div className="narrative">
              <p>A motion graphics artist in Lagos spends two weeks animating a brand intro — keyframes, easing curves, colour matching, timing that hits exactly on the beat. It's precise, considered work. Then they export a 4K ProRes file and send it as a WeTransfer link.</p>
              <p>The client downloads it. Opens it in a media player that might play it at the wrong frame rate, or refuses to open the format entirely. They type their feedback in WhatsApp: <strong>"the bit around the middle feels a bit off."</strong> No timestamp. No frame reference. No specificity.</p>
              <p>The artist guesses what "the middle" means and makes changes. Back and forth, four or five rounds. Each time, a new export, a new upload, a new link. The client may or may not remember which version they approved.</p>
              <p>And when it comes to payment — the motion artist has often delivered three versions before receiving anything. The leverage evaporates the moment the first file goes out.</p>
            </div>
            <div>
              <div className="pain-list">
                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">Animation is guessed at, not reviewed</div>
                    <div className="pi-desc">Clients download a file, open it in whatever player they have, and give vague text feedback. "Around 0:03" means nothing when nobody has a shared frame of reference.</div>
                    <div className="pi-impact" style={{background: "rgba(248,113,113,0.07)", borderColor: "rgba(248,113,113,0.2)", color: "var(--red)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                      </svg>
                      Avg 4.8 revision rounds per motion project
                    </div>
                  </div>
                </div>

                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">New link every revision</div>
                    <div className="pi-desc">Every new version means a new export, a new upload, a new link. Clients lose track of which version they're watching. Artists lose track of which notes applied to which cut.</div>
                    <div className="pi-impact" style={{background: "rgba(251,191,36,0.07)", borderColor: "rgba(251,191,36,0.2)", color: "var(--amber)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      Avg 3 new links sent per project
                    </div>
                  </div>
                </div>

                <div className="pain-item">
                  <div className="pi-icon" style={{background: "var(--org)", border: "1px solid var(--orb)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">Loop previews are impossible to share cleanly</div>
                    <div className="pi-desc">Short animation loops — brand idents, icon animations, Instagram story loops — don't have a natural delivery format. They can't be shared as a YouTube link. Clients play them once and screenshot.</div>
                    <div className="pi-impact" style={{background: "var(--org)", borderColor: "var(--orb)", color: "var(--or)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
                      </svg>
                      No standard way to share a looping animation
                    </div>
                  </div>
                </div>

                <div className="pain-item">
                  <div className="pi-icon" style={{background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="11" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="pi-title">No formal approval before payment</div>
                    <div className="pi-desc">The approval for motion work is usually a voice note or a DM. When a client later says "this isn't what I wanted" after receiving the final export, there is no timestamped record to stand on.</div>
                    <div className="pi-impact" style={{background: "rgba(167,139,250,0.07)", borderColor: "rgba(167,139,250,0.2)", color: "var(--purple)"}}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      2–5 weeks from delivery to payment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ REVIEW MISMATCH ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="s-eyebrow">The feedback gap</div>
          <h2 className="s-h2">What "feedback" looks like<br/>before and <em>after Delivami.</em></h2>
          <p className="s-p" style={{maxWidth: "520px"}}>Frame-accurate comments change the entire revision dynamic. Here is the exact difference between a WhatsApp thread and a Delivami review.</p>

          <div className="rm-grid">
            {/* Before */}
            <div className="rm-col bad">
              <div className="rm-col-label" style={{color: "var(--red)"}}>
                <div className="rm-ic" style={{background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </div>
                Before Delivami — feedback arrives like this
              </div>
              <div className="fb-thread">
                <div className="fbt-header">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.58 4.18 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  WhatsApp · Kofi Mensah
                </div>
                <div className="fbt-msg">
                  <div className="fbt-av" style={{background: "rgba(91,164,245,0.1)", border: "1px solid rgba(91,164,245,0.2)", color: "var(--blue)"}}>K</div>
                  <div>
                    <div className="fbt-bubble"><strong>Kofi:</strong> yeah the animation looks good but the logo part at the beginning feels a bit slow</div>
                    <div className="fbt-ts">3:14 PM · Read</div>
                  </div>
                </div>
                <div className="fbt-msg">
                  <div className="fbt-av" style={{background: "var(--org)", border: "1px solid var(--orb)", color: "var(--or)"}}>D</div>
                  <div>
                    <div className="fbt-bubble"><strong>Daniel:</strong> which part exactly? the reveal or the hold?</div>
                    <div className="fbt-ts">3:18 PM · Read</div>
                  </div>
                </div>
                <div className="fbt-msg">
                  <div className="fbt-av" style={{background: "rgba(91,164,245,0.1)", border: "1px solid rgba(91,164,245,0.2)", color: "var(--blue)"}}>K</div>
                  <div>
                    <div className="fbt-bubble"><strong>Kofi:</strong> [🎙 Voice note 0:42]</div>
                    <div className="fbt-ts">3:24 PM · Read</div>
                  </div>
                </div>
                <div className="fbt-msg">
                  <div className="fbt-av" style={{background: "rgba(91,164,245,0.1)", border: "1px solid rgba(91,164,245,0.2)", color: "var(--blue)"}}>K</div>
                  <div>
                    <div className="fbt-bubble"><strong>Kofi:</strong> also the colour in the middle section — it feels different from what we discussed, not sure how to explain</div>
                    <div className="fbt-ts">3:31 PM · Read</div>
                  </div>
                </div>
                <div className="fbt-msg">
                  <div className="fbt-av" style={{background: "var(--org)", border: "1px solid var(--orb)", color: "var(--or)"}}>D</div>
                  <div>
                    <div className="fbt-bubble"><strong>Daniel:</strong> ok ill re-export and send a new link</div>
                    <div className="fbt-ts">4:02 PM</div>
                  </div>
                </div>
              </div>
              <div style={{marginTop: "14px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.65}}>No timestamps. No frame references. A 42-second voice note that says nothing precise. Daniel guesses what to change and re-exports the whole file. This repeats 4.8 times on average.</div>
            </div>

            {/* After */}
            <div className="rm-col good">
              <div className="rm-col-label" style={{color: "var(--or)"}}>
                <div className="rm-ic" style={{background: "var(--org)", border: "1px solid var(--orb)"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                With Delivami — feedback looks like this
              </div>
              <div className="dr-panel">
                <div className="drp-chrome">
                  <div className="drp-dots"><div className="drp-dot" style={{background: "#FF5F57"}}></div><div className="drp-dot" style={{background: "#FEBC2E"}}></div><div className="drp-dot" style={{background: "#28C840"}}></div></div>
                  <div className="drp-url">motion.danielstudio.com/kofi-brands-logo-v3</div>
                </div>
                <div className="drp-video">
                  <div className="drp-video-inner">
                    <div style={{position: "absolute", inset: 0, background: "linear-gradient(145deg,#160a00,#0d0600)"}}></div>
                    <div style={{position: "relative", zIndex: 1, opacity: 0.35}}>
                      <div style={{width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(249,115,22,0.3)"}}></div>
                    </div>
                    <div style={{position: "absolute", top: "8px", right: "9px", fontSize: "8px", fontWeight: 700, padding: "2px 7px", borderRadius: "4px", background: "rgba(6,16,29,0.8)", border: "1px solid var(--orb)", color: "var(--or)"}}>v3 · Current</div>
                  </div>
                  <div className="drp-scrubber">
                    <div className="drp-track">
                      <div className="drp-fill"></div>
                      {/* timestamp markers */}
                      <div style={{position: "absolute", top: "50%", transform: "translate(-50%,-50%)", left: "30%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--amber)", border: "1.5px solid var(--amber)"}}></div>
                      <div style={{position: "absolute", top: "50%", transform: "translate(-50%,-50%)", left: "72%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--red)", border: "1.5px solid var(--red)"}}></div>
                      <div style={{position: "absolute", top: "50%", transform: "translate(-50%,-50%)", left: "55%", width: "9px", height: "9px", borderRadius: "50%", background: "var(--or)", border: "2px solid var(--or)", boxShadow: "0 0 0 2px rgba(249,115,22,0.2)"}}></div>
                    </div>
                    <div style={{display: "flex", fontSize: "9px", color: "var(--muted)", fontFamily: "monospace", gap: "8px"}}>
                      <span style={{color: "var(--or)"}}>0:04</span><span>/</span><span>0:08</span>
                      <span style={{marginLeft: "auto"}}>Click timeline to comment</span>
                    </div>
                  </div>
                </div>
                <div className="drp-comment-row">
                  <div className="drp-c-av">K</div>
                  <div>
                    <div style={{display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px"}}>
                      <span style={{fontSize: "10px", fontWeight: 600, color: "var(--ivory)"}}>Kofi Mensah</span>
                      <div className="drp-c-chip">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        0:02
                      </div>
                    </div>
                    <div className="drp-c-text">Logo reveal easing feels too fast — slow from 0:02 to 0:04 by 20%? Reference: the Apple intro we shared.</div>
                  </div>
                </div>
                <div className="drp-comment-row">
                  <div className="drp-c-av">K</div>
                  <div>
                    <div style={{display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px"}}>
                      <span style={{fontSize: "10px", fontWeight: 600, color: "var(--ivory)"}}>Kofi Mensah</span>
                      <div className="drp-c-chip">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        0:06
                      </div>
                    </div>
                    <div className="drp-c-text">Colour at 0:06 — the gold reads slightly desaturated. Match exact hex #D4AF37 from the brand guide.</div>
                  </div>
                </div>
              </div>
              <div style={{marginTop: "14px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.65}}>Two precise, timestamped notes. Daniel knows exactly which frames need changing. He fixes both in one pass. No guessing. No re-recording voice notes. Revision round takes 45 minutes instead of a day.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ SOLUTION ═══════ */}
      <div className="sec">
        <div className="wrap">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "52px"}}>
            <div>
              <div className="s-eyebrow">The Delivami solution</div>
              <h2 className="s-h2">Four features that<br/><em>transform the motion workflow.</em></h2>
              <p className="s-p">Each targets a specific point where motion delivery breaks down — from the first preview to the final payment.</p>
            </div>
            <div style={{padding: "22px 24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--bdr)"}}>
              <div style={{fontSize: "9.5px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: "12px"}}>What changes immediately</div>
              <div style={{display: "flex", flexDirection: "column", gap: "9px"}}>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>WhatsApp feedback replaced by frame-accurate comments</div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Loop animations play natively in browser, no download</div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Version history — old exports locked, new ones prominent</div>
                <div style={{fontSize: "12.5px", color: "var(--iv2)", display: "flex", alignItems: "center", gap: "8px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Approval is timestamped, versioned, and permanent</div>
              </div>
            </div>
          </div>

          <div className="sol-grid-4">
            <div className="sol-card" style={{"--sol-accent": "var(--or)"} as any}>
              <div className="sol-num">01</div>
              <div className="sol-icon" style={{background: "var(--org)", borderColor: "var(--orb)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              </div>
              <div className="sol-title">In-browser Streaming</div>
              <div className="sol-desc">Clients watch your animation at full quality directly in the browser. No download, no codec issues, no "I can't open the file." Works on mobile.</div>
              <div className="sol-detail">Supports MP4, MOV, ProRes proxy, GIF, WebM. Loops replay automatically. Playback in up to 4K.</div>
            </div>
            <div className="sol-card" style={{"--sol-accent": "var(--amber)"} as any}>
              <div className="sol-num">02</div>
              <div className="sol-icon" style={{background: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.28)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="sol-title">Frame-Accurate Comments</div>
              <div className="sol-desc">Clients click anywhere on the timeline to anchor a comment to that exact frame. You receive "at 0:02, slow the easing by 20%" — not "the beginning bit feels off."</div>
              <div className="sol-detail">Comments group by timestamp. Resolving a note marks it complete. You see which frames have open feedback before opening the clip.</div>
            </div>
            <div className="sol-card" style={{"--sol-accent": "var(--blue)"} as any}>
              <div className="sol-num">03</div>
              <div className="sol-icon" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.28)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
              </div>
              <div className="sol-title">Version History</div>
              <div className="sol-desc">Upload v2, v3, v4 to the same project. Previous versions are automatically locked. The client always sees the current version — and they know it.</div>
              <div className="sol-detail">Old versions remain viewable for your own reference. No more "which link was the latest one?" — there is only ever one page, one current version.</div>
            </div>
            <div className="sol-card" style={{"--sol-accent": "var(--gold)"} as any}>
              <div className="sol-num">04</div>
              <div className="sol-icon" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.28)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="sol-title">Locked Approval + Payment</div>
              <div className="sol-desc">The Approve button creates a timestamped, version-locked record — irrefutable proof of what was agreed. Invoice is created in one click. Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway.</div>
              <div className="sol-detail">Approval certificate records client name, date, time, version and files. No future dispute is possible. Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway.</div>
            </div>
          </div>

          {/* ═══ LOOP PREVIEW DEMO ═══ */}
          <div className="loop-demo">
            <div className="ld-kente"></div>
            <div className="ld-inner">
              <div className="ld-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                Deliver multiple formats in one link — 16:9, 9:16, 1:1 — all in the same project
              </div>
              <div className="ld-cards">
                {/* 16:9 */}
                <div className="ld-card">
                  <div className="ld-video a16">
                    <div style={{position: "absolute", inset: 0, background: "linear-gradient(145deg,#120800,#0c0500)"}}></div>
                    <div style={{position: "absolute", inset: 0}}><div style={{width: "60px", height: "60px", borderRadius: "50%", border: "1px solid rgba(249,115,22,0.2)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 8s linear infinite"}}></div></div>
                    <div className="ld-overlay" style={{position: "relative", zIndex: 2}}>
                      <div className="ld-play" style={{background: "var(--org)", borderColor: "var(--orb)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
                    </div>
                    <div className="ld-looping" style={{background: "rgba(6,16,29,0.85)", borderColor: "var(--orb)", color: "var(--or)"}}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                      Loop
                    </div>
                  </div>
                  <div className="ld-footer">
                    <div className="ld-title">Brand Ident · Full</div>
                    <div className="ld-meta">
                      <span>0:08 · 1920×1080</span>
                      <div style={{display: "flex", gap: "5px"}}><div className="ld-ratio-pill">16:9</div><div className="ld-badge" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>Approved</div></div>
                    </div>
                  </div>
                </div>

                {/* 9:16 vertical */}
                <div className="ld-card">
                  <div className="ld-video a9">
                    <div style={{position: "absolute", inset: 0, background: "linear-gradient(145deg,#0a0c1a,#060810)"}}></div>
                    <div style={{position: "absolute", inset: 0}}><div style={{width: "50px", height: "50px", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.25)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 6s linear infinite reverse"}}></div></div>
                    <div className="ld-overlay" style={{position: "relative", zIndex: 2}}>
                      <div className="ld-play" style={{background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.28)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
                    </div>
                    <div className="ld-looping" style={{background: "rgba(6,16,29,0.85)", borderColor: "rgba(167,139,250,0.25)", color: "var(--purple)"}}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                      Loop
                    </div>
                  </div>
                  <div className="ld-footer">
                    <div className="ld-title">Story Cut · Vertical</div>
                    <div className="ld-meta">
                      <span>0:08 · 1080×1920</span>
                      <div style={{display: "flex", gap: "5px"}}><div className="ld-ratio-pill">9:16</div><div className="ld-badge" style={{background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.2)", color: "var(--amber)"}}>Review</div></div>
                    </div>
                  </div>
                </div>

                {/* 1:1 square */}
                <div className="ld-card">
                  <div className="ld-video a1">
                    <div style={{position: "absolute", inset: 0, background: "linear-gradient(145deg,#0a1200,#060d00)"}}></div>
                    <div style={{position: "absolute", inset: 0}}><div style={{width: "55px", height: "55px", borderRadius: "8px", border: "1px solid rgba(53,208,115,0.2)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(0deg)", animation: "spin 10s linear infinite"}}></div></div>
                    <div className="ld-overlay" style={{position: "relative", zIndex: 2}}>
                      <div className="ld-play" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.28)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
                    </div>
                    <div className="ld-looping" style={{background: "rgba(6,16,29,0.85)", borderColor: "rgba(53,208,115,0.25)", color: "var(--green)"}}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                      Loop
                    </div>
                  </div>
                  <div className="ld-footer">
                    <div className="ld-title">Feed Post · Square</div>
                    <div className="ld-meta">
                      <span>0:08 · 1080×1080</span>
                      <div style={{display: "flex", gap: "5px"}}><div className="ld-ratio-pill">1:1</div><div className="ld-badge" style={{background: "rgba(53,208,115,0.08)", borderColor: "rgba(53,208,115,0.2)", color: "var(--green)"}}>Approved</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow strip */}
          <div className="flow-strip">
            <div className="fs-step">
              <div className="fs-num">01</div>
              <div className="fs-ic" style={{background: "var(--org)", borderColor: "var(--orb)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/></svg></div>
              <div className="fs-label">Upload export</div>
              <div className="fs-sub">MP4, MOV, ProRes, GIF — any format</div>
            </div>
            <div className="fs-step">
              <div className="fs-num">02</div>
              <div className="fs-ic" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.25)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
              <div className="fs-label">Send one link</div>
              <div className="fs-sub">Branded page, plays in browser</div>
            </div>
            <div className="fs-step">
              <div className="fs-num">03</div>
              <div className="fs-ic" style={{background: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.25)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div className="fs-label">Timestamped notes</div>
              <div className="fs-sub">Client clicks the frame, types the note</div>
            </div>
            <div className="fs-step">
              <div className="fs-num">04</div>
              <div className="fs-ic" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.25)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div className="fs-label">Locked approval</div>
              <div className="fs-sub">Timestamped, version-tagged, permanent</div>
            </div>
            <div className="fs-step">
              <div className="fs-num">05</div>
              <div className="fs-ic" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.25)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <div className="fs-label">Payment within 24-48 hours</div>
              <div className="fs-sub">Mobile Money or Bank · no follow-up</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ BEFORE / AFTER ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="s-eyebrow">The difference</div>
          <h2 className="s-h2">The same explainer project.<br/><em>Two completely different experiences.</em></h2>
          <p className="s-p" style={{maxWidth: "520px"}}>Daniel Mwangi in Nairobi. 90-second explainer video. Brand animation package. Same client type. Before and after Delivami.</p>

          <div className="ba-grid">
            <div className="ba-card" style={{background: "rgba(248,113,113,0.015)"}}>
              <div className="ba-header" style={{background: "rgba(248,113,113,0.04)", borderColor: "rgba(248,113,113,0.15)"}}>
                <div style={{width: "26px", height: "26px", borderRadius: "8px", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                <span className="ba-label" style={{color: "var(--red)"}}>Before Delivami</span>
              </div>
              <div className="ba-rows">
                <div className="ba-row"><div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>Exports finished v1 as a 1.2GB ProRes file. Uploads to WeTransfer. Client tries to download on mobile — the file is too large to download on cellular. Asks for a compressed version. Daniel re-exports.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>Client watches on laptop. Sends three WhatsApp messages and a 1-minute voice note. Notes are vague: "the text animation near the end" and "the logo feels off." Daniel guesses at both.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>v2 uploaded. New WeTransfer link. Client says the WeTransfer expired — they hadn't downloaded v1. Daniel sends again. Reviews happen out of order because the client is switching between old and new links.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.18)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>After 5 rounds and four weeks, the client says "this is it!" in a DM. Daniel sends a PDF invoice. Waits two weeks. Follows up. Gets paid on week six.</div>
              </div>
              <div className="ba-summary" style={{color: "var(--red)"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                5 revision rounds · 6 weeks from delivery to payment
              </div>
            </div>

            <div className="ba-card" style={{background: "rgba(249,115,22,0.012)"}}>
              <div className="ba-header" style={{background: "var(--org)", borderColor: "var(--orb)"}}>
                <div style={{width: "26px", height: "26px", borderRadius: "8px", background: "var(--org)", border: "1px solid var(--orb)", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                <span className="ba-label" style={{color: "var(--or)"}}>With Delivami</span>
              </div>
              <div className="ba-rows">
                <div className="ba-row"><div className="ba-ic" style={{background: "var(--org)", border: "1px solid var(--orb)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>Uploads the ProRes master. Delivami streams a compressed version to the client automatically. Opens instantly on mobile and laptop. No download, no codec issues. Client watches it three times in a row.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "var(--org)", border: "1px solid var(--orb)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>Client clicks the scrubber at 1:14 and types "the text typewriter effect here — too slow, speed up 30%." Clicks 1:38, types "logo fade out — reduce opacity faster, current easing is abrupt." Two precise, actionable notes.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "var(--org)", border: "1px solid var(--orb)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>Daniel uploads v2 to the same project. v1 locks automatically. Client gets a notification. Opens the same page — now showing v2 clearly. Gives one more note. Daniel fixes it in 30 minutes. Uploads v3.</div>
                <div className="ba-row"><div className="ba-ic" style={{background: "var(--org)", border: "1px solid var(--orb)"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>Client clicks Approve. Timestamp, version, name — all locked. Daniel creates the invoice in one click from the approval screen. Client pays securely. Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway.</div>
              </div>
              <div className="ba-summary" style={{color: "var(--green)"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                2 revision rounds · Payment within 24-48 hours
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
            <h2 className="s-h2" style={{textAlign: "center"}}>What motion artists report<br/><em>after switching.</em></h2>
            <p className="s-p" style={{textAlign: "center", maxWidth: "420px", margin: "0 auto"}}>Across motion graphics artists in Nigeria, Cameroon, Ghana and South Africa using Delivami for animation delivery.</p>
          </div>
          <div className="impact-row">
            <div className="impact-item" style={{"--ii-glow": "var(--org)"} as any}>
              <div className="ii-val" style={{color: "var(--or)"}}>70%</div>
              <div className="ii-label">Fewer revision rounds with frame-accurate timestamped feedback</div>
              <div className="ii-detail">was 4.8 avg · now 1.4 avg</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(251,191,36,0.1)"} as any}>
              <div className="ii-val" style={{color: "var(--amber)"}}>Same<br/><span style={{fontSize: "0.5em"}}>day</span></div>
              <div className="ii-label">Payment after approval — no invoice chasing, no follow-up calls</div>
              <div className="ii-detail">was 2–5 weeks avg</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(53,208,115,0.1)"} as any}>
              <div className="ii-val" style={{color: "var(--green)"}}>0</div>
              <div className="ii-label">Codec or download failures — everything streams natively in browser</div>
              <div className="ii-detail">was a daily frustration</div>
            </div>
            <div className="impact-item" style={{"--ii-glow": "rgba(212,175,55,0.1)"} as any}>
              <div className="ii-val" style={{color: "var(--gold)"}}>6h</div>
              <div className="ii-label">Saved per project week — less time managing re-exports and version confusion</div>
              <div className="ii-detail">back into creative work</div>
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
                <span className="tw-qm">"</span>
                Motion work is built in frames. Every keyframe matters. When a client says "the middle bit feels off" with no timestamp, I am guessing. I re-export the whole thing, re-upload, re-send a link. It costs me half a day per revision. With Delivami, my last client left a comment at 0:02 that said exactly what the easing curve needed. I fixed it in forty minutes. The whole revision cycle was done by lunch. And I had the money by evening.
              </p>
              <div className="tw-person">
                <div className="tw-av">D</div>
                <div>
                  <div className="tw-name">Daniel Mwangi</div>
                  <div className="tw-role">Motion Designer &amp; Animator · Nairobi, Kenya · 5 years freelance</div>
                </div>
              </div>
            </div>
            <div className="tw-right">
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--or)"}}>40min</div>
                <div className="tw-sl">First Delivami revision cycle — was a full day before</div>
              </div>
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--gold)"}}>Within 24-48 hours</div>
                <div className="tw-sl">Payment via secure link after client approval</div>
              </div>
              <div className="tw-stat">
                <div className="tw-sv" style={{color: "var(--green)"}}>90 days</div>
                <div className="tw-sl">Time from switching to Delivami to going full-time freelance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ WORKFLOW ═══════ */}
      <div className="sec">
        <div className="wrap">
          <div className="wf-grid">
            <div>
              <div className="s-eyebrow">How the workflow changes</div>
              <h2 className="s-h2">What Delivami replaces<br/>step by <em>step.</em></h2>
              <p className="s-p" style={{marginBottom: "32px"}}>Every painful step in the motion delivery process has a direct Delivami replacement. Nothing added — every friction point removed.</p>
              <div className="wf-timeline">
                <div className="wt-item">
                  <div className="wt-left"><div className="wt-dot" style={{background: "var(--org)", borderColor: "var(--orb)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--or)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg></div></div>
                  <div className="wt-body">
                    <div className="wt-title">Streaming delivery replaces WeTransfer</div>
                    <div className="wt-text">Upload your export once. Delivami streams it at the right quality for every device — 4K on desktop, compressed on mobile — with no download required and no expiry date.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left"><div className="wt-dot" style={{background: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.3)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div></div>
                  <div className="wt-body">
                    <div className="wt-title">Frame-accurate comments replace voice notes</div>
                    <div className="wt-text">Clients click a point on the timeline and type their note. "At 1:14, the typewriter effect is too slow." That is all you need. No guessing. No decoding. You fix the right frame the first time.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left"><div className="wt-dot" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.3)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/></svg></div></div>
                  <div className="wt-body">
                    <div className="wt-title">Version history replaces link chaos</div>
                    <div className="wt-text">Every new export is uploaded to the same project. The client always sees the current version. Previous versions are archived — viewable but locked. One page, one current cut, no confusion.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left"><div className="wt-dot" style={{background: "rgba(53,208,115,0.1)", borderColor: "rgba(53,208,115,0.3)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div></div>
                  <div className="wt-body">
                    <div className="wt-title">Timestamped approval replaces the DM sign-off</div>
                    <div className="wt-text">The Approve button generates a permanent record: client name, date, time, version. It is irrefutable. No future scope creep conversation can survive a timestamped approval certificate.</div>
                  </div>
                </div>
                <div className="wt-item">
                  <div className="wt-left"><div className="wt-dot" style={{background: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.4)", boxShadow: "0 0 0 3px rgba(212,175,55,0.08)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div></div>
                  <div className="wt-body" style={{paddingBottom: "0"}}>
                    <div className="wt-title" style={{color: "var(--gold)"}}>Payment within 24-48 hours replaces the invoice wait</div>
                    <div className="wt-text">One click from the approval screen creates the invoice. Client pays remotely. Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway. You never have to send a follow-up message again.</div>
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
                <div className="ct-row"><div className="ct-cell topic">File delivery</div><div className="ct-cell before">WeTransfer / Google Drive</div><div className="ct-cell after">Streams in browser, any device</div></div>
                <div className="ct-row"><div className="ct-cell topic">Loop previews</div><div className="ct-cell before">No clean way to share a loop</div><div className="ct-cell after">Loops replay natively in browser</div></div>
                <div className="ct-row"><div className="ct-cell topic">Client feedback</div><div className="ct-cell before">WhatsApp voice notes &amp; texts</div><div className="ct-cell after">Timestamped comments on timeline</div></div>
                <div className="ct-row"><div className="ct-cell topic">Versioning</div><div className="ct-cell before">New link per export</div><div className="ct-cell after">Same project, versions locked</div></div>
                <div className="ct-row"><div className="ct-cell topic">Approval</div><div className="ct-cell before">"Looks good!" in DMs</div><div className="ct-cell after">Timestamped, version-locked record</div></div>
                <div className="ct-row"><div className="ct-cell topic">Multi-ratio delivery</div><div className="ct-cell before">Separate link per format</div><div className="ct-cell after">16:9, 9:16, 1:1 in one project</div></div>
                <div className="ct-row"><div className="ct-cell topic">Payment</div><div className="ct-cell before">PDF invoice, chased for weeks</div><div className="ct-cell after">One-click Mobile Money / Bank</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ OTHER ROLES ═══════ */}
      <div className="sec-mid">
        <div className="wrap">
          <div className="s-eyebrow">Other disciplines</div>
          <h2 className="s-h2">The same infrastructure<br/>built for <em>every creative role.</em></h2>
          <p className="s-p" style={{maxWidth: "480px"}}>Each discipline has its own friction. Each has its own solution page built around it.</p>
          <div className="roles-grid">
            <Link className="role-card" href="/case-studies/video-editors">
              <div className="rc-icon" style={{background: "rgba(91,164,245,0.1)", borderColor: "rgba(91,164,245,0.25)"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg></div>
              <div className="rc-title">Video Editors</div>
              <div className="rc-sub">4K streaming, frame-accurate comments, version history. Revision rounds cut by 60%.</div>
              <div className="rc-link" style={{color: "var(--blue)"}}>See the solution <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
            </Link>
            <Link className="role-card" href="/case-studies/photographers">
              <div className="rc-icon" style={{background: "rgba(45,212,191,0.1)", borderColor: "rgba(45,212,191,0.25)"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div>
              <div className="rc-title">Photographers</div>
              <div className="rc-sub">Pay-to-unlock gallery, permanent delivery link, payment within 24-48 hours. Zero late invoices.</div>
              <div className="rc-link" style={{color: "#2DD4BF"}}>See the solution <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
            </Link>
            <Link className="role-card" href="/case-studies/designers">
              <div className="rc-icon" style={{background: "rgba(167,139,250,0.1)", borderColor: "rgba(167,139,250,0.25)"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div>
              <div className="rc-title">Designers &amp; UI/UX</div>
              <div className="rc-sub">White-labelled delivery, version history, timestamped sign-off. Stop scope creep cold.</div>
              <div className="rc-link" style={{color: "var(--purple)"}}>See the solution <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="cta-sec">
        <div className="cta-bg"></div>
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "22px", position: "relative", zIndex: 1}}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Your motion work deserves better
        </div>
        <h2 className="cta-h2">Stop guessing what<br/>"the middle bit" <em>means.</em></h2>
        <p className="cta-sub">Your first delivery link takes thirty seconds to create.</p>
        <div className="cta-btns">
          
          <Link href="/case-studies" className="btn-g">View all case studies</Link>
        </div>
      </div>
    </>
  );
}
