'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['2/499 Thanthai Periyar Nagar', '2nd Street, Karaikudi - 630002', 'Tamil Nadu, India']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['agroglobalexportandimport@gmail.com'],
      link: 'mailto:agroglobalexportandimport@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9043335758'],
      link: 'tel:+919043335758'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      details: ['+91 9043335758'],
      link: 'https://wa.me/919043335758'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70">
              Have questions about our products or services? We're here to help. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) =>
                        info.link ? (
                          <a
                            key={idx}
                            href={info.link}
                            target={info.link.startsWith('http') && !info.link.startsWith('mailto:') && !info.link.startsWith('tel:') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') && !info.link.startsWith('mailto:') && !info.link.startsWith('tel:') ? 'noopener noreferrer' : ''}
                            className="text-primary hover:text-accent transition-colors font-medium"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-foreground/80">{detail}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How Can We Help?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form Alternative */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
              <p className="text-foreground/70 mb-6">
                For quick inquiries, please reach out via WhatsApp. Our team is dedicated to responding to all export and trade inquiries promptly.
              </p>
              <a
                href="https://wa.me/919043335758?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity mb-6"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
              <p className="text-sm text-foreground/70">
                We serve buyers across multiple time zones and aim to respond to all trade inquiries as quickly as possible.
              </p>
            </div>

            {/* Quick Inquiry Topics */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Common Inquiries</h3>
              <ul className="space-y-4">
                {[
                  'Product pricing and availability',
                  'Bulk order requirements',
                  'Payment terms and options',
                  'Shipment schedules and rates',
                  'Product samples and specifications',
                  'Partnership opportunities'
                ].map((inquiry, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <a
                      href={`https://wa.me/919043335758?text=Hello!%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(inquiry)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {inquiry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Export Commitment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <Globe size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Export Commitment</h3>
                <p className="opacity-90">Trusted by buyers across 20+ countries worldwide</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Shipping Ports</h4>
                <p className="opacity-90">We export through Tuticorin and Chennai harbours, well-connected to global shipping routes.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">Documentation & Compliance</h4>
                <p className="opacity-90">Full export documentation, certifications, and customs clearance support provided for every shipment.</p>
              </div>
            </div>

            <p className="mt-8 opacity-90 text-sm">
              We handle end-to-end export logistics — from sourcing and quality checks to packaging, shipment, and delivery to your destination port.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'What is the minimum order quantity?',
                answer: 'The minimum order for all our products is 1 ton. This ensures efficient processing and competitive pricing.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'We offer flexible payment options: 50% advance with 50% on delivery, Letter of Credit (LC), or full payment upfront. Choose what works best for you.'
              },
              {
                question: 'From which ports do you ship?',
                answer: 'We ship from both Tuticorin and Chennai harbours, which are well-connected to international shipping routes and offer competitive rates.'
              },
              {
                question: 'Do you provide product samples?',
                answer: 'Yes, we can provide samples for quality verification. Please contact us via WhatsApp to request samples.'
              },
              {
                question: 'What is your delivery timeline?',
                answer: 'Delivery timelines depend on the destination and shipment method. After order confirmation, we provide detailed delivery schedules and tracking information.'
              },
              {
                question: 'Do your products have certifications?',
                answer: 'Yes, all our products meet international quality standards and come with necessary export certifications and documentation.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 mb-8">
            Get in touch today to discuss your requirements and receive a customized quote.
          </p>
          <a
            href="https://wa.me/919043335758?text=Hello!%20I%20am%20interested%20in%20placing%20an%20order.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle size={20} className="mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
