import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BSOD Troubleshooter',
  description: 'Interactive guide to diagnose and fix Windows Blue Screen errors',
  metadataBase: new URL('https://agentic-ecdd1e4f.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">BSOD Troubleshooter</a>
            <nav>
              <a href="/">Home</a>
              <a href="/stop-codes">Stop codes</a>
              <a href="/checklist">Checklist</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">Made for quick diagnostics. No tracking, no ads.</div>
        </footer>
      </body>
    </html>
  );
}
