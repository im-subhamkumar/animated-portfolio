import React, { useRef, useState } from 'react'
import './iOSProfileCard.css'
import { ShieldCheck, Award, Terminal, Sparkles, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max)
const round = (v, precision = 3) => parseFloat(v.toFixed(precision))
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin))

export default function iOSProfileCard() {
  const wrapRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

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
      '--background-x': `${adjust(percentX, 0, 100, 25, 75)}%`,
      '--background-y': `${adjust(percentY, 0, 100, 25, 75)}%`,
      '--rotate-x': `${round(-(centerX / 5))}deg`,
      '--rotate-y': `${round(centerY / 4)}deg`,
    }

    for (const [k, v] of Object.entries(properties)) {
      wrap.style.setProperty(k, v)
    }
  }

  const handleMouseEnter = () => setIsActive(true)

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
      className={`ios-card-wrapper w-full max-w-[390px] mx-auto select-none ${isActive ? 'active' : ''}`}
    >
      {/* Reactive behind-glow */}
      <div className="ios-behind-glow" />

      {/* 3D Frosted Glass Card */}
      <div className="ios-3d-card relative flex flex-col justify-between p-7">
        {/* Prismatic rainbow sheen & specular glare */}
        <div className="ios-foil-sheen" />
        <div className="ios-glare-sheen" />

        {/* Top Header Strip */}
        <div className="relative z-20 flex items-center justify-between pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b1a] animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-[#ea580c] uppercase font-bold">
              SPATIAL REEL // 2026
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-700 font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Center Portrait with 3D Depth Layer */}
        <div className="relative z-20 my-4 flex flex-col items-center layer-depth-1">
          <div className="relative w-44 h-44 rounded-3xl overflow-hidden border-2 border-white/90 shadow-[0_20px_40px_rgba(15,23,42,0.12)] group">
            <img
              src="/subham.jpg"
              alt="Subham Kumar"
              className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-700"
            />
            {/* Subtle bottom glass gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[9px] font-mono font-bold text-slate-800 shadow-sm">
              SUBHAM.K
            </div>
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-xl font-display font-extrabold text-slate-900 tracking-tight">
              SUBHAM KUMAR
            </h3>
            <p className="text-xs text-[#ea580c] font-mono tracking-wider mt-0.5 font-bold">
              FULL-STACK SDE · AGENTIC AI
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-1">
              PES University (MCA '26, 8.11 CGPA)
            </p>
          </div>
        </div>

        {/* Verification & Credentials Strip (Layer Depth 2) */}
        <div className="relative z-20 space-y-2 pt-3 border-t border-slate-200/60 layer-depth-2">
          <div className="flex items-center justify-between text-[11px] font-mono bg-white/60 px-3.5 py-2 rounded-xl border border-white/80 shadow-sm">
            <span className="text-slate-600 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b1a]" />
              Anthropic Claude
            </span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              Certified
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono bg-white/60 px-3.5 py-2 rounded-xl border border-white/80 shadow-sm">
            <span className="text-slate-600 flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              Oracle Data Platform
            </span>
            <span className="text-sky-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-sky-500" />
              Certified
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono bg-white/60 px-3.5 py-2 rounded-xl border border-white/80 shadow-sm">
            <span className="text-slate-600 flex items-center gap-1.5 font-medium">
              <Terminal className="w-3.5 h-3.5 text-purple-600" />
              Production Metrics
            </span>
            <span className="text-slate-900 font-bold">
              16 APIs · 500+ Audits
            </span>
          </div>
        </div>

        {/* Bottom CTA Action Button (Layer Depth 3) */}
        <div className="relative z-20 mt-4 layer-depth-3">
          <a
            href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20spatial%20portfolio%20and%20would%20love%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#ea580c] hover:to-[#ff6b1a] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(255,107,26,0.35)] transition-all transform hover:scale-[1.02]"
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
