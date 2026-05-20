import { Clock, Home, Star, MessageCircle } from 'lucide-react'
import { BookingForm } from '../../components/organisms/BookingForm'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { SITE_CONFIG } from '../../config/site.config'

const BOOKING_BENEFITS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp First',
    desc: "Most bookings are confirmed over WhatsApp — it's the fastest way to check availability.",
  },
  {
    icon: Home,
    title: 'Home Service Available',
    desc: 'I come to you — fully equipped, on time, and ready to create.',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    desc: 'Morning, afternoon, and evening slots available. Early morning bridal slots on request.',
  },
  {
    icon: Star,
    title: 'Custom Designs',
    desc: 'Every design is created specifically for you — bring references, share your vision.',
  },
]

export function BookingPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Reservations"
              title="Book a Session"
              subtitle="Fill in the form below or send a direct WhatsApp message — I'll confirm availability and details."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-bg-base">
        <div className="container-width grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-bg-card border border-border-dark rounded-sm p-6 md:p-8">
                <h2 className="font-display text-2xl text-text-primary font-light mb-6">
                  Booking Request Form
                </h2>
                <BookingForm />
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp quick booking */}
            <ScrollReveal>
              <div className="bg-bg-card border border-border-dark rounded-sm p-6 space-y-4">
                <p className="font-body text-xs text-gold-primary uppercase tracking-widest">
                  Prefer to Chat?
                </p>
                <h3 className="font-display text-xl text-text-primary font-light">
                  Book directly on WhatsApp
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  Skip the form — send a WhatsApp message and I'll get back to you within a few hours.
                </p>
                <WhatsAppCTA
                  message={SITE_CONFIG.whatsapp.defaultMessage}
                  label="Open WhatsApp"
                  size="md"
                  fullWidth
                  pulse
                />
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={100}>
              <div className="space-y-3">
                {BOOKING_BENEFITS.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 bg-bg-card border border-border-dark rounded-sm p-4"
                  >
                    <div className="w-8 h-8 rounded-sm bg-gold-muted/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-text-primary font-medium">{title}</p>
                      <p className="font-body text-xs text-text-tertiary mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Service hours */}
            <ScrollReveal delay={150}>
              <div className="bg-bg-card border border-border-dark rounded-sm p-5">
                <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-2">
                  Availability
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {SITE_CONFIG.contact.serviceHours}
                </p>
                <p className="font-body text-xs text-text-muted mt-2">
                  Early morning slots available for bridal bookings — enquire via WhatsApp.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
