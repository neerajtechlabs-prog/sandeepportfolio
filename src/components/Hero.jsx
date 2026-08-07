import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

function Hero() {
  const { href } = useWhatsApp(DEFAULT_MESSAGES.hero)

  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,61,230,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(155,127,240,0.12),_transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)]/80 px-4 py-2 text-sm text-[color:var(--muted)] shadow-sm">
            <Sparkles size={16} className="text-[color:var(--accent)]" />
            Sahi Design, Majboot Nirman - Sukhad aur Samriddh Jeevan
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
              Consulting Engineer & Vastu Expert for beautiful, strong, and vastu-compliant homes.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              With 13+ years of experience and 250+ projects delivered, ER SKP & Associates helps families in Meerut and nearby NCR build homes that are smart, strong, and spiritually aligned.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={href} target="_blank" rel="noreferrer" className="btn-cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-soft)] px-6 py-3 font-semibold text-white transition hover:brightness-110">
              Chat on WhatsApp <ArrowRight size={18} />
            </a>
            <a href="#services" className="rounded-full border border-[color:var(--border)] px-6 py-3 font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--panel-2)]">
              Explore services
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)]/80 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[color:var(--text)]">13+ Years</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Experience in planning & execution</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)]/80 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[color:var(--text)]">100% Vastu</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Homes with clear design intent</p>
            </div>
          </div>
        </div>

        <div className="feature-card-grid rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]/90 p-8 shadow-[0_20px_60px_rgba(103,61,230,0.12)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">What we do best</p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--text)]">From concept to completion, with clarity and care</h2>
            </div>
            <div className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">Meerut</div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ['House Planning', 'Vastu-based layouts for modern homes and renovations'],
              ['Structural Design', 'Safe and practical RCC planning for lasting strength'],
              ['Interior Design', 'Elegant spaces with 3D visualization and detailing'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[color:var(--border)]/70 bg-[color:var(--panel-2)]/80 p-4">
                <p className="font-semibold text-[color:var(--text)]">{title}</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
