'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '919043335758'
  const defaultMessage = 'Hello! I am interested in your agricultural products. Could you provide more information?'

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-40 bg-accent hover:opacity-90 text-accent-foreground p-4 rounded-full shadow-lg transition-all hover:scale-110 duration-200"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
