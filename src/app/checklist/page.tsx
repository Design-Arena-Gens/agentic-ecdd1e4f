export default function ChecklistPage() {
  return (
    <div className="stack-lg">
      <h1>BSOD Troubleshooting Checklist</h1>

      <section id="safe-mode" className="card">
        <h2>Stabilize (Safe Mode)</h2>
        <ul>
          <li>Boot into Safe Mode with Networking (Shift + Restart ? Troubleshoot ? Advanced options).</li>
          <li>Disable overclocking in BIOS/UEFI; set memory XMP/DOCP to Auto.</li>
          <li>Temporarily uninstall third-party antivirus/VPN/tuning tools.</li>
        </ul>
      </section>

      <section id="drivers" className="card">
        <h2>Drivers & Updates</h2>
        <ul>
          <li>GPU: Use DDU in Safe Mode; install latest WHQL from vendor.</li>
          <li>Chipset, Storage (RST/AMDAHCI), Network: install from motherboard/OEM site.</li>
          <li>Windows Update: uninstall recently installed updates if BSODs began after Patch Tuesday.</li>
          <li>Device Manager: remove unknown devices or devices with warnings; avoid optional driver updates via Windows Update unless necessary.</li>
        </ul>
      </section>

      <section id="hardware" className="card">
        <h2>Hardware Checks</h2>
        <ul>
          <li>RAM: Run MemTest86+ for at least 2 passes; test sticks individually.</li>
          <li>Disk: <code>chkdsk /scan</code> and check SMART with CrystalDiskInfo; for SSDs, update firmware.</li>
          <li>Thermals: monitor CPU/GPU temps under load; clean dust; ensure adequate PSU.</li>
          <li>BIOS/UEFI: update to a stable version; reset to defaults if unstable.</li>
        </ul>
      </section>

      <section id="dump-analysis" className="card">
        <h2>Dump Analysis</h2>
        <ul>
          <li>Ensure dumps enabled: System Properties ? Startup and Recovery ? Small memory dump (256 KB).</li>
          <li>Analyze <code>C:\\Windows\\Minidump</code> with WinDbg: <code>!analyze -v</code>, inspect the faulting module and call stack.</li>
          <li>Look for widespread culprits: <code>ntoskrnl.exe</code> alone often points to hardware/driver issues, not the kernel itself.</li>
        </ul>
      </section>

      <section className="card">
        <h2>System Repairs</h2>
        <ul>
          <li><code>sfc /scannow</code> then <code>DISM /Online /Cleanup-Image /RestoreHealth</code></li>
          <li>Disable automatic restart on system failure to read stop codes.</li>
          <li>Use System Restore to roll back; as a last resort, Repair Install (In-place upgrade).</li>
        </ul>
      </section>
    </div>
  );
}
