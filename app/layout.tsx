import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#4a7c59',
}

export const metadata: Metadata = {
  title: 'Agroglobal - Premium Agricultural Exports | Onion & Rice',
  description: 'Leading agricultural export company specializing in premium quality onions and rice. International B2B exports from India with competitive pricing and reliable shipment from Tuticorin and Chennai harbours.',
  generator: 'BKB Incorporation',
  icons: {
    icon: [
      {
        url: '/images/Agro-logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/Agro-logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/Agro-logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/Agro-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
