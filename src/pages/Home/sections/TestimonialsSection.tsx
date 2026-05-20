import { SectionHeader } from '../../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { TestimonialCarousel } from '../../../components/organisms/TestimonialCarousel'
import { WhatsAppCTA } from '../../../components/molecules/WhatsAppCTA'
import { SITE_CONFIG } from '../../../config/site.config'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-bg-base">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Client Stories"
            title="What Clients Say"
            subtitle="Real experiences from brides, families, and festive clients."
            className="mb-12"
          />
        </ScrollReveal>

        <TestimonialCarousel />

        <ScrollReveal className="text-center mt-12">
          <p className="font-body text-text-tertiary text-sm mb-4">
            Inspired? Let's plan your perfect mehndi.
          </p>
          <WhatsAppCTA
            message={SITE_CONFIG.whatsapp.defaultMessage}
            label="Book Your Session"
            size="md"
            pulse
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
