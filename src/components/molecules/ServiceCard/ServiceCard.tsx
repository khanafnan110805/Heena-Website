import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../../types/services.types'
import { ROUTES } from '../../../config/routes'

interface ServiceCardProps {
  service: Service
  compact?: boolean
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const galleryRoute = ROUTES[`GALLERY_${service.category.toUpperCase()}` as keyof typeof ROUTES]

  if (compact) {
    return (
      <Link
        to={galleryRoute}
        className="group block bg-bg-card border border-border-dark rounded-sm overflow-hidden
                   hover:border-gold-muted transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-hero-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-gold-champagne font-light mb-1">
            {service.title}
          </h3>
          <p className="font-body text-sm text-text-tertiary line-clamp-2">
            {service.subtitle}
          </p>
          <div className="flex items-center gap-1 mt-3 text-gold-primary text-sm font-body">
            <span>View designs</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="bg-bg-card border border-border-dark rounded-sm overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute bottom-4 left-5">
          <h3 className="font-display text-2xl text-text-primary font-light">{service.title}</h3>
          <p className="font-body text-sm text-gold-champagne mt-1">{service.subtitle}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="font-body text-text-secondary leading-relaxed">{service.description}</p>
        <div className="pt-2">
          <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-2">Duration</p>
          <p className="font-body text-text-primary">{service.duration}</p>
        </div>
        <ul className="space-y-1.5">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-sm text-text-secondary">
              <span className="text-gold-primary mt-0.5">·</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
