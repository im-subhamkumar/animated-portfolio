import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function CinematicNavbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      )
    })
    return () => ctx.revert()
  }, [])

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Animate menu open/close
  useEffect(() => {
    const el = menuRef.current
    if (!el) return
    if (open) {
      gsap.fromTo(el,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      )
      gsap.fromTo(".mobile-nav-link",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.1 }
      )
    }
  }, [open])

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/80 backdrop-blur-2xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        style={{ opacity: 0 }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b1a] group-hover:scale-125 transition-transform" />
          <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#ff6b1a] transition-colors">
            SUBHAM KUMAR
          </span>
          <span className="hidden sm:inline text-[10px] font-mono text-white/30 tracking-wider">
            // SDE 2026
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-xs font-mono text-white/50 hover:text-white tracking-widest uppercase transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/subham-kumar-738710154/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 text-xs font-mono tracking-widest uppercase bg-[#ff6b1a] hover:bg-[#ea580c] text-black font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,26,0.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[55] bg-[#080808]/98 backdrop-blur-3xl flex flex-col justify-center px-8 md:hidden"
          style={{ opacity: 0 }}
        >
          <div className="space-y-8">
            <p className="text-[10px] font-mono tracking-[0.3em] text-[#ff6b1a] uppercase">
              Navigation
            </p>
            {LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link block text-4xl font-display font-bold text-white hover:text-[#ff6b1a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/subham-kumar-738710154/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-[#ff6b1a] text-black font-mono font-bold text-sm tracking-wider uppercase rounded-full"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
