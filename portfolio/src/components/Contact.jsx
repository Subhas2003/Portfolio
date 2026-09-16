import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import { Code2, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/content.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

// Pulled from .env — see .env.example. Never commit real values.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function MagneticButton({ children, ...props }) {
  const btnRef = useRef(null)

  useGSAP(
    () => {
      const el = btnRef.current
      const xTo = gsap.quickTo(el, 'x', { duration: 0.3, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.3, ease: 'power3.out' })

      const handleMove = (e) => {
        const rect = el.getBoundingClientRect()
        xTo((e.clientX - rect.left - rect.width / 2) * 0.3)
        yTo((e.clientY - rect.top - rect.height / 2) * 0.3)
      }
      const handleLeave = () => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)
      return () => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      }
    },
    { scope: btnRef }
  )

  return (
    <button ref={btnRef} {...props}>
      {children}
    </button>
  )
}

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  useScrollReveal(sectionRef)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // 1. Send the message to you
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        // 2. Send the auto-reply back to the sender
        // Requires a second EmailJS template whose "To email" field is set to {{user_email}}
        return emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          formRef.current,
          { publicKey: EMAILJS_PUBLIC_KEY }
        )
      })
      .then(() => {
        setStatus('sent')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 4000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-dim grid-bg"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <span className="reveal-heading font-mono text-code-sm text-primary mb-4 block">
          05. What's Next?
        </span>
        <h2 className="reveal-heading font-display text-headline-lg-mobile md:text-display text-on-surface mb-6">
          Get In Touch
        </h2>
        <p className="reveal-item font-body text-body-md text-on-surface-variant mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to
          you!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reveal-item glass-card p-8 rounded-xl text-left space-y-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block font-mono text-label-caps uppercase tracking-wider text-on-surface-variant mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="user_name" // must match {{user_name}} in BOTH EmailJS templates
                type="text"
                required
                placeholder="John Doe"
                className="w-full input-field rounded px-4 py-3 font-body text-body-md"
              />
            </div>
            <div>
              <label
                className="block font-mono text-label-caps uppercase tracking-wider text-on-surface-variant mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="user_email" // must match {{user_email}} — and be the "To email" on your auto-reply template
                type="email"
                required
                placeholder="john@example.com"
                className="w-full input-field rounded px-4 py-3 font-body text-body-md"
              />
            </div>
          </div>
          <div>
            <label
              className="block font-mono text-label-caps uppercase tracking-wider text-on-surface-variant mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Hello..."
              className="w-full input-field rounded px-4 py-3 font-body text-body-md resize-none"
            />
          </div>
          <MagneticButton
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full py-4 rounded font-mono text-label-caps uppercase tracking-wider disabled:opacity-60"
          >
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message Sent ✓'}
            {status === 'error' && 'Failed — Try Again'}
            {status === 'idle' && 'Send Message'}
          </MagneticButton>
          {status === 'error' && (
            <p className="text-error font-mono text-code-sm text-center">
              Something went wrong. Check your EmailJS Service/Template ID and try again.
            </p>
          )}
        </form>

        <div className="reveal-item flex justify-center gap-8 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2 transition-colors"
          >
            <Mail size={22} />
            <span className="font-mono text-code-sm">Email</span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2 transition-colors"
          >
            <Phone size={22} />
            <span className="font-mono text-code-sm">Phone</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2 transition-colors"
          >
            <Linkedin size={22} />
            <span className="font-mono text-code-sm">LinkedIn</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2 transition-colors"
          >
            <Code2 size={22} />
            <span className="font-mono text-code-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}