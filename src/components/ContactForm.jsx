import { useEffect, useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    projectType: '',
    message: '',
  })

  const [mobileError, setMobileError] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const whatsappMessage = useMemo(() => {
    return [
      'New enquiry from SKP Group website',
      `Name: ${formData.firstName || 'Not provided'} ${formData.lastName || ''}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Mobile: ${formData.mobile || 'Not provided'}`,
      `Project Type: ${formData.projectType || 'Not provided'}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n')
  }, [formData])

  const { href } = useWhatsApp(
    whatsappMessage || DEFAULT_MESSAGES.contact
  )

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'mobile' && mobileError) {
      setMobileError('')
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setStatus('')

    // Mobile validation
    const mobilePattern = /^\d{10}$/

    if (!mobilePattern.test(formData.mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number')
      return
    }

    setMobileError('')
    setIsSubmitting(true)

    try {
      window.open(href, '_blank', 'noopener,noreferrer')

      setStatus('success')

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        projectType: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (status !== 'success') {
      return
    }

    const timeout = setTimeout(() => {
      setStatus('')
    }, 5000)

    return () => clearTimeout(timeout)
  }, [status])

  return (
    <section
      id="contact"
      className="border-t border-[#c9a227]/20 bg-[#0d0b0a] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-lg">

            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Contact
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let’s begin your dream home or project plan.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#c9c2b8]">
              From house planning to site supervision, we make the journey
              simple, practical, and vastu-aware. Drop your details and we’ll
              get back to you quickly.
            </p>

            <div className="mt-7 space-y-4 text-sm text-[#d4af37]">
              <p>📍 Delhi NCR</p>

              <p className="leading-6">
                📍 Plot-11, Gopal Vihar, Near Subharti University,
                NH-58 Bypass, Meerut-250002 (U.P.)
              </p>

              <p>📞 +91 94569 60121</p>

              <a
                href="mailto:skpgroup.official@gmail.com"
                className="block transition hover:text-white"
              >
                ✉️ skpgroup.official@gmail.com
              </a>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl space-y-4 lg:justify-self-end"
          >
            {/* ROW 1 - FIRST + LAST NAME */}
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
                className="contact-input"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
                className="contact-input"
              />
            </div>

            {/* ROW 2 - MOBILE + EMAIL */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  maxLength={10}
                  inputMode="numeric"
                  required
                  className={`contact-input ${
                    mobileError ? 'border-red-500' : ''
                  }`}
                />

                {mobileError && (
                  <p className="mt-2 text-xs text-red-400">
                    {mobileError}
                  </p>
                )}
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="contact-input"
              />
            </div>

            {/* ROW 3 - PROJECT TYPE */}
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="contact-input w-full cursor-pointer"
            >
              <option value="" disabled>
                Select project type
              </option>

              <option value="Construction">Construction</option>
              <option value="Interior 3D Design">Interior 3D Design</option>
              <option value="Vastu Consultation">Vastu Consultation</option>
              <option value="3D Home Design">3D Home Design</option>
              <option value="2D Home Design">2D Home Design</option>
              <option value="House Planning">House Planning</option>
              <option value="Structural Design">Structural Design</option>
              <option value="Elevation Design">Elevation Design</option>
              <option value="Renovation">Renovation</option>
              <option value="Site Supervision">Site Supervision</option>
              <option value="Estimation & Costing">Estimation & Costing</option>
              <option value="Complete Home Project">Complete Home Project</option>
              <option value="Other">Other</option>
            </select>

            {/* ROW 4 - MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your idea or requirement"
              rows={5}
              required
              className="contact-input w-full resize-none"
            />

            {/* SUCCESS MESSAGE */}
            {status === 'success' && (
              <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                Your enquiry has been sent successfully. We’ll get back to you soon.
              </div>
            )}

            {/* ERROR MESSAGE */}
            {status === 'error' && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#d4af37]/50
                bg-gradient-to-b
                from-[#d4af37]
                to-[#9c7410]
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                shadow-[0_4px_0_#5c4307,0_10px_25px_rgba(212,175,55,0.15)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-[0_6px_0_#5c4307,0_15px_30px_rgba(212,175,55,0.25)]
                active:translate-y-[2px]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <span>
                {isSubmitting ? 'Sending...' : 'Send enquiry'}
              </span>

              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
