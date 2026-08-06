import { useMemo } from 'react'
import { DEFAULT_MESSAGES, WHATSAPP_NUMBER } from '../config'

function useWhatsApp(message = DEFAULT_MESSAGES.hero) {
  const href = useMemo(() => {
    const cleanMessage = (message || DEFAULT_MESSAGES.hero).trim()
    const encodedMessage = encodeURIComponent(cleanMessage)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  }, [message])

  return { href }
}

export default useWhatsApp
