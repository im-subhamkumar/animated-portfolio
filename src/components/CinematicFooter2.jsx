import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicFooter2() {
  const ref = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
          )
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={ref}
      className="border-t border-white/10 bg-[#080808] text-white/50 py-16 px-8 md:px-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Credits */}
        <div className="space-y-1 text-center md:text-left opacity-0">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-display font-bold text-sm tracking-tight mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b1a]" />
            <span>SUBHAM KUMAR · PERSONNEL PORTFOLIO</span>
          </div>
          <div className="text-white/40 font-mono text-xs">
            DIRECTED & ARCHITECTED BY SUBHAM KUMAR // FULL-STACK SDE & AGENTIC AI
          </div>
          <div className="text-white/30 font-mono text-[10px] tracking-wider">
            PES UNIVERSITY (MCA '26, 8.11 CGPA) · BENGALURU, INDIA
          </div>
        </div>

        {/* Center Aspect Ratio Stamp */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/40 opacity-0">
          <svg className="w-3.5 h-3.5 text-[#ff6b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
          <span>2.39:1 Spatial Projection</span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-6 opacity-0">
          <a
            href="https://github.com/im-subhamkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-widest uppercase hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subham-kumar-738710154/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-widest uppercase hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-[#ff6b1a] border border-white/10 hover:border-[#ff6b1a] text-white hover:text-black transition-all group"
            title="Return to top"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="opacity-0 max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/20 gap-2">
        <span>© {new Date().getFullYear()} SUBHAM KUMAR. ALL ARCHITECTURAL ASSETS PROTECTED.</span>
        <span>ENGINEERED WITH REACT, TAILWIND & GSAP</span>
      </div>
    </footer>
  )
}
