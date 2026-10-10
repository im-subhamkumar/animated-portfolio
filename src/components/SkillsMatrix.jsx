import React from 'react'
import { motion } from 'motion/react'
import { Cpu, Server, Database, Layout, Terminal, CheckCircle2 } from 'lucide-react'

export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: "Agentic AI & LLM Systems",
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      skills: [
        { name: "Anthropic Claude (Certified)", level: "98%" },
        { name: "Model Context Protocol (MCP)", level: "95%" },
        { name: "Tool Calling & Structured JSON", level: "96%" },
        { name: "Whisper AI & Audio Ingestion", level: "90%" },
        { name: "RAG & Vector Embeddings", level: "92%" },
        { name: "LLM Observability & Evaluation", level: "95%" }
      ],
      color: "border-cyan-500/30 bg-cyan-500/5"
    },
    {
      title: "Backend & Distributed Systems",
      icon: <Server className="w-5 h-5 text-purple-600" />,
      skills: [
        { name: "Node.js & Express.js", level: "96%" },
        { name: "Python & FastAPI", level: "92%" },
        { name: "RESTful API Engineering", level: "98%" },
        { name: "Prisma ORM & Data Access", level: "94%" },
        { name: "Microservices Architecture", level: "90%" },
        { name: "JWT Auth & RBAC Security", level: "95%" }
      ],
      color: "border-purple-500/30 bg-purple-500/5"
    },
    {
      title: "Databases & Optimization",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      skills: [
        { name: "MySQL & Relational Modeling", level: "95%" },
        { name: "PostgreSQL & Index Optimization", level: "92%" },
        { name: "MongoDB Atlas", level: "90%" },
        { name: "Oracle Certified Foundations", level: "94%" },
        { name: "Cascade Integrity & Atomicity", level: "96%" }
      ],
      color: "border-emerald-500/30 bg-emerald-500/5"
    },
    {
      title: "Frontend & Spatial UI",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "React.js (React 19 & 18)", level: "96%" },
        { name: "TypeScript & Modern JS", level: "95%" },
        { name: "Motion (motion/react)", level: "94%" },
        { name: "HTML5 Canvas API (<50ms)", level: "92%" },
        { name: "Tailwind CSS & Design Tokens", level: "98%" }
      ],
      color: "border-indigo-500/30 bg-indigo-500/5"
    },
    {
      title: "DevOps & Engineering Tools",
      icon: <Terminal className="w-5 h-5 text-amber-600" />,
      skills: [
        { name: "Docker & Docker Compose", level: "92%" },
        { name: "Linux CLI & Shell Automation", level: "94%" },
        { name: "Git, GitHub & PR Code Reviews", level: "96%" },
        { name: "Postman API Test Suites", level: "95%" },
        { name: "Certified Agile Scrum Master", level: "95%" }
      ],
      color: "border-amber-500/30 bg-amber-500/5"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-mono mb-2">Technical Telemetry</h2>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
          Skills & Systems Matrix
        </h3>
        <p className="mt-3 text-slate-500 text-sm sm:text-base">
          Battle-tested toolchains spanning production backends, autonomous agentic workflows, database optimization, and high-frequency UI rendering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`spatial-glass rounded-2xl p-6 border ${cat.color} transition-all`}
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="p-2.5 rounded-xl bg-white/60 border border-slate-200">
                {cat.icon}
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">{cat.title}</h4>
            </div>

            <div className="space-y-4">
              {cat.skills.map((s, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      {s.name}
                    </span>
                    <span className="text-cyan-600 font-semibold">{s.level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: s.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
