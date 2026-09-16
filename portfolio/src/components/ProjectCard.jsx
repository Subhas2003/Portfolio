import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, reverse }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  useGSAP(
    () => {
      const el = cardRef.current
      const rotateX = gsap.quickTo(el, 'rotateX', { duration: 0.4, ease: 'power3.out' })
      const rotateY = gsap.quickTo(el, 'rotateY', { duration: 0.4, ease: 'power3.out' })

      const handleMove = (e) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        rotateY(px * 6)
        rotateX(-py * 6)
      }
      const handleLeave = () => {
        rotateX(0)
        rotateY(0)
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)

      return () => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      }
    },
    { scope: cardRef }
  )

  return (
    <div
      ref={cardRef}
      className={`reveal-item glass-card rounded-xl overflow-hidden flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } group`}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto bg-surface-container-high">
        <div
          ref={imgRef}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        >
          {project.photoUrl ? (
            <img
              src={project.photoUrl}
              alt={project.title}
              className="w-full h-full object-cover-y"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-headline-lg text-white/10 select-none">
                {project.title.split(' ')[0]}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
      </div>

      <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
        <p className="font-mono text-code-sm text-primary mb-2">Featured Project</p>
        <h3 className="font-display text-headline-md text-on-surface mb-4">
          {project.title}
        </h3>
        <p className="font-body text-body-md text-on-surface-variant mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
           {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-mono text-label-caps uppercase tracking-wider"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
         
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-mono text-label-caps uppercase tracking-wider"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
