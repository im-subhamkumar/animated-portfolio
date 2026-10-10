import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, CheckCircle2, Terminal, BookOpen, Layers, ArrowUpRight, Cpu } from 'lucide-react'

export default function SpatialExperience() {
  const experiences = [
    {
      take: "TAKE 01",
      role: "Full Stack Software Engineer Intern (Backend Lead)",
      company: "Design Esthetics",
      period: "Feb 2026 – Jun 2026",
      location: "Bengaluru, India",
      impact: "16 REST APIs · -20% Data Latency · Zero Discrepancies",
      bullets: [
        "Architected backend microservices and 16 modular RESTful API routes with Prisma ORM and MySQL.",
        "Programmed database-level cascade constraints and atomic transaction rules, preventing ledger discrepancies on settled invoices.",
        "Re-indexed relational schemas and foreign keys, slashing analytical data retrieval latency by 20%.",
        "Constructed responsive user-facing dashboards using React.js, Tailwind CSS, Zustand, and Recharts.",
        "Containerized workflows with Docker & Docker Compose, resolving environment parity issues and CORS bottlenecks."
      ],
      tags: ["Node.js", "Express.js", "MySQL", "Prisma ORM", "Docker", "React.js"]
    },
    {
      take: "TAKE 02",
      role: "Freelance AI Technical Evaluator & Code Analyst",
      company: "Outlier",
      period: "Oct 2024 – Jun 2025",
      location: "Remote (Global AI Audit)",
      impact: "500+ Codebases Audited · >98% Verification Accuracy",
      bullets: [
        "Audited, debugged, and benchmarked 500+ full-stack codebases (Python, JavaScript, TypeScript, SQL) for code quality and algorithmic correctness.",
        "Diagnosed runtime errors, memory leaks, and DOM/concurrency bottlenecks, maintaining a verified technical evaluation accuracy above 98%.",
        "Evaluated multi-step Agentic reasoning traces, tool-calling logic, and structured JSON outputs across foundation models.",
        "Authored detailed root-cause analyses, reproduction notes, and refactoring guidelines."
      ],
      tags: ["Agentic AI", "Code Auditing", "TypeScript", "Python", "LLM Evaluation"]
    },
    {
      take: "TAKE 03",
      role: "Published Research Author (Scopus Indexed)",
      company: "Springer Scopus Journal",
      period: "2024",
      location: "Peer-Reviewed Academic Publication",
      impact: "Legal NLP & OCR Analytics Engine",
      bullets: [
        "Authored and published research paper analyzing unstructured legal documentation through advanced OCR pipelines and domain-specific NLP models.",
        "Engineered automated entity extraction heuristics and semantic clause matching.",
        "Peer-reviewed and Scopus-indexed in prestigious international computer science proceedings."
      ],
      tags: ["NLP", "OCR Pipeline", "Python", "Document Intelligence", "Scopus"]
    }
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header Slate */}
      <div className="mb-14 pb-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ios-glass text-xs font-mono text-slate-700 mb-3 shadow-sm">
          <span className="text-[#ea580c] font-bold">SCENE 03 //</span>
          <span className="font-semibold">PRODUCTION TIMELINE & TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          ENGINEERING <span className="ghost-light">PRODUCTION</span> <span className="text-[#ea580c]">TAKES.</span>
        </h2>
      </div>

      {/* Production Takes Vertical Reel */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="rounded-3xl ios-glass-card p-7 sm:p-8 relative overflow-hidden group"
          >
            {/* Top Reel Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/70 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#ea580c] font-bold">{exp.take} //</span>
                <span className="text-slate-900 font-bold">{exp.company}</span>
                <span className="text-slate-500">· {exp.location}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm">
                {exp.period}
              </div>
            </div>

            {/* Role Header */}
            <div className="my-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors">
                  {exp.role}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-[#ea580c] font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>{exp.impact}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6 text-sm text-slate-600 leading-relaxed">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/70">
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-white/70 border border-slate-200 text-[11px] font-mono font-medium text-slate-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
