import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../../data/products.data'
import { ProductCard } from '../../../components/molecules/ProductCard'
import { SectionHeader } from '../../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { ROUTES } from '../../../config/routes'

export function ProductsPreview() {
  return (
    <section id="products" className="section-padding bg-bg-elevated">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Shop"
            title="Henna Products"
            subtitle="Professional-grade henna and nail cones — the same quality used in every session."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.slice(0, 4).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            to={ROUTES.PRODUCTS}
            className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors"
          >
            View all products →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
