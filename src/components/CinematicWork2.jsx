import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: "01",
    title: "HealthPodcastIQ",
    subtitle: "Cloud-Native AI Media Platform",
    category: "AI & Agentic",
    tech: ["Python", "FastAPI", "React.js", "Docker", "Whisper AI", "RAG"],
    desc: "Architected an asynchronous audio ingestion pipeline converting multi-speaker media into structured text summaries using Whisper AI. Engineered FastAPI REST microservices with vector embedding RAG retrieval.",
    metrics: "Zero packet loss · Multi-speaker transcription",
    github: "https://github.com/im-subhamkumar/HealthPodcastIQ",
  },
  {
    num: "02",
    title: "Dynamic Canvas Engine",
    subtitle: "Automated Collage & Spatial Placement Tool",
    category: "Frontend",
    tech: ["React.js", "TypeScript", "HTML5 Canvas API", "Spatial Math"],
    desc: "Built a high-performance web tool applying dynamic spatial placement algorithms in TypeScript to calculate multi-asset coordinates. Engineered event dispatchers and optimized rendering loops.",
    metrics: "<50ms rendering · Multi-asset drag & scale",
    github: "https://github.com/im-subhamkumar",
  },
  {
    num: "03",
    title: "Enterprise Spend Platform",
    subtitle: "Full-Stack Financial Transaction System",
    category: "Backend",
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "Prisma ORM", "Docker"],
    desc: "Engineered an end-to-end corporate financial transaction platform modeling multi-tier corporate expenses, itemized line items, and audit trails with atomic transaction integrity.",
    metrics: "16 REST endpoints · -20% query latency",
    github: "https://github.com/im-subhamkumar",
  },
  {
    num: "04",
    title: "Predictive Analytics Engine",
    subtitle: "Behavioral Clustering & ML Pipeline",
    category: "AI & Agentic",
    tech: ["Python", "Scikit-Learn", "KMeans", "GMM", "Streamlit"],
    desc: "Constructed an end-to-end Python pipeline to ingest, clean, normalize, and statistically analyze complex behavioral datasets, discovering hidden user cohorts via unsupervised clustering.",
    metrics: "Silhouette validated · Real-time correlation matrices",
    github: "https://github.com/im-subhamkumar/Sleep_Pattern_Prediction_AI-ML",
  },
]

export default function CinematicWork2() {
  const ref = useRef(null)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      })

      tl.from(".work-label", { y: 14, opacity: 0, duration: 0.3 })
        .from(".work-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".work-item", { y: 40, opacity: 0, stagger: 0.12, duration: 0.5, ease: "power3.out" }, 0.2)

      // Scroll-out
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
      id="work"
      ref={ref}
      className="relative w-full min-h-screen px-5 md:px-20 py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="work-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.2em] uppercase font-mono font-semibold mb-6">
          Selected Work
        </p>

        <h2 className="work-h text-[clamp(2rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-16">
          Featured <span className="ghost">Projects</span>
          <br />
          & <span className="ghost-orange">Systems.</span>
        </h2>

        {/* Project list - cinematic horizontal cards */}
        <div className="space-y-4">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="work-item group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                hoveredIdx === idx
                  ? 'bg-white/[0.04] border-[#ff6b1a]/20 shadow-[0_0_60px_rgba(255,107,26,0.06)]'
                  : 'bg-transparent border-white/[0.06] hover:border-white/[0.12]'
              }`}>
                {/* Top row: Number, Category, Tech */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-5xl md:text-6xl font-display font-bold transition-colors duration-500 ${
                      hoveredIdx === idx ? 'text-[#ff6b1a]' : 'text-white/[0.06]'
                    }`}>
                      {project.num}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-[#ff6b1a] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-white/30">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/20 tracking-wider uppercase px-3 py-1 border border-white/8 rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/10 rounded-full text-white/30 hover:text-[#ff6b1a] hover:border-[#ff6b1a]/30 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Expandable content on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredIdx === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-sm text-white/35 font-mono leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono text-[#ff6b1a]/70 font-semibold px-3 py-1 bg-[#ff6b1a]/8 border border-[#ff6b1a]/15 rounded-full">
                        {project.metrics}
                      </span>
                    </div>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] font-mono text-white/30 border border-white/[0.06] rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile: Always show description */}
                <div className="md:hidden pt-3">
                  <p className="text-xs text-white/30 font-mono leading-relaxed mb-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[9px] font-mono text-white/25 border border-white/[0.06] rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-[#ff6b1a] tracking-wider uppercase"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
