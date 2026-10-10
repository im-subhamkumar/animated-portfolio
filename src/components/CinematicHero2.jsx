import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicHero2() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label animation
      gsap.from(".hero-label", {
        y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.4
      })

      // Staggered letter animation for name
      gsap.from(".hero-letter", {
        y: 100,
        opacity: 0,
        rotateX: -40,
        stagger: 0.06,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.7
      })

      // Main headline lines
      gsap.from(".hero-line", {
        y: 90, opacity: 0, stagger: 0.12, duration: 1.1,
        ease: "power4.out", delay: 0.6
      })

      // Subtitle
      gsap.from(".hero-sub", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.4
      })

      // Stats
      gsap.from(".hero-stat", {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6,
        ease: "power3.out", delay: 1.6
      })

      // CTA
      gsap.from(".hero-cta", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 1.8
      })

      // Scroll-out parallax fade
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 60%",
          end: "bottom 10%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -50,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const nameLetters = "SUBHAM".split("")

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[135vh] flex flex-col justify-center pt-32 pb-20 px-5 md:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <p className="hero-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.2em] uppercase font-mono font-semibold mb-8 leading-relaxed md:leading-normal">
          Full-Stack Software Engineer & Agentic AI Specialist
        </p>

        {/* Name with staggered letter animation */}
        <h1 className="text-[clamp(2.5rem,10vw,9rem)] font-display font-bold leading-[0.9] tracking-tight mb-6">
          <span className="flex overflow-hidden">
            {nameLetters.map((letter, i) => (
              <span key={i} className="hero-letter inline-block">
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <div className="space-y-1 mb-10">
          <p className="hero-line text-[clamp(1.5rem,6vw,3.5rem)] font-display font-bold leading-[1.1] tracking-tight">
            ENGINEERING <span className="ghost">SCALABLE</span>
          </p>
          <p className="hero-line text-[clamp(1.5rem,6vw,3.5rem)] font-display font-bold leading-[1.1] tracking-tight">
            BACKENDS & <span className="ghost-orange">AI AGENTS.</span>
          </p>
        </div>

        {/* Description */}
        <p className="hero-sub text-sm md:text-base text-white/40 max-w-xl leading-relaxed font-mono mb-12">
          Software Development Engineer specializing in distributed backends,
          relational database optimization, and autonomous agentic workflows.
          PES University MCA '26 · Bengaluru, India.
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-8 md:gap-14 mb-12 pb-10 border-b border-white/10">
          {[
            { value: "8.11", label: "CGPA", detail: "PES MCA '26" },
            { value: "500+", label: "Codebases", detail: "Audited at Outlier" },
            { value: "16", label: "APIs", detail: "Production REST" },
            { value: "Scopus", label: "Journal", detail: "Springer NLP" },
          ].map((stat, i) => (
            <div key={i} className="hero-stat">
              <div className="text-2xl md:text-3xl font-display font-bold text-white">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-[#ff6b1a] tracking-wider font-semibold mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-white/30 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/subham-kumar-738710154/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-[#ff6b1a] hover:bg-[#ea580c] text-black font-mono font-bold text-xs tracking-wider uppercase rounded-full transition-all hover:shadow-[0_0_40px_rgba(255,107,26,0.4)] flex items-center gap-2"
          >
            <span>Let's Connect</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#work"
            className="px-6 py-3 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-mono text-xs tracking-wider uppercase rounded-full transition-all"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1VbozpgLOgrM-W3KrzmHnkg-SEyKWLIr4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 border border-[#ff6b1a]/30 hover:border-[#ff6b1a]/80 text-[#ff6b1a]/80 hover:text-[#ff6b1a] font-mono text-xs tracking-wider uppercase rounded-full transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
        <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase writing-vertical">
          Scroll
        </span>
      </div>
    </section>
  )
}
