import { PhoneCall } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'
import { themes, themeOrder } from '../themeConfig'

function Navbar({ currentTheme, previousTheme, onThemeChange, onPreviousTheme }) {
  const { href } = useWhatsApp(DEFAULT_MESSAGES.hero)

  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--panel)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-[color:var(--text)] uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-soft)] text-sm font-semibold text-white">
            ER
          </span>
          <span className="text-sm sm:text-base">ER SKP & Associates</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPreviousTheme}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--panel-2)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
          >
            Previous: {themes[previousTheme]?.name || 'Theme'}
          </button>
          <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel-2)] p-1">
            {themeOrder.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onThemeChange(key)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${currentTheme === key ? 'bg-[color:var(--accent)] text-white' : 'text-[color:var(--muted)] hover:text-[color:var(--text)]'}`}
              >
                {themes[key].name}
              </button>
            ))}
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] md:flex">
            <a href="#services" className="transition hover:text-[color:var(--accent)]">Services</a>
            <a href="#process" className="transition hover:text-[color:var(--accent)]">Process</a>
            <a href="#team" className="transition hover:text-[color:var(--accent)]">Team</a>
            <a href={href} target="_blank" rel="noreferrer" className="btn-cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-soft)] px-4 py-2 text-white transition hover:brightness-110">
              <PhoneCall size={16} />
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
