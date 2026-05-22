import { Check } from 'lucide-react'
import PackageCard from '../../components/ui/PackageCard.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { PACKAGES, GROUP_PACKAGE } from '../../data/packagesData.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</div>
}

export default function PackagesPage() {
  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        <RevealDiv className="mb-16">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">Pricing</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Service Packages</h1>
          <p className="font-body text-text-secondary max-w-xl leading-relaxed">
            Clear, transparent pricing — every package is a starting point. Final price is confirmed before we begin, based on your design and requirements.
          </p>
          <div className="w-12 h-px bg-gold-primary mt-5" />
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((pkg, i) => (
            <RevealDiv key={pkg.id} delay={i * 100}>
              <PackageCard pkg={pkg} />
            </RevealDiv>
          ))}
        </div>

        {/* Group package */}
        <RevealDiv className="bg-bg-card border border-border-dark rounded-sm p-8 md:p-10 max-w-3xl mx-auto mb-16">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-2">Groups & Events</p>
          <h2 className="font-display text-3xl text-text-primary font-light mb-3">{GROUP_PACKAGE.name}</h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">{GROUP_PACKAGE.description}</p>
          <p className="font-body text-sm text-gold-champagne mb-4">{GROUP_PACKAGE.priceNote}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {GROUP_PACKAGE.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 font-body text-sm text-text-secondary">
                <Check size={14} className="text-gold-primary mt-0.5 shrink-0" />{item}
              </li>
            ))}
          </ul>
          <WhatsAppCTA message={GROUP_PACKAGE.whatsappMessage} label="Enquire About Group Booking" size="md" pulse />
        </RevealDiv>

        {/* Note */}
        <RevealDiv className="max-w-2xl mx-auto text-center">
          <p className="font-body text-text-muted text-sm leading-relaxed">
            All prices include the artist's time, henna cones, and aftercare guidance. Home service may include a travel charge depending on location. Final pricing is always confirmed via WhatsApp before booking is confirmed.
          </p>
          <div className="mt-8">
            <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Ask a Question on WhatsApp" size="md" variant="outlined" />
          </div>
        </RevealDiv>
      </div>
    </main>
  )
}
