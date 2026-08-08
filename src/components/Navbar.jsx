import { PhoneCall, ArrowUpRight, ChevronDown } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'
import logoImage from '../assets/logo.png'

function Navbar() {
  const { href } = useWhatsApp(DEFAULT_MESSAGES.hero)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">

      {/* 3D Floating Navbar */}
      <div
        className="
          mx-auto max-w-7xl
          rounded-2xl
          border border-[#c9a227]/30
          bg-[#100e0c]/90
          backdrop-blur-2xl
          shadow-[0_18px_50px_rgba(0,0,0,0.45),0_4px_0_rgba(201,162,39,0.12)]
          transition-all duration-500
          hover:border-[#c9a227]/50
        "
      >

        <div className="flex h-[78px] items-center justify-between px-5 sm:px-7">

          {/* ================= LOGO ================= */}
          <a
            href="#top"
            className="group flex items-center gap-3"
          >

            {/* 3D Logo Container */}
            <div
              className="
                relative flex h-[52px] w-[52px]
                items-center justify-center
                overflow-hidden rounded-full
                border border-[#c9a227]/50
                bg-[#080706]
                shadow-[0_5px_15px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(201,162,39,0.12)]
                transition-all duration-500
                group-hover:-translate-y-1
                group-hover:shadow-[0_10px_25px_rgba(201,162,39,0.2)]
              "
            >
              {/* Gold Glow */}
              <div className="absolute inset-0 rounded-full bg-[#c9a227]/5 blur-md" />

              <img
                src={logoImage}
                alt="SKP & Associates"
                className="
                  relative z-10
                  h-full w-full
                  object-contain
                  p-[3px]
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Brand */}
            <div className="hidden sm:block">
              <div
                className="
                  text-[14px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-white
                "
              >
                SKP & Associates
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Civil Engineering & Consultancy
              </div>
            </div>

          </a>


          {/* ================= NAVIGATION ================= */}
          <nav className="hidden items-center gap-2 md:flex">

            {/* Nav Item */}
            <a
              href="#services"
              className="
                group relative
                flex items-center gap-1
                rounded-xl
                px-4 py-2.5
                text-[13px]
                font-medium
                text-[#d8d3ca]
                transition-all duration-300
                hover:bg-[#c9a227]/10
                hover:text-[#e5bd3f]
              "
            >
              Services

              <ChevronDown
                size={13}
                className="
                  opacity-50
                  transition-transform duration-300
                  group-hover:rotate-180
                "
              />

              <span
                className="
                  absolute bottom-1 left-4 right-4
                  h-[1px]
                  scale-x-0
                  bg-[#c9a227]
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </a>


            <a
              href="#process"
              className="
                rounded-xl px-4 py-2.5
                text-[13px] font-medium
                text-[#d8d3ca]
                transition-all duration-300
                hover:bg-[#c9a227]/10
                hover:text-[#e5bd3f]
              "
            >
              Process
            </a>


            <a
              href="#team"
              className="
                rounded-xl px-4 py-2.5
                text-[13px] font-medium
                text-[#d8d3ca]
                transition-all duration-300
                hover:bg-[#c9a227]/10
                hover:text-[#e5bd3f]
              "
            >
              Team
            </a>


            {/* ================= 3D CONTACT BUTTON ================= */}
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
                group ml-3
                relative
                inline-flex items-center gap-2
                overflow-hidden
                rounded-xl
                border border-[#e5bd3f]/60
                bg-gradient-to-b
                from-[#dcb33a]
                to-[#9c7410]
                px-5 py-3
                text-[13px]
                font-bold
                text-black

                shadow-[0_5px_0_#5c4307,0_10px_25px_rgba(201,162,39,0.2)]

                transition-all duration-200

                hover:-translate-y-1
                hover:shadow-[0_7px_0_#5c4307,0_15px_30px_rgba(201,162,39,0.3)]

                active:translate-y-[3px]
                active:shadow-[0_2px_0_#5c4307]
              "
            >

              {/* Shine */}
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <PhoneCall
                size={16}
                strokeWidth={2}
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:rotate-12
                "
              />

              <span className="relative z-10">
                Contact
              </span>

              <ArrowUpRight
                size={14}
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>

          </nav>


          {/* ================= MOBILE CTA ================= */}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact SKP & Associates"
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-[#c9a227]/50
              bg-[#c9a227]/10
              text-[#e5bd3f]
              shadow-[0_5px_15px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#c9a227]
              hover:text-black
              md:hidden
            "
          >
            <PhoneCall size={18} />
          </a>

        </div>
      </div>

    </header>
  )
}

export default Navbar