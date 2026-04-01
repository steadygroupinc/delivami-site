"use client";

import Link from "next/link";
import "./video-editors.css";

export default function VideoEditorsCaseStudy() {
  return (
    <>
      <div className="kente" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}></div>      <div className="ve-shell">
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <Link href="/case-studies" className="bc-link">Case Studies</Link>
          <span className="bc-sep">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
          <span className="bc-current">Video Editors</span>
        </div>

        {/* ═══════ HERO ═══════ */}
        <div className="hero">
          <div className="hero-bg"></div>
          <div className="hero-grid"></div>
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              Case Study &nbsp;&middot;&nbsp; Video Production
            </div>
            <h1 className="hero-h1">
              Stop sending storage links.
              <em>Start delivering experiences.</em>
            </h1>
            <p className="hero-deck">How professional video editors across Africa use Delivami to cut review cycles by 60%, deliver 4K assets without storage limits, and get paid within 24–48 hours of an approval confirmed.</p>

            <div className="hero-strip">
              <div className="hs-item">
                <div className="hs-label">Discipline</div>
                <div className="hs-val"><span>Video Editing</span> &amp; Post</div>
              </div>
              <div className="hs-item">
                <div className="hs-label">Avg revision rounds</div>
                <div className="hs-val">Down to <span>1.4</span> from 4.2</div>
              </div>
              <div className="hs-item">
                <div className="hs-label">Payment settlement</div>
                <div className="hs-val"><span>24–48 hours</span> after payment</div>
              </div>
              <div className="hs-item">
                
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ THE CHALLENGE ═══════ */}
        <div className="sec">
          <div className="wrap">
            <div className="s-eyebrow">The challenge</div>
            <h2 className="s-h2">The work is excellent.<br />The delivery <em>system is broken.</em></h2>

            <div className="challenge-grid">
              {/* Narrative left */}
              <div className="challenge-narrative">
                <p>Video editors in Africa face a paradox. The quality of post-production work coming out of Lagos, Nairobi, Accra and Johannesburg is competitive with any market in the world. The infrastructure around delivering that work is not.</p>
                <p>Large files get uploaded to Google Drive, Dropbox, or WeTransfer — each with download limits, expiry dates, and no way to stream directly in the browser. Feedback arrives in a WhatsApp thread, sometimes a voice note, sometimes a screenshot with arrows drawn on it. Revisions pile up because nobody is certain which note applied to which version.</p>
                <p>Then comes the invoice. Sent as a PDF. Followed up over the phone. Chased for weeks. Sometimes never paid at all — because the client says they "never officially approved anything."</p>
                <p>This is not a workflow problem. It is an infrastructure problem. And it costs African video editors hundreds of hours and thousands of cedis, naira and shillings every year.</p>
              </div>

              {/* Pain points right */}
              <div>
                <div className="pain-list">
                  <div className="pain-item">
                    <div className="pi-icon" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                      <div className="pi-title">Fragmented feedback</div>
                      <div className="pi-desc">Notes across WhatsApp, email and voice messages. No timestamps. No version reference. Editors spend more time reconciling feedback than implementing it.</div>
                      <div className="pi-impact" style={{ background: 'rgba(248,113,113,0.07)', borderColor: 'rgba(248,113,113,0.2)', color: '#F87171' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                        Avg 4.2 revision rounds per project
                      </div>
                    </div>
                  </div>

                  <div className="pain-item">
                    <div className="pi-icon" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    </div>
                    <div>
                      <div className="pi-title">Delivery bottlenecks</div>
                      <div className="pi-desc">4K files mean uploading to multiple services, only for clients to forget passwords or hit download limits. No in-browser streaming means clients don't review immediately.</div>
                      <div className="pi-impact" style={{ background: 'rgba(251,191,36,0.07)', borderColor: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        Avg 3–5 days before a client opens the file
                      </div>
                    </div>
                  </div>

                  <div className="pain-item">
                    <div className="pi-icon" style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="11" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <div>
                      <div className="pi-title">No approval record</div>
                      <div className="pi-desc">When the only approval is "looks great!" in a chat thread, there is nothing to stand on when a client disputes the work weeks later. And they do.</div>
                      <div className="pi-impact" style={{ background: 'rgba(167,139,250,0.07)', borderColor: 'rgba(167,139,250,0.2)', color: '#A78BFA' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        1 in 3 projects has some form of approval dispute
                      </div>
                    </div>
                  </div>

                  <div className="pain-item">
                    <div className="pi-icon" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/></svg>
                    </div>
                    <div>
                      <div className="pi-title">Invoice black holes</div>
                      <div className="pi-desc">PDF invoices sent over email have no read receipts, no reminder system, no payment link. Following up means phone calls, which means awkwardness, which means delay.</div>
                      <div className="pi-impact" style={{ background: 'rgba(248,113,113,0.07)', borderColor: 'rgba(248,113,113,0.2)', color: '#F87171' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        Avg 3 weeks from project approval to payment
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
            <h2 className="s-h2">The same project.<br />Two completely <em>different realities.</em></h2>
            <p className="s-p" style={{ maxWidth: '540px' }}>Here is what delivering a brand film looks like with the old workflow versus with Delivami. Same editor, same quality, same client.</p>

            <div className="ba-grid">
              {/* Before */}
              <div className="ba-card" style={{ background: 'rgba(248,113,113,0.02)' }}>
                <div className="ba-header" style={{ background: 'rgba(248,113,113,0.04)', borderColor: 'rgba(248,113,113,0.15)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <span className="ba-label" style={{ color: '#F87171' }}>Before Delivami</span>
                </div>
                <div className="ba-rows">
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                    Upload 4K file to Google Drive. Share link. Client can't open it — wrong Google account.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                    Client downloads and watches on phone. Sends feedback in three separate WhatsApp messages and a 2-minute voice note.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                    Editor re-works. Uploads v2 to a different link. Sends over email. Goes unread for 4 days.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                    Another round of changes. Client says "yeah looks good!" in DMs. Editor takes that as approval.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                    Sends PDF invoice by email. Waits. Follows up. Calls. Waits three more weeks. Sometimes gets paid.
                  </div>
                  <div className="ba-row" style={{ background: 'rgba(248,113,113,0.03)' }}>
                    <div className="ba-ic" style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                    <span style={{ color: '#F87171', fontWeight: '500' }}>Total time: 4–6 weeks from delivery to payment</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="ba-card" style={{ background: 'rgba(53,208,115,0.02)' }}>
                <div className="ba-header" style={{ background: 'rgba(53,208,115,0.04)', borderColor: 'rgba(53,208,115,0.15)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(53,208,115,0.1)', border: '1px solid rgba(53,208,115,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <span className="ba-label" style={{ color: '#35D073' }}>With Delivami</span>
                </div>
                <div className="ba-rows">
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.08)', border: '1px solid rgba(53,208,115,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Upload once to Cloudflare R2. File streams at 4K in the browser — no account, no download, works on any device.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.08)', border: '1px solid rgba(53,208,115,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Client watches inline and drops timestamped comments directly on the exact frame — "at 0:45, the logo reveal feels rushed."
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.08)', border: '1px solid rgba(53,208,115,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Editor uploads v2 to the same project. Previous version locked. Client gets notified automatically.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.08)', border: '1px solid rgba(53,208,115,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Client clicks Approve. Timestamp, name and version are locked permanently. No disputes possible.
                  </div>
                  <div className="ba-row">
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.08)', border: '1px solid rgba(53,208,115,0.18)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    Invoice generated from the same dashboard. Client pays via MoMo or bank. Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway. Editor downloads the receipt.
                  </div>
                  <div className="ba-row" style={{ background: 'rgba(53,208,115,0.03)' }}>
                    <div className="ba-ic" style={{ background: 'rgba(53,208,115,0.1)', border: '1px solid rgba(53,208,115,0.25)' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#35D073" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    <span style={{ color: '#35D073', fontWeight: '500' }}>Total time: 2–3 days from delivery to payout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ THE SOLUTION ═══════ */}
        <div className="sec">
          <div className="wrap">
            <div className="solution-header">
              <div>
                <div className="s-eyebrow">The Delivami solution</div>
                <h2 className="s-h2">Three features that<br /><em>transform the workflow.</em></h2>
                <p className="s-p">Each one targets a specific point of failure in the way video editors currently deliver work.</p>
              </div>
              <div style={{ padding: '20px 24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.068)' }}>
                <div style={{ fontSize: '9.5px', letterSpacing: '2px', textTransform: 'uppercase', color: '#5E7080', fontWeight: '600', marginBottom: '10px' }}>What changes</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ fontSize: '12.5px', color: 'rgba(242, 237, 227, 0.62)', display: 'flex', alignItems: 'center', gap: '7px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Fragmented feedback becomes frame-accurate</div>
                  <div style={{ fontSize: '12.5px', color: 'rgba(242, 237, 227, 0.62)', display: 'flex', alignItems: 'center', gap: '7px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Storage links become branded delivery pages</div>
                  <div style={{ fontSize: '12.5px', color: 'rgba(242, 237, 227, 0.62)', display: 'flex', alignItems: 'center', gap: '7px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Chat approvals become timestamped records</div>
                  <div style={{ fontSize: '12.5px', color: 'rgba(242, 237, 227, 0.62)', display: 'flex', alignItems: 'center', gap: '7px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5BA4F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>PDF invoices become instant mobile payments</div>
                </div>
              </div>
            </div>

            <div className="solution-grid">
              <div className="sol-card" style={{ padding: '28px 24px' }}>
                <div className="sol-num">01</div>
                <div className="sol-icon" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                </div>
                <div className="sol-title">4K Streaming Delivery</div>
                <div className="sol-desc">Upload once to Cloudflare R2. Your client streams the full file at full resolution — in the browser, on any device, with no account required. No download limits, no expiry, no re-uploading.</div>
                <div className="sol-detail">Works on desktop and mobile. Plays in 4K. Supports MP4, MOV, and ProRes proxy. Up to 5GB per file on the free plan.</div>
              </div>

              <div className="sol-card" style={{ padding: '28px 24px' }}>
                <div className="sol-num">02</div>
                <div className="sol-icon" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="sol-title">Frame-Accurate Review</div>
                <div className="sol-desc">Clients click a timestamp marker directly on the video scrubber to leave a comment. Every note is anchored to a specific frame — not a vague paragraph in a chat message.</div>
                <div className="sol-detail">Comments appear in grouped threads per timestamp. Editors see exactly where on the timeline each note applies. Resolving a thread marks it done.</div>
              </div>

              <div className="sol-card" style={{ padding: '28px 24px' }}>
                <div className="sol-num">03</div>
                <div className="sol-icon" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.28)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="sol-title">Locked Approval + Payout</div>
                <div className="sol-desc">When the client clicks Approve, the action is timestamped, version-tagged and locked permanently. An invoice is created from the same screen. Payouts to your account typically settle in 24–48 hours.</div>
                <div className="sol-detail">The approval certificate includes client name, date, time, version number and file count. Irrefutable. No disputes possible.</div>
              </div>
            </div>

            {/* Flow strip */}
            <div className="flow-strip">
              <div className="flow-step">
                <div className="fs-num">01</div>
                <div className="fs-icon" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                </div>
                <div className="fs-label">Upload</div>
                <div className="fs-sub">4K to R2, streams instantly</div>
              </div>
              <div className="flow-step">
                <div className="fs-num">02</div>
                <div className="fs-icon" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div className="fs-label">Send one link</div>
                <div className="fs-sub">Branded delivery page, no login</div>
              </div>
              <div className="flow-step">
                <div className="fs-num">03</div>
                <div className="fs-icon" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="fs-label">Review &amp; comment</div>
                <div className="fs-sub">Timestamped on the timeline</div>
              </div>
              <div className="flow-step">
                <div className="fs-num">04</div>
                <div className="fs-icon" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="fs-label">Locked approval</div>
                <div className="fs-sub">Timestamped, permanent, irrefutable</div>
              </div>
              <div className="flow-step">
                <div className="fs-num">05</div>
                <div className="fs-icon" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.25)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="fs-label">Fast payout</div>
                <div className="fs-sub">MoMo or bank, 24–48h</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ IMPACT NUMBERS ═══════ */}
        <div className="sec-mid">
          <div className="wrap">
            <div className="s-eyebrow" style={{ justifyContent: 'center', textAlign: 'center' }}>The numbers</div>
            <h2 className="s-h2" style={{ textAlign: 'center', marginBottom: '8px' }}>What changes when<br />the infrastructure <em>actually works.</em></h2>
            <p className="s-p" style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>Aggregated across video editors using Delivami in Ghana, Nigeria, Cameroon and South Africa.</p>

            <div className="impact-row">
              <div className="impact-item" style={{ '--ii-glow': 'rgba(91,164,245,0.12)' } as any}>
                <div className="ii-val" style={{ color: 'var(--blue)' }}>3x</div>
                <div className="ii-label">Faster approvals from first delivery to confirmed sign-off</div>
                <div className="ii-detail">was 6+ days &middot; now 36–48h</div>
              </div>

              <div className="impact-item" style={{ '--ii-glow': 'rgba(53,208,115,0.1)' } as any}>
                <div className="ii-val" style={{ color: 'var(--green)' }}>0</div>
                <div className="ii-label">Disputed approvals for editors using Delivami's locked record</div>
                <div className="ii-detail">was 1 in 3 projects</div>
              </div>

              <div className="impact-item" style={{ '--ii-glow': 'rgba(212,175,55,0.1)' } as any}>
                <div className="ii-val" style={{ color: 'var(--gold)' }}>60%</div>
                <div className="ii-label">Reduction in revision rounds with frame-accurate timestamped comments</div>
                <div className="ii-detail">was 4.2 avg &middot; now 1.4 avg</div>
              </div>

              <div className="impact-item" style={{ '--ii-glow': 'rgba(167,139,250,0.1)' } as any}>
                <div className="ii-val" style={{ color: 'var(--purple)' }}>24–48h</div>
                <div className="ii-label">Typical settlement time for payouts to local accounts</div>
                <div className="ii-detail">was 3 weeks avg</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ TESTIMONIAL ═══════ */}
        <div className="testi-sec">
          <div className="wrap">
            <div className="testi-inner">
              <div className="ti-left">
                <div className="ti-kente"></div>
                <p className="ti-text">
                  <span className="ti-quote-mark">"</span>
                  Before Delivami I had a client dispute a project approval because he said he never officially signed off on it. The only record I had was "this looks great!" in a WhatsApp message. I redid two weeks of work at my own cost. With Delivami, the same type of client clicked Approve at 6:18 PM on a Tuesday and I had the money in my MoMo within the 48-hour settlement window. There was nothing to argue with.
                </p>
                <div className="ti-person">
                  <div className="ti-av">T</div>
                  <div>
                    <div className="ti-name">Tunde Okonkwo</div>
                    <div className="ti-role">Motion Designer &middot; Lagos, Nigeria &middot; 4 years freelance</div>
                  </div>
                </div>
              </div>
              <div className="ti-right">
                <div className="ti-stat">
                  <div className="ti-stat-val" style={{ color: 'var(--green)' }}>48h</div>
                  <div className="ti-stat-label">Delivery to payout on first Delivami project</div>
                </div>
                <div className="ti-stat">
                  <div className="ti-stat-val" style={{ color: 'var(--gold)' }}>0</div>
                  <div className="ti-stat-label">Approval disputes since switching</div>
                </div>
                <div className="ti-stat">
                  <div className="ti-stat-val" style={{ color: 'var(--blue)' }}>11</div>
                  <div className="ti-stat-label">Projects delivered in first 60 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ DEEP DIVE: WORKFLOW COMPARISON ═══════ */}
        <div className="workflow-sec">
          <div className="wrap">
            <div className="workflow-grid">
              <div>
                <div className="s-eyebrow">How the workflow changes</div>
                <h2 className="s-h2">What Delivami<br />replaces — step by <em>step.</em></h2>
                <p className="s-p" style={{ marginBottom: '32px' }}>Each step of the old workflow has a direct Delivami equivalent. Nothing is added to your process — things are replaced and made better.</p>

                <div className="workflow-timeline">
                  <div className="wt-item">
                    <div className="wt-left">
                      <div className="wt-dot" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.3)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                      </div>
                      <div className="wt-year">Step 1</div>
                    </div>
                    <div className="wt-body">
                      <div className="wt-title">Upload replaces file sharing</div>
                      <div className="wt-text">Instead of uploading to Drive and sending a link that may expire or require login, you upload directly to your Delivami project. Cloudflare R2 handles delivery globally at full quality.</div>
                    </div>
                  </div>
                  <div className="wt-item">
                    <div className="wt-left">
                      <div className="wt-dot" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.3)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      </div>
                      <div className="wt-year">Step 2</div>
                    </div>
                    <div className="wt-body">
                      <div className="wt-title">Delivery link replaces the email attachment</div>
                      <div className="wt-text">One link opens a branded page with your studio name and colours. The client sees your work presented professionally — not as an attachment in a Gmail thread.</div>
                    </div>
                  </div>
                  <div className="wt-item">
                    <div className="wt-left">
                      <div className="wt-dot" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.3)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <div className="wt-year">Step 3</div>
                    </div>
                    <div className="wt-body">
                      <div className="wt-title">Timeline comments replace WhatsApp feedback</div>
                      <div className="wt-text">The client clicks a point on the scrubber and types their note. You receive a comment anchored to 0:45, not a voice message you have to decode. Revision rounds drop because notes are precise.</div>
                    </div>
                  </div>
                  <div className="wt-item">
                    <div className="wt-left">
                      <div className="wt-dot" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.3)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div className="wt-year">Step 4</div>
                    </div>
                    <div className="wt-body">
                      <div className="wt-title">Timestamped approval replaces the chat sign-off</div>
                      <div className="wt-text">The Approve button creates a permanent record: client name, date, time, version number, files approved. This is the record that protects you if the client later claims they never signed off.</div>
                    </div>
                  </div>
                  <div className="wt-item">
                    <div className="wt-left">
                      <div className="wt-dot" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.35)', boxShadow: '0 0 0 3px rgba(212,175,55,0.08)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      </div>
                      <div className="wt-year" style={{ color: 'var(--gold)' }}>Step 5</div>
                    </div>
                    <div className="wt-body" style={{ paddingBottom: '0' }}>
                      <div className="wt-title" style={{ color: 'var(--gold)' }}>Mobile payout replaces the invoice chase</div>
                      <div className="wt-text">Invoice is created from the approval screen in one click. Client pays via MTN MoMo, Telecel, M-Pesa or bank transfer. Funds are typically settled to your Mobile Money or Bank account within 24–48 hours of a successful payment. No awkward follow-up messages.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison table */}
              <div>
                <div style={{ fontSize: '9.5px', letterSpacing: '2px', textTransform: 'uppercase', color: '#5E7080', fontWeight: '600', marginBottom: '14px' }}>Tool-by-tool comparison</div>
                <div className="comparison-table">
                  <div className="ct-header">
                    <div className="cth">Task</div>
                    <div className="cth">Old tool</div>
                    <div className="cth">Delivami</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">File delivery</div>
                    <div className="ct-cell before">Google Drive / WeTransfer</div>
                    <div className="ct-cell after">R2 — streams in browser, no login</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Client review</div>
                    <div className="ct-cell before">Download + watch locally</div>
                    <div className="ct-cell after">4K playback in the browser</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Feedback</div>
                    <div className="ct-cell before">WhatsApp / voice notes / email</div>
                    <div className="ct-cell after">Timestamped comments on timeline</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Versioning</div>
                    <div className="ct-cell before">v1_final_REAL_final.mp4</div>
                    <div className="ct-cell after">Version history, previous versions locked</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Approval</div>
                    <div className="ct-cell before">"Looks great!" in DMs</div>
                    <div className="ct-cell after">Timestamped, permanent, versioned</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Invoice</div>
                    <div className="ct-cell before">PDF sent over email</div>
                    <div className="ct-cell after">One-click, trackable payment link</div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-cell topic">Payouts</div>
                    <div className="ct-cell before">Bank transfer, chased manually</div>
                    <div className="ct-cell after">MoMo / bank, 24–48h, automated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ OTHER ROLES ═══════ */}
        <div className="other-roles-sec">
          <div className="wrap">
            <div className="s-eyebrow">Other creative roles</div>
            <h2 className="s-h2">The same infrastructure<br />built for <em>every discipline.</em></h2>
            <p className="s-p" style={{ maxWidth: '480px' }}>Delivami isn't just for video editors. Every creative role has its own workflow needs — and its own solution page.</p>
            <div className="roles-grid">
              <Link className="role-card" href="/case-studies/photographers">
                <div className="rc-icon" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
                <div className="rc-title">Photography</div>
                <div className="rc-sub">Secure galleries, pay-to-unlock, instant digital delivery. Photographers get paid 3x faster.</div>
                <div className="rc-link" style={{ color: 'var(--green)' }}>
                  See the solution
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
              <Link className="role-card" href="/case-studies/designers">
                <div className="rc-icon" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div className="rc-title">Design &amp; UI/UX</div>
                <div className="rc-sub">White-labelled prototypes and style guides delivered with precision. Your brand, not Figma's.</div>
                <div className="rc-link" style={{ color: 'var(--purple)' }}>
                  See the solution
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
              <Link className="role-card" href="/case-studies/motion-graphics">
                <div className="rc-icon" style={{ background: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div className="rc-title">Motion Graphics</div>
                <div className="rc-sub">Loop previews and composition reviews in a single link. Clients review without downloading a file.</div>
                <div className="rc-link" style={{ color: 'var(--amber)' }}>
                  See the solution
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════ CTA ═══════ */}
        <div className="cta-sec">
          <div className="cta-bg"></div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '600', marginBottom: '22px', position: 'relative', zIndex: 1 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
            Ready to deliver like a pro
          </div>
          <h2 className="cta-h2">Your next project<br />deserves a <em>better system.</em></h2>
          <p className="cta-sub">Your first delivery link takes thirty seconds to create.</p>
          <div className="cta-btns">
            
            <Link href="/case-studies" className="btn-g" style={{ textDecoration: 'none' }}>View all case studies</Link>
          </div>
        </div>
      </div>    </>
  );
}
