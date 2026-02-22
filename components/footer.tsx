'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Agroglobal Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-lg font-bold">Agroglobal</h3>
            </div>
            <p className="text-sm opacity-90">
              Premium agricultural exports from India. Quality onions and rice for global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="/products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>2/499 Thanthai Periyar Nagar, 2nd Street, Karaikudi - 630002</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:agroglobalexportandimport@gmail.com" className="hover:text-accent transition-colors">
                  agroglobalexportandimport@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919043335758" className="hover:text-accent transition-colors">
                  +91 9043335758
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <a
              href="https://wa.me/919043335758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Business</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <div className="space-y-4">
            <p className="text-center text-sm opacity-75">
              © {currentYear} Agroglobal Export and Import. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-sm opacity-90">
              <span>Developed by <a href="https://www.instagram.com/bkb_incorporation/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent transition-colors">BKB Incorporation</a></span>
              <span className="hidden sm:inline">|</span>
              <span>In association with <a href="https://www.instagram.com/brandsparksm/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent transition-colors">Brandspark</a></span>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/bkb_incorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-accent transition-colors"
                title="BKB Incorporation Instagram"
              >
                <Instagram size={18} />
                <span className="text-xs">BKB</span>
              </a>
              <span className="opacity-50">•</span>
              <a
                href="https://www.instagram.com/brandsparksm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-accent transition-colors"
                title="Brandspark Instagram"
              >
                <Instagram size={18} />
                <span className="text-xs">Brandspark</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
