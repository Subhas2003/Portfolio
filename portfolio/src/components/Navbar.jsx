import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-0'
      }`}
    >
      <div
        className={`flex items-center justify-between w-full transition-all duration-500 ease-out bg-surface/70 backdrop-blur-xl border border-white/10 ${
          scrolled
            ? 'max-w-3xl mx-4 rounded-full px-6 py-2.5 shadow-lg shadow-black/30'
            : 'max-w-none rounded-none px-margin-mobile md:px-margin-desktop py-4 border-x-0 border-t-0'
        }`}
      >
        <a
          href="#"
          className="font-display font-bold text-lg text-on-surface hover:text-primary transition-colors"
        >
          Subhas<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-mono text-label-caps uppercase tracking-wider transition-colors ${
                active === link.href
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              )}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="btn-outline font-mono text-label-caps uppercase tracking-wider px-4 py-1.5 rounded-full"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full mt-2 mx-4 left-0 right-0 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
