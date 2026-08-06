import { ArrowRight } from 'lucide-react'

function FeatureCard({ feature }) {
  const Icon = feature.icon

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-800 p-2 text-cyan-400">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-medium text-white">{feature.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
        </div>
      </div>
      <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
        Learn more <ArrowRight size={14} />
      </a>
    </div>
  )
}

export default FeatureCard
