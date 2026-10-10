import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  {
    role: "Full Stack Software Engineer Intern",
    company: "Design Esthetics",
    period: "Feb 2026 – Jun 2026",
    location: "Bengaluru, India",
    impact: "Backend Lead · 16 REST APIs",
    bullets: [
      "Architected backend microservices and 16 modular RESTful API routes with Prisma ORM and MySQL.",
      "Programmed database-level cascade constraints and atomic transaction rules, preventing ledger discrepancies.",
      "Re-indexed relational schemas, slashing analytical data retrieval latency by 20%.",
      "Containerized workflows with Docker & Docker Compose, resolving environment parity issues."
    ],
    tech: ["Node.js", "Express", "MySQL", "Prisma", "Docker"]
  },
  {
    role: "AI Technical Evaluator & Code Analyst",
    company: "Outlier",
    period: "Oct 2024 – Jun 2025",
    location: "Remote (Global)",
    impact: "500+ Codebases Audited",
    bullets: [
      "Audited 500+ AI-generated codebases across Python, JavaScript, and C++ for logic, security, and algorithmic efficiency.",
      "Identified and rectified complex concurrency bugs, memory leaks, and prompt injection vulnerabilities.",
      "Maintained a >98% accuracy score in technical reviews, leading to selection for advanced tier evaluations."
    ],
    tech: ["Python", "JavaScript", "Security", "AI Prompting"]
  }
]

export default function CinematicExperience() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the center timeline down as you scroll
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      )

      // Animate each card in
      const cards = gsap.utils.toArray('.exp-card')
      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0
        gsap.fromTo(card,
          { 
            x: isLeft ? -100 : 100, 
            y: 50,
            opacity: 0,
            rotateY: isLeft ? -15 : 15,
            scale: 0.9
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
      
      // Node pulses
      const nodes = gsap.utils.toArray('.exp-node')
      nodes.forEach((node, i) => {
        gsap.fromTo(node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  // 3D Tilt effect on hover
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Rotate relative to mouse position
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    })
  }

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    })
  }

  return (
    <section id="experience" className="relative w-full py-32 px-4 md:px-8 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[#ff6b1a] tracking-[0.3em] text-xs font-mono font-bold uppercase mb-4">
            Timeline
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold leading-none tracking-tight">
            Professional <span className="ghost">Journey</span>
          </h2>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-0 w-px bg-white/10 md:-translate-x-1/2 origin-top" />
        <div 
          ref={lineRef} 
          className="absolute left-4 md:left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-[#ff6b1a] via-[#ff8533] to-transparent md:-translate-x-1/2 origin-top" 
        />

        <div className="relative z-10 space-y-24 md:space-y-32">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0
            
            return (
              <div key={i} className={`relative flex items-center md:justify-between w-full flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center">
                  <div className="exp-node w-4 h-4 rounded-full bg-[#080808] border-2 border-[#ff6b1a] shadow-[0_0_15px_rgba(255,107,26,0.6)] z-20" />
                </div>
                
                {/* Mobile Node */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 w-8 h-8 flex items-center justify-center top-8">
                  <div className="exp-node w-3 h-3 rounded-full bg-[#080808] border-2 border-[#ff6b1a] shadow-[0_0_10px_rgba(255,107,26,0.6)] z-20" />
                </div>

                {/* Empty Space for Grid */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <div className={`w-full pl-12 md:pl-0 md:w-[45%] flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div 
                    className="exp-card relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:bg-white/[0.04] hover:border-[#ff6b1a]/30 transition-colors cursor-default overflow-hidden group"
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  >
                    {/* Glowing orb effect inside card on hover */}
                    <div className="absolute -inset-24 bg-gradient-to-r from-[#ff6b1a]/0 via-[#ff6b1a]/5 to-[#ea580c]/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-1000 pointer-events-none rounded-full blur-2xl" />

                    <div className="relative z-10">
                      <div className="flex flex-col gap-1 mb-6">
                        <span className="text-[#ff6b1a] font-mono text-xs font-bold tracking-widest uppercase">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#ff6b1a] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-mono text-white/50">
                          {exp.company} // {exp.location}
                        </p>
                      </div>

                      <div className="mb-6 inline-flex px-3 py-1 bg-[#ff6b1a]/10 border border-[#ff6b1a]/20 rounded-full text-[10px] font-mono font-semibold text-[#ff6b1a]">
                        {exp.impact}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm font-mono text-white/40 leading-relaxed">
                            <span className="text-[#ff6b1a] mt-1.5">▹</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
