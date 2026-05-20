import { Instagram, Mail, MapPin } from 'lucide-react'
import { WhatsAppCTA } from '../../../components/molecules/WhatsAppCTA'
import { DecorativeCorner } from '../../../components/atoms/DecorativeRule'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { SITE_CONFIG } from '../../../config/site.config'

export function ContactCTA() {
  return (
    <section id="contact" className="section-padding bg-bg-base">
      <div className="container-width">
        <div className="relative max-w-3xl mx-auto text-center py-16 px-8 bg-bg-card border border-border-dark rounded-sm overflow-hidden">
          <DecorativeCorner />

          {/* Background decorative element */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
              <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              <path d="M150 10 L160 140 L150 150 L140 140 Z" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gold-primary" />
              <path d="M290 150 L160 160 L150 150 L160 140 Z" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gold-primary" />
            </svg>
          </div>

          <ScrollReveal className="relative z-10 space-y-6">
            <p className="font-body text-xs text-gold-primary uppercase tracking-widest">
              Let's Connect
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light leading-tight">
              Let's plan your perfect mehndi
            </h2>
            <p className="font-body text-text-secondary max-w-md mx-auto leading-relaxed">
              Whether it's a bridal ceremony, an Eid celebration, or a quiet home appointment — send a message and let's make something beautiful.
            </p>

            <WhatsAppCTA
              message={SITE_CONFIG.whatsapp.defaultMessage}
              label="Send a Message on WhatsApp"
              size="xl"
              pulse
            />

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 border-t border-border-dark">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors"
              >
                <Instagram size={15} />
                {SITE_CONFIG.contact.instagram}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors"
              >
                <Mail size={15} />
                {SITE_CONFIG.contact.email}
              </a>
              <span className="flex items-center gap-2 font-body text-sm text-text-tertiary">
                <MapPin size={15} />
                {SITE_CONFIG.contact.serviceArea}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
