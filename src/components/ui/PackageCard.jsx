import { Check } from 'lucide-react'
import WhatsAppCTA from './WhatsAppCTA.jsx'

export default function PackageCard({ pkg }) {
  const isFeatured = !!pkg.featured
  return (
    <div className={`relative flex flex-col bg-bg-card border rounded-sm overflow-hidden transition-all duration-300 ${isFeatured ? 'border-gold-primary shadow-[0_0_40px_rgba(201,168,76,0.12)]' : 'border-border-dark hover:border-gold-muted'}`}>
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="font-body text-xs text-bg-base bg-gold-primary px-2.5 py-1 tracking-widest uppercase">Most Popular</span>
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-hero-overlay opacity-70" />
        <div className="absolute bottom-4 left-5">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-1">{pkg.tier}</p>
          <h3 className="font-display text-2xl text-text-primary font-light">{pkg.name}</h3>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 gap-5">
        <p className="font-body text-text-tertiary text-sm italic">{pkg.tagline}</p>
        <div>
          <p className="font-display text-3xl text-gold-champagne font-light">{pkg.price}</p>
          <p className="font-body text-xs text-text-muted mt-1">{pkg.priceNote}</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="font-body text-xs text-text-tertiary">Duration:</span>
            <span className="font-body text-xs text-text-secondary">{pkg.duration}</span>
          </div>
        </div>
        <div className="h-px bg-border-dark" />
        <ul className="space-y-2 flex-1">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 font-body text-sm text-text-secondary">
              <Check size={14} className="text-gold-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <WhatsAppCTA
          message={pkg.whatsappMessage}
          label={`Book ${pkg.name}`}
          fullWidth
          size="md"
          variant={isFeatured ? 'filled' : 'outlined'}
        />
      </div>
    </div>
  )
}
