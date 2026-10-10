import React from 'react'
import { motion } from 'motion/react'
import { Award, ShieldCheck, GraduationCap, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react'

export default function SpatialCredentials() {
  const credentials = [
    {
      title: "Anthropic Claude Certified",
      issuer: "Anthropic",
      category: "Generative AI & Agentic Tooling",
      date: "Verified 2024",
      highlight: "Agentic Tool-Calling & Model Context Protocol (MCP)",
      desc: "Comprehensive certification covering state-of-the-art prompt architecture, multi-turn reasoning traces, tool-calling paradigms, and structured JSON generation.",
      icon: <ShieldCheck className="w-6 h-6 text-[#ea580c]" />,
      verified: true,
    },
    {
      title: "Oracle Data Platform Foundations Associate",
      issuer: "Oracle Corporation",
      category: "Cloud Databases & Relational Schemas",
      date: "Verified 2024",
      highlight: "SQL, Relational Modeling & Oracle Cloud",
      desc: "Official certification testing relational schema design, SQL query mechanics, transaction isolation levels, and Oracle Cloud infrastructure fundamentals.",
      icon: <Award className="w-6 h-6 text-sky-600" />,
      verified: true,
    },
    {
      title: "Certified Agile Scrum Master (ASM)",
      issuer: "International Scrum Accreditation",
      category: "Software Development Lifecycle",
      date: "Verified 2024",
      highlight: "Agile Sprint Planning & Team Velocity",
      desc: "Validated competence in Scrum rituals, sprint ceremonies, backlog grooming, defect retrospectives, and agile engineering workflows.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      verified: true,
    },
    {
      title: "Top 5 Finalist — CodeBlitz 24-Hour Hackathon",
      issuer: "CodeBlitz Tech League",
      category: "Competitive Engineering",
      date: "2024",
      highlight: "Rapid Prototyping & MVP Deployment",
      desc: "Engineered and deployed a functional full-stack prototype within a continuous 24-hour hackathon, ranking in the top 5 among competing collegiate teams.",
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      verified: true,
    },
    {
      title: "Master of Computer Applications (MCA)",
      issuer: "PES University, Bengaluru",
      category: "Postgraduate Degree (2024 – 2026)",
      date: "CGPA: 8.11 / 10.0",
      highlight: "Algorithms, Distributed Systems & Database Tech",
      desc: "Rigorous master's coursework focused on computer architecture, distributed computing, relational database systems, and advanced software engineering.",
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      verified: true,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      issuer: "Gossner College, Ranchi",
      category: "Undergraduate Degree (2019 – 2022)",
      date: "CGPA: 8.70 / 10.0",
      highlight: "Core Computer Science & Programming Fundamentals",
      desc: "Strong foundational curriculum covering object-oriented programming, data structures, discrete mathematics, and database management systems.",
      icon: <GraduationCap className="w-6 h-6 text-slate-600" />,
      verified: true,
    }
  ]

  return (
    <section id="credentials" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header Slate */}
      <div className="mb-14 pb-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ios-glass text-xs font-mono text-slate-700 mb-3 shadow-sm">
          <span className="text-[#ea580c] font-bold">SCENE 05 //</span>
          <span className="font-semibold">ACCREDITATIONS & VERIFIED HONORS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          VERIFIED <span className="ghost-light">CREDENTIALS</span> & <span className="text-[#ea580c]">HONORS.</span>
        </h2>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentials.map((cred, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-3xl ios-glass-card p-7 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Top Issuer Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  {cred.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-700 font-bold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="my-4">
                <div className="text-[11px] font-mono text-[#ea580c] uppercase tracking-wider mb-1 font-bold">
                  {cred.issuer}
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-900 group-hover:text-[#ea580c] transition-colors">
                  {cred.title}
                </h3>
                <div className="text-xs text-slate-500 font-mono mt-1 font-semibold">
                  {cred.date}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {cred.desc}
              </p>
            </div>

            {/* Bottom Highlight */}
            <div className="pt-3 border-t border-slate-200/70">
              <span className="text-[11px] font-mono text-slate-700 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                {cred.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
