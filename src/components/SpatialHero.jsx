import React, { useState } from 'react'
import { motion } from 'motion/react'
import iOSProfileCard from './iOSProfileCard.jsx'
import HolographicBadge from './HolographicBadge.jsx'
import { 
  ArrowRight, 
  MessageSquare, 
  Terminal, 
  Sparkles, 
  Film, 
  Layers, 
  Rotate3d, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react'

export default function SpatialHero() {
  const [viewMode, setViewMode] = useState('card') // 'card' or 'webgl'

  const telemetryStats = [
    { label: "PESU MCA '26", value: "8.11", detail: "Graduated CGPA" },
    { label: "Codebases Audited", value: "500+", detail: ">98% Accuracy at Outlier" },
    { label: "Production APIs", value: "16", detail: "-20% Latency with Prisma" },
    { label: "Springer Journal", value: "Scopus", detail: "Peer-Reviewed NLP Research" },
  ]

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Spatial Typography & Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* iOS Scene Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass text-xs font-mono text-slate-700 mb-6 shadow-sm">
            <Film className="w-3.5 h-3.5 text-[#ea580c]" />
            <span className="text-[#ea580c] font-bold">SCENE 01 //</span>
            <span className="font-semibold">SPATIAL PROTAGONIST · SDE 2026</span>
          </div>

          {/* Grand Headline with Ghost Outline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
            ARCHITECTING <br />
            <span className="ghost-light">AUTONOMOUS</span> <br />
            <span className="text-slate-900">SYSTEMS</span> &{' '}
            <span className="ghost-orange-light">BACKENDS.</span>
          </h1>

          {/* Editorial Subtitle with Real Metrics */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
            Software Development Engineer specializing in distributed backends, relational database optimization, and autonomous agentic workflows. Proven production impact: 16 modular REST APIs at <span className="text-slate-900 font-semibold">Design Esthetics</span>, 500+ codebases audited at <span className="text-slate-900 font-semibold">Outlier</span>, and peer-reviewed Scopus research published in <span className="text-slate-900 font-semibold">Springer</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20spatial%20portfolio%20and%20would%20love%20to%20connect%21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#ea580c] hover:to-[#ff6b1a] text-white font-display font-bold text-sm tracking-wide uppercase flex items-center gap-2 shadow-[0_10px_25px_rgba(255,107,26,0.35)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start WhatsApp Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#works"
              className="px-6 py-3.5 rounded-2xl ios-glass hover:bg-white text-slate-800 font-display font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
            >
              <Layers className="w-4 h-4 text-[#ea580c]" />
              <span>Explore Works Reel</span>
            </motion.a>
          </div>

          {/* iOS Spatial Telemetry Widgets Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200">
            {telemetryStats.map((stat, i) => (
              <div key={i} className="p-3.5 rounded-2xl ios-glass shadow-sm">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 flex items-center gap-1">
                  <span>{stat.value}</span>
                </div>
                <div className="text-[11px] font-mono text-[#ea580c] font-bold mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3D Holographic Persona with Dual-Mode Switcher */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center z-10"
        >
          {/* Dual-Mode Switcher Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full ios-glass mb-4 text-xs font-mono shadow-sm">
            <button
              onClick={() => setViewMode('card')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === 'card'
                  ? 'bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-bold shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3D Frosted Card
            </button>
            <button
              onClick={() => setViewMode('webgl')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === 'webgl'
                  ? 'bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-bold shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3D WebGL Avatar
            </button>
          </div>

          {/* Active 3D Component */}
          {viewMode === 'card' ? (
            <iOSProfileCard />
          ) : (
            <HolographicBadge />
          )}

          <div className="mt-3 text-[11px] font-mono text-slate-500 text-center flex items-center gap-1.5 font-medium">
            <Rotate3d className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Interactive 3D Motion · Move Cursor or Touch to Tilt</span>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="flex justify-center mt-12">
        <a 
          href="#works" 
          className="flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-[#ea580c] transition-colors font-medium"
        >
          <span>SCROLL TO ADVANCE REEL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
