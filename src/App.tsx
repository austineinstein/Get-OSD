import ExplorerForm from './components/ExplorerForm';

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Get OSD home"><span className="brand-mark">G</span><span>Get OSD</span></a>
        <nav aria-label="External resources"><a href="https://github.com/FancradProjects/new" target="_blank" rel="noreferrer">Source</a><a href="https://get-osd.vercel.app/" target="_blank" rel="noreferrer">Live app</a></nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-copy"><p className="eyebrow">Ethereum mainnet / data gateway</p><h1>Read the chain<br /><em>with clarity.</em></h1><p className="hero-description">A focused explorer for balances, transactions, receipts, and blocks. Server-side RPC access keeps provider credentials away from your browser.</p><div className="hero-details"><span><i className="detail-dot green" /> Ethereum mainnet</span><span><i className="detail-dot amber" /> Read-only</span></div></div>
          <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">Ξ</div></div>
        </section>
        <ExplorerForm />
        <section className="principles" aria-label="Gateway principles"><article><span>01</span><h2>Provider agnostic</h2><p>The frontend speaks to a stable application API, never directly to Alchemy or another RPC provider.</p></article><article><span>02</span><h2>Predictable responses</h2><p>Every lookup returns a consistent data envelope, with safe errors when the chain or provider is unavailable.</p></article><article><span>03</span><h2>Built for extension</h2><p>Application identity and private records can be layered in later without mixing them into public chain data.</p></article></section>
        <section className="notice-section" aria-labelledby="notice-heading"><p className="eyebrow">Important information</p><h2 id="notice-heading">Cryptoasset disclaimer</h2><p>Get OSD is a technological tool for users who wish to access data relating to the Uniswap Protocol and Ethereum on their own initiative. It does not provide investment advice or recommend buying, selling, holding, or otherwise dealing in any cryptoasset.</p><p>Cryptoassets are high-risk and can fall in value. Users may lose some or all of the money they invest. Users are responsible for their own decisions and independent research.</p><p className="notice-source">Issued by Flystore Ltd. This notice is informational and is not legal or regulatory advice.</p></section>
      </main>
      <footer className="footer"><span>Flystore Ltd / Get OSD</span><span>© 2026</span></footer>
    </div>
  );
}
