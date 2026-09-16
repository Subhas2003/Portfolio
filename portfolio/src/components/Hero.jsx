import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Hero() {
  const containerRef = useRef(null)
  const blobRef = useRef(null)
  const imageWrapperRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { opacity: 0, y: 16, duration: 0.6 })
        .from(
          '.hero-word',
          { opacity: 0, y: 40, stagger: 0.08, duration: 0.8 },
          '-=0.3'
        )
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from(
          '.hero-cta',
          { opacity: 0, y: 20, stagger: 0.12, duration: 0.6 },
          '-=0.4'
        )
        .from(
          '.hero-social',
          { opacity: 0, y: 12, stagger: 0.08, duration: 0.5 },
          '-=0.3'
        )
        .from(
          imageWrapperRef.current,
          { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.6'
        )

      // Background ambient blob animation
      gsap.to(blobRef.current, {
        x: 30,
        y: -20,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Automatic gentle floating animation for the circular photo
      gsap.to(imageWrapperRef.current, {
        y: -14,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    },
    { scope: containerRef }
  )

  const name = profile.name.split(' ')

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden grid-bg pt-32 pb-xl px-margin-mobile md:px-margin-desktop"
    >
      <div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-max-width w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="hero-badge inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="font-mono text-code-sm text-primary">
              {profile.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface mb-6 tracking-tight overflow-hidden">
            {name.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-4 last:mr-0">
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p className="hero-subtitle font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0 mb-10">
            {profile.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12">
            <a
              href="#projects"
              className="hero-cta btn-primary px-8 py-3 rounded font-mono text-label-caps uppercase tracking-wider flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="hero-cta btn-outline px-8 py-3 rounded font-mono text-label-caps uppercase tracking-wider flex items-center gap-2"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social text-on-surface-variant hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social text-on-surface-variant hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hero-social text-on-surface-variant hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Floating Circle Photo with Hover Animation */}
        <div
          ref={imageWrapperRef}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-primary/30 hover:border-primary transition-all duration-500 ease-out hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.35)] cursor-pointer">
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5">
              <img
                src={profile.profilePhoto || profile.photo || '/avatar.jpg'}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-108 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}