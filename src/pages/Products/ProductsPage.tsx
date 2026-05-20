import { PRODUCTS } from '../../data/products.data'
import { ProductCard } from '../../components/molecules/ProductCard'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { PageWrapper } from '../../components/layout/PageWrapper'

const CATEGORIES = [
  { key: 'henna-cones', label: 'Henna Cones' },
  { key: 'nail-cones', label: 'Nail Art Cones' },
  { key: 'kits', label: 'Starter Kits' },
  { key: 'accessories', label: 'Accessories' },
]

export function ProductsPage() {
  // Group products by category
  const grouped = PRODUCTS.reduce<Record<string, typeof PRODUCTS>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = []
    acc[p.category].push(p)
    return acc
  }, {})

  return (
    <PageWrapper>
      {/* Header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Shop"
              title="Henna Products"
              subtitle="Professional-quality henna and nail cones — natural, chemical-free, and crafted for beautiful results."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-8 bg-bg-base border-b border-border-dark">
        <div className="container-width">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              '100% Natural Ingredients',
              'Chemical & PPD Free',
              'Professional Grade',
              'WhatsApp Order & Delivery',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-gold-primary">·</span>
                <span className="font-body text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by category */}
      <section className="section-padding bg-bg-base">
        <div className="container-width space-y-16">
          {CATEGORIES.map(({ key, label }) => {
            const items = grouped[key]
            if (!items?.length) return null
            return (
              <div key={key}>
                <ScrollReveal>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-display text-2xl text-text-primary font-light">{label}</h2>
                    <div className="flex-1 h-px bg-border-dark" />
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {items.map((product, i) => (
                    <ScrollReveal key={product.id} delay={i * 80}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Ordering info */}
      <section className="py-12 bg-bg-elevated border-t border-b border-border-dark">
        <div className="container-width max-w-2xl mx-auto text-center space-y-5">
          <ScrollReveal>
            <h3 className="font-display text-2xl text-text-primary font-light">How to Order</h3>
            <p className="font-body text-text-secondary leading-relaxed">
              All products are ordered directly via WhatsApp. Send a message with the product name and
              quantity — I'll confirm availability, pricing, and arrange delivery or pickup.
            </p>
            <WhatsAppCTA
              message="Hi! I'd like to order some henna products. Can you share availability and delivery details?"
              label="Order via WhatsApp"
              size="md"
              pulse
            />
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
