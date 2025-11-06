import { StopCodeSearch } from '@/components/StopCodeSearch';
import { QuickActions } from '@/components/QuickActions';

export default function Page() {
  return (
    <div className="stack-lg">
      <section className="hero">
        <h1>Fix your Blue Screen of Death (BSOD)</h1>
        <p className="muted">Look up a stop code, run a step-by-step checklist, and learn how to read crash dumps.</p>
        <StopCodeSearch />
      </section>

      <QuickActions />

      <section className="card">
        <h2>How to start when you see a BSOD</h2>
        <ol>
          <li><strong>Capture the stop code</strong> (e.g., <code>CRITICAL_PROCESS_DIED</code>, <code>MEMORY_MANAGEMENT</code>) and any file name mentioned (e.g., <code>ntoskrnl.exe</code>).</li>
          <li><strong>Note recent changes</strong>: drivers, Windows Update, new hardware, overclocking.</li>
          <li><strong>Boot to Windows</strong> normally or into <a href="/checklist#safe-mode">Safe Mode</a> to stabilize.</li>
        </ol>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Analyze dumps quickly</h3>
          <p>Use <code>WinDbg</code> or <code>BlueScreenView</code> to read <code>C:\\Windows\\Minidump</code> files and spot the faulting module.</p>
          <a className="button" href="/checklist#dump-analysis">Open guidance</a>
        </article>
        <article className="card">
          <h3>Rule out RAM & disk</h3>
          <p>Run <code>memtest86+</code>, <code>Windows Memory Diagnostic</code>, and <code>chkdsk</code>/<code>S.M.A.R.T.</code> checks to catch failing hardware.</p>
          <a className="button" href="/checklist#hardware">Open hardware checks</a>
        </article>
        <article className="card">
          <h3>Stabilize drivers</h3>
          <p>Clean-install GPU drivers, remove conflicting antivirus, and roll back known-bad updates.</p>
          <a className="button" href="/checklist#drivers">Driver checklist</a>
        </article>
      </section>
    </div>
  );
}
