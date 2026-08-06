import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const whatsappMessage = useMemo(() => {
    return [
      'New enquiry from SKP Group website',
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Project Type: ${formData.projectType || 'Not provided'}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n')
  }, [formData])

  const { href } = useWhatsApp(whatsappMessage || DEFAULT_MESSAGES.contact)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent('New enquiry from SKP Group website')
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nProject Type: ${formData.projectType || 'Not provided'}\nMessage: ${formData.message || 'Not provided'}`,
    )

    window.open(`mailto:skpgroup.official@gmail.com?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]/80 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">Let’s begin your dream home or project plan.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
            From house planning to site supervision, we make the journey simple, practical, and vastu-aware. Drop your details and we’ll get back to you quickly.
          </p>
          <div className="mt-6 space-y-3 text-[color:var(--muted)]">
            <p>📞 +91 94569 60121</p>
            <p>✉️ skpgroup.official@gmail.com</p>
            <p>📍 Plot-11, Gopal Vihar, Near Subharti University, NH-58 Bypass, Meerut-250002 (U.P.)</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--muted)]"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--muted)]"
              placeholder="Email address"
              required
            />
          </div>
          <input
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--muted)]"
            placeholder="Project type"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--muted)]"
            placeholder="Share your idea or requirement"
            required
          />
          <button type="submit" className="btn-cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-soft)] px-6 py-3 font-semibold text-white transition hover:brightness-110">
            Send enquiry <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
