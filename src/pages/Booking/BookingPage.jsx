import BookingForm from '../../components/sections/BookingForm.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '' }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function BookingPage() {
  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        <div className="max-w-5xl mx-auto">
          <RevealDiv className="mb-12">
            <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">Reserve Your Date</p>
            <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Book a Session</h1>
            <p className="font-body text-text-secondary max-w-xl leading-relaxed">
              Fill in your details below and Sara will follow up via WhatsApp or email within a few hours to confirm your booking.
            </p>
            <div className="w-12 h-px bg-gold-primary mt-5" />
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <RevealDiv>
                <BookingForm />
              </RevealDiv>
            </div>

            {/* Sidebar */}
            <RevealDiv className="space-y-6">
              {/* Quick book */}
              <div className="bg-bg-card border border-border-dark rounded-sm p-6">
                <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-3">Prefer WhatsApp?</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                  Skip the form entirely — just send a message and we'll take it from there.
                </p>
                <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Book Directly" size="md" fullWidth pulse />
              </div>

              {/* Contact details */}
              <div className="bg-bg-card border border-border-dark rounded-sm p-6 space-y-3">
                <p className="font-body text-xs text-gold-primary uppercase tracking-widest mb-3">Contact Details</p>
                <p className="font-body text-sm text-text-secondary">{SITE_CONFIG.contact.serviceHours}</p>
                <p className="font-body text-sm text-text-secondary">{SITE_CONFIG.contact.serviceArea}</p>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="block font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              {/* Note */}
              <div className="p-5 border border-gold-muted/30 rounded-sm bg-gold-muted/5">
                <p className="font-body text-xs text-gold-champagne leading-relaxed">
                  Bookings are confirmed only after an advance payment for bridal and group sessions. All pricing is confirmed via WhatsApp before payment.
                </p>
              </div>
            </RevealDiv>
          </div>
        </div>
      </div>
    </main>
  )
}
