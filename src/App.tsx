import React from 'react';
import ExplorerForm from './components/ExplorerForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">Get OSD — Explorer (Raw JSON)</h1>
          <p className="text-sm text-slate-600 mt-1">
            Submit the standardized explorer request and view the raw JSON response.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm" aria-label="Project links">
            <a href="https://get-osd.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
              Vercel build
            </a>
            <a href="https://get-osd.fancradle.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
              Fancradle build
            </a>
            <a href="https://github.com/FancradProjects/new" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
              GitHub repository
            </a>
          </nav>
        </header>

        <main className="bg-white border rounded-lg p-6 shadow">
          <section className="mb-8 border-b pb-6" aria-labelledby="api-live-heading">
            <h2 id="api-live-heading" className="text-xl font-semibold text-slate-800">🚀 Get OSD API is live</h2>
            <p className="mt-2 text-slate-600">Structured access to Uniswap token data on Ethereum.</p>
            <dl className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <div><dt className="font-medium">Protocol</dt><dd>Uniswap</dd></div>
              <div><dt className="font-medium">Network</dt><dd>Ethereum</dd></div>
              <div><dt className="font-medium">Resource</dt><dd>tokens</dd></div>
              <div><dt className="font-medium">Contract</dt><dd className="break-all font-mono text-xs">0x2158ef983b7aa729fa30cfb05dddc79ac85aef43</dd></div>
            </dl>
            <h3 className="mt-5 text-sm font-semibold text-slate-800">Request</h3>
            <pre className="mt-2 overflow-x-auto rounded border bg-slate-50 p-3 text-xs text-slate-700">
              {`{"protocol":"uniswap","action":"explore","resource":"token","network":"ethereum","contractAddress":"0x2158ef983b7aa729fa30cfb05dddc79ac85aef43"}`}
            </pre>
            <p className="mt-3 text-sm text-slate-600">Use the explorer below to send this request to the configured API endpoint.</p>
          </section>

          <ExplorerForm />

          <section className="mt-8 border-t pt-5 text-sm text-slate-600" aria-labelledby="api-notice-heading">
            <h2 id="api-notice-heading" className="font-semibold text-slate-800">UK Residents Cryptoasset Disclaimer</h2>
            <p className="mt-1 text-xs text-slate-500">Issued by Flystore Ltd</p>
            <p className="mt-2">
              Get OSD is a web application and API provided by <strong>Flystore Ltd</strong> as a technological tool for users who wish to interact with or access data relating to the Uniswap Protocol on their own initiative.
            </p>
            <p className="mt-2">Flystore Ltd does not recommend, endorse or encourage users or potential users to engage in cryptoasset trading or investment activities.</p>
            <p className="mt-2">Users and potential users of the Get OSD web application, API, website and related content should not regard any webpage, interface, API response, data, documentation, information or other content made available by Flystore Ltd as constituting or involving any recommendation, invitation or inducement to deal in cryptoassets or to engage in cryptoasset trading or investment activity.</p>
            <p className="mt-2">Nothing provided through Get OSD constitutes investment advice, a recommendation to buy, sell, hold or otherwise deal in any cryptoasset, or an assessment of the merits of any particular cryptoasset, token, transaction or trading strategy.</p>
            <p className="mt-2">Get OSD provides technological tools and data. Users are responsible for their own decisions and for conducting their own independent research and assessment before undertaking any activity involving cryptoassets.</p>
            <p className="mt-2 font-medium text-slate-700">Flystore Ltd does not provide personalised investment advice through Get OSD.</p>
            <p className="mt-2">Cryptoassets are high-risk and can fall in value. Users may lose some or all of the money they invest.</p>
            <p className="mt-2">This disclaimer is provided for informational purposes and does not constitute legal or regulatory advice. Flystore Ltd should obtain appropriate UK legal advice regarding the application of the Financial Services and Markets Act 2000, the UK financial-promotion regime and applicable cryptoasset rules to Get OSD, its API, website, application and associated communications.</p>
          </section>
        </main>

        <footer className="text-xs text-slate-500 mt-6 text-center">
          <p className="font-medium text-slate-600">Flystore Ltd — Get OSD</p>
          <p className="mt-1">© 2026 Flystore Ltd. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
