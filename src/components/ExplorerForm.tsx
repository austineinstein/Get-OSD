import React, { useState } from 'react';

const DEFAULT_PAYLOAD = {
  protocol: 'uniswap',
  action: 'explore',
  resource: 'token',
  network: 'ethereum',
  contractAddress: '0x2158ef983b7aa729fa30cfb05dddc79ac85aef43'
};

export default function ExplorerForm() {
  const apiUrl = import.meta.env.VITE_API_URL || '/api/v1/explore';
  const [payloadText, setPayloadText] = useState(JSON.stringify(DEFAULT_PAYLOAD, null, 2));
  const [responseText, setResponseText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResponseText(null);

    let parsed;
    try {
      parsed = JSON.parse(payloadText);
    } catch (err) {
      setError('Invalid JSON payload. Fix and try again.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(parsed)
      });

      const text = await res.text();
      if (!res.ok) {
        setError(`Request failed: ${res.status} ${res.statusText || 'Unknown error'}`);
        setResponseText(text);
      } else {
        try {
          const obj = JSON.parse(text);
          setResponseText(JSON.stringify(obj, null, 2));
        } catch {
          setResponseText(text);
        }
      }
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  function fillDefault() {
    setPayloadText(JSON.stringify(DEFAULT_PAYLOAD, null, 2));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">API URL</label>
          <input
            type="text"
            value={apiUrl}
            readOnly
            className="w-full rounded border px-3 py-2 bg-slate-50 text-sm text-slate-700"
          />
          <p className="text-xs text-slate-500 mt-1">Change VITE_API_URL in .env when needed.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Request JSON</label>
          <textarea
            rows={10}
            value={payloadText}
            onChange={(e) => setPayloadText(e.target.value)}
            className="w-full font-mono text-sm rounded border p-3 bg-white"
          />
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={fillDefault}
              className="px-3 py-2 bg-slate-100 rounded border text-sm"
            >
              Reset to default
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-indigo-600 text-white rounded text-sm disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-slate-700 mb-2">Response</h3>
        {error && (
          <div className="mb-3 text-sm text-red-700 bg-red-50 p-3 rounded border border-red-100">
            {error}
          </div>
        )}
        <pre className="max-h-[60vh] overflow-auto rounded border p-3 bg-black text-white text-xs font-mono">
          {responseText ?? (loading ? 'Waiting for response…' : 'No response yet.')}
        </pre>
      </div>
    </div>
  );
}
