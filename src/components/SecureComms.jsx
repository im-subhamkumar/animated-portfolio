import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Terminal,
  ShieldCheck,
  Sparkles
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

export default function SecureComms() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleTransmit = (e) => {
    e.preventDefault()
    if (!formData.email) return
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="comms" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      <div className="spatial-glass rounded-3xl p-8 sm:p-12 border border-slate-300 shadow-spatial-card relative overflow-hidden">
        {/* Top classified strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200 text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-600">
            <Terminal className="w-4 h-4" />
            <span>DIRECT SECURE COMMS // TRANSMISSION_CHANNEL</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE IMMEDIATELY · BENGALURU & REMOTE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Instant Contact Pathways */}
          <div>
            <h3 className="text-3xl font-display font-extrabold text-slate-900 mb-3">
              Initiate Direct Dispatch
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Open to Software Development Engineer (SDE I), Backend, Full-Stack, and Agentic AI engineering roles. Connect instantly via WhatsApp, email, or schedule a technical discussion.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/917488701545?text=Hi%20Subham%2C%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 border border-emerald-500/40 text-slate-900 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900">Direct WhatsApp Hotline</div>
                    <div className="text-xs text-emerald-600 font-mono">+91 74887 01545</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Launch →
                </span>
              </motion.a>

              {/* Email Copy Card */}
              <div className="w-full p-4 rounded-2xl bg-white/60 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900">Professional Email</div>
                    <div className="text-xs text-slate-600 font-mono">sub406537@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('sub406537@gmail.com')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-300 text-xs font-mono text-cyan-600 flex items-center gap-1.5 transition-all"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/subham-kumar-738710154/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/60 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-900 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-600" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/im-subhamkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/60 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-900 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-purple-600" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Transmission Form */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/60 border border-slate-200">
            <h4 className="font-display font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>Direct Transmission Console</span>
            </h4>
            <p className="text-xs text-slate-500 font-mono mb-6">
              Send a message directly to Subham's inbox.
            </p>

            <form onSubmit={handleTransmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">YOUR IDENTITY / COMPANY</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Team at Techdome / Cisco"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-slate-900 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">RETURN EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-slate-900 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">TRANSMISSION CONTENT</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Hello Subham, we reviewed your projects and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-slate-900 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-900 font-semibold text-xs tracking-wide shadow-cyan-glow flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH TRANSMISSION</span>
              </motion.button>

              <AnimatePresence>
                {formSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 text-xs font-mono flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>TRANSMISSION CONFIRMED. Subham has been alerted.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
