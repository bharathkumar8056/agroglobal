'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Globe, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Premium Agricultural
                  <span className="text-primary"> Exports</span>
                </h1>
                <p className="text-lg text-foreground/80">
                  Quality onions and rice from India to the world. Trusted by international buyers for excellence and reliability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">100% Quality Assured</h3>
                    <p className="text-sm text-foreground/70">Rigorous quality control for every shipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Competitive Pricing</h3>
                    <p className="text-sm text-foreground/70">Best market rates for bulk orders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Reliable Logistics</h3>
                    <p className="text-sm text-foreground/70">Shipment from major Indian harbours</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity space-x-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/919043335758?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="/images/hero-banner.jpg"
                alt="Agricultural fields and produce"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Agroglobal?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We are committed to providing the highest quality agricultural products with exceptional service and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Certified',
                description: 'All products meet international quality standards and certifications'
              },
              {
                icon: Truck,
                title: 'Fast Shipment',
                description: 'Reliable logistics from Tuticorin and Chennai harbours'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Serving international buyers across multiple countries'
              },
              {
                icon: CheckCircle,
                title: 'Flexible Terms',
                description: 'Multiple payment options including LC and full payment'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Products</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We offer the finest quality vegetables, spices, onions, and rice for the global market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Premium Onions',
                category: 'Vegetables',
                image: '/images/onion-product.jpg',
                description: 'High-quality golden onions perfect for bulk export',
                features: ['Fresh & Hygienic', 'Superior Quality']
              },
              {
                name: 'Fresh Vegetables',
                category: 'Vegetables',
                image: '/images/vegetables-product.jpg',
                description: 'Premium fresh vegetables including tomatoes and peppers',
                features: ['Organic Certified', 'Pesticide-Free']
              },
              {
                name: 'Premium Rice',
                category: 'Spices & Grains',
                image: '/images/rice-product.jpg',
                description: 'Premium basmati and other rice varieties',
                features: ['Long Grain', 'Quality Certified']
              },
              {
                name: 'Premium Spices',
                category: 'Spices & Grains',
                image: '/images/spices-product.jpg',
                description: 'Carefully curated selection of premium spices',
                features: ['Pure & Unadulterated', 'Food Grade']
              }
            ].map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative h-48 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3 flex-grow">{product.description}</p>
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-foreground/80">
                        <CheckCircle size={14} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Markets Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Serving Global Markets</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our agricultural products are exported to buyers across Asia, Africa, Europe, and the Middle East. We maintain the highest standards of quality at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: 'Asia Pacific',
                countries: 'Malaysia, Singapore, Bangladesh, Thailand',
                highlight: 'Major export destination with growing demand'
              },
              {
                region: 'Middle East',
                countries: 'UAE, Saudi Arabia, Qatar, Oman',
                highlight: 'Premium quality meets regional preferences'
              },
              {
                region: 'Africa & Europe',
                countries: 'Kenya, Nigeria, Mauritius, Italy, Belgium',
                highlight: 'Expanding markets with consistent supply'
              }
            ].map((market, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold text-foreground mb-2">{market.region}</h3>
                <p className="text-sm text-foreground/70 mb-4">{market.countries}</p>
                <p className="text-accent font-semibold">{market.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Trust Agroglobal?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Years of Experience</h3>
                  <p className="text-foreground/70">Established reputation in agricultural exports with proven track record</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Certified Quality</h3>
                  <p className="text-foreground/70">All products comply with international food safety and quality standards</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Transparent Pricing</h3>
                  <p className="text-foreground/70">Competitive rates with clear cost breakdown and no hidden charges</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">24/7 Support</h3>
                  <p className="text-foreground/70">Dedicated customer support available via phone, email, and WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Fast Logistics</h3>
                  <p className="text-foreground/70">Efficient shipment from multiple harbours with complete tracking</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Flexible Terms</h3>
                  <p className="text-foreground/70">Multiple payment options including advance payment and LC facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our growing network of international buyers. Get in touch with our team today. We're ready to discuss your requirements and provide the best offers.
          </p>
          <a
            href="https://wa.me/919043335758?text=I%20am%20interested%20in%20placing%20an%20order.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      {/* White Space Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Empty section for visual breathing room */}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
