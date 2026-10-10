import React, { useState } from 'react'
import { motion } from 'motion/react'
import ProfileCard from './ProfileCard.jsx'
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

export default function CinematicHero() {
  const [viewMode, setViewMode] = useState('foil') // 'foil' or 'webgl'

  const telemetryStats = [
    { label: "PESU MCA '26", value: "8.11", detail: "Graduated CGPA" },
    { label: "Codebases Audited", value: "500+", detail: ">98% Accuracy at Outlier" },
    { label: "Production APIs", value: "16", detail: "-20% Latency with Prisma" },
    { label: "Springer Journal", value: "Scopus", detail: "Peer-Reviewed NLP Research" },
  ]

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-16 overflow-hidden">
      {/* Cinematic subtle spotlight glow in background */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#ff6b1a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Cinematic Typography & Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Filmic Scene Slate Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 mb-6 backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-[#ff6b1a]" />
            <span className="text-[#ff6b1a] font-bold">SCENE 01 //</span>
            <span>THE PROTAGONIST · SDE LEVEL 4</span>
          </div>

          {/* Grand Cinematic Headline with Playfair Ghost Outline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            ENGINEERING <br />
            <span className="ghost">AUTONOMOUS</span> <br />
            <span className="text-white">SYSTEMS</span> &{' '}
            <span className="ghost-orange">BACKENDS.</span>
          </h1>

          {/* Editorial Director Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
            Software Development Engineer specializing in distributed backends, relational database optimization, and agentic AI architectures. Proven production impact: 16 modular REST APIs at <span className="text-white font-medium">Design Esthetics</span>, 500+ codebases audited at <span className="text-white font-medium">Outlier</span>, and peer-reviewed Scopus research published in <span className="text-white font-medium">Springer</span>.
          </p>

          {/* High-Impact Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20cinematic%20portfolio%20and%20would%20love%20to%20connect%21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#f05e0e] hover:to-[#ff6b1a] text-black font-display font-bold text-sm tracking-wide uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(255,107,26,0.4)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start WhatsApp Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#works"
              className="px-6 py-3.5 rounded-2xl bg-[#0d0d12]/80 hover:bg-[#14141a] border border-white/10 hover:border-white/20 text-white font-display font-semibold text-sm flex items-center gap-2 backdrop-blur-xl transition-all"
            >
              <Layers className="w-4 h-4 text-[#ff6b1a]" />
              <span>Explore Works Reel</span>
            </motion.a>
          </div>

          {/* Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/10">
            {telemetryStats.map((stat, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-1">
                  <span>{stat.value}</span>
                </div>
                <div className="text-[11px] font-mono text-[#ff6b1a] font-semibold mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-neutral-400 font-mono mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3D Holographic Persona with Dual-Mode View Switcher */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center z-10"
        >
          {/* Dual-Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0d0d12] border border-white/10 mb-4 text-xs font-mono">
            <button
              onClick={() => setViewMode('foil')}
              className={`px-3 py-1 rounded-full transition-all ${
                viewMode === 'foil'
                  ? 'bg-[#ff6b1a] text-black font-bold shadow-[0_0_15px_rgba(255,107,26,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              3D Holographic Card
            </button>
            <button
              onClick={() => setViewMode('webgl')}
              className={`px-3 py-1 rounded-full transition-all ${
                viewMode === 'webgl'
                  ? 'bg-[#ff6b1a] text-black font-bold shadow-[0_0_15px_rgba(255,107,26,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              3D WebGL Canvas
            </button>
          </div>

          {/* Active 3D Component */}
          {viewMode === 'foil' ? (
            <ProfileCard />
          ) : (
            <HolographicBadge />
          )}

          <div className="mt-3 text-[11px] font-mono text-neutral-500 text-center flex items-center gap-1.5">
            <Rotate3d className="w-3.5 h-3.5 text-[#ff6b1a]" />
            <span>Interactive 3D Motion · Move Cursor or Touch to Tilt</span>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="flex justify-center mt-12">
        <a 
          href="#works" 
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-neutral-500 hover:text-[#ff6b1a] transition-colors"
        >
          <span>SCROLL TO ADVANCE REEL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
