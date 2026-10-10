import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ShieldCheck, 
  Terminal, 
  FileText, 
  MessageSquare, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink,
  ChevronDown,
  Layers,
  Code2
} from 'lucide-react'

export default function DynamicIslandNav() {
  const [currentTime, setCurrentTime] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit',
          hour12: false 
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-5xl spatial-glass rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-spatial-card border border-slate-200 flex items-center justify-between gap-3 sm:gap-6"
      >
        {/* Left: Candidate ID & Status Telemetry */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="absolute w-4 h-4 rounded-full bg-emerald-400/30 animate-ping" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold tracking-tight text-slate-900">
              <span>SUBHAM.KUMAR</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 font-mono">
                SDE_2026
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono hidden md:inline">
              PESU MCA · 8.11 CGPA
            </span>
          </div>
        </div>

        {/* Center: Desktop Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 p-1 rounded-full border border-slate-200 text-xs font-medium text-slate-600">
          <a 
            href="#hero" 
            className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-100 transition-all"
          >
            Overview
          </a>
          <a 
            href="#dossier" 
            className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-600" /> Dossier
          </a>
          <a 
            href="#skills" 
            className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1"
          >
            <Code2 className="w-3.5 h-3.5 text-purple-600" /> Matrix
          </a>
          <a 
            href="#comms" 
            className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-100 transition-all"
          >
            Comms
          </a>
        </nav>

        {/* Right: Clock & Direct Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Bengaluru Clock */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-[11px] font-mono text-cyan-600">
            <span className="text-slate-500">BLR:</span>
            <span>{currentTime || '19:45:00'}</span>
          </div>

          {/* Quick WhatsApp Action */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold text-xs flex items-center gap-1.5 shadow-sm shadow-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl bg-white/60 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 spatial-glass rounded-2xl p-4 border border-slate-200 shadow-2xl flex flex-col gap-2 md:hidden"
          >
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/60 text-sm text-slate-700"
            >
              Overview
            </a>
            <a 
              href="#dossier" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/60 text-sm text-slate-700 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-cyan-600" /> Classified Dossier
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/60 text-sm text-slate-700 flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-purple-600" /> Skills Matrix
            </a>
            <a 
              href="#comms" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/60 text-sm text-slate-700"
            >
              Secure Communications
            </a>
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono px-2">
              <span>BENGALURU (IST)</span>
              <span className="text-cyan-600">{currentTime}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
