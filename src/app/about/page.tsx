"use client";

import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-shell">

      {/* ═══════ HERO ═══════ */}
      <div className="hero-about">
        <div className="hero-mesh-about"></div>
        <div className="hero-grid-about"></div>

        {/* floating kente lines */}
        <div className="kline-about" style={{ width: '80px', background: 'var(--gold)', top: '22%', left: '7%', '--rot': '-10deg', '--dur': '7s', '--del': '0s' } as React.CSSProperties}></div>
        <div className="kline-about" style={{ width: '52px', background: '#b03018', top: '38%', right: '9%', '--rot': '7deg', '--dur': '5.5s', '--del': '1.2s' } as React.CSSProperties}></div>
        <div className="kline-about" style={{ width: '64px', background: 'var(--green)', bottom: '30%', left: '12%', '--rot': '14deg', '--dur': '6.5s', '--del': '0.7s' } as React.CSSProperties}></div>
        <div className="kline-about" style={{ width: '42px', background: 'var(--blue)', bottom: '22%', right: '15%', '--rot': '-6deg', '--dur': '8s', '--del': '2s' } as React.CSSProperties}></div>

        {/* Africa orb */}
        <div className="orb-wrap-about fu-about d1-about">
          <div className="orb-ring-about">
            <div className="orb-inner-about">
              <svg width="36" height="40" viewBox="0 0 100 115" fill="none">
                <path d="M35 6C26 7 17 14 14 24C11 34 15 44 13 53C11 62 5 69 7 79C10 91 22 101 36 107C48 113 62 113 72 107C82 101 86 91 89 81C93 71 96 59 94 48C92 37 84 30 82 20C80 10 70 4 60 3C50 2 45 5 35 6Z" fill="rgba(212,175,55,0.16)" stroke="var(--gold)" strokeWidth="3"/>
                <circle cx="48" cy="76" r="4" fill="var(--gold)" opacity="0.85">
                  <animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.85;0.25;0.85" dur="2.8s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>
          <div className="sat-about" style={{ top: '3px', left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', '--del': '0.2s' } as React.CSSProperties}></div>
          <div className="sat-about" style={{ bottom: '6px', right: '6px', background: 'var(--blue)', width: '8px', height: '8px', animationDelay: '0.9s' } as React.CSSProperties}></div>
          <div className="sat-about" style={{ bottom: '8px', left: '6px', background: 'var(--amber)', width: '7px', height: '7px', animationDelay: '1.6s' } as React.CSSProperties}></div>
        </div>

        <div className="hero-eyebrow-about fu-about d1-about">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          &nbsp;About Delivami
        </div>

        <h1 className="hero-h1-about fu-about d2-about">
          <span className="gold-line-about">Africa&apos;s creatives</span>
          deserve better tools.
          <span className="dim-line-about">Built here, specifically for Africa&apos;s major creative hubs.</span>
        </h1>

        <p className="hero-lead-about fu-about d3-about">
          We are a delivery, approval and payment platform made specifically for video editors, photographers, designers and motion artists across the African continent. We didn&apos;t adapt a foreign product. We built one from scratch — by people who lived the problem.
        </p>

        {/* Country ribbon */}
        <div className="country-ribbon-about fu-about d4-about">
          <div className="cr-item-about">
            <span className="cr-flag-about">🇬🇭</span>
            <span className="cr-name-about">Ghana</span>
          </div>
          <div className="cr-item-about">
            <span className="cr-flag-about">🇳🇬</span>
            <span className="cr-name-about">Nigeria</span>
          </div>
          <div className="cr-item-about">
            <span className="cr-flag-about">🇿🇦</span>
            <span className="cr-name-about">South Africa</span>
          </div>
          <div className="cr-item-about">
            <span className="cr-flag-about">🇨🇲</span>
            <span className="cr-name-about">Cameroon</span>
          </div>
          <div className="cr-more-about">
            <span className="cr-more-num-about">4</span>
            <span className="cr-more-label-about">Primary Markets</span>
          </div>
        </div>

        <div className="hero-note-about fu-about d4-about">
          <div className="hn-dot-about"></div>
          Free to start &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Built in Africa, for Africa
        </div>

        <div className="scroll-cue-about">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          Our story
        </div>
      </div>

      {/* ═══════ MISSION ═══════ */}
      <div className="mission-sec-about">
        <div className="mission-inner-about">
          <div className="s-eyebrow-about" style={{ justifyContent: 'center', marginBottom: '20px' }}>Our Mission</div>
          <p className="mission-statement-about">
            To give every African creative the <em>infrastructure, protection and payment speed</em> their talent has always deserved.
          </p>
          <p className="mission-body-about">
            We believe the creator economy on this continent is one of the most vibrant and underserved in the world. The talent is world-class. The tools have never matched it. Delivami exists to close that gap — permanently.
          </p>
        </div>
      </div>

      {/* ═══════ STORY ═══════ */}
      <div className="sec-about">
        <div className="wrap-about">
          <div className="story-grid-about">
            <div>
              <div className="s-eyebrow-about">Where it started</div>
              <h2 className="s-h2-about">A WhatsApp message<br/>that <em>became a company.</em></h2>
              <p className="s-p-about" style={{ marginBottom: '18px' }}>
                It started with a video editor in Accra who had finished a client&apos;s brand film. He sent the files over WhatsApp. The client said they&apos;d received them. Three weeks and eight follow-up messages later, the client claimed they&apos;d never approved anything. There was no record. No timestamp. No paper trail.
              </p>
              <p className="s-p-about" style={{ marginBottom: '18px' }}>
                That editor had to redo the project at a loss. His story is not unique — it is the standard experience for thousands of creatives across Lagos, Nairobi, Dakar, Johannesburg, Cairo and everywhere in between.
              </p>
              <p className="s-p-about">
                We built Delivami because the problem wasn&apos;t a lack of talent. It was a lack of infrastructure worthy of that talent.
              </p>
              <div className="pull-quote-about">
                <p className="pq-text-about">&quot;The work was done. The quality was there. The only thing missing was a system that could prove it.&quot;</p>
                <div className="pq-attr-about">
                  <div className="pq-av-about">P</div>
                  PAD &nbsp;·&nbsp; Founder &nbsp;·&nbsp; Video editor, 6 years
                </div>
              </div>
            </div>
            <div className="story-right-about">
              <div className="story-card-about">
                <div className="sc-kente-about"></div>
                <div className="sc-map-about">
                  <svg width="62%" viewBox="0 0 400 460" fill="none" opacity="0.25">
                    <path d="M158 18C128 20 98 30 78 52 C58 74 53 100 48 126 C43 152 38 172 36 192 C34 212 36 228 32 246 C26 268 16 286 18 308 C20 333 34 353 50 370 C68 390 90 403 116 413 C142 423 170 426 194 420 C220 414 242 398 260 380 C282 358 296 330 306 302 C319 272 330 240 332 208 C334 176 325 148 320 122 C316 98 318 76 308 56 C296 34 274 22 252 18 C232 14 190 16 158 18Z" fill="rgba(212,175,55,0.35)" stroke="var(--gold)" strokeWidth="2"/>
                  </svg>
                  <div className="sc-map-label-about">
                    <div className="sml-live-about"></div>
                    <div>
                      <div className="sml-text-about">Active in Support Markets</div>
                      <div className="sml-sub-about">GH, NG, ZA, CM</div>
                    </div>
                  </div>
                </div>
                <div className="sc-stats-about">
                  <div className="sc-stat-about">
                    <div className="ss-val-about" style={{ color: 'var(--gold)' }}>2024</div>
                    <div className="ss-label-about">Founded</div>
                  </div>
                  <div className="sc-stat-about">
                    <div className="ss-val-about" style={{ color: 'var(--green)' }}>GHS 0</div>
                    <div className="ss-label-about">External funding — revenue only</div>
                  </div>
                  <div className="sc-stat-about">
                    <div className="ss-val-about" style={{ color: 'var(--blue)' }}>4</div>
                    <div className="ss-label-about">Focused Markets</div>
                  </div>
                  <div className="sc-stat-about">
                    <div className="ss-val-about">1 link</div>
                    <div className="ss-label-about">To deliver, approve and get paid</div>
                  </div>
                </div>
              </div>
              <div className="float-card-about">
                <div className="fc-kente-about"></div>
                <p className="fc-text-about">&quot;I got paid within 24 hours of sending my first delivery link. First time ever.&quot;</p>
                <div className="fc-attr-about">
                  <div className="fc-av-about">A</div>
                  <span className="fc-name-about">Ama A. &nbsp;·&nbsp; Motion Designer, Accra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <div className="sec-mid-about">
        <div className="wrap-about">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 40px' }}>
            <div className="s-eyebrow-about" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="s-h2-about" style={{ textAlign: 'center' }}>From delivered<br/>to <em>paid</em> — in one link.</h2>
            <p className="s-p-about" style={{ textAlign: 'center' }}>Your client needs no account, no app and no login. They click your link and everything is there.</p>
          </div>
          <div className="hiw-grid-about">
            <div className="hiw-step-about">
              <div className="hiw-num-about">01</div>
              <div className="hiw-icon-about" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.28)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              </div>
              <div className="hiw-title-about">Upload your work</div>
              <div className="hiw-desc-about">Video, images, PDFs, motion files — anything up to 5 GB per file, streamed in 4K.</div>
            </div>
            <div className="hiw-step-about">
              <div className="hiw-num-about">02</div>
              <div className="hiw-icon-about" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.28)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <div className="hiw-title-about">Send one link</div>
              <div className="hiw-desc-about">Your client receives a branded delivery page. Watch, comment or approve — from any device.</div>
            </div>
            <div className="hiw-step-about">
              <div className="hiw-num-about">03</div>
              <div className="hiw-icon-about" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.28)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="hiw-title-about">Get a locked approval</div>
              <div className="hiw-desc-about">Timestamped, permanent, irrefutable. Every approval is logged with name, date and version.</div>
            </div>
            <div className="hiw-step-about">
              <div className="hiw-num-about">04</div>
              <div className="hiw-icon-about" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.28)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div className="hiw-title-about">Invoice and get paid</div>
              <div className="hiw-desc-about">One click. Client pays via mobile money or bank transfer. Funds are typically settled within 24–48 hours.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ BUILT FOR AFRICA ═══════ */}
      <div className="sec-about">
        <div className="wrap-about">
          <div className="africa-grid-about">
            <div>
              <div className="africa-map-about">
                <svg width="82%" viewBox="0 0 400 460" fill="none" opacity="0.22">
                  <path d="M158 18C128 20 98 30 78 52C58 74 53 100 48 126C43 152 38 172 36 192C34 212 36 228 32 246C26 268 16 286 18 308C20 333 34 353 50 370C68 390 90 403 116 413C142 423 170 426 194 420C220 414 242 398 260 380C282 358 296 330 306 302C319 272 330 240 332 208C334 176 325 148 320 122C316 98 318 76 308 56C296 34 274 22 252 18C232 14 190 16 158 18Z" fill="rgba(212,175,55,0.32)" stroke="var(--gold)" strokeWidth="2"/>
                </svg>
                <div className="blip-about" style={{ top: '47%', left: '30%' }}><div className="blip-dot-about" style={{ background: 'var(--gold)', '--bc': 'rgba(212,175,55,0.45)', '--bd': '2.8s', '--bdelay': '0s' } as React.CSSProperties}></div><div className="blip-tip-about">Accra, Ghana</div></div>
                <div className="blip-about" style={{ top: '42%', left: '44%' }}><div className="blip-dot-about" style={{ background: 'var(--green)', '--bc': 'rgba(53,208,115,0.45)', '--bd': '3s', '--bdelay': '0.5s' } as React.CSSProperties}></div><div className="blip-tip-about">Lagos, Nigeria</div></div>
                <div className="blip-about" style={{ top: '80%', left: '48%' }}><div className="blip-dot-about" style={{ background: 'var(--purple)', '--bc': 'rgba(167,139,250,0.45)', '--bd': '3.2s', '--bdelay': '0.3s' } as React.CSSProperties}></div><div className="blip-tip-about">Johannesburg, SA</div></div>
                <div className="blip-about" style={{ top: '37%', left: '44%' }}><div className="blip-dot-about" style={{ background: 'var(--gold)', '--bc': 'rgba(212,175,55,0.45)', '--bd': '3.1s', '--bdelay': '2s' } as React.CSSProperties}></div><div className="blip-tip-about">Douala, Cameroon</div></div>
              </div>
            </div>
            <div>
              <div className="s-eyebrow-about">Optimized for Major Hubs. One Platform.</div>
              <h2 className="s-h2-about">Wherever you create<br/>in Africa, <em>we are there.</em></h2>
              <p className="s-p-about" style={{ marginBottom: '22px' }}>
                Delivami was designed with pan-African infrastructure from day one. Local payment rails, local currencies, and a deep understanding of how creative work moves on this continent.
              </p>
              <p className="s-p-about" style={{ marginBottom: '28px' }}>
                We are not a Western product retrofitted for Africa. Every payment partnership, every design decision, and every line of copy was made by people who live and create here.
              </p>
              <div className="country-list-about">
                <div className="cl-item-about">
                  <div className="cl-flag-ic-about">🇬🇭</div>
                  <span>Ghana &middot; MoMo</span>
                </div>
                <div className="cl-item-about">
                  <div className="cl-flag-ic-about">🇳🇬</div>
                  <span>Nigeria &middot; Transfer</span>
                </div>
                <div className="cl-item-about">
                  <div className="cl-flag-ic-about">🇿🇦</div>
                  <span>South Africa &middot; EFT</span>
                </div>
                <div className="cl-item-about">
                  <div className="cl-flag-ic-about">🇨🇲</div>
                  <span>Cameroon &middot; MoMo</span>
                </div>
                <div className="cl-item-about">
                  <div className="cl-flag-ic-about">🌍</div>
                  <span>Expansion roadmap in progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ VALUES ═══════ */}
      <div className="sec-mid-about" id="values">
        <div className="wrap-about">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 40px' }}>
            <div className="s-eyebrow-about" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2 className="s-h2-about">What we <em>stand for.</em></h2>
            <p className="s-p-about">Simple principles that guide how we build infrastructure for the African creative.</p>
          </div>
          <div className="values-grid-about">
            <div className="val-card-about" style={{ '--vc-accent': 'var(--gold)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(212,175,55,0.1)', borderColor: 'rgba(212,175,55,0.28)', color: 'var(--gold)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="val-title-about">Radical Protection</h3>
              <p className="val-body-about">The creative is always the vulnerable party in a transaction. Our systems are built to default to their protection, always.</p>
            </div>
            <div className="val-card-about" style={{ '--vc-accent': 'var(--green)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.28)', color: 'var(--green)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <h3 className="val-title-about">African Velocity</h3>
              <p className="val-body-about">Cross-border payments shouldn&apos;t take weeks. We move at the speed of the internet, not the speed of legacy banks.</p>
            </div>
            <div className="val-card-about" style={{ '--vc-accent': 'var(--blue)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(91,164,245,0.1)', borderColor: 'rgba(91,164,245,0.28)', color: 'var(--blue)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="val-title-about">Borderless Identity</h3>
              <p className="val-body-about">A creative in Kumasi should have the same access as one in Cape Town. We are one continent, one creative ecosystem.</p>
            </div>
            <div className="val-card-about" style={{ '--vc-accent': 'var(--purple)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.28)', color: 'var(--purple)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="val-title-about">Creative Privacy</h3>
              <p className="val-body-about">Your files, your data, and your clients are your business. We never train AI on your work or sell your metrics.</p>
            </div>
            <div className="val-card-about" style={{ '--vc-accent': 'var(--amber)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.28)', color: 'var(--amber)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="val-title-about">Instant Liquidity</h3>
              <p className="val-body-about">We believe in same-day payouts. When the work is approved, the value should be in your hands immediately.</p>
            </div>
            <div className="val-card-about" style={{ '--vc-accent': 'var(--red)' } as React.CSSProperties}>
              <div className="val-icon-about" style={{ background: 'rgba(248,113,113,0.1)', borderColor: 'rgba(248,113,113,0.28)', color: 'var(--red)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="val-title-about">Built Open</h3>
              <p className="val-body-about">We build for interoperability. Delivami works with the tools you already use, not against them.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <div className="testi-sec-about">
        <div className="wrap-about">
          <div className="testi-header-about">
            <div className="s-eyebrow-about" style={{ justifyContent: 'center' }}>Success Stories</div>
            <h2 className="s-h2-about">Don&apos;t take our word for it.<br/><em>Take theirs.</em></h2>
          </div>

          <div className="testi-featured-about">
            <div className="tf-kente-about"></div>
            <div className="tf-inner-about">
              <div>
                <span className="tf-quote-mark-about">&ldquo;</span>
                <p className="tf-text-about">
                  Delivami changed how I work. I used to spend 4 hours a day on admin and chasing payments. Now I send a link and go to sleep. The money is there when I wake up.
                </p>
                <div className="tf-person-about">
                  <div className="tf-av-about" style={{ color: 'var(--gold)', borderColor: 'rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.08)' }}>P</div>
                  <div>
                    <div className="tf-name-about">Peter B.</div>
                    <div className="tf-role-about">Commercial Photographer</div>
                    <div className="tf-location-about">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Lagos, Nigeria
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-side-about">
                <div className="tfs-item-about">
                  <div className="tfs-val-about">4h</div>
                  <div className="tfs-label-about">Saved per day</div>
                </div>
                <div className="tfs-div-about"></div>
                <div className="tfs-item-about">
                  <div className="tfs-val-about">0</div>
                  <div className="tfs-label-about">Payment disputes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="testi-grid-about">
            <div className="testi-card-about">
              <div className="tc-accent-about" style={{ background: 'var(--green)' }}></div>
              <div className="tc-body-about">
                <div className="stars-about">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-about" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="tc-quote-about">&ldquo;Finally, a product that understands MoMo. The payout is seamless.&rdquo;</p>
                <div className="tc-person-about">
                  <div className="tcp-av-about" style={{ color: 'var(--green)', borderColor: 'rgba(53,208,115,0.4)', background: 'rgba(53,208,115,0.08)' }}>S</div>
                  <div>
                    <div className="tcp-name-about">Sarah K.</div>
                    <div className="tcp-role-about">Freelance Illustrator</div>
                  </div>
                  <div className="tcp-loc-about">Nairobi</div>
                </div>
              </div>
            </div>

            <div className="testi-card-about">
              <div className="tc-accent-about" style={{ background: 'var(--gold)' }}></div>
              <div className="tc-body-about">
                <div className="stars-about">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-about" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="tc-quote-about">&ldquo;The approval system is bulletproof. No more &apos;I didn&apos;t see it&apos; excuses.&rdquo;</p>
                <div className="tc-person-about">
                  <div className="tcp-av-about" style={{ color: 'var(--gold)', borderColor: 'rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.08)' }}>K</div>
                  <div>
                    <div className="tcp-name-about">Kofi A.</div>
                    <div className="tcp-role-about">Video Editor</div>
                  </div>
                  <div className="tcp-loc-about">Kumasi</div>
                </div>
              </div>
            </div>

            <div className="testi-card-about">
              <div className="tc-accent-about" style={{ background: 'var(--blue)' }}></div>
              <div className="tc-body-about">
                <div className="stars-about">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-about" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="tc-quote-about">&ldquo;Highest quality player I&apos;ve seen in Africa. Worth every penny.&rdquo;</p>
                <div className="tc-person-about">
                  <div className="tcp-av-about" style={{ color: 'var(--blue)', borderColor: 'rgba(91,164,245,0.4)', background: 'rgba(91,164,245,0.06)' }}>M</div>
                  <div>
                    <div className="tcp-name-about">Mike O.</div>
                    <div className="tcp-role-about">Creative Director</div>
                  </div>
                  <div className="tcp-loc-about">Joburg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ TEAM ═══════ */}
      <div className="sec-about" id="team">
        <div className="wrap-about">
          <div className="team-section-grid-about">
            <div>
              <div className="s-eyebrow-about">The Squad</div>
              <h2 className="s-h2-about">Creatives building<br/>for <em>creatives.</em></h2>
              <p className="team-intro-lead-about">
                We are a small, lean team of designers, engineers and artists. We don&apos;t have a shiny office. We have laptops, a shared obsession with perfect infrastructure, and a deep love for African talent.
              </p>
              <div className="team-count-row-about">
                <div className="tcr-item-about">
                  <div className="tcr-val-about">8</div>
                  <div className="tcr-label-about">Engineers</div>
                </div>
                <div className="tcr-item-about">
                  <div className="tcr-val-about">3</div>
                  <div className="tcr-label-about">Designers</div>
                </div>
                <div className="tcr-item-about">
                  <div className="tcr-val-about">4</div>
                  <div className="tcr-label-about">Countries</div>
                </div>
              </div>
              <div className="hire-strip-about">
                <div>
                  <div className="hs-eyebrow-about">We are growing</div>
                  <h3 className="hs-title-about">Join the mission</h3>
                  <p className="hs-sub-about">We are always looking for obsessed engineers and designers based on the continent.</p>
                  <div className="hs-roles-about">
                    <span className="hs-role-about">Next.js Wizard</span>
                    <span className="hs-role-about">Product Designer</span>
                    <span className="hs-role-about">Python Eng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-cards-col-about">
              <div className="person-card-about" style={{ '--pc-glow': 'rgba(212,175,55,0.12)', '--pc-color': 'var(--gold)', '--pc-bg': 'rgba(212,175,55,0.1)', '--pc-border': 'rgba(212,175,55,0.3)' } as React.CSSProperties}>
                <div className="pc-photo-col-about">
                  <div className="pc-photo-bg-about"></div>
                  <div className="pc-photo-kente-about" style={{ background: 'var(--gold)' }}></div>
                  <div className="pc-initials-about">PAD</div>
                  <div className="pc-avatar-ring-about">P</div>
                  <div className="pc-location-about">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Accra, Ghana
                  </div>
                </div>
                <div className="pc-content-about">
                  <div className="pc-header-about">
                    <div>
                      <h3 className="pc-name-about">Prince Aboagye-Danquah</h3>
                      <p className="ss-label-about">Founder &middot; Product Strategy</p>
                    </div>
                    <span className="pc-role-pill-about" style={{ color: 'var(--gold)', borderColor: 'rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.06)' }}>FOUNDER</span>
                  </div>
                  <p className="pc-bio-about">A video editor who got tired of the &quot;WhatsApp approval&quot; nightmare. Built the first version of Delivami to save his own projects.</p>
                  <div className="pc-skills-about">
                    <span className="pc-skill-about">Video Direction</span>
                    <span className="pc-skill-about">UI/UX</span>
                  </div>
                </div>
              </div>
              <div className="person-card-about" style={{ '--pc-glow': 'rgba(91,164,245,0.12)', '--pc-color': 'var(--blue)', '--pc-bg': 'rgba(91,164,245,0.1)', '--pc-border': 'rgba(91,164,245,0.3)' } as React.CSSProperties}>
                <div className="pc-photo-col-about">
                  <div className="pc-photo-bg-about"></div>
                  <div className="pc-photo-kente-about" style={{ background: 'var(--blue)' }}></div>
                  <div className="pc-initials-about">KW</div>
                  <div className="pc-avatar-ring-about" style={{ borderColor: 'var(--blue)' }}>K</div>
                  <div className="pc-location-about">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Nairobi, Kenya
                  </div>
                </div>
                <div className="pc-content-about">
                  <div className="pc-header-about">
                    <div>
                      <h3 className="pc-name-about">Kweku W.</h3>
                      <p className="ss-label-about">Head of Engineering</p>
                    </div>
                    <span className="pc-role-pill-about" style={{ color: 'var(--blue)', borderColor: 'rgba(91,164,245,0.4)', background: 'rgba(91,164,245,0.06)' }}>ENGINEERING</span>
                  </div>
                  <p className="pc-bio-about">Obsessed with high-performance streaming. Ensures our links load instantly across the continent.</p>
                  <div className="pc-skills-about">
                    <span className="pc-skill-about">Rust</span>
                    <span className="pc-skill-about">Next.js</span>
                  </div>
                </div>
              </div>
              <div className="person-card-about" style={{ '--pc-glow': 'rgba(167,139,250,0.12)', '--pc-color': 'var(--purple)', '--pc-bg': 'rgba(167,139,250,0.1)', '--pc-border': 'rgba(167,139,250,0.3)' } as React.CSSProperties}>
                <div className="pc-photo-col-about">
                  <div className="pc-photo-bg-about"></div>
                  <div className="pc-photo-kente-about" style={{ background: 'var(--purple)' }}></div>
                  <div className="pc-initials-about">AA</div>
                  <div className="pc-avatar-ring-about" style={{ borderColor: 'var(--purple)' }}>A</div>
                  <div className="pc-location-about">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Accra, Ghana
                  </div>
                </div>
                <div className="pc-content-about">
                  <div className="pc-header-about">
                    <div>
                      <h3 className="pc-name-about">Ama A.</h3>
                      <p className="ss-label-about">Lead Product Designer</p>
                    </div>
                    <span className="pc-role-pill-about" style={{ color: 'var(--purple)', borderColor: 'rgba(167,139,250,0.4)', background: 'rgba(167,139,250,0.06)' }}>DESIGN</span>
                  </div>
                  <p className="pc-bio-about">Crafting beautiful interfaces that feel native to African eyes. Focused on simplicity and dignity.</p>
                  <div className="pc-skills-about">
                    <span className="pc-skill-about">UI/UX</span>
                    <span className="pc-skill-about">Motion</span>
                  </div>
                </div>
              </div>
              <div className="person-card-about" style={{ '--pc-glow': 'rgba(53,208,115,0.12)', '--pc-color': 'var(--green)', '--pc-bg': 'rgba(53,208,115,0.1)', '--pc-border': 'rgba(53,208,115,0.3)' } as React.CSSProperties}>
                <div className="pc-photo-col-about">
                  <div className="pc-photo-bg-about"></div>
                  <div className="pc-photo-kente-about" style={{ background: 'var(--green)' }}></div>
                  <div className="pc-initials-about">SK</div>
                  <div className="pc-avatar-ring-about" style={{ borderColor: 'var(--green)' }}>S</div>
                  <div className="pc-location-about">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Lagos, Nigeria
                  </div>
                </div>
                <div className="pc-content-about">
                  <div className="pc-header-about">
                    <div>
                      <h3 className="pc-name-about">Sarah K.</h3>
                      <p className="ss-label-about">Head of Operations</p>
                    </div>
                    <span className="pc-role-pill-about" style={{ color: 'var(--green)', borderColor: 'rgba(53,208,115,0.4)', background: 'rgba(53,208,115,0.08)' }}>OPERATIONS</span>
                  </div>
                  <p className="pc-bio-about">Navigating the complex world of African fintech and partnerships to keep Delivami running smoothly.</p>
                  <div className="pc-skills-about">
                    <span className="pc-skill-about">Fintech</span>
                    <span className="pc-skill-about">Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ OUR JOURNEY (Timeline) ═══════ */}
      <div className="sec-about">
        <div className="wrap-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <div className="s-eyebrow-about">Our Journey</div>
            <h2 className="s-h2-about">The road to<br/><em>rebuilding</em> infrastructure.</h2>
            <p className="s-p-about">We aren&apos;t just building a product; we&apos;re building a history of creative empowerment on the continent.</p>
          </div>
          <div className="timeline-about">
            <div className="tl-item-about">
              <div className="tl-left-about">
                <div className="tl-dot-about" style={{ borderColor: 'var(--red)', color: 'var(--red)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="tl-year-about">Q1 2024</div>
              </div>
              <div className="tl-body-about">
                <h3 className="tl-title-about">The Problem</h3>
                <p className="tl-text-about">Founder PAD loses a major project approval due to a client claim on WhatsApp. Decides enough is enough.</p>
              </div>
            </div>
            <div className="tl-item-about">
              <div className="tl-left-about">
                <div className="tl-dot-about" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="tl-year-about">Q2 2024</div>
              </div>
              <div className="tl-body-about">
                <h3 className="tl-title-about">First Code</h3>
                <p className="tl-text-about">A crude prototype built in 3 weeks. Used by 12 friends in Accra. 100% approval success rate.</p>
              </div>
            </div>
            <div className="tl-item-about">
              <div className="tl-left-about">
                <div className="tl-dot-about" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="tl-year-about">Q3 2024</div>
              </div>
              <div className="tl-body-about">
                <h3 className="tl-title-about">Payments Integration</h3>
                <p className="tl-text-about">First mobile money payout triggered. The gap between &quot;approval&quot; and &quot;payment&quot; starts to close.</p>
              </div>
            </div>
            <div className="tl-item-about">
              <div className="tl-left-about">
                <div className="tl-dot-about" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="tl-year-about">TODAY</div>
              </div>
              <div className="tl-body-about">
                <h3 className="tl-title-about">Scaling Africa</h3>
                <p className="tl-text-about">Building the permanent home for African creative work in our supported markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ MANIFESTO ═══════ */}
      <div className="sec-mid-about">
        <div className="manifesto-about">
          <div className="manifesto-bg-about"></div>
          <div className="manifesto-dots-about"></div>
          <div className="wrap-about">
            <h2 className="mf-h2-about">We don&apos;t just build software.<br/>We build <em>creative dignity.</em></h2>
            <div className="mf-lines-about">
              <div className="ml-about">
                <div className="ml-icon-about" style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--gold)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="ml-text-about"><strong>Dignity is speed.</strong> If you finish work, you should get paid today, not next month.</p>
              </div>
              <div className="ml-about">
                <div className="ml-icon-about" style={{ background: 'rgba(53,208,115,0.1)', color: 'var(--green)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="ml-text-about"><strong>Dignity is protection.</strong> You should never have to &quot;hope&quot; a client won&apos;t use your files without paying.</p>
              </div>
              <div className="ml-about">
                <div className="ml-icon-about" style={{ background: 'rgba(91,164,245,0.1)', color: 'var(--blue)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="ml-text-about"><strong>Dignity is infrastructure.</strong> You shouldn&apos;t need a foreign bank account to participate in the global economy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="sec-about">
        <div className="cta-sec-about">
          <div className="cta-mesh-about"></div>
          <div className="wrap-about">
            <h2 className="cta-h2-about">Stop chasing.<br/>Start <em>creating.</em></h2>
            <p className="cta-sub-about">Join thousands of African artists who have reclaimed their time and their income with Delivami.</p>
            <div className="cta-btns-about">
              <button className="btn-p-about">Get started — for free</button>
              <button className="btn-g-about">Talk to us</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
