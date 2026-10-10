import React from 'react'
import { ArrowUp, Film, Terminal } from 'lucide-react'

export default function SpatialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-2xl text-slate-500 py-16 px-4 sm:px-8 lg:px-12 relative z-10 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Credits */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 font-display font-bold text-sm tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]" />
            <span>SUBHAM KUMAR · PERSONNEL PORTFOLIO</span>
          </div>
          <div className="text-slate-600 font-medium">
            DIRECTED & ARCHITECTED BY SUBHAM KUMAR // FULL-STACK SDE & AGENTIC AI
          </div>
          <div className="text-slate-500 text-[11px]">
            PES UNIVERSITY (MCA '26, 8.11 CGPA) · BENGALURU, INDIA
          </div>
        </div>

        {/* Center Aspect Ratio Stamp */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-sm">
          <Film className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>2.39:1 SPATIAL PROJECTION</span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/im-subhamkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subham-kumar-738710154/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/917488701545"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ea580c] hover:underline font-bold"
          >
            WhatsApp
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all shadow-sm"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <span>© 2026 SUBHAM KUMAR. ALL ARCHITECTURAL ASSETS PROTECTED.</span>
        <span>ENGINEERED WITH APPLE SPATIAL GLASS & 3D WEBGL</span>
      </div>
    </footer>
  )
}
