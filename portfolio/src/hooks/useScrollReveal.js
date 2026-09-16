import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

/**
 * Fades + slides in the section's eyebrow/heading, its divider line,
 * and any `.reveal-item` children as they enter the viewport.
 */
export function useScrollReveal(scopeRef, { staggerSelector = '.reveal-item' } = {}) {
  useGSAP(
    () => {
      const trigger = {
        trigger: scopeRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }

      gsap.from(scopeRef.current.querySelectorAll('.reveal-heading'), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: trigger,
      })

      gsap.from(scopeRef.current.querySelectorAll('.reveal-divider'), {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: trigger,
      })

      const items = scopeRef.current.querySelectorAll(staggerSelector)
      if (items.length) {
        gsap.from(items, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: trigger,
        })
      }
    },
    { scope: scopeRef }
  )
}
