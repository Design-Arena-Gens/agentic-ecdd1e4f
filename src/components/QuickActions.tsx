export function QuickActions() {
  return (
    <section className="card">
      <h2>Quick actions</h2>
      <ol className="steps">
        <li>
          <strong>If Windows won?t boot:</strong> Use Automatic Repair ? Advanced options ? Startup Settings ? Safe Mode.
        </li>
        <li>
          <strong>Collect info:</strong> Stop code, any driver names, recent changes, minidumps from <code>C:\\Windows\\Minidump</code>.
        </li>
        <li>
          <strong>Run basics:</strong> <code>sfc /scannow</code> then <code>DISM /Online /Cleanup-Image /RestoreHealth</code>.
        </li>
        <li>
          <strong>Drivers:</strong> Clean-install GPU drivers (DDU), update chipset/storage/lan from OEM.
        </li>
        <li>
          <strong>Hardware:</strong> MemTest86+, SMART check, check temps/PSU, revert overclocks.
        </li>
      </ol>
    </section>
  );
}
