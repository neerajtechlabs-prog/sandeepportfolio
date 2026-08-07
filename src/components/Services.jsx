import { Building2, Home, Layers3, Palette, ScanLine, TestTube2, Wrench } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

const services = [
  {
    icon: Home,
    title: 'House Planning & Vastu Design',
    text: 'Smart layouts, vastu guidance, and functional planning for homes that feel balanced and future-ready.',
  },
  {
    icon: Building2,
    title: 'Structural Design & RCC Detailing',
    text: 'Technical strength, IS Code compliant planning, and accurate RCC detailing for safe, durable construction.',
  },
  {
    icon: Palette,
    title: 'Interior Design & 3D Visualization',
    text: 'Elegant interior concepts paired with realistic 3D views for better decision-making.',
  },
  {
    icon: Layers3,
    title: '3D Front Elevation',
    text: 'Modern elevation concepts that bring your dream facade to life with clarity and style.',
  },
  {
    icon: Wrench,
    title: 'Project Costing & Estimation',
    text: 'Transparent costing support to keep your planning practical and budget-aware.',
  },
  {
    icon: TestTube2,
    title: 'Soil & Material Testing',
    text: 'Reliable testing support to ensure quality, safety, and confidence in your construction.',
  },
  {
    icon: ScanLine,
    title: 'Site Visit & Supervision',
    text: 'On-ground support, rebar & quality checks, and site supervision to keep your project structurally safe and on track.',
  },
]

function Services() {
  const { href } = useWhatsApp(DEFAULT_MESSAGES.services)

  return (
    <section id="services" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Our Core Services</p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">Thoughtful design, strong structure, and smooth execution.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_12px_40px_rgba(103,61,230,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-soft)] text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[color:var(--text)]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{service.text}</p>
                <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--accent)]">
                  Ask about this service
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
