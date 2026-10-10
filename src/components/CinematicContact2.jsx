import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicContact2() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      })

      tl.from(".contact-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".contact-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".contact-divider", { scaleY: 0, opacity: 0, duration: 0.5, ease: "power3.out" }, 0.1)
        .from(".contact-field", { y: 25, opacity: 0, stagger: 0.08, duration: 0.35, ease: "power3.out" }, 0.2)
        .from(".contact-link", { y: 15, opacity: 0, stagger: 0.06, duration: 0.3 }, 0.3)
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open WhatsApp with the message
    const msg = encodeURIComponent(
      `Hi Subham! My name is ${form.name}.\n\nEmail: ${form.email}\n\nMessage: ${form.message}`
    )
    window.open(
      `https://wa.me/917488701545?text=${msg}`,
      '_blank'
    )
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full min-h-screen px-5 md:px-20 py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Heading + Links */}
          <div>
            <p className="contact-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.2em] uppercase font-mono font-semibold mb-6">
              Contact
            </p>

            <h2 className="contact-h text-[clamp(2rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-8">
              Let's <span className="ghost">Build</span>
              <br />
              Something <span className="ghost-orange">Together.</span>
            </h2>

            <p className="contact-field text-sm text-white/30 font-mono leading-relaxed mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <a
                href="mailto:subhamkumar.work@outlook.com"
                className="contact-link flex items-center gap-3 text-sm font-mono text-white/40 hover:text-[#ff6b1a] transition-colors group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>subhamkumar.work@outlook.com</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <a
                href="https://wa.me/917488701545"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3 text-sm font-mono text-white/40 hover:text-[#ff6b1a] transition-colors group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span>+91 748 870 1545</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/subham-kumar-738710154/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3 text-sm font-mono text-white/40 hover:text-[#ff6b1a] transition-colors group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.27a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
                <span>LinkedIn</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <a
                href="https://github.com/im-subhamkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3 text-sm font-mono text-white/40 hover:text-[#ff6b1a] transition-colors group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
                <span>GitHub</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {/* Decorative divider for mobile */}
            <div className="contact-divider md:hidden w-full h-px bg-white/[0.06] mb-12" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-field">
                <label className="block text-[10px] font-mono text-white/30 tracking-[0.15em] uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-[#ff6b1a]/40 transition-colors text-sm font-mono"
                />
              </div>

              <div className="contact-field">
                <label className="block text-[10px] font-mono text-white/30 tracking-[0.15em] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-[#ff6b1a]/40 transition-colors text-sm font-mono"
                />
              </div>

              <div className="contact-field">
                <label className="block text-[10px] font-mono text-white/30 tracking-[0.15em] uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-[#ff6b1a]/40 transition-colors text-sm font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="contact-field w-full py-3.5 bg-[#ff6b1a] hover:bg-[#ea580c] text-black font-mono font-bold text-sm tracking-wider uppercase rounded-xl transition-all hover:shadow-[0_0_40px_rgba(255,107,26,0.3)] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
