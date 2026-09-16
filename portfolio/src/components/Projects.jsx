import { useRef } from 'react'
import { projects } from '../data/content.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-dim"
    >
      <div className="max-w-max-width mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal-heading">
          <span className="font-mono text-code-sm text-primary">02.</span>
          <h2 className="font-display text-headline-md text-on-surface">
            Featured Projects
          </h2>
          <div className="h-px bg-white/10 flex-grow reveal-divider" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
