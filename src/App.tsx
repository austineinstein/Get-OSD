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
        </header>

        <main className="bg-white border rounded-lg p-6 shadow">
          <ExplorerForm />
        </main>

        <footer className="text-xs text-slate-500 mt-6 text-center">
          Informational/educational purposes only. Not investment advice.
        </footer>
      </div>
    </div>
  );
}
