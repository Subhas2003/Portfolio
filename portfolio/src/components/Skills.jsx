import { useRef } from 'react'
import { Cpu, Database, Globe, Terminal, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const icons = { Terminal, Globe, Database, Wrench, Cpu }

export default function Skills() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { staggerSelector: '.skill-group' })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-xl px-margin-mobile md:px-margin-desktop bg-surface grid-bg"
    >
      <div className="max-w-max-width mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal-heading">
          <span className="font-mono text-code-sm text-primary">03.</span>
          <h2 className="font-display text-headline-md text-on-surface">
            Technical Arsenal
          </h2>
          <div className="h-px bg-white/10 flex-grow reveal-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <div key={group.title} className="skill-group glass-card p-6 rounded-lg">
                <h3 className="font-display text-body-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                  <Icon size={20} className="text-primary" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
