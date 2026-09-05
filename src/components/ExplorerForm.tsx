import React, { useState } from 'react';

type Resource = 'balance' | 'transaction' | 'receipt' | 'block';

const DEFAULT_VALUES: Record<Resource, string> = {
  balance: '0x0000000000000000000000000000000000000000',
  transaction: '',
  receipt: '',
  block: 'latest'
};

const RESOURCE_LABELS: Record<Resource, string> = {
  balance: 'Balance',
  transaction: 'Transaction',
  receipt: 'Receipt',
  block: 'Block'
};

function formatValue(value: unknown): string {
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

export default function ExplorerForm() {
  const apiUrl = import.meta.env.VITE_API_URL || '/api/v1/explore';
  const [resource, setResource] = useState<Resource>('balance');
  const [value, setValue] = useState(DEFAULT_VALUES.balance);
  const [response, setResponse] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ code: string; message: string } | null>(null);

  function changeResource(nextResource: Resource) {
    setResource(nextResource);
    setValue(DEFAULT_VALUES[nextResource]);
    setResponse(null);
    setError(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    const encodedValue = encodeURIComponent(value.trim());
    const path = resource === 'balance'
      ? `/address/${encodedValue}/balance`
      : resource === 'transaction'
        ? `/transaction/${encodedValue}`
        : resource === 'receipt'
          ? `/transaction/${encodedValue}/receipt`
          : `/block/${encodedValue}`;

    try {
      const result = await fetch(`${apiUrl.replace(/\/$/, '')}${path}`);
      const body = await result.json();
      if (!result.ok) {
        setError(body.error ?? { code: 'request_failed', message: 'The explorer request failed.' });
      } else {
        setResponse(body);
      }
    } catch {
      setError({ code: 'network_error', message: 'The explorer API could not be reached.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="explorer-panel" aria-labelledby="explorer-heading">
      <div className="panel-heading">
        <div><p className="eyebrow">Mainnet lookup</p><h2 id="explorer-heading">Explore Ethereum</h2></div>
        <span className="status-pill"><span aria-hidden="true" /> RPC gateway ready</span>
      </div>
      <div className="resource-tabs" role="tablist" aria-label="Explorer resource">
        {(Object.keys(RESOURCE_LABELS) as Resource[]).map((item) => (
          <button key={item} className={resource === item ? 'resource-tab active' : 'resource-tab'} onClick={() => changeResource(item)} role="tab" aria-selected={resource === item} type="button">{RESOURCE_LABELS[item]}</button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="lookup-form">
        <label htmlFor="explorer-value">{resource === 'balance' ? 'Ethereum address' : resource === 'block' ? 'Block number, tag, or hash' : 'Transaction hash'}</label>
        <div className="lookup-row">
          <input id="explorer-value" value={value} onChange={(event) => setValue(event.target.value)} placeholder={resource === 'balance' ? '0x...' : resource === 'block' ? 'latest or 0x...' : '0x...'} required spellCheck={false} autoComplete="off" />
          <button className="submit-button" type="submit" disabled={loading || !value.trim()}>{loading ? 'Loading' : 'Inspect'}</button>
        </div>
        <p className="field-note">GET {apiUrl.replace(/\/$/, '')}/{resource === 'receipt' ? 'transaction/:hash/receipt' : `${resource}/:value`}</p>
      </form>
      <div className="result-area" aria-live="polite">
        {error && <div className="error-box"><strong>{error.code}</strong><span>{error.message}</span></div>}
        {response !== null && <pre className="result-box">{formatValue(response)}</pre>}
        {response === null && !error && !loading && <div className="empty-result">Choose a resource and inspect a mainnet value.</div>}
        {loading && <div className="empty-result">Querying the gateway...</div>}
      </div>
    </section>
  );
}
