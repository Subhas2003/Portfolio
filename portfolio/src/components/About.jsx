import { useRef } from 'react'
import { GraduationCap, User } from 'lucide-react'
import { about, profile } from '../data/content.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function About() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-xl px-margin-mobile md:px-margin-desktop bg-surface"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal-heading">
          <span className="font-mono text-code-sm text-primary">01.</span>
          <h2 className="font-display text-headline-md text-on-surface">
            About Me
          </h2>
          <div className="h-px bg-white/10 flex-grow reveal-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="relative group reveal-item">
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-300" />
            <div className="relative glass-card rounded-2xl overflow-hidden border border-primary/20 h-full min-h-[280px] flex items-center justify-center">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover aspect-square"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-on-surface-variant p-10 text-center">
                  <User size={48} className="text-primary/60" />
                  <p className="font-mono text-code-sm">
                    Drop your photo into
                    <br />
                    <code className="text-primary">profile.photoUrl</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col justify-center reveal-item">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-body-md text-on-surface-variant mb-6 last:mb-8 leading-relaxed"
              >
                {p}
              </p>
            ))}
            <div className="inline-flex items-center gap-2 text-primary font-mono text-code-sm bg-primary/5 px-4 py-2 rounded-lg border border-primary/20 w-max">
              <GraduationCap size={18} />
              {about.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
