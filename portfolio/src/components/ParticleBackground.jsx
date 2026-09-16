import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PARTICLE_COUNT = 55
const COLORS = [
  'rgba(96, 165, 250, 0.75)',  // blue-400 (primary)
  'rgba(139, 92, 246, 0.60)',  // violet-500
  'rgba(34, 211, 238, 0.55)',  // cyan-400
  'rgba(96, 165, 250, 0.45)',  // blue-400 dimmer
]

export default function ParticleBackground() {
  const wrapperRef = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      if (prefersReducedMotion) return

      const particles = wrapperRef.current.querySelectorAll('.gsap-particle')

      particles.forEach((particle, i) => {
        // Set a random visible starting opacity so the field looks populated
        gsap.set(particle, { opacity: gsap.utils.random(0.35, 0.85) })

        gsap.to(particle, {
          y: gsap.utils.random(-150, -50),
          x: gsap.utils.random(-30, 30),
          opacity: 0,
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,          // fade back in smoothly instead of snapping
          ease: 'power1.inOut',
          delay: gsap.utils.random(0, 6), // stagger so they don't all sync
          repeatRefresh: true, // pick new random y/x values on every repeat
        })
      })
    },
    { scope: wrapperRef }
  )

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const size  = gsap.utils.random(2, 5)
        const color = COLORS[i % COLORS.length]
        const left  = `${gsap.utils.random(0, 100)}%`
        const top   = `${gsap.utils.random(0, 100)}%`
        return (
          <span
            key={i}
            className="gsap-particle absolute rounded-full"
            style={{
              width: size,
              height: size,
              left,
              top,
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
              willChange: 'transform, opacity',
            }}
          />
        )
      })}
    </div>
  )
}
