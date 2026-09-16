import { useRef } from 'react'
import { education } from '../data/content.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Education() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-dim"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal-heading">
          <span className="font-mono text-code-sm text-primary">04.</span>
          <h2 className="font-display text-headline-md text-on-surface">
            Education
          </h2>
          <div className="h-px bg-white/10 flex-grow reveal-divider" />
        </div>

        <div className="reveal-item glass-card p-8 rounded-xl relative overflow-hidden">
          <div className="absolute left-8 top-12 bottom-12 w-px bg-white/10" />
          <div className="relative z-10 pl-8">
            <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            <div className="mb-1 font-mono text-code-sm text-primary">
              {education.period}
            </div>
            <h3 className="font-display text-headline-md text-on-surface mb-2">
              {education.degree}
            </h3>
            <h4 className="font-body text-body-lg text-on-surface-variant mb-4">
              {education.school}
            </h4>
            <p className="font-body text-body-md text-on-surface-variant/80">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
