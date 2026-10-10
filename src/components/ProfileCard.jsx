import React, { useRef, useMemo, useState } from 'react'
import './ProfileCard.css'
import { ShieldCheck, Award, Terminal, Sparkles, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max)
const round = (v, precision = 3) => parseFloat(v.toFixed(precision))
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin))

export default function ProfileCard({ onDirectConnect }) {
  const wrapRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Tilt physics engine inspired by 5araang's Nextjs-cinematic-portfolio
  const handleMouseMove = (e) => {
    const wrap = wrapRef.current
    if (!wrap) return

    const rect = wrap.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const width = rect.width || 1
    const height = rect.height || 1

    const percentX = clamp((100 / width) * x)
    const percentY = clamp((100 / height) * y)

    const centerX = percentX - 50
    const centerY = percentY - 50

    const properties = {
      '--pointer-x': `${percentX}%`,
      '--pointer-y': `${percentY}%`,
      '--background-x': `${adjust(percentX, 0, 100, 30, 70)}%`,
      '--background-y': `${adjust(percentY, 0, 100, 30, 70)}%`,
      '--rotate-x': `${round(-(centerX / 5.5))}deg`,
      '--rotate-y': `${round(centerY / 4.5)}deg`,
    }

    for (const [k, v] of Object.entries(properties)) {
      wrap.style.setProperty(k, v)
    }
  }

  const handleMouseEnter = () => {
    setIsActive(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    const wrap = wrapRef.current
    if (!wrap) return
    wrap.style.setProperty('--rotate-x', '0deg')
    wrap.style.setProperty('--rotate-y', '0deg')
    wrap.style.setProperty('--pointer-x', '50%')
    wrap.style.setProperty('--pointer-y', '50%')
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`pc-card-wrapper w-full max-w-[390px] mx-auto select-none ${isActive ? 'active' : ''}`}
    >
      {/* Dynamic behind-glow reacting to cursor position */}
      <div className="pc-behind" />

      {/* 3D Tilted Card Container */}
      <div className="pc-card relative flex flex-col justify-between p-6">
        {/* Holographic foil & glare reflections */}
        <div className="pc-foil" />
        <div className="pc-glare" />
        <div className="pc-inside-grid opacity-40 pointer-events-none" />

        {/* Top Header Strip */}
        <div className="relative z-20 flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b1a] animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest text-[#ff6b1a] uppercase font-semibold">
              PERSONNEL REEL // 2026
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Center Portrait with Cinematic Lighting */}
        <div className="relative z-20 my-4 flex flex-col items-center">
          <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group">
            <img
              src="/subham.jpg"
              alt="Subham Kumar"
              className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-105 transition-all duration-700"
            />
            {/* Cinematic subtle vignette & scan gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80" />
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono text-neutral-300">
              SUBHAM.K
            </div>
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-xl font-display font-extrabold text-white tracking-wide">
              SUBHAM KUMAR
            </h3>
            <p className="text-xs text-[#ff6b1a] font-mono tracking-wider mt-0.5 font-medium">
              FULL-STACK SDE · AGENTIC AI
            </p>
            <p className="text-[11px] text-neutral-400 font-mono mt-1">
              PES University (MCA '26, 8.11 CGPA)
            </p>
          </div>
        </div>

        {/* Verification & Credentials Strip */}
        <div className="relative z-20 space-y-2 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-[11px] font-mono bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b1a]" />
              Anthropic Claude
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Certified
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              Oracle Data Platform
            </span>
            <span className="text-sky-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Certified
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              Production Metrics
            </span>
            <span className="text-white font-semibold">
              16 APIs · 500+ Audits
            </span>
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div className="relative z-20 mt-4">
          <a
            href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20cinematic%20portfolio%20and%20would%20love%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#f05e0e] hover:to-[#ff6b1a] text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,26,0.4)] transition-all transform hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
