"use client";

import Link from "next/link";
import "./studios.css";

export default function StudiosCaseStudy() {
  return (
    <div className="studios-shell">
      <div className="kente"></div>
      
      {/* BREADCRUMB */}
      <div className="breadcrumb" style={{ padding: '16px 60px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--muted)', background: 'var(--mid)', borderBottom: '1px solid var(--bdr)' }}>
        <Link href="/case-studies" className="bc-link" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Case Studies</Link>
        <span className="bc-sep" style={{ color: 'var(--bdr)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
        <span className="bc-current" style={{ color: 'var(--cy)' }}>Creative Studios</span>
      </div>

      <Hero />
      <div className="wrap">
        <WorkspacePreview />
      </div>

      <Challenge />
      <ChaosSection />
      <Solution />
      <BeforeAfter />
      <Impact />
      <Testimonial />
      <Workflow />
      <RolesSection />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-mesh"></div>
      <div className="hero-grid"></div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Case Study &nbsp;·&nbsp; Creative Studios
        </div>

        <h1 className="hero-h1">
          Five people.<br />Twelve clients.<br />
          <em>Zero dropped balls.</em>
        </h1>

        <p className="hero-deck">How two-to-five person creative studios across Africa use Delivami's shared workspace to manage multiple clients simultaneously — without version confusion, missed approvals or payments stuck in anyone's personal inbox.</p>

        <div className="hero-strip">
          <div className="hs-item">
            <div className="hs-label">Team size</div>
            <div className="hs-val"><span>2–5</span> person studios</div>
          </div>
          <div className="hs-item">
            <div className="hs-label">Active clients managed</div>
            <div className="hs-val">Up to <span>12</span> simultaneously</div>
          </div>
          <div className="hs-item">
            <div className="hs-label">Miscommunication</div>
            <div className="hs-val"><span>Zero</span> version mix-ups</div>
          </div>
          <div className="hs-item">
            <button className="btn-cy">
              Start free
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspacePreview() {
  return (
    <div className="workspace-preview">
      {/* Main workspace */}
      <div className="ws-main">
        <div className="ws-main-header">
          <div className="ws-tabs">
            <div className="ws-tab active">All Projects</div>
            <div className="ws-tab">In Review</div>
            <div className="ws-tab">Invoices</div>
          </div>
          <div className="ws-controls">
            <div className="ws-ctrl"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
            <div className="ws-ctrl"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg></div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Kojo Studios</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: 'var(--cyg)', border: '1px solid var(--cyb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-cormorant)', fontWeight: 700, fontSize: '10px', color: 'var(--cy)' }}>K</div>
          </div>
        </div>
        <div className="ws-content">
          <ProjectRow active name="TechHub — Platform Promo" meta="Video · v3 · Delivered 2 days ago" color="cy" badge="In Review" badgeColor="amber" initials="T" members={[{ color: 'cy', i: 'K' }, { color: 'green', i: 'A' }]} />
          <ProjectRow name="GCB Bank — Brand Identity" meta="Design · v2 · Invoice sent" color="green" badge="Invoice out" badgeColor="gold" initials="G" members={[{ color: 'purple', i: 'F' }]} />
          <ProjectRow name="eduroam — Explainer Animation" meta="Motion · v1 · Just uploaded" color="orange" badge="Awaiting review" badgeColor="blue" initials="E" members={[{ color: 'cy', i: 'K' }, { color: 'amber', i: 'D' }, { color: 'green', i: 'A' }]} />
          <ProjectRow name="Kofi Brands — Wedding Film" meta="Video · Approved · GHS 8,500" color="purple" badge="Paid" badgeColor="green" initials="K" members={[{ color: 'green', i: 'A' }]} />
        </div>
      </div>

      {/* Side panel */}
      <div className="ws-side">
        <div className="ws-side-card">
          <div className="wsc-header">
            Team · 4 members
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'var(--cyg)', border: '1px solid var(--cyb)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--cy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
          <div className="wsc-body">
            <MemberItem name="Kojo A." role="Director · 3 active" initials="K" color="cy" status="green" />
            <MemberItem name="Ama O." role="Video · 2 active" initials="A" color="green" status="green" />
            <MemberItem name="Fatima D." role="Design · 1 active" initials="F" color="purple" status="amber" />
            <MemberItem name="Daniel M." role="Motion · 1 active" initials="D" color="amber" status="rgba(255,255,255,0.15)" />
          </div>
        </div>
        <div className="ws-side-card">
          <div className="wsc-header">This month</div>
          <div className="wsc-body">
            <div className="stat-row-mini">
              <div className="srm-item"><div className="srm-val" style={{ color: 'var(--cy)' }}>7</div><div className="srm-label">Active projects</div></div>
              <div className="srm-item"><div className="srm-val" style={{ color: 'var(--green)' }}>GHS 38k</div><div className="srm-label">Invoiced</div></div>
            </div>
            <div className="stat-row-mini" style={{ marginTop: '8px' }}>
              <div className="srm-item"><div className="srm-val" style={{ color: 'var(--gold)' }}>5</div><div className="srm-label">Clients</div></div>
              <div className="srm-item"><div className="srm-val" style={{ color: 'var(--amber)' }}>2</div><div className="srm-label">Awaiting review</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ active, name, meta, color, badge, badgeColor, initials, members }: any) {
  return (
    <div className={`ws-project-row ${active ? 'active' : ''}`}>
      <div className="wpr-av" style={{ background: `var(--${color === 'orange' ? 'amber' : color}g)`, borderColor: `var(--${color === 'orange' ? 'amber' : color}b)`, color: color === 'orange' ? '#F97316' : `var(--${color})` }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="wpr-name">{name}</div>
        <div className="wpr-meta">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
          {meta}
        </div>
      </div>
      <div className="wpr-member-stack">
        {members.map((m: any, i: number) => (
          <div key={i} className="wpr-member" style={{ background: `var(--${m.color}g)`, borderColor: `var(--${m.color}b)`, color: `var(--${m.color})` }}>{m.i}</div>
        ))}
      </div>
      <div className="wpr-badge" style={{ background: `var(--${badgeColor}g)`, borderColor: `var(--${badgeColor}b)`, color: `var(--${badgeColor})` }}>{badge}</div>
    </div>
  );
}

function MemberItem({ name, role, initials, color, status }: any) {
  return (
    <div className="member-item">
      <div className="mi-av" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)`, color: `var(--${color})` }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="mi-name">{name}</div>
        <div className="mi-role">{role}</div>
      </div>
      <div className="mi-status" style={{ background: status.startsWith('var') || status.startsWith('rgba') ? status : `var(--${status})` }}></div>
    </div>
  );
}

function Challenge() {
  return (
    <div className="sec">
      <div className="wrap">
        <div className="s-eyebrow">The studio challenge</div>
        <h2 className="s-h2">One person is manageable.<br /><em>Five people and twelve clients is chaos.</em></h2>
        <div className="challenge-grid">
          <div className="narrative">
            <p>When a studio has two or more people, the organisational complexity multiplies in ways that catch most teams off guard. Files land in different people's Google Drives. Client feedback goes to the person who happened to be online — not the project lead. Invoices sit in whoever sent them last. Nobody has a clear picture of what is actually happening across the studio.</p>
            <p><strong>The studio coordination problem is fundamentally different from the solo problem.</strong> A solo creative is managing their own mess. A studio is managing everyone's mess simultaneously, across multiple active clients, with no shared system of record.</p>
            <p>The result is predictable: a client gets sent the wrong version. A revision note gets lost because it came through a team member's personal WhatsApp. An invoice goes unpaid for six weeks because the person who sent it left on a shoot and nobody followed up.</p>
          </div>
          <div className="pain-list">
            <PainItem icon="file" title="No shared source of truth" desc="Every team member has their own Drive folder, their own WeTransfer history. When a dispute happens, nobody knows which version was approved." impact="Studios average 1.4 version mix-ups per client per month" color="red" />
            <PainItem icon="users" title="Client feedback lands in silos" desc="A client calls one member. Another gets a WhatsApp. No one person has the full picture. Revisions get missed. Work gets duplicated." impact="Avg 2.3 missed or duplicated revision actions per week" color="amber" />
            <PainItem icon="receipt" title="Invoices live in one person's inbox" desc="When the director sends the invoice, only they know the status. If they're unavailable, nobody follows up. Payments get lost." impact="GHS 12k avg in delayed payments per studio per quarter" color="cy" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PainItem({ icon, title, desc, impact, color }: any) {
  return (
    <div className="pain-item">
      <div className="pi-icon" style={{ background: `var(--${color}g)`, border: `1px solid var(--${color}b)` }}>
        {icon === 'file' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>}
        {icon === 'users' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
        {icon === 'receipt' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/></svg>}
      </div>
      <div>
        <div className="pi-title">{title}</div>
        <div className="pi-desc">{desc}</div>
        <div className="pi-impact" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)`, color: `var(--${color})` }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {impact}
        </div>
      </div>
    </div>
  );
}

function ChaosSection() {
  return (
    <div className="sec-mid">
      <div className="wrap">
        <div className="s-eyebrow">The coordination gap</div>
        <h2 className="s-h2">What "managing projects as a team"<br />looks like — before and <em>after.</em></h2>
        <p className="s-p" style={{ maxWidth: '520px' }}>The same five-person studio. The same twelve clients. Two completely different operational realities depending on the infrastructure.</p>

        <div className="chaos-grid">
          {/* Before — chaos */}
          <div className="chaos-col bad">
            <div className="chaos-col-label" style={{ color: 'var(--red)' }}>
              <div className="chaos-ic" style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </div>
              Before Delivami — how coordination actually works
            </div>
            <div className="thread-chaos">
              <div className="tc-chrome">
                <div className="tc-dots"><div className="tc-dot" style={{ background: '#FF5F57' }}></div><div className="tc-dot" style={{ background: '#FEBC2E' }}></div><div className="tc-dot" style={{ background: '#28C840' }}></div></div>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.58 4.18 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                WhatsApp · Studio Team (5)
              </div>
              <div className="tc-thread" style={{ maxHeight: '240px', overflow: 'hidden' }}>
                <div className="tc-msg">
                  <div className="tc-av-sm" style={{ background: 'var(--cyg)', border: '1px solid var(--cyb)', color: 'var(--cy)' }}>K</div>
                  <div className="tc-bubble" style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '0 8px 8px 8px', color: 'var(--iv2)' }}>Kojo: Did anyone send TechHub the v3? I saw Ama uploaded it but I don't know if the link went out</div>
                </div>
                <div className="tc-msg">
                  <div className="tc-av-sm" style={{ background: 'rgba(53,208,115,0.1)', border: '1px solid rgba(53,208,115,0.2)', color: 'var(--green)' }}>A</div>
                  <div className="tc-bubble" style={{ background: 'rgba(53,208,115,0.04)', border: '1px solid rgba(53,208,115,0.1)', borderRadius: '0 8px 8px 8px', color: 'var(--iv2)' }}>Ama: I sent it yesterday but to which contact? I think I sent to the wrong person at TechHub</div>
                </div>
                <div className="tc-msg">
                  <div className="tc-av-sm" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', color: 'var(--purple)' }}>F</div>
                  <div className="tc-bubble" style={{ background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)', borderRadius: '0 8px 8px 8px', color: 'var(--iv2)' }}>Fatima: Also GCB Bank is asking about the invoice. Did you send it Kojo? They said they never got it</div>
                </div>
                <div style={{ textAlign: 'center', padding: '8px', fontSize: '10px', color: 'var(--muted)', opacity: .6 }}>47 more messages · 2 hours ago</div>
              </div>
            </div>
          </div>

          {/* After — order */}
          <div className="chaos-col good">
            <div className="chaos-col-label" style={{ color: 'var(--cy)' }}>
              <div className="chaos-ic" style={{ background: 'var(--cyg)', border: '1px solid var(--cyb)' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--cy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              With Delivami — what the same team sees
            </div>
            <div className="sw-mock">
              <div className="swm-header">
                <div className="swm-dots"><div className="swm-dot" style={{ background: '#FF5F57' }}></div><div className="swm-dot" style={{ background: '#FEBC2E' }}></div><div className="swm-dot" style={{ background: '#28C840' }}></div></div>
                <div className="swm-url">app.delivami.com/kojo-studios/projects</div>
              </div>
              <div className="swm-body">
                <div className="swm-project-label">All projects · 4 active</div>
                <div className="swm-proj active">
                  <div className="swm-pav" style={{ background: 'var(--cyg)', borderColor: 'var(--cyb)', color: 'var(--cy)' }}>T</div>
                  <span className="swm-pname">TechHub Platform Promo</span>
                  <div className="swm-pbadge" style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(251,191,36,0.2)', color: 'var(--amber)' }}>In Review</div>
                </div>
                <div className="swm-proj">
                  <div className="swm-pav" style={{ background: 'rgba(53,208,115,0.1)', borderColor: 'rgba(53,208,115,0.2)', color: 'var(--green)' }}>G</div>
                  <span className="swm-pname">GCB Bank · Brand Identity</span>
                  <div className="swm-pbadge" style={{ background: 'rgba(212,175,55,0.08)', borderColor: 'rgba(212,175,55,0.2)', color: 'var(--gold)' }}>Invoice sent</div>
                </div>
                <div style={{ marginTop: '10px', padding: '10px 12px', borderRadius: '9px', background: 'rgba(53,208,115,0.04)', border: '1px solid rgba(53,208,115,0.15)', fontSize: '11px', color: 'rgba(53,208,115,0.8)', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  Every project: visible to everyone, always up to date.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Solution() {
  return (
    <div className="sec">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '52px' }}>
          <div>
            <div className="s-eyebrow">The Delivami solution</div>
            <h2 className="s-h2">Four features built<br />for <em>studio-scale delivery.</em></h2>
            <p className="s-p">Each one addresses a specific breakdown point in how small creative studios manage multiple clients without losing control.</p>
          </div>
          <div style={{ padding: '22px 24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--bdr)' }}>
            <div style={{ fontSize: '9.5px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, marginBottom: 122 }}>What changes immediately</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <CheckItem text="One shared workspace — every project visible" />
              <CheckItem text="Version history locked — no more re-sending old files" />
              <CheckItem text="Client feedback logged in one place" />
              <CheckItem text="Every invoice visible to the whole team" />
            </div>
          </div>
        </div>

        <div className="sol-grid-4">
          <SolutionCard num="01" icon="users" title="Shared Team Workspace" desc="Every project, client, delivery link — visible in one dashboard. Assign projects to individuals." detail="Up to 5 team seats. Role-based access." color="cy" />
          <SolutionCard num="02" icon="refresh" title="Version History" desc="Every new upload creates a version. Previous ones are locked automatically — no accidents." detail="Locked versions remain downloadable for ref." color="blue" />
          <SolutionCard num="03" icon="file" title="Studio Invoice Management" desc="Invoices are studio-level records — active by any team member. Track payments in real time." detail="Auto-reminders at day 3 and 7." color="gold" />
          <SolutionCard num="04" icon="shield" title="Studio-Wide Brand" desc="Every link from every team member carries the same studio brand — your logo, your colors." detail="Team cannot override studio branding." color="green" />
        </div>

        <FlowStrip />
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ fontSize: '12.5px', color: 'var(--iv2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      {text}
    </div>
  );
}

function SolutionCard({ num, icon, title, desc, detail, color }: any) {
  return (
    <div className="sol-card" style={{ ['--sol-accent' as any]: `var(--${color})` } as any}>
      <div className="sol-num">{num}</div>
      <div className="sol-icon" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)` }}>
        {icon === 'users' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
        {icon === 'refresh' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>}
        {icon === 'file' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/></svg>}
        {icon === 'shield' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      </div>
      <div className="sol-title">{title}</div>
      <div className="sol-desc">{desc}</div>
      <div className="sol-detail">{detail}</div>
    </div>
  );
}

function FlowStrip() {
  return (
    <div className="flow-strip">
      <FlowStep num="01" label="Team creates project" sub="Assign to member" icon="users" color="cy" />
      <FlowStep num="02" label="Member uploads" sub="Versioned uploads" icon="upload" color="blue" />
      <FlowStep num="03" label="Studio link sent" sub="Your unified brand" icon="link" color="gold" />
      <FlowStep num="04" label="Client approves" sub="Instantly visible" icon="check" color="green" />
      <FlowStep num="05" label="Studio gets paid" sub="Tracked in real time" icon="payment" color="gold" />
    </div>
  );
}

function FlowStep({ num, label, sub, icon, color }: any) {
  return (
    <div className="fs-step">
      <div className="fs-num">{num}</div>
      <div className="fs-ic" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)` }}>
        {icon === 'users' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>}
        {icon === 'upload' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/></svg>}
        {icon === 'link' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
        {icon === 'check' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
        {icon === 'payment' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
      </div>
      <div className="fs-label">{label}</div>
      <div className="fs-sub">{sub}</div>
    </div>
  );
}
function BeforeAfter() {
  return (
    <div className="sec-mid">
      <div className="wrap">
        <div className="s-eyebrow">The difference</div>
        <h2 className="s-h2">The same studio.<br /><em>Two completely different realities.</em></h2>
        <p className="s-p" style={{ maxWidth: '520px' }}>Kojo Studios. Accra. Five people. Eight active clients. Before and after moving to Delivami's team workspace.</p>

        <div className="ba-grid">
          <BACard title="Before Delivami" color="red" status="GHS 12k in delayed payments · 3 version mix-ups">
            <BARow color="red" text="Ama uploads TechHub v3 to personal Drive. Kojo has no idea it went out or which version." />
            <BARow color="red" text="Feedback comes in via call to Kojo, WhatsApp to Ama. Nobody has the full picture." />
            <BARow color="red" text="GCB Bank invoice sent by Kojo. He is now on a shoot. Nobody can find the email to follow up." />
            <BARow color="red" text="eduroam receives two links. One from Daniel, one from Kojo. Client is confused." />
          </BACard>

          <BACard title="With Delivami" color="cy" status="Zero version mix-ups · all invoices tracked">
            <BARow color="cy" text="Ama uploads to shared workspace. Kojo sees it immediately. Link goes out from studio brand." />
            <BARow color="cy" text="Feedback arrives as structured comments in the project. Visible to everyone." />
            <BARow color="cy" text="GCB Bank invoice is a studio record. Fatima sees it hasn't been paid and follows up." />
            <BARow color="cy" text="eduroam has one delivery page. No duplicate sends possible — status visible to everyone." />
          </BACard>
        </div>
      </div>
    </div>
  );
}

function BACard({ title, color, children, status }: any) {
  return (
    <div className="ba-card" style={{ background: color === 'red' ? 'rgba(248,113,113,0.015)' : 'rgba(6,182,212,0.012)' }}>
      <div className="ba-header" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)` }}>
        <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: `var(--${color}g)`, border: `1px solid var(--${color}b)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {color === 'red' ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <path d="M20 6 9 17l-5-5"/>}
          </svg>
        </div>
        <span className="ba-label" style={{ color: `var(--${color})` }}>{title}</span>
      </div>
      <div className="ba-rows">{children}</div>
      <div className="ba-summary" style={{ color: color === 'red' ? 'var(--red)' : 'var(--green)' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{color === 'red' ? <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> : <path d="M20 6 9 17l-5-5"/>}</svg>
        {status}
      </div>
    </div>
  );
}

function BARow({ color, text }: any) {
  return (
    <div className="ba-row">
      <div className="ba-ic" style={{ background: `var(--${color}g)`, border: `1px solid var(--${color}b)` }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {color === 'red' ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <path d="M20 6 9 17l-5-5"/>}
        </svg>
      </div>
      {text}
    </div>
  );
}
function Impact() {
  return (
    <div className="sec">
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
          <div className="s-eyebrow" style={{ justifyContent: 'center' }}>The numbers</div>
          <h2 className="s-h2" style={{ textAlign: 'center' }}>What creative studios report<br /><em>after switching.</em></h2>
          <p className="s-p" style={{ textAlign: 'center', maxWidth: '420px', margin: '0 auto' }}>Across two-to-five person studios in Ghana, Nigeria, Kenya and South Africa using Delivami.</p>
        </div>
        <div className="impact-row">
          <ImpactItem val="0" label="Version mix-ups reported after adopting shared workspace" detail="was 1.4 per client per month" color="cy" />
          <ImpactItem val="GHS 12k" label="Avg delayed payments recovered per studio per quarter" detail="invoices no longer lost in personal inboxes" color="gold" />
          <ImpactItem val="12" label="Active clients managed simultaneously by the top studio on Delivami" detail="5 team members · one workspace" color="green" />
          <ImpactItem val="8h" label="Per week saved in internal coordination per team member" detail="back into billable client work" color="purple" />
        </div>
      </div>
    </div>
  );
}

function ImpactItem({ val, label, detail, color }: any) {
  return (
    <div className="impact-item" style={{ ['--ii-glow' as any]: `var(--${color}g)` } as any}>
      <div className="ii-val" style={{ color: `var(--${color})` }}>{val}</div>
      <div className="ii-label">{label}</div>
      <div className="ii-detail">{detail}</div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="sec-mid">
      <div className="wrap">
        <div className="testi-wrap">
          <div className="tw-left">
            <div className="tw-kente"></div>
            <p className="tw-text">
              <span className="tw-qm">"</span>
              Before Delivami we had a WhatsApp group for every client, a shared Drive folder nobody could find anything in, and a monthly scramble to figure out who had been paid. Now I open one dashboard and I know exactly where every project is, who owns it, what the client said, and whether we've been paid. My team hasn't had a version mix-up in six months.
            </p>
            <div className="tw-person">
              <div className="tw-av">K</div>
              <div>
                <div className="tw-name">Kojo Asante</div>
                <div className="tw-role">Director · Kojo Studios · Accra, Ghana · 5-person team</div>
              </div>
            </div>
          </div>
          <div className="tw-right">
            <div className="tw-stat">
              <div className="tw-sv" style={{ color: 'var(--cy)' }}>0</div>
              <div className="tw-sl">Version mix-ups in 6 months since switching</div>
            </div>
            <div className="tw-stat">
              <div className="tw-sv" style={{ color: 'var(--gold)' }}>12</div>
              <div className="tw-sl">Active clients managed simultaneously</div>
            </div>
            <div className="tw-stat">
              <div className="tw-sv" style={{ color: 'var(--green)' }}>2h/week</div>
              <div className="tw-sl">Monday catch-up time eliminated entirely</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Workflow() {
  return (
    <div className="sec">
      <div className="wrap">
        <div className="wf-grid">
          <div>
            <div className="s-eyebrow">How the workflow changes</div>
            <h2 className="s-h2">What a studio gains<br />with <em>shared infrastructure.</em></h2>
            <p className="s-p" style={{ marginBottom: '32px' }}>The problems studios face are coordination problems, not talent problems. Each one has a direct Delivami fix.</p>
            <div className="wf-timeline">
              <WorkflowItem icon="users" title="Shared workspace replaces personal Drives" text="Every project lives in the studio account — not in any team member's personal Google Drive. Anyone can see any project, any time." color="cy" />
              <WorkflowItem icon="refresh" title="Locked versioning replaces filename chaos" text="When any team member uploads a new version, the previous one locks. Clients always receive the current cut." color="blue" />
              <WorkflowItem icon="chat" title="Centralised feedback replaces the scatter" text="Client comments land in the project — not in one team member's WhatsApp. The whole team sees the same feedback." color="gold" />
              <WorkflowItem icon="shield" title="Studio brand replaces individual delivery" text="Regardless of who sends the link, the client sees the same branded studio page. Consistent experience, consistent perception." color="gold" last />
            </div>
          </div>
          <div>
            <div style={{ fontSize: '9.5px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, marginBottom: '14px' }}>Studio vs solo vs agency</div>
            <div className="comparison-table">
              <div className="ct-header">
                <div className="cth">Feature</div>
                <div className="cth">Solo plan</div>
                <div className="cth">Studio plan</div>
              </div>
              <ComparisonRow topic="Workspace" solo="Single user" studio="Up to 5 seats" />
              <ComparisonRow topic="Visibility" solo="Owner only" studio="All team members" />
              <ComparisonRow topic="Invoices" solo="Creator only" studio="Studio-wide" />
              <ComparisonRow topic="Brand" solo="Individual" studio="Studio brand" />
              <ComparisonRow topic="Commission" solo="2.5%" studio="1.5%" />
            </div>
            <div style={{ marginTop: '14px', padding: '14px 16px', borderRadius: '12px', background: 'var(--cyg)', border: '1px solid var(--cyb)', fontSize: '12px', color: 'var(--muted)', lineHeight: 1.65 }}>
              <strong style={{ color: 'var(--ivory)' }}>Studio plan starts at GHS 120/month.</strong> The reduced 1.5% commission means the plan pays for itself after the first GHS 8,000 invoiced.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowItem({ icon, title, text, color, last }: any) {
  return (
    <div className="wt-item">
      <div className="wt-left"><div className="wt-dot" style={{ background: `var(--${color}g)`, borderColor: `var(--${color}b)` }}>
        {icon === 'users' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
        {icon === 'refresh' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>}
        {icon === 'chat' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
        {icon === 'shield' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      </div></div>
      <div className="wt-body" style={{ paddingBottom: last ? 0 : '26px' }}>
        <div className="wt-title" style={last ? { color: 'var(--gold)' } : {}}>{title}</div>
        <div className="wt-text">{text}</div>
      </div>
    </div>
  );
}

function ComparisonRow({ topic, solo, studio }: any) {
  return (
    <div className="ct-row">
      <div className="ct-cell topic">{topic}</div>
      <div className="ct-cell before">{solo}</div>
      <div className="ct-cell after">{studio}</div>
    </div>
  );
}

function RolesSection() {
  return (
    <div className="sec-mid">
      <div className="wrap">
        <div className="s-eyebrow">Other team sizes</div>
        <h2 className="s-h2">Delivami works at<br /><em>every stage of growth.</em></h2>
        <p className="s-p" style={{ maxWidth: '480px' }}>Whether you are a solo creative growing into a team, or an established agency — there is a plan for where you are.</p>
        <div className="roles-grid">
          <RoleCard title="Solopreneurs" sub="Branded delivery, timestamped approval, same-day payment." link="#F43F5E" icon="user" />
          <RoleCard title="Full Agencies" sub="White-label everything, advanced audit logs, API access." link="var(--purple)" icon="agency" />
          <RoleCard title="Video Editors" sub="4K streaming, frame-accurate comments, version history." link="var(--blue)" icon="video" />
        </div>
      </div>
    </div>
  );
}

function RoleCard({ title, sub, link, icon }: any) {
  return (
    <Link className="role-card" href="#">
      <div className="rc-icon" style={{ background: icon === 'user' ? 'rgba(244,63,94,0.1)' : `${link.replace('var(', 'rgba(').replace(')', ', 0.1)')}`, borderColor: icon === 'user' ? 'rgba(244,63,94,0.25)' : `${link.replace('var(', 'rgba(').replace(')', ', 0.25)')}` }}>
        {icon === 'user' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
        {icon === 'agency' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
        {icon === 'video' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>}
      </div>
      <div className="rc-title">{title}</div>
      <div className="rc-sub">{sub}</div>
      <div className="rc-link" style={{ color: link.startsWith('var') ? link : link }}>See the solution <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
    </Link>
  );
}

function CTA() {
  return (
    <div className="cta-sec">
      <div className="cta-bg"></div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '22px', position: 'relative', zIndex: 1 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Give your studio a real system
      </div>
      <h2 className="cta-h2">Stop coordinating over<br />WhatsApp. <em>Run a real studio.</em></h2>
      <p className="cta-sub">Studio plan starts free. Five seats. One shared workspace. Your brand on every delivery your team sends.</p>
      <div className="cta-btns">
        <button className="btn-p"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>Set up your studio workspace</button>
        <button className="btn-g">View all case studies</button>
      </div>
      <Link href="/case-studies" className="back-link" style={{ display: 'flex', margin: '16px auto 0', width: 'fit-content' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Back to Case Studies
      </Link>
    </div>
  );
}
