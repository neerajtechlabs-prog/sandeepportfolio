import { ArrowRight, Compass, Layers3, Sparkles, Wrench } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Site Visit & Analysis', text: 'We inspect your site, understand your needs, and assess the project with practical clarity.' },
  { icon: Sparkles, title: 'Vastu Naksha & Planning', text: 'We prepare vastu-aware layouts and planning concepts centered on comfort, flow, and long-term usability.' },
  { icon: Layers3, title: '3D Visualization & Estimation', text: 'We shape elevation ideas and provide a practical estimate so your dream build is clear from the start.' },
  { icon: Wrench, title: 'Execution Support & Quality Control', text: 'We stay involved with site support, rebar checks, and quality oversight to keep execution safe and aligned.' },
]

function Process() {
  return (
    <section id="process" className="border-y border-[color:var(--border)] bg-[color:var(--panel-2)] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Our Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A smooth, step-by-step journey from idea to completion.</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
            Start your project <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-soft)] text-white">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-[color:var(--accent)]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-[color:var(--accent)]">{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
