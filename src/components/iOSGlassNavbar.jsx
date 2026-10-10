import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import AmbientAudio from './AmbientAudio.jsx'
import { 
  Menu, 
  X, 
  MessageSquare, 
  ArrowUpRight, 
  Film, 
  Layers, 
  Briefcase, 
  Cpu, 
  Award,
  Sparkles
} from 'lucide-react'

export default function iOSGlassNavbar() {
  const [timecode, setTimecode] = useState('00:00:00:00')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Generate running cinematic timecode (HH:MM:SS:FF)
  useEffect(() => {
    let frame = 0
    const interval = setInterval(() => {
      frame = (frame + 1) % 24
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      const ff = String(frame).padStart(2, '0')
      setTimecode(`${hh}:${mm}:${ss}:${ff}`)
    }, 1000 / 24)

    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { id: 'hero', label: 'Scene 01 / Intro', href: '#hero', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'works', label: 'Scene 02 / Works', href: '#works', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'experience', label: 'Scene 03 / Timeline', href: '#experience', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'arsenal', label: 'Scene 04 / Arsenal', href: '#arsenal', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'credentials', label: 'Scene 05 / Honors', href: '#credentials', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Scene 06 / Comms', href: '#contact', icon: <MessageSquare className="w-3.5 h-3.5" /> },
  ]

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 transition-all pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left: Dynamic Island Logo & REC Timecode */}
          <div className="flex items-center gap-3.5 bg-white/75 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b1a] animate-pulse" />
              <span className="font-display font-extrabold text-sm tracking-tight text-slate-900 group-hover:text-[#ea580c] transition-colors">
                SUBHAM.K
              </span>
            </a>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
              <span className="text-[10px] font-mono text-red-500 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                REC
              </span>
              <span className="font-mono text-[11px] text-slate-600 font-semibold tracking-wider">
                {timecode}
              </span>
            </div>
          </div>

          {/* Center: Desktop Scene Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/75 backdrop-blur-2xl px-4 py-1.5 rounded-full border border-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-900/5 transition-all flex items-center gap-1.5"
              >
                <span className="text-slate-400">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: Ambient Soundscape Toggle + Direct WhatsApp Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AmbientAudio />

            <a
              href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20spatial%20portfolio%20and%20would%20love%20to%20connect%21"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#ea580c] hover:to-[#ff6b1a] text-white font-display font-bold text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(255,107,26,0.35)] transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Comms</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 text-slate-800 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ea580c]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="space-y-6">
              <div className="text-[11px] font-mono tracking-widest text-[#ea580c] uppercase pb-2 border-b border-slate-200 font-bold">
                SCENE SELECTOR // SPATIAL DIRECTORY
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-slate-900 hover:text-[#ea580c] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <a
                  href="https://wa.me/917488701545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] text-white font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Dispatch</span>
                </a>
                <div className="text-center text-xs font-mono text-slate-500">
                  TIME: {timecode} · PES UNIVERSITY MCA '26
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
