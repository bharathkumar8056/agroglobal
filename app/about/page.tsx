'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CheckCircle, Users, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 border-l-8 border-primary pl-8 py-8">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm">
              Building Trust Since Establishment
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Agroglobal Export and Import
            </h1>
            <p className="text-xl text-foreground/85 leading-relaxed">
              A trusted name in agricultural exports, committed to delivering premium quality products globally. We connect farmers with international markets, ensuring every product meets the highest standards of excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-card border border-primary/30 px-6 py-3 rounded-lg">
                <p className="font-semibold text-foreground">Global Reach</p>
                <p className="text-sm text-foreground/70">Serving 20+ Countries</p>
              </div>
              <div className="bg-card border border-primary/30 px-6 py-3 rounded-lg">
                <p className="font-semibold text-foreground">Quality Certified</p>
                <p className="text-sm text-foreground/70">ISO 22000 & HACCP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Who We Are</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    Agroglobal Export and Import is a leading agricultural export company based in Karaikudi, Tamil Nadu, India. We specialize in providing premium quality onions, rice, and other agricultural products to international buyers across the globe, with a presence in over 20 countries.
                  </p>
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    With established expertise in the agricultural export business, we have built strong, lasting relationships with buyers worldwide. Our unwavering commitment to quality, reliability, and customer satisfaction has earned us a preferred position in the competitive international market.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    We work directly with trusted farmers and producers to source the finest agricultural products, ensuring that every item meets the highest international standards before shipment. Our integrated approach from farm to port guarantees complete quality control.
                  </p>
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    Our team of experienced professionals understands the complexities of global trade and works tirelessly to ensure seamless transactions, timely deliveries, and complete customer satisfaction at every step of the journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: 'Quality First', description: 'ISO certified products meeting international standards' },
                { icon: Target, title: 'Customer Focus', description: 'Dedicated to exceeding your requirements' },
                { icon: Users, title: 'Expert Team', description: 'Experienced agricultural trade professionals' },
                { icon: CheckCircle, title: 'Reliable', description: 'Consistent delivery and 24/7 support' }
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Businesses Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Premium Quality Products',
                items: [
                  'Rigorous quality control at every stage',
                  'Direct sourcing from trusted farmers',
                  'International quality certifications',
                  'Fresh and hygienic processing'
                ]
              },
              {
                title: 'Reliable Logistics',
                items: [
                  'Shipment from Tuticorin and Chennai harbours',
                  'Professional packaging and handling',
                  'On-time delivery guaranteed',
                  'Tracking and documentation support'
                ]
              },
              {
                title: 'Flexible Payment Terms',
                items: [
                  '50% advance, 50% on delivery',
                  'Letter of Credit (LC) accepted',
                  'Full payment options available',
                  'Transparent pricing'
                ]
              },
              {
                title: 'Customer Support',
                items: [
                  'Dedicated account managers',
                  '24/7 WhatsApp support',
                  'Custom order requirements',
                  'Post-delivery assistance'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Commitment to Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sustainable Farming</h3>
              <p className="text-foreground/80">We work with farmers who practice sustainable and ethical agricultural methods to protect our environment.</p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Testing</h3>
              <p className="text-foreground/80">Every batch undergoes comprehensive testing for purity, pesticide residue, and microbial contamination.</p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-foreground/80">We continuously invest in modern farming techniques and processing methods to improve product quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">International Standards & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">Quality Compliance</h3>
              <ul className="space-y-3">
                {[
                  'ISO 22000 - Food Safety Management',
                  'HACCP - Hazard Analysis & Critical Control Points',
                  'FDA - US Food & Drug Administration Compliance',
                  'Export Grade - High Quality Standards',
                  'Pesticide Residue Testing - Below Limits'
                ].map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">Export Capabilities</h3>
              <ul className="space-y-3">
                {[
                  'Bulk Export - Up to multiple tons per shipment',
                  'Professional Packaging - Food-grade materials',
                  'Documentation - Complete export compliance',
                  'Traceability - Track from farm to shipment',
                  'Customization - Tailored to buyer specifications'
                ].map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Address</h3>
              <p className="text-foreground/80">
                2/499 Thanthai Periyar Nagar<br />
                2nd Street, Karaikudi - 630002<br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Email</h3>
              <a href="mailto:agroglobalexportandimport@gmail.com" className="text-primary hover:text-accent transition-colors">
                agroglobalexportandimport@gmail.com
              </a>
            </div>

            <div className="bg-card p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Phone & WhatsApp</h3>
              <a href="tel:+919043335758" className="text-primary hover:text-accent transition-colors block mb-2">
                +91 9043335758
              </a>
              <a href="https://wa.me/919043335758" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                WhatsApp Business
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
