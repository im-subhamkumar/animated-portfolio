import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink, Terminal, CheckCircle2, Cpu, Database, Layers } from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xl"
        />

        {/* Modal Window: iOS Frosted Glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white/85 backdrop-blur-3xl border border-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(15,23,42,0.18)] z-10 my-8 overflow-hidden"
        >
          {/* Top Scene Marker & Close */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b1a] animate-pulse" />
              <span className="text-xs font-mono text-[#ea580c] tracking-wider uppercase font-bold">
                SYSTEM BLUEPRINT // {project.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Category */}
          <div className="mt-6 mb-4">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              {project.title}
            </h3>
          </div>

          {/* Key Metric Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/25 text-xs font-mono text-[#ea580c] mb-6 font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>BENCHMARK: {project.metrics}</span>
          </div>

          {/* Architectural Overview */}
          <div className="space-y-4 mb-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>{project.desc}</p>
            <p className="text-slate-500 text-sm">{project.deepDive}</p>
          </div>

          {/* Tech Stack Matrix */}
          <div className="mb-8">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">
              Engineered With
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Close Blueprint
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
