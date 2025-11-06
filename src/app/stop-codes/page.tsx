import { stopCodeIndex } from '@/lib/stopCodes';

export default function StopCodesPage() {
  const codes = Object.values(stopCodeIndex).sort((a, b) => a.code.localeCompare(b.code));
  return (
    <div className="stack-lg">
      <h1>Common BSOD Stop Codes</h1>
      <p className="muted">Look up likely causes and recommended fixes. Use the homepage search to jump directly.</p>
      <ul className="list">
        {codes.map((entry) => (
          <li key={entry.code} className="card">
            <h3><code>{entry.code}</code></h3>
            <p>{entry.summary}</p>
            <details>
              <summary>Suggested actions</summary>
              <ul>
                {entry.actions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
