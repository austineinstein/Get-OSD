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
            <a
              href="https://get-osd.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Vercel build
            </a>
            <a
              href="https://get-osd.fancradle.com/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Fancradle build
            </a>
            <a
              href="https://github.com/FancradProjects/new"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              GitHub repository
            </a>
          </nav>
        </header>

        <main className="bg-white border rounded-lg p-6 shadow">
          <ExplorerForm />

          <section className="mt-8 border-t pt-5 text-sm text-slate-600" aria-labelledby="api-notice-heading">
            <h2 id="api-notice-heading" className="font-semibold text-slate-800">
              API Notice
            </h2>
            <p className="mt-2">
              Get OSD is provided as a technological tool for users accessing data and interacting with the Uniswap
              Protocol on their own initiative.
            </p>
            <p className="mt-2">
              Flystore Ltd does not recommend or endorse cryptoasset trading or investment activity. Nothing on this
              website, application, API or related documentation constitutes investment advice, a recommendation,
              invitation or inducement to buy, sell, hold or otherwise deal in cryptoassets.
            </p>
            <p className="mt-2">
              <strong className="text-slate-700">UK residents:</strong> Cryptoassets are high-risk and you may lose
              some or all of the money you invest. Get OSD is provided for informational and educational purposes and
              should not be regarded as financial advice.
            </p>
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
