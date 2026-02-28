'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import { CheckCircle, Package, Truck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

const products: Record<string, {
  name: string
  category: string
  image: string
  description: string
  specifications: string[]
  uses: string[]
  minOrder: string
  quality: string
}> = {
  onions: {
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
  vegetables: {
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
  rice: {
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
  spices: {
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
}

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products[slug]

  if (!product) notFound()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Home page</span>
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Product Image */}
              <div className="relative h-80 md:h-auto min-h-[400px]">
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
                <h1 className="text-3xl font-bold text-foreground mb-3">{product.name}</h1>
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

