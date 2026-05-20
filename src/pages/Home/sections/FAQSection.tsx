import { Link } from 'react-router-dom'
import { SectionHeader } from '../../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { FAQAccordion } from '../../../components/organisms/FAQAccordion'
import { WhatsAppCTA } from '../../../components/molecules/WhatsAppCTA'
import { SITE_CONFIG } from '../../../config/site.config'

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-bg-elevated">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Questions"
            title="Common Questions"
            subtitle="Everything you need to know before booking."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <FAQAccordion limit={5} />
          </ScrollReveal>

          <ScrollReveal className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border-dark">
            <p className="font-body text-sm text-text-tertiary">
              Still have questions?
            </p>
            <div className="flex items-center gap-3">
              <WhatsAppCTA
                message={SITE_CONFIG.whatsapp.defaultMessage}
                label="Ask on WhatsApp"
                size="sm"
                variant="outlined"
              />
              <Link
                to="/#faq"
                className="font-body text-sm text-gold-primary hover:text-gold-champagne transition-colors"
              >
                All FAQs →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
