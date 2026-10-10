import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Database, Cpu, Layers, Terminal, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function SpatialArsenal() {
  const [filter, setFilter] = useState('ALL')

  const skillDomains = [
    {
      domain: "Distributed Backend & Relational Databases",
      id: "BACKEND",
      icon: <Database className="w-5 h-5 text-[#ea580c]" />,
      summary: "High-concurrency RESTful microservices, atomic transactions, schema indexing, and ORM pipelines.",
      skills: [
        { name: "Node.js & Express.js", level: "95%", note: "16 Production APIs at Design Esthetics" },
        { name: "MySQL & PostgreSQL", level: "90%", note: "Cascade constraints & relational modeling" },
        { name: "Prisma ORM", level: "92%", note: "Atomic transaction blocks & migrations" },
        { name: "Python & FastAPI", level: "88%", note: "Asynchronous background task queues" },
        { name: "REST Architecture & Redis", level: "85%", note: "Cache layers & latency optimization" },
      ]
    },
    {
      domain: "Agentic AI & LLM Reasoning",
      id: "AI",
      icon: <Cpu className="w-5 h-5 text-sky-600" />,
      summary: "Verified Anthropic Claude certification, multi-step agentic evaluation, and RAG architectures.",
      skills: [
        { name: "Agentic Tool-Calling Logic", level: "94%", note: "500+ Codebase Audits at Outlier" },
        { name: "Anthropic Claude & MCP", level: "92%", note: "Model Context Protocol & Prompt Rigour" },
        { name: "RAG & Vector Retrieval", level: "88%", note: "Semantic embeddings & chunk grounding" },
        { name: "Whisper AI & NLP", level: "86%", note: "Audio pipelines & Scopus published NLP" },
        { name: "LLM Hallucination Trap Audits", level: "96%", note: ">98% Verified Evaluation Accuracy" },
      ]
    },
    {
      domain: "Spatial & Frontend Architecture",
      id: "FRONTEND",
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      summary: "Fluid 60FPS UI, sub-50ms canvas latency, state management, and modern React 19 / Next.js ecosystems.",
      skills: [
        { name: "React 19 & Next.js", level: "92%", note: "Modular component systems & SSR" },
        { name: "TypeScript & JavaScript (ESNext)", level: "90%", note: "Strict typing & runtime stability" },
        { name: "HTML5 Canvas API", level: "88%", note: "Sub-50ms dynamic spatial rendering" },
        { name: "Tailwind CSS & Motion", level: "95%", note: "Cinematic glassmorphism & GPU springs" },
        { name: "Three.js & WebGL", level: "80%", note: "3D lighting, materials & presentation" },
      ]
    },
    {
      domain: "DevOps, Containerization & Agile",
      id: "DEVOPS",
      icon: <Terminal className="w-5 h-5 text-emerald-600" />,
      summary: "Reproducible container environments, CI/CD parity, and Certified Scrum Master sprint execution.",
      skills: [
        { name: "Docker & Docker Compose", level: "88%", note: "Resolved cross-env & CORS parity" },
        { name: "Git & GitHub Version Control", level: "92%", note: "Branching workflows & release tags" },
        { name: "Agile Scrum Master (ASM)", level: "95%", note: "Sprint scoping & velocity delivery" },
        { name: "Linux, Bash & Cloud Basics", level: "85%", note: "Server provisioning & process management" },
        { name: "Oracle Cloud Foundations", level: "90%", note: "Certified cloud database essentials" },
      ]
    }
  ]

  const filters = ['ALL', 'BACKEND', 'AI', 'FRONTEND', 'DEVOPS']

  const filteredDomains = filter === 'ALL'
    ? skillDomains
    : skillDomains.filter(d => d.id === filter)

  return (
    <section id="arsenal" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header Slate */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ios-glass text-xs font-mono text-slate-700 mb-3 shadow-sm">
            <span className="text-[#ea580c] font-bold">SCENE 04 //</span>
            <span className="font-semibold">SYSTEM ARSENAL & PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            TECHNICAL <span className="ghost-light">SYSTEMS</span> <span className="text-[#ea580c]">MATRIX.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl ios-glass text-xs font-mono shadow-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid: iOS Control Center Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDomains.map((domain, idx) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-3xl ios-glass-card p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Domain Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900">
                    {domain.domain}
                  </h3>
                  <div className="text-[10px] font-mono text-[#ea580c] uppercase tracking-wider font-bold">
                    MODULE // {domain.id}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {domain.summary}
              </p>

              {/* Skills List with iOS Sliders */}
              <div className="space-y-4">
                {domain.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-900 font-bold">{skill.name}</span>
                      <span className="text-[#ea580c] font-bold">{skill.level}</span>
                    </div>
                    {/* Meter Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-200/60 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] rounded-full shadow-sm"
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
