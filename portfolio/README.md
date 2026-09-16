# Subhas Chandra Munain — Portfolio

React + Vite + Tailwind CSS + GSAP (ScrollTrigger) + Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> /dist
```

## Structure

- `src/data/content.js` — all your CV content (name, projects, skills, education, links). Edit this file to update the site's text.
- `src/components/` — one component per section (Hero, About, Projects, Skills, Education, Contact, Navbar, Footer).
- `src/hooks/useScrollReveal.js` — shared GSAP ScrollTrigger reveal animation used by every section.
- `tailwind.config.js` — the "Synthetic Intelligence" design tokens (colors, type scale, spacing) from DESIGN.md.

## To personalize

1. Add your photo: set `profile.photoUrl` in `src/data/content.js` (or place an image in `public/` and reference it).
2. Add a hosted resume PDF URL to `profile.resumeUrl`.
3. Wire the contact form in `src/components/Contact.jsx` to an email service (Formspree, EmailJS, etc.) — it currently just flips a "sent" state locally.
4. Replace the placeholder project image blocks in `ProjectCard.jsx` with real screenshots if you have them.

## Deploy

Free options: Vercel, Netlify, or GitHub Pages — all support Vite out of the box. Push to GitHub, connect the repo, done.
