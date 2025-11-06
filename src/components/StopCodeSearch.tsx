"use client";

import { useMemo, useState } from 'react';
import { stopCodeIndex, normalize } from '@/lib/stopCodes';

export function StopCodeSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [] as typeof entries;
    const entries = Object.values(stopCodeIndex);
    return entries.filter((e) =>
      normalize(e.code).includes(q) ||
      (e.aliases?.some((a) => normalize(a).includes(q)) ?? false) ||
      normalize(e.summary).includes(q)
    ).slice(0, 8);
  }, [query]);

  return (
    <div className="search">
      <input
        className="input"
        placeholder="Search stop code (e.g. MEMORY_MANAGEMENT, 0x0000001A)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search stop codes"
      />
      {query && (
        <div className="results">
          {results.length === 0 ? (
            <div className="result muted">No matches</div>
          ) : (
            results.map((r) => (
              <a key={r.code} className="result" href="#" onClick={(e) => e.preventDefault()}>
                <div className="code"><code>{r.code}</code></div>
                <div className="summary">{r.summary}</div>
                <ul className="actions">
                  {r.actions.slice(0, 3).map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </a>
            ))
          )}
          <div className="result"><a href="/stop-codes">Browse all stop codes ?</a></div>
        </div>
      )}
    </div>
  );
}
