import Link from 'next/link';
import { ArrowLeft, ExternalLink, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050510] text-white">
      <div className="scanlines" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_28%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-5xl border-4 border-slate-800 bg-[#0c0c20]/90 p-4 shadow-[0_0_40px_rgba(139,92,246,0.16)] pixel-corners sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-3 py-2 font-press-start text-[9px] uppercase tracking-[0.25em] text-[#22D3EE]">
                <span className="h-2 w-2 bg-[#22D3EE]" />
                Quest Not Found
              </div>

              <div className="space-y-4">
                <p className="font-press-start text-5xl leading-none text-[#8B5CF6] sm:text-7xl lg:text-8xl">
                  404
                </p>
                <h1 className="font-press-start text-sm leading-relaxed text-white sm:text-lg">
                  THIS PROJECT PORTAL IS STILL LOCKED
                </h1>
                <p className="max-w-2xl font-share-tech text-lg leading-relaxed text-slate-300 sm:text-xl">
                  The route exists in the portfolio, but the live demo has not been deployed yet.
                  Check back later or return to the main hub to explore the available builds.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border-4 border-b-[6px] border-r-[6px] border-t-[#67e8f9] border-l-[#67e8f9] border-r-[#0891b2] border-b-[#0891b2] bg-[#22D3EE] px-4 py-3 font-press-start text-[10px] uppercase tracking-wider text-[#050510] transition-transform hover:-translate-y-0.5"
                >
                  <Home className="h-4 w-4" />
                  Return Home
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 border-4 border-b-[6px] border-r-[6px] border-t-[#232252] border-l-[#232252] border-r-[#020208] border-b-[#020208] bg-[#111029] px-4 py-3 font-press-start text-[10px] uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back To Projects
                </Link>
              </div>
            </section>

            <aside className="border-4 border-slate-800 bg-[#050510] p-5 pixel-corners">
              <div className="border border-[#8B5CF6]/30 bg-[#0f1023] p-4">
                <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-press-start text-[9px] uppercase tracking-[0.25em] text-slate-400">
                    STATUS PANEL
                  </span>
                  <span className="font-press-start text-[9px] uppercase tracking-wider text-amber-300">
                    OFFLINE
                  </span>
                </div>

                <div className="space-y-4 font-share-tech text-base text-slate-300">
                  <div className="rounded border border-slate-800 bg-slate-950/70 p-3">
                    <p className="font-press-start text-[9px] uppercase tracking-wider text-slate-500">
                      LIVE DEMO
                    </p>
                    <p className="mt-2 text-lg text-white">Unavailable</p>
                  </div>

                  <div className="rounded border border-slate-800 bg-slate-950/70 p-3">
                    <p className="font-press-start text-[9px] uppercase tracking-wider text-slate-500">
                      NEXT ACTION
                    </p>
                    <p className="mt-2">
                      Explore another shipped project or contact me for a private walkthrough.
                    </p>
                  </div>

                  <a
                    href="mailto:lethienacqt@gmail.com?subject=Project%20demo%20request"
                    className="inline-flex w-full items-center justify-center gap-2 border border-[#8B5CF6]/30 bg-[#8B5CF6]/12 px-3 py-3 font-press-start text-[9px] uppercase tracking-wider text-[#d8b4fe] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Request Demo Access
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
