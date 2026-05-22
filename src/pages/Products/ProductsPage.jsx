import ProductCard from '../../components/ui/ProductCard.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { PRODUCTS } from '../../data/contentData.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</div>
}

export default function ProductsPage() {
  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        <RevealDiv className="mb-16">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">Shop</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Henna Products</h1>
          <p className="font-body text-text-secondary max-w-xl leading-relaxed">
            Professional-grade henna cones and nail art tools — the same quality Sara uses in every session. Natural, chemical-free, and beautifully pigmented.
          </p>
          <div className="w-12 h-px bg-gold-primary mt-5" />
        </RevealDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PRODUCTS.map((product, i) => (
            <RevealDiv key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </RevealDiv>
          ))}
        </div>

        {/* Order note */}
        <RevealDiv className="max-w-2xl mx-auto text-center py-12 px-8 bg-bg-card border border-border-dark rounded-sm">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-3">How to Order</p>
          <h2 className="font-display text-2xl text-text-primary font-light mb-3">Order via WhatsApp</h2>
          <p className="font-body text-text-secondary mb-6 leading-relaxed">
            All products are ordered directly through WhatsApp. Message Sara with the product you'd like, your delivery address, and she'll confirm availability and arrange payment.
          </p>
          <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Message to Order" size="md" pulse />
        </RevealDiv>
      </div>
    </main>
  )
}
