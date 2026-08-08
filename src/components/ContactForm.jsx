import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    message: '',
  })
  const [mobileError, setMobileError] = useState('')

  const whatsappMessage = useMemo(() => {
    return [
      'New enquiry from SKP Group website',
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Mobile: ${formData.mobile || 'Not provided'}`,
      `Project Type: ${formData.projectType || 'Not provided'}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n')
  }, [formData])

  const { href } = useWhatsApp(whatsappMessage || DEFAULT_MESSAGES.contact)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'mobile' && mobileError) {
      setMobileError('')
    }
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const mobilePattern = /^\d{10}$/
    if (!mobilePattern.test(formData.mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number')
      return
    }

    const subject = encodeURIComponent('New enquiry from SKP Group website')
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nMobile: ${formData.mobile || 'Not provided'}\nProject Type: ${formData.projectType || 'Not provided'}\nMessage: ${formData.message || 'Not provided'}`,
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
          <p className="mt-4 max-w-xl text-lg leading-8 text-[color:var(--accent)]">
            From house planning to site supervision, we make the journey simple, practical, and vastu-aware. Drop your details and we’ll get back to you quickly.
          </p>
          <div className="mt-6 space-y-3 text-[color:var(--accent)]">
            <p>� Delhi NCR</p>
            <p>📍 Plot-11, Gopal Vihar, Near Subharti University, NH-58 Bypass, Meerut-250002 (U.P.)</p>
            <p>📞 +91 94569 60121</p>
            <p>✉️ skpgroup.official@gmail.com</p>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <iframe
              title="SKP & Associates location map"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Plot-11,+Gopal+Vihar,+Near+Subharti+University,+NH-58+Bypass,+Meerut-250002+(U.P.)&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--accent)]"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--accent)]"
              placeholder="Email address"
              required
            />
            <input
              name="mobile"
              type="tel"
              inputMode="numeric"
              value={formData.mobile}
              onChange={handleChange}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--accent)]"
              placeholder="Mobile number"
              maxLength={10}
              required
            />
          </div>
          {mobileError && (
            <p className="text-sm text-[color:var(--accent)]">{mobileError}</p>
          )}
          <input
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--accent)]"
            placeholder="Project type"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)]/80 px-4 py-3 text-[color:var(--text)] outline-none ring-0 placeholder:text-[color:var(--accent)]"
            placeholder="Share your idea or requirement"
            required
          />
          <button
            type="submit"
            className="btn-cta mx-auto block inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-7 py-3 font-semibold text-white shadow-[0_20px_45px_rgba(255,80,80,0.28)] ring-1 ring-[rgba(255,80,80,0.22)] transition duration-200 hover:brightness-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Send enquiry <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
