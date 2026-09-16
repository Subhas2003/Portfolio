import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="w-full py-lg bg-surface-dim border-t border-white/5 grid-bg px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto gap-4">
        <div className="font-display text-headline-md font-bold text-primary">
          Subhas
        </div>
        <p className="font-body text-body-md text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with MERN & AI.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors font-mono text-label-caps uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors font-mono text-label-caps uppercase tracking-wider"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
