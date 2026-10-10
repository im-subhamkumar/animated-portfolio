import React, { useState } from 'react'
import { motion } from 'motion/react'
import ProjectModal from './ProjectModal.jsx'
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

export default function SpatialWork() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('ALL')

  const projects = [
    {
      id: 'healthpodcast',
      title: "HealthPodcastIQ — Cloud-Native AI Media Platform",
      category: "AI & AGENTIC",
      tech: ["Python", "FastAPI", "React.js", "Docker", "Whisper AI", "RAG"],
      metrics: "Zero packet loss · Multi-speaker transcription",
      desc: "Architected an asynchronous audio ingestion pipeline converting multi-speaker media into structured text summaries using Whisper AI. Engineered FastAPI REST microservices connected to interactive client views with vector embedding RAG retrieval.",
      deepDive: "Incorporated asynchronous background task queues for transcribing podcast audio chunks in parallel, eliminating HTTP request timeouts. Constructed ChromaDB vector stores to allow conversational question-answering over lengthy hour-long medical transcripts with citation grounding.",
      github: "https://github.com/im-subhamkumar/HealthPodcastIQ",
      badge: "FEATURED AI PIPELINE",
      reelId: "REEL_01"
    },
    {
      id: 'canvas-engine',
      title: "Dynamic Automated Canvas Engine & Collage Tool",
      category: "SPATIAL FRONTEND",
      tech: ["React.js", "TypeScript", "HTML5 Canvas API", "Spatial Math"],
      metrics: "< 50ms rendering latency · Multi-asset drag & scale",
      desc: "Built a high-performance web tool applying dynamic spatial placement algorithms in TypeScript to calculate multi-asset coordinates. Engineered event dispatchers and optimized rendering loops to prevent DOM thrashing.",
      deepDive: "Engineered sub-pixel rendering pipelines with offscreen canvas buffering, maintaining 60FPS fluid drag-and-drop transformations even with 50+ layered vector elements. Packaged custom mathematical bounding box collision detectors.",
      github: "https://github.com/im-subhamkumar",
      badge: "SPATIAL ENGINE",
      reelId: "REEL_02"
    },
    {
      id: 'spend-mgmt',
      title: "Full-Stack Enterprise Financial Spend Platform",
      category: "DISTRIBUTED BACKEND",
      tech: ["Node.js", "Express.js", "React.js", "MySQL", "Prisma ORM", "Docker"],
      metrics: "16 REST endpoints · -20% query latency",
      desc: "Engineered an end-to-end corporate financial transaction platform modeling multi-tier corporate expenses, itemized line items, and audit trails. Implemented database cascade constraints to eliminate ledger discrepancies.",
      deepDive: "Structured atomic transaction blocks with Prisma ORM guaranteeing ledger integrity during concurrent reconciliation. Added composite B-tree indexing across high-cardinality corporate expense tables, delivering a verified 20% latency drop on monthly statement generation.",
      github: "https://github.com/im-subhamkumar",
      badge: "ENTERPRISE FINTECH",
      reelId: "REEL_03"
    },
    {
      id: 'predictive-ml',
      title: "Predictive Analytics & Behavioral Clustering Engine",
      category: "AI & AGENTIC",
      tech: ["Python", "Scikit-Learn", "KMeans", "GMM", "Streamlit"],
      metrics: "Silhouette validated · Real-time correlation matrices",
      desc: "Constructed an end-to-end Python pipeline to ingest, clean, normalize, and statistically analyze complex behavioral datasets, discovering hidden user cohorts via unsupervised clustering algorithms.",
      deepDive: "Implemented PCA dimensionality reduction and elbow-method heuristics to determine optimal cluster centroids. Deployed an interactive Streamlit intelligence cockpit enabling stakeholders to adjust segmentation parameters and evaluate real-time feature distributions.",
      github: "https://github.com/im-subhamkumar/Sleep_Pattern_Prediction_AI-ML",
      badge: "DATA INTELLIGENCE",
      reelId: "REEL_04"
    }
  ]

  const categories = ['ALL', 'AI & AGENTIC', 'DISTRIBUTED BACKEND', 'SPATIAL FRONTEND']

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="works" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header Scene Slate */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ios-glass text-xs font-mono text-slate-700 mb-3 shadow-sm">
            <span className="text-[#ea580c] font-bold">SCENE 02 //</span>
            <span className="font-semibold">DIRECTED WORKS & SYSTEM REELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            SELECTED <span className="ghost-light">DIRECTIVE</span> <span className="text-[#ea580c]">WORKS.</span>
          </h2>
        </div>

        {/* Category Filters Pill Dock */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl ios-glass text-xs font-mono shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: iOS Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-3xl ios-glass-card p-7 sm:p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Reel Meta Strip */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 text-xs font-mono text-slate-500">
              <span className="text-[#ea580c] font-bold">{project.reelId} // {project.badge}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-semibold text-slate-600 shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="my-5">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 group-hover:text-[#ea580c] transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Performance Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-[#ea580c] font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>{project.metrics}</span>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/70 border border-slate-200 text-[11px] font-mono font-medium text-slate-700 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/70">
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 hover:text-slate-900 font-semibold transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Inspect Blueprint</span>
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#ea580c] text-white font-mono text-xs font-semibold transition-all shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Codebase</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blueprint Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
