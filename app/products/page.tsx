'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import { CheckCircle, Package, Truck } from 'lucide-react'

export default function Products() {
  const products = [
    {
      name: 'Premium Onions',
      category: 'Vegetables',
      image: '/images/onion-product.jpg',
      description: 'High-quality golden onions sourced directly from trusted farmers. Perfect for fresh consumption, processing, and export. Our onions are hand-selected for superior quality and have excellent storage capabilities.',
      specifications: [
        'Golden Brown Color',
        'Size: Medium to Large',
        'Moisture: 12-14%',
        'Purity: 99%',
        'Shelf Life: 2-3 months (in proper storage)'
      ],
      uses: [
        'Fresh vegetable market',
        'Food processing industry',
        'Restaurant and catering',
        'Export to international markets',
        'Dehydration and powder production'
      ],
      minOrder: '1 ton',
      quality: 'Premium Grade - Export Quality'
    },
    {
      name: 'Fresh Vegetables Mix',
      category: 'Vegetables',
      image: '/images/vegetables-product.jpg',
      description: 'A premium collection of fresh vegetables including tomatoes, peppers, and seasonal produce. All vegetables are harvested at peak ripeness and undergo strict quality control. Ideal for export to demanding international markets.',
      specifications: [
        'Mixed Fresh Vegetables',
        'Organic Farming Practices',
        'Pesticide-Free Certification',
        'Moisture: Optimal for each type',
        'Shelf Life: 1-4 weeks depending on variety'
      ],
      uses: [
        'Fresh produce export markets',
        'Retail supermarkets and stores',
        'Food processing and canning',
        'Restaurant supply chains',
        'Organic product retailers'
      ],
      minOrder: '1 ton',
      quality: 'Premium Grade - Export Quality'
    },
    {
      name: 'Premium Rice',
      category: 'Spices & Grains',
      image: '/images/rice-product.jpg',
      description: 'High-quality basmati and other rice varieties. Our rice is carefully selected, cleaned, and processed to meet international standards. Premium grains with consistent quality and excellent taste profile.',
      specifications: [
        'Long Grain (18mm+)',
        'White & Polished',
        'Broken Grain: Less than 1%',
        'Moisture: 12-13%',
        'Purity: 99.5%'
      ],
      uses: [
        'Direct consumption',
        'Food service industry',
        'Rice mill processing',
        'Export markets',
        'Culinary and restaurant use'
      ],
      minOrder: '1 ton',
      quality: 'Premium Grade - Export Quality'
    },
    {
      name: 'Premium Spices Collection',
      category: 'Spices & Grains',
      image: '/images/spices-product.jpg',
      description: 'A carefully curated selection of premium spices including turmeric, cumin, coriander, and more. Our spices are freshly sourced, tested for purity, and packaged to maintain their aromatic properties and nutritional value.',
      specifications: [
        'Pure & Unadulterated',
        'Free from Heavy Metals',
        'Moisture: 8-12%',
        'Color & Aroma: Preserved',
        'Food Grade & Certified'
      ],
      uses: [
        'Food manufacturing and processing',
        'Spice distribution and retail',
        'Restaurant and culinary use',
        'Pharmaceutical applications',
        'Export to international markets'
      ],
      minOrder: '1 ton',
      quality: 'Premium Grade - Export Quality'
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
              Our Products
            </h1>
            <p className="text-lg text-foreground/70 mb-6">
              Premium quality onions and rice selected for global markets. All products meet international standards and certifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">Category: Vegetables & Spices</p>
              </div>
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">Minimum Order: 1 Ton</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Product Image */}
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      loading="eager"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h2 className="text-3xl font-bold text-foreground mb-3">{product.name}</h2>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{product.description}</p>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-1">Minimum Order</p>
                        <p className="text-lg font-bold text-foreground">{product.minOrder}</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-1">Quality Grade</p>
                        <p className="text-sm font-bold text-foreground">{product.quality}</p>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <a
                      href={`https://wa.me/919043335758?text=Hello!%20I%20am%20interested%20in%20your%20${product.name}.%20Can%20you%20provide%20pricing%20and%20availability?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity w-fit"
                    >
                      Get Quote on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Specifications & Uses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-background border-t border-border">
                  {/* Specifications */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <Package size={24} className="text-primary" />
                      <span>Specifications</span>
                    </h3>
                    <ul className="space-y-3">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Uses */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <Truck size={24} className="text-primary" />
                      <span>Applications & Uses</span>
                    </h3>
                    <ul className="space-y-3">
                      {product.uses.map((use, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Quality Assurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Source Selection',
                description: 'We work with trusted farmers and producers who follow best agricultural practices and quality standards.'
              },
              {
                title: 'Quality Testing',
                description: 'Every batch undergoes rigorous testing for purity, moisture content, color, and other quality parameters.'
              },
              {
                title: 'Proper Storage & Packaging',
                description: 'Products are stored in controlled environments and packed with premium materials to ensure freshness.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-background p-8 rounded-lg">
                <CheckCircle size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Shipment Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Payment & Shipment Terms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment Options */}
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Payment Options</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">50% Advance Payment</p>
                    <p className="text-sm text-foreground/70">50% remaining on delivery</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Letter of Credit (LC)</p>
                    <p className="text-sm text-foreground/70">Accepted for international transactions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Full Payment</p>
                    <p className="text-sm text-foreground/70">Complete payment upfront</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Shipment Information */}
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Shipment Policy</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Truck size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Tuticorin Harbour</p>
                    <p className="text-sm text-foreground/70">One of India's major maritime ports</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Truck size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Chennai Harbour</p>
                    <p className="text-sm text-foreground/70">Connected to global shipping routes</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Package size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Professional Documentation</p>
                    <p className="text-sm text-foreground/70">Complete export documentation provided</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
