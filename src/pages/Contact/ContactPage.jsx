import { Instagram, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import FAQAccordion from '../../components/ui/FAQAccordion.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</div>
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        <RevealDiv className="mb-16">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">Get in Touch</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Contact</h1>
          <p className="font-body text-text-secondary max-w-xl leading-relaxed">
            The fastest way to reach Sara is via WhatsApp. For enquiries, bookings, and custom design discussions — a message is all it takes.
          </p>
          <div className="w-12 h-px bg-gold-primary mt-5" />
        </RevealDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact cards */}
          <RevealDiv className="space-y-5">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.defaultMessage)}`}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-start gap-5 bg-bg-card border border-border-dark hover:border-whatsapp/50 rounded-sm p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-whatsapp/10 flex items-center justify-center shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                <MessageCircle size={22} className="text-whatsapp" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="font-body text-text-primary font-medium">{SITE_CONFIG.contact.whatsapp}</p>
                <p className="font-body text-sm text-text-muted mt-0.5">Tap to open a chat</p>
              </div>
            </a>

            <a
              href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
              className="group flex items-start gap-5 bg-bg-card border border-border-dark hover:border-gold-muted rounded-sm p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                <Instagram size={22} className="text-gold-primary" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Instagram</p>
                <p className="font-body text-text-primary font-medium">{SITE_CONFIG.contact.instagram}</p>
                <p className="font-body text-sm text-text-muted mt-0.5">View portfolio and stories</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="group flex items-start gap-5 bg-bg-card border border-border-dark hover:border-gold-muted rounded-sm p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-gold-primary" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Email</p>
                <p className="font-body text-text-primary font-medium">{SITE_CONFIG.contact.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-5 bg-bg-card border border-border-dark rounded-sm p-6">
              <div className="w-12 h-12 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-gold-primary" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Service Area</p>
                <p className="font-body text-text-primary font-medium">{SITE_CONFIG.contact.serviceArea}</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-bg-card border border-border-dark rounded-sm p-6">
              <div className="w-12 h-12 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                <Clock size={22} className="text-gold-primary" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Hours</p>
                <p className="font-body text-text-primary font-medium">{SITE_CONFIG.contact.serviceHours}</p>
              </div>
            </div>
          </RevealDiv>

          {/* CTA panel */}
          <RevealDiv delay={100} className="flex flex-col justify-center">
            <div className="bg-bg-card border border-border-dark rounded-sm p-8 md:p-10 text-center">
              <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-4">Ready to Book?</p>
              <h2 className="font-display text-3xl text-text-primary font-light mb-4">Let's create something beautiful</h2>
              <p className="font-body text-text-secondary mb-8 leading-relaxed">
                Share your occasion, date, and design ideas — Sara will come back with availability and a quote.
              </p>
              <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Start the Conversation" size="lg" fullWidth pulse />
            </div>
          </RevealDiv>
        </div>

        {/* FAQ section */}
        <RevealDiv>
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-3">Questions</p>
          <h2 className="font-display font-light text-3xl text-text-primary mb-2">Frequently Asked</h2>
          <div className="w-12 h-px bg-gold-primary mb-10" />
        </RevealDiv>
        <div className="max-w-2xl">
          <RevealDiv><FAQAccordion /></RevealDiv>
        </div>
      </div>
    </main>
  )
}
