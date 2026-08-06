import { MessageCircleMore } from 'lucide-react'
import { DEFAULT_MESSAGES } from '../config'
import useWhatsApp from '../hooks/useWhatsApp'

function WhatsAppButton() {
  const { href } = useWhatsApp(DEFAULT_MESSAGES.contact)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.3)] transition hover:scale-105"
    >
      <MessageCircleMore size={24} />
    </a>
  )
}

export default WhatsAppButton
