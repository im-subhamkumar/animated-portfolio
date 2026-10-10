import React, { useState } from 'react'
import { motion } from 'motion/react'
import confetti from 'canvas-confetti'
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react'

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.27a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  )
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

export default function CinematicContact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' })

  const copyEmail = () => {
    navigator.clipboard.writeText('sub406537@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email) return

    // Trigger celebratory cinematic confetti fireworks
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b1a', '#ff8533', '#ffffff', '#38bdf8']
    })

    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setFormData({ name: '', email: '', role: '', message: '' })
    }, 4500)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="rounded-3xl bg-[#0d0d12] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b1a]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Status Slate */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#ff6b1a]">
            <Terminal className="w-4 h-4" />
            <span className="font-semibold">SCENE 06 // DIRECT SECURE COMMS</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AVAILABLE IMMEDIATELY · BENGALURU & REMOTE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Pathways */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
                LET'S BUILD <span className="ghost-orange">SOMETHING</span> <span className="text-white">GREAT.</span>
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                Actively interviewing for Software Development Engineer (SDE I), Backend Engineer, and Agentic AI roles. Connect instantly via WhatsApp, direct email, or LinkedIn.
              </p>

              {/* Direct Pathways */}
              <div className="space-y-3.5 mb-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20cinematic%20portfolio%20and%20would%20love%20to%20connect%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-[#ff6b1a] border border-white/10 text-white hover:text-black transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-black/10">
                      <MessageSquare className="w-4 h-4 text-[#ff6b1a] group-hover:text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 group-hover:text-black/80 font-medium">WhatsApp Priority Hotline</div>
                      <div className="text-sm font-display font-bold">+91 74887 01545</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </a>

                {/* Email Copy */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5">
                      <Mail className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 font-medium">Direct Engineering Inquiries</div>
                      <div className="text-sm font-display font-bold">sub406537@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Direct Phone */}
                <a
                  href="tel:+917488701545"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/5 border border-white/10 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5">
                      <Phone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 font-medium">Voice Dispatch</div>
                      <div className="text-sm font-display font-bold">+91 74887 01545</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/subham-kumar-738710154/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#0077b5] border border-white/10 text-neutral-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/im-subhamkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white hover:text-black border border-white/10 text-neutral-300 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-neutral-500 pl-2">
                Bengaluru, KA · India
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Transmission Form */}
          <div className="lg:col-span-7 bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Dispatch Transmission Parameters
            </h3>
            <p className="text-xs font-mono text-neutral-400 mb-6">
              SEND DIRECT PARAMETERS DIRECTLY TO SUBHAM'S INBOX
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex (Engineering Manager)"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#ff6b1a] text-white text-sm outline-none transition-colors font-sans placeholder:text-neutral-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#ff6b1a] text-white text-sm outline-none transition-colors font-sans placeholder:text-neutral-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Opportunity / Role Scope
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Full-Stack SDE I / Backend AI Engineer"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#ff6b1a] text-white text-sm outline-none transition-colors font-sans placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Message / Brief
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the opportunity, technical challenges, or collaboration proposal..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#ff6b1a] text-white text-sm outline-none transition-colors font-sans placeholder:text-neutral-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSent}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff6b1a] to-[#ff8533] hover:from-[#f05e0e] hover:to-[#ff6b1a] disabled:opacity-60 text-black font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,26,0.4)] transition-all transform hover:scale-[1.01]"
              >
                {formSent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Transmission Acknowledged!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Signal</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
