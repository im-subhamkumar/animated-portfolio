import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TECH = [
  "Java", "Python", "JavaScript", "TypeScript", "Node.js", "React.js",
  "Next.js", "Express.js", "FastAPI", "MySQL", "PostgreSQL", "MongoDB",
  "Prisma ORM", "Docker", "Git", "REST APIs", "Tailwind CSS"
]

const EXPERIENCE = [
  {
    role: "Full Stack Engineer Intern (Backend Lead)",
    company: "Design Esthetics",
    period: "Feb 2026 – Jun 2026",
    impact: "16 REST APIs · -20% Data Latency"
  },
  {
    role: "AI Technical Evaluator & Code Analyst",
    company: "Outlier",
    period: "Oct 2024 – Jun 2025",
    impact: "500+ Codebases · >98% Accuracy"
  }
]

export default function CinematicAbout() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      })

      tl.from(".about-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".about-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".about-p", { y: 20, opacity: 0, duration: 0.35, ease: "power3.out" }, 0.15)
        .from(".about-skill", { x: -10, opacity: 0, stagger: 0.03, duration: 0.25, ease: "power2.out" }, 0.22)
        .from(".about-exp", { y: 20, opacity: 0, stagger: 0.1, duration: 0.4, ease: "power3.out" }, 0.3)

      // Scroll-out parallax fade
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 15%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -45,
      })

      setTimeout(() => ScrollTrigger.refresh(), 300)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen px-5 md:px-20 py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="about-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.2em] uppercase font-mono font-semibold mb-6">
          About
        </p>

        {/* Heading */}
        <h2 className="about-h text-[clamp(2rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-8">
          <span className="ghost">Creative</span> Engineer
          <br />
          & Problem <span className="ghost-orange">Solver.</span>
        </h2>

        {/* Bio */}
        <div className="about-p max-w-2xl mb-16">
          <p className="text-sm md:text-base text-white/40 leading-relaxed font-mono">
            I'm a Software Development Engineer specializing in architecting scalable distributed 
            backends and autonomous AI workflows. Currently pursuing my MCA at PES University 
            (CGPA 8.11), I've built production systems at Design Esthetics and evaluated 500+ 
            codebases at Outlier. My peer-reviewed NLP research is published in Springer's Scopus 
            journal.
          </p>
        </div>

        {/* Two-column layout: Skills + Experience */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-6">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH.map((skill, i) => (
                <span
                  key={skill}
                  className="about-skill px-3 py-1.5 text-[11px] font-mono text-white/50 border border-white/8 rounded-full hover:text-[#ff6b1a] hover:border-[#ff6b1a]/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-6">
              Experience
            </p>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  className="about-exp group p-5 rounded-2xl dark-glass-card hover:border-[#ff6b1a]/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-display font-bold text-white group-hover:text-[#ff6b1a] transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-white/40 mb-1">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-[11px] font-mono text-[#ff6b1a]/70 font-semibold">
                    {exp.impact}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume link */}
            <a
              href="https://drive.google.com/file/d/1VbozpgLOgrM-W3KrzmHnkg-SEyKWLIr4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-xs font-mono text-[#ff6b1a]/80 hover:text-[#ff6b1a] transition-colors group"
            >
              <span className="tracking-wider uppercase font-bold">View / Download Resume</span>
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
