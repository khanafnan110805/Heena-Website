import ServiceCard from '../../components/ui/ServiceCard.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { SERVICES } from '../../data/servicesData.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</div>
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        <RevealDiv className="mb-16">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">What I Do</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Mehndi Services</h1>
          <p className="font-body text-text-secondary max-w-xl leading-relaxed">
            Four distinct styles of mehndi artistry — each with its own character, technique, and cultural heritage. Every session is a custom experience tailored to you.
          </p>
          <div className="w-12 h-px bg-gold-primary mt-5" />
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <RevealDiv key={service.id} delay={i * 100}>
              <ServiceCard service={service} compact={false} />
              <div className="mt-4">
                <WhatsAppCTA message={service.whatsappMessage} label={`Book ${service.title}`} size="md" />
              </div>
            </RevealDiv>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealDiv className="mt-20 text-center py-16 px-8 bg-bg-card border border-border-dark rounded-sm max-w-2xl mx-auto">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-3">Not sure which style?</p>
          <h2 className="font-display text-3xl text-text-primary font-light mb-4">Let's figure it out together</h2>
          <p className="font-body text-text-secondary mb-8 leading-relaxed">
            Send a message describing your occasion and I'll suggest the perfect style and package for you.
          </p>
          <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Ask via WhatsApp" size="lg" pulse />
        </RevealDiv>
      </div>
    </main>
  )
}
