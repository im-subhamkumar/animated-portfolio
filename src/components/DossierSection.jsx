import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Briefcase, 
  FolderGit2, 
  BookOpen, 
  Award, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Database,
  Layers
} from 'lucide-react'

export default function DossierSection() {
  const [activeTab, setActiveTab] = useState('projects')

  const tabs = [
    { id: 'projects', label: 'Key Projects', icon: <FolderGit2 className="w-4 h-4" />, count: '04' },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" />, count: '02' },
    { id: 'research', label: 'Research & Papers', icon: <BookOpen className="w-4 h-4" />, count: '01' },
    { id: 'credentials', label: 'Certifications', icon: <Award className="w-4 h-4" />, count: '04' },
    { id: 'academics', label: 'Academics', icon: <GraduationCap className="w-4 h-4" />, count: '02' },
  ]

  const projects = [
    {
      title: "HealthPodcastIQ — Cloud-Native AI Media Platform",
      category: "Agentic AI & Media Pipeline",
      tech: ["Python", "FastAPI", "React.js", "Docker", "Whisper AI", "RAG"],
      metrics: "Zero packet loss · Multi-speaker transcription",
      desc: "Architected an asynchronous audio ingestion pipeline converting multi-speaker media into structured text summaries using Whisper AI. Engineered FastAPI REST microservices connected to interactive client views with vector embedding RAG retrieval.",
      github: "https://github.com/im-subhamkumar/HealthPodcastIQ",
      badge: "FEATURED AI SYSTEM"
    },
    {
      title: "Dynamic Automated Canvas Engine & Collage Tool",
      category: "Frontend Architecture & Algorithms",
      tech: ["React.js", "TypeScript", "HTML5 Canvas API", "Spatial Math"],
      metrics: "< 50ms rendering latency · Multi-asset drag & scale",
      desc: "Built a high-performance web tool applying dynamic spatial placement algorithms in TypeScript to calculate multi-asset coordinates. Engineered event dispatchers and optimized rendering loops to prevent DOM thrashing.",
      github: "https://github.com/im-subhamkumar",
      badge: "SPATIAL ENGINE"
    },
    {
      title: "Full-Stack Enterprise Financial & Spend Management",
      category: "Distributed Backend & Relational DBs",
      tech: ["Node.js", "Express.js", "React.js", "MySQL", "Prisma ORM"],
      metrics: "16 REST endpoints · -20% query latency",
      desc: "Engineered an end-to-end corporate financial transaction platform modeling multi-tier corporate expenses, itemized line items, and audit trails. Implemented database cascade constraints to eliminate ledger discrepancies.",
      github: "https://github.com/im-subhamkumar",
      badge: "ENTERPRISE FINTECH"
    },
    {
      title: "Predictive Analytics & Behavioral Clustering Engine",
      category: "Machine Learning & Streamlit",
      tech: ["Python", "Scikit-Learn", "KMeans", "GMM", "Streamlit"],
      metrics: "Silhouette validated · Real-time correlation matrices",
      desc: "Constructed an end-to-end Python pipeline to ingest, clean, normalize, and statistically analyze complex behavioral datasets, discovering hidden user cohorts via unsupervised clustering algorithms.",
      github: "https://github.com/im-subhamkumar/Sleep_Pattern_Prediction_AI-ML",
      badge: "DATA INTELLIGENCE"
    }
  ]

  const experiences = [
    {
      role: "Full Stack Software Engineer Intern (Backend Lead)",
      company: "Design Esthetics",
      period: "Feb 2026 – Jun 2026",
      location: "Bengaluru, India",
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
      role: "Freelance AI Technical Evaluator & Code Analyst",
      company: "Outlier",
      period: "Oct 2024 – Jun 2025",
      location: "Remote",
      bullets: [
        "Audited, debugged, and benchmarked 500+ full-stack codebases (Python, JavaScript, TypeScript, SQL) for code quality and algorithmic correctness.",
        "Diagnosed runtime errors, memory leaks, and DOM/concurrency bottlenecks, maintaining a verified technical evaluation accuracy above 98%.",
        "Evaluated multi-step Agentic reasoning traces, tool-calling logic, and structured JSON outputs across foundation models.",
        "Authored detailed root-cause analyses, reproduction notes, and refactoring guidelines."
      ],
      tags: ["Agentic AI", "Code Auditing", "TypeScript", "Python", "LLM Evaluation"]
    }
  ]

  const credentials = [
    {
      title: "Claude Certification (Anthropic)",
      issuer: "Anthropic Academy",
      desc: "Verified Generative AI, Prompt Engineering, Agentic Workflows & Model Context Protocol (MCP).",
      link: "https://academy.claude.com/verify/e5dd6123612f73a1f2e783825936893f",
      badge: "OFFICIAL VERIFIED"
    },
    {
      title: "Oracle Data Platform Certified Foundations Associate",
      issuer: "Oracle University",
      desc: "Verified Relational Databases, SQL Query Optimization & Cloud Data Infrastructure.",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FE98A87CAB46CFE44E86003EE4969A097004EC3F2F3C73679E582A686ED76C21",
      badge: "ORACLE CERTIFIED"
    },
    {
      title: "Certified Agile Scrum Master (ASM)",
      issuer: "Simplilearn / Agile Alliance",
      desc: "Accredited Agile Development Process, Sprint Tracking, DevOps & Defect Management.",
      link: "https://certificates.simplicdn.net/share/9735896_9339406_1768852657844.pdf",
      badge: "AGILE ACCREDITED"
    },
    {
      title: "Top 5 Finalist — 24-Hour CodeBlitz Hackathon",
      issuer: "CodeBlitz Engineering",
      desc: "Built and deployed a production-grade full-stack web application under strict 24-hour time constraints.",
      link: "#",
      badge: "HACKATHON HONORS"
    }
  ]

  const academics = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PES University, Bengaluru",
      period: "Oct 2024 – Jul 2026",
      score: "CGPA: 8.11 (Graduated 2026)",
      coursework: "Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Cloud Computing, Machine Learning, Computer Networks."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Gossner College, Ranchi",
      period: "Jul 2019 – Jul 2022",
      score: "CGPA: 8.70",
      coursework: "Core Java, C/C++, Database Management Systems, Web Development Fundamentals, Software Engineering."
    }
  ]

  return (
    <section id="dossier" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>CLASSIFIED PERSONNEL ARCHIVE // SK-2026</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Engineering Dossier
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base">
          Verified academic credentials, enterprise software internships, AI evaluation benchmarks, and peer-reviewed research.
        </p>
      </div>

      {/* iOS 27 Segmented Control Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
        <div className="spatial-glass p-1.5 rounded-2xl flex items-center gap-1.5 border border-slate-200 shadow-lg">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 border border-cyan-400/50 rounded-xl shadow-cyan-glow"
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
                <span className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-cyan-400 text-black font-bold' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Panels with AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                className="spatial-glass rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 font-semibold tracking-wider">
                      {proj.badge}
                    </span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1 text-xs font-mono"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {proj.desc}
                  </p>

                  <div className="px-3 py-1.5 rounded-lg bg-white/60 border border-slate-200 text-xs text-emerald-600 font-mono mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{proj.metrics}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/60 text-slate-600 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
                className="spatial-glass rounded-2xl p-6 sm:p-8 border border-slate-200 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-xs text-purple-600 font-mono">@{exp.company}</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{exp.location}</p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-600">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-6 text-sm text-slate-600">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/60 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'research' && (
          <motion.div
            key="research"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="spatial-glass rounded-2xl p-8 border border-slate-300 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-mono w-fit mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SCOPUS INDEXED · PEER REVIEWED</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
              Legal Document Analytics via NLP & OCR
            </h3>
            <p className="text-sm font-mono text-cyan-600 mb-6">
              Published in Springer Journal (International Conference Proceedings)
            </p>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
              <p>
                Published peer-reviewed research detailing an automated document management framework for unstructured legal and enterprise text corpora.
              </p>
              <div className="p-4 rounded-xl bg-white/60 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-600">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>KEY RESEARCH DELIVERABLES:</span>
                </div>
                <ul className="text-xs space-y-1.5 text-slate-600 pl-4 list-disc">
                  <li>Engineered OCR and NLP classification pipelines in Python to extract, structure, and categorize multi-format document corpora.</li>
                  <li>Researched semantic text parsing and indexing techniques to optimize document search efficiency and reduce query retrieval latency.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Authors: Subham Kumar et al. · Peer Reviewed Research</span>
            </div>
          </motion.div>
        )}

        {activeTab === 'credentials' && (
          <motion.div
            key="credentials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                className="spatial-glass rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600">
                      {cred.badge}
                    </span>
                    {cred.link !== '#' && (
                      <a
                        href={cred.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-600 hover:text-cyan-200 flex items-center gap-1 font-mono"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900 mb-1">{cred.title}</h4>
                  <p className="text-xs text-purple-600 font-mono mb-3">{cred.issuer}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{cred.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'academics' && (
          <motion.div
            key="academics"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {academics.map((edu, idx) => (
              <div key={idx} className="spatial-glass rounded-2xl p-7 border border-slate-200">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 font-bold">
                    {edu.score}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{edu.period}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-1">{edu.degree}</h4>
                <p className="text-sm font-semibold text-purple-600 mb-4">{edu.institution}</p>
                <div className="p-3.5 rounded-xl bg-white/60 border border-slate-200">
                  <span className="text-xs text-slate-500 font-mono block mb-1">Key Curriculum:</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{edu.coursework}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
