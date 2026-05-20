import type { Product } from '../../../types/products.types'
import { Badge } from '../../atoms/Badge'
import { WhatsAppCTA } from '../WhatsAppCTA'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-bg-card border border-border-dark rounded-sm overflow-hidden
                    hover:border-gold-muted transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-bg-elevated">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-body text-text-primary font-medium text-base leading-snug">
            {product.name}
          </h3>
          <p className="font-body text-text-tertiary text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <ul className="space-y-1">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="font-body text-xs text-text-muted flex items-center gap-1.5">
              <span className="text-gold-muted">·</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-2 border-t border-border-dark">
          <span className="font-display text-lg text-gold-champagne font-light">{product.price}</span>
          <WhatsAppCTA
            message={product.whatsappMessage}
            label="Order"
            size="sm"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  )
}
