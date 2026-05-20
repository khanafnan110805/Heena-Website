import { Link } from 'react-router-dom'
import { SERVICES } from '../../../data/services.data'
import { ServiceCard } from '../../../components/molecules/ServiceCard'
import { SectionHeader } from '../../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { ROUTES } from '../../../config/routes'

export function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-bg-elevated">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What I Do"
            title="Mehndi Services"
            subtitle="Four distinct styles, each with its own character — crafted to match your occasion and personal aesthetic."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <ServiceCard service={service} compact />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            to={ROUTES.SERVICES}
            className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors"
          >
            View full service details →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
