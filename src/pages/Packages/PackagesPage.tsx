import { Check, Users } from 'lucide-react'
import { PACKAGES, GROUP_PACKAGE } from '../../data/packages.data'
import { PackageCard } from '../../components/molecules/PackageCard'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { DecorativeCorner } from '../../components/atoms/DecorativeRule'
import { PageWrapper } from '../../components/layout/PageWrapper'

export function PackagesPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Pricing"
              title="Service Packages"
              subtitle="Transparent, tiered pricing for every occasion — from casual sessions to full signature bridal."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Packages grid */}
      <section className="section-padding bg-bg-base">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 100}>
                <PackageCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>

          {/* Group Package */}
          <ScrollReveal>
            <div className="relative bg-bg-card border border-gold-muted rounded-sm overflow-hidden p-8 md:p-10">
              <DecorativeCorner />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-gold-muted/20 flex items-center justify-center">
                      <Users size={20} className="text-gold-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-gold-primary uppercase tracking-widest">Group & Events</p>
                      <h3 className="font-display text-2xl text-text-primary font-light">{GROUP_PACKAGE.name}</h3>
                    </div>
                  </div>
                  <p className="font-body text-text-secondary leading-relaxed">{GROUP_PACKAGE.description}</p>
                  <p className="font-body text-sm text-gold-champagne">{GROUP_PACKAGE.priceNote}</p>
                  <WhatsAppCTA
                    message={GROUP_PACKAGE.whatsappMessage}
                    label="Enquire About Group Booking"
                    size="md"
                    pulse
                  />
                </div>
                <ul className="space-y-2.5">
                  {GROUP_PACKAGE.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-body text-sm text-text-secondary">
                      <Check size={14} className="text-gold-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing clarification */}
      <section className="py-12 bg-bg-elevated border-t border-border-dark">
        <div className="container-width max-w-3xl mx-auto">
          <ScrollReveal>
            <h3 className="font-display text-2xl text-text-primary font-light mb-6 text-center">
              How Pricing Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  step: '01',
                  title: 'Reach Out',
                  desc: 'Send a WhatsApp message with your occasion type, preferred style, and date.',
                },
                {
                  step: '02',
                  title: 'Get a Quote',
                  desc: 'I\'ll confirm the final price based on design complexity, coverage, and home service.',
                },
                {
                  step: '03',
                  title: 'Confirm Booking',
                  desc: 'A small advance secures your date. Balance is settled after the session.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-bg-card border border-border-dark rounded-sm p-5 space-y-2">
                  <span className="font-display text-3xl text-gold-muted font-light">{item.step}</span>
                  <h4 className="font-body text-text-primary font-medium">{item.title}</h4>
                  <p className="font-body text-sm text-text-tertiary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-bg-base">
        <div className="container-width text-center space-y-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Let's Plan"
              title="Which package is right for you?"
              subtitle="Not sure? Just send a message — I'll help you find the best fit for your occasion and budget."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <WhatsAppCTA
              message="Hi! I'd like help choosing the right mehndi package for my occasion. Can we discuss options?"
              label="Get a Personalised Recommendation"
              size="lg"
              pulse
            />
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
