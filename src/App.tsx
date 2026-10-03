import { useState } from 'react';

const shipmentStatuses = [
  { label: 'In progress', key: 'InProgress', tone: 'lime' },
  { label: 'Processed', key: 'Processed', tone: 'blue' },
  { label: 'Disputed', key: 'Disputed', tone: 'coral' },
  { label: 'Shipped', key: 'Shipped', tone: 'amber' },
  { label: 'Delivered', key: 'Delivered', tone: 'lime' },
  { label: 'Pending', key: 'Pending', tone: 'blue' },
  { label: 'Cancelled', key: 'Cancelled', tone: 'coral' },
];

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fly store Ltd home"><span className="brand-mark">F</span><span>Fly store Ltd</span></a>
        <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#coverage">Coverage</a><a className="nav-cta" href="#join">Join the waitlist <span>↗</span></a></nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="kicker"><span className="pulse" /> Freight, without the friction</p>
            <h1 id="hero-heading">The shortest route<br /><i>to trust.</i></h1>
            <p className="hero-lede">Routewise brings freight transport, asset protection and customer vouchers into one clear movement layer.</p>
            <a className="primary-button" href="#join">Start issuing vouchers <span>→</span></a>
            <div className="hero-meta"><span>Freight transport by road</span><span>Roadside support + protection</span></div>
          </div>
          <div className="route-visual" aria-label="Animated route map showing a shipment moving between locations">
            <div className="route-grid" />
            <div className="route-label route-label-a"><strong>BER</strong><small>pickup / 08:40</small></div>
            <div className="route-label route-label-b"><strong>AMS</strong><small>meeting point / 14:10</small></div>
            <div className="route-path"><span className="moving-dot" /></div>
            <div className="route-pin pin-a" /><div className="route-pin pin-b" />
            <div className="route-card"><span className="card-status">LIVE MOVEMENT</span><strong>RW-49410-22</strong><span>Berlin → Amsterdam</span><div className="mini-progress"><i /></div></div>
            <span className="coordinate coordinate-a">52.5200° N<br />13.4050° E</span>
            <span className="coordinate coordinate-b">52.3676° N<br />4.9041° E</span>
          </div>
        </section>

        <section className="status-ribbon" aria-label="Shipment lifecycle status">
          <div className="ribbon-intro"><span>Every movement,</span><strong>accounted for.</strong></div>
          <div className="status-track">{shipmentStatuses.map((status, index) => <div className={`status-item ${status.tone}`} key={status.key}><span className="status-node">{index + 1}</span><span>{status.label}</span></div>)}</div>
        </section>

        <section className="coverage" id="coverage" aria-labelledby="coverage-heading">
          <div className="section-heading"><p className="kicker">What we cover / 01</p><h2 id="coverage-heading">The physical layer<br /><i>with a safety net.</i></h2></div>
          <div className="coverage-grid">
            <article className="coverage-card coverage-main"><span className="card-number">01</span><div className="card-icon truck-icon" aria-hidden="true">▰</div><h3>Freight transport<br />by road</h3><p>THE49410 — move goods across cities and borders with a single, accountable status trail.</p><a href="#join">Explore movement <span>↗</span></a></article>
            <article className="coverage-card protection-card"><span className="card-number">02</span><div className="shield-icon" aria-hidden="true">◇</div><h3>Protect your assets<br />in concert</h3><p>52290 + insurance + packaging. A coordinated layer for everything on the road.</p><div className="protection-list"><span>Insurance cover</span><span>Packaging partners</span><span>Dispute resolution</span></div></article>
            <aside className="deadline-card"><p className="kicker">On the move / 02</p><strong>Promotion<br />starts here.</strong><div className="deadline-row"><span>VENUE DEADLINE</span><b>12.09.26</b></div><div className="deadline-row"><span>MEETING POINT</span><b>Dock 04 / BER</b></div><div className="deadline-row"><span>VOUCHERS LEFT</span><b>240 <em>of 500</em></b></div></aside>
          </div>
        </section>

        <section className="join-section" id="join" aria-labelledby="join-heading">
          <div><p className="kicker">Early access / 03</p><h2 id="join-heading">Make every handoff<br /><i>feel intentional.</i></h2></div>
          <div className="join-form-wrap">{submitted ? <div className="success-message"><span>✓</span><strong>You&apos;re on the route.</strong><p>We&apos;ll be in touch with your first voucher run.</p></div> : <form className="join-form" onSubmit={handleSubmit}><label htmlFor="email">Add your email to start issuing vouchers to your customers</label><div className="email-row"><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /><button type="submit">Get started <span>→</span></button></div><small>No spam. Just a better way to move.</small></form>}</div>
        </section>
      </main>
      <footer><span className="brand"><span className="brand-mark">F</span><span>Fly store Ltd</span></span><span>Company no. 16840644 · THE49410 / 52290</span><span>© 2026</span></footer>
    </div>
  );
}

export default App;
