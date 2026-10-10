import React from 'react'
import { ArrowUp, Film, Terminal } from 'lucide-react'

export default function CinematicFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-neutral-400 py-16 px-4 sm:px-8 lg:px-12 relative z-10 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Credits */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-display font-bold text-sm tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff6b1a]" />
            <span>SUBHAM KUMAR · PERSONNEL PORTFOLIO</span>
          </div>
          <div className="text-neutral-500">
            DIRECTED & ARCHITECTED BY SUBHAM KUMAR // FULL-STACK SDE & AGENTIC AI
          </div>
          <div className="text-neutral-600 text-[11px]">
            PES UNIVERSITY (MCA '26, 8.11 CGPA) · BENGALURU, INDIA
          </div>
        </div>

        {/* Center Aspect Ratio Stamp */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-neutral-400">
          <Film className="w-3.5 h-3.5 text-[#ff6b1a]" />
          <span>2.39:1 CINEMATIC PROJECTION</span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/im-subhamkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subham-kumar-738710154/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/917488701545"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff6b1a] hover:underline"
          >
            WhatsApp
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 gap-2">
        <span>© 2026 SUBHAM KUMAR. ALL ARCHITECTURAL ASSETS & REELS PROTECTED.</span>
        <span>INSPIRED BY CINEMATIC ENGINEERING ART DIRECTION</span>
      </div>
    </footer>
  )
}
