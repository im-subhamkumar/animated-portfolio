import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CREDENTIALS = [
  {
    title: "Oracle Data Platform Certified Foundations Associate",
    issuer: "Oracle",
    date: "2023",
    id: "CRED-001",
    desc: "Verified Relational Databases, SQL & Cloud Data Infrastructure.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FE98A87CAB46CFE44E86003EE4969A097004EC3F2F3C73679E582A686ED76C21"
  },
  {
    title: "Claude Certification",
    issuer: "Anthropic",
    date: "2024",
    id: "CRED-002",
    desc: "Verified Generative AI, Prompt Engineering, Agentic Workflows & Model Context Protocol (MCP).",
    link: "https://academy.claude.com/verify/e5dd6123612f73a1f2e783825936893f"
  },
  {
    title: "Certified Agile Scrum Master (ASM)",
    issuer: "SimpliLearn / EXIN",
    date: "2024",
    id: "CRED-003",
    desc: "Accredited Agile Development Process, DevOps & Sprint Management.",
    link: "https://certificates.simplicdn.net/share/9735896_9339406_1768852657844.pdf"
  },
  {
    title: "Top 5 Finalist — 24-Hour CodeBlitz Hackathon",
    issuer: "Hackathon",
    date: "2024",
    id: "CRED-004",
    desc: "Built and deployed a functional data-driven web application under strict time limits.",
    link: null
  }
]

export default function CinematicCredentials() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current
      // Removed horizontal scroll pinning for better user experience

      // Entry animation for cards
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, rotateZ: 5 },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: window.innerWidth > 768 ? sectionRef.current : card,
              start: window.innerWidth > 768 ? "top center" : "top 80%",
              toggleActions: "play none none reverse",
              delay: window.innerWidth > 768 ? i * 0.1 : 0
            }
          }
        )
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="credentials" 
      ref={sectionRef} 
      className="relative w-full bg-[#080808] py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="px-4 md:px-20 mb-12 md:mb-24">
        <p className="text-[#ff6b1a] tracking-[0.3em] text-xs font-mono font-bold uppercase mb-4">
          Credentials
        </p>
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold leading-none tracking-tight">
          Honors & <span className="ghost">Certifications</span>
        </h2>
      </div>

      <div className="px-4 md:px-20 pb-20">
        <div 
          ref={wrapperRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {CREDENTIALS.map((cred, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="relative w-full group"
            >
              {/* Cinematic Certificate Card */}
              {cred.link ? (
                <a href={cred.link} target="_blank" rel="noopener noreferrer" className="block relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[#ff6b1a]/40 transition-all duration-500 overflow-hidden group/link cursor-pointer">
                  {/* Background glowing watermark */}
                  <div className="absolute -right-8 -bottom-8 text-9xl font-display font-bold text-white/[0.02] group-hover:text-[#ff6b1a]/[0.05] transition-colors rotate-12 pointer-events-none select-none">
                    {cred.date}
                  </div>
  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-[#ff6b1a]/20 group-hover:border-[#ff6b1a]/40 transition-colors">
                        <svg className="w-6 h-6 text-white/50 group-hover:text-[#ff6b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest">{cred.id}</span>
                    </div>
  
                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight group-hover/link:text-[#ff6b1a] transition-colors">
                      {cred.title}
                    </h3>
                    <p className="text-xs font-mono text-[#ff6b1a] mb-6 uppercase tracking-wider font-bold">
                      {cred.issuer} · {cred.date}
                    </p>
                    
                    <p className="text-sm font-mono text-white/40 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                  
                  {/* Accent line bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6b1a] to-[#ea580c] group-hover:w-full transition-all duration-700 ease-out" />
                </a>
              ) : (
                <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[#ff6b1a]/40 transition-all duration-500 overflow-hidden">
                  {/* Background glowing watermark */}
                  <div className="absolute -right-8 -bottom-8 text-9xl font-display font-bold text-white/[0.02] group-hover:text-[#ff6b1a]/[0.05] transition-colors rotate-12 pointer-events-none select-none">
                    {cred.date}
                  </div>
  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-[#ff6b1a]/20 group-hover:border-[#ff6b1a]/40 transition-colors">
                        <svg className="w-6 h-6 text-white/50 group-hover:text-[#ff6b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest">{cred.id}</span>
                    </div>
  
                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                      {cred.title}
                    </h3>
                    <p className="text-xs font-mono text-[#ff6b1a] mb-6 uppercase tracking-wider font-bold">
                      {cred.issuer} · {cred.date}
                    </p>
                    
                    <p className="text-sm font-mono text-white/40 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                  
                  {/* Accent line bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6b1a] to-[#ea580c] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
