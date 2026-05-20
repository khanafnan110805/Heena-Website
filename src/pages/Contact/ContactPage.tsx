import { Instagram, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { FAQAccordion } from '../../components/organisms/FAQAccordion'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { SITE_CONFIG } from '../../config/site.config'

export function ContactPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Contact"
              subtitle="Questions about booking, pricing, or availability? I'd love to hear from you."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact info + WhatsApp */}
      <section className="section-padding bg-bg-base">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact details */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-text-primary font-light mb-6">
                  Let's connect
                </h2>
                <p className="font-body text-text-secondary leading-relaxed">
                  The best way to reach me is via WhatsApp — I respond to all messages within a few hours.
                  For non-urgent enquiries, email works great too.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border-dark rounded-sm
                             hover:border-gold-muted transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-whatsapp" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">WhatsApp</p>
                    <p className="font-body text-text-primary group-hover:text-gold-primary transition-colors">
                      {SITE_CONFIG.contact.whatsapp}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border-dark rounded-sm
                             hover:border-gold-muted transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                    <Instagram size={20} className="text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">Instagram</p>
                    <p className="font-body text-text-primary group-hover:text-gold-primary transition-colors">
                      {SITE_CONFIG.contact.instagram}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border-dark rounded-sm
                             hover:border-gold-muted transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">Email</p>
                    <p className="font-body text-text-primary group-hover:text-gold-primary transition-colors">
                      {SITE_CONFIG.contact.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-bg-card border border-border-dark rounded-sm">
                  <div className="w-10 h-10 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">Service Area</p>
                    <p className="font-body text-text-primary">{SITE_CONFIG.contact.serviceArea}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-4 bg-bg-card border border-border-dark rounded-sm">
                  <div className="w-10 h-10 rounded-sm bg-gold-muted/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">Hours</p>
                    <p className="font-body text-text-primary">{SITE_CONFIG.contact.serviceHours}</p>
                  </div>
                </div>
              </div>

              <WhatsAppCTA
                message={SITE_CONFIG.whatsapp.defaultMessage}
                label="Send a WhatsApp Message"
                size="lg"
                fullWidth
                pulse
              />
            </div>
          </ScrollReveal>

          {/* Right: artist note + image */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85"
                  alt="Henna artist at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-hero-overlay opacity-40" />
              </div>

              <div className="bg-bg-card border border-border-dark rounded-sm p-6 space-y-3">
                <p className="font-body text-xs text-gold-primary uppercase tracking-widest">
                  A note from the artist
                </p>
                <p className="font-display text-xl text-text-primary font-light leading-relaxed italic">
                  "Every mehndi session is a collaboration. I'm here to listen, create, and make your vision real."
                </p>
                <p className="font-body text-sm text-text-tertiary">— {SITE_CONFIG.brand.artistName}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section-padding bg-bg-elevated border-t border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Questions"
              title="Frequently Asked Questions"
              subtitle="Answers to everything you might want to know before getting in touch."
              className="mb-12"
            />
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <FAQAccordion />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
