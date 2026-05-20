import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/services.data'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { DecorativeRule } from '../../components/atoms/DecorativeRule'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { ROUTES } from '../../config/routes'

export function ServicesPage() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What I Offer"
              title="Mehndi Services"
              subtitle="Four distinct styles of mehndi artistry — each crafted with intention and tailored to your occasion."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-bg-base">
        <div className="container-width space-y-20">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 60}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-sm aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-hero-overlay opacity-30" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-xs text-bg-base bg-gold-primary px-2.5 py-1 tracking-widest uppercase rounded-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="font-display text-4xl text-text-primary font-light">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-body text-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-bg-card border border-border-dark rounded-sm p-4">
                      <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Duration</p>
                      <p className="font-body text-text-primary text-sm">{service.duration}</p>
                    </div>
                    <div className="bg-bg-card border border-border-dark rounded-sm p-4">
                      <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">Ideal For</p>
                      <p className="font-body text-text-primary text-sm">{service.idealFor.join(', ')}</p>
                    </div>
                  </div>

                  {/* Includes list */}
                  <ul className="space-y-2">
                    {service.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-2.5 font-body text-sm text-text-secondary">
                        <span className="text-gold-primary mt-0.5">·</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <WhatsAppCTA
                      message={service.whatsappMessage}
                      label={`Book ${service.title}`}
                      size="md"
                    />
                    <Link
                      to={`${ROUTES.GALLERY}?category=${service.category}`}
                      className="
                        inline-flex items-center justify-center
                        px-5 py-3 font-body text-sm text-text-secondary
                        border border-border-dark rounded-sm
                        hover:border-gold-muted hover:text-text-primary
                        transition-all duration-200
                      "
                    >
                      View {service.title} Gallery
                    </Link>
                  </div>
                </div>
              </div>

              {i < SERVICES.length - 1 && <DecorativeRule className="mt-20" />}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-bg-elevated border-t border-border-dark">
        <div className="container-width text-center space-y-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Ready to Book?"
              title="Let's Create Something Beautiful"
              subtitle="Reach out on WhatsApp — I'll confirm availability and we'll plan your perfect session."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <WhatsAppCTA
              label="Book via WhatsApp"
              size="lg"
              pulse
            />
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
