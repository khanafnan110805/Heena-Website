import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin } from 'lucide-react'
import HeroSection from '../../components/sections/HeroSection.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import ServiceCard from '../../components/ui/ServiceCard.jsx'
import PackageCard from '../../components/ui/PackageCard.jsx'
import ProductCard from '../../components/ui/ProductCard.jsx'
import CampaignBanner from '../../components/ui/CampaignBanner.jsx'
import TestimonialCarousel from '../../components/ui/TestimonialCarousel.jsx'
import FAQAccordion from '../../components/ui/FAQAccordion.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import GalleryGrid from '../../components/gallery/GalleryGrid.jsx'
import GalleryLightbox from '../../components/gallery/GalleryLightbox.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useLightbox } from '../../hooks/useLightbox.js'
import { SERVICES } from '../../data/servicesData.js'
import { PACKAGES } from '../../data/packagesData.js'
import { PRODUCTS, ACTIVE_CAMPAIGNS } from '../../data/contentData.js'
import { FEATURED_GALLERY, GALLERY_IMAGES } from '../../data/galleryData.js'
import { SITE_CONFIG } from '../../data/siteConfig.js'

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export default function HomePage() {
  const { isOpen, activeIndex, open, close, prev, next } = useLightbox(GALLERY_IMAGES)

  return (
    <main>
      <HeroSection />

      {/* Services */}
      <section id="services" className="section-padding bg-bg-elevated">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="What I Do" title="Mehndi Services" subtitle="Four distinct styles, each with its own character — crafted to match your occasion and personal aesthetic." /></RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <RevealDiv key={service.id} delay={i * 100}><ServiceCard service={service} compact /></RevealDiv>
            ))}
          </div>
          <RevealDiv className="text-center mt-10">
            <Link to="/services" className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors">View full service details →</Link>
          </RevealDiv>
        </div>
      </section>

      {/* Gallery preview */}
      <section id="gallery-preview" className="section-padding bg-bg-base">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="Portfolio" title="Featured Designs" subtitle="A curated selection of recent work — each design crafted for a unique occasion." /></RevealDiv>
          <GalleryGrid images={FEATURED_GALLERY} onImageClick={open} />
          <RevealDiv className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 font-body text-sm text-gold-primary hover:text-gold-champagne border border-gold-muted hover:border-gold-primary px-6 py-3 rounded-sm tracking-wide transition-all duration-200">
              View Full Gallery
            </Link>
          </RevealDiv>
        </div>
      </section>

      {/* Campaigns */}
      {ACTIVE_CAMPAIGNS.length > 0 && (
        <section id="campaigns" className="section-padding bg-bg-elevated">
          <div className="container-width space-y-5">
            {ACTIVE_CAMPAIGNS.map((campaign, i) => (
              <RevealDiv key={campaign.id} delay={i * 100}><CampaignBanner campaign={campaign} /></RevealDiv>
            ))}
          </div>
        </section>
      )}

      {/* Packages */}
      <section id="packages" className="section-padding bg-bg-base">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="Pricing" title="Service Packages" subtitle="Clear, transparent pricing — every package is a starting point, not a ceiling." /></RevealDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <RevealDiv key={pkg.id} delay={i * 100}><PackageCard pkg={pkg} /></RevealDiv>
            ))}
          </div>
          <RevealDiv className="text-center mt-10">
            <Link to="/packages" className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors">View full packages & pricing →</Link>
          </RevealDiv>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section-padding bg-bg-elevated">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="Shop" title="Henna Products" subtitle="Professional-grade henna and nail cones — the same quality used in every session." /></RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <RevealDiv key={product.id} delay={i * 80}><ProductCard product={product} /></RevealDiv>
            ))}
          </div>
          <RevealDiv className="text-center mt-10">
            <Link to="/products" className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors">View all products →</Link>
          </RevealDiv>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-bg-base">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="Client Stories" title="What Clients Say" subtitle="Real experiences from brides, families, and festive clients." /></RevealDiv>
          <TestimonialCarousel />
          <RevealDiv className="text-center mt-12">
            <p className="font-body text-text-tertiary text-sm mb-4">Inspired? Let's plan your perfect mehndi.</p>
            <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Book Your Session" size="md" pulse />
          </RevealDiv>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-bg-elevated">
        <div className="container-width">
          <RevealDiv><SectionHeader eyebrow="Questions" title="Common Questions" subtitle="Everything you need to know before booking." /></RevealDiv>
          <div className="max-w-2xl mx-auto">
            <RevealDiv><FAQAccordion limit={5} /></RevealDiv>
            <RevealDiv className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border-dark">
              <p className="font-body text-sm text-text-tertiary">Still have questions?</p>
              <div className="flex items-center gap-3">
                <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Ask on WhatsApp" size="sm" variant="outlined" />
                <Link to="/contact" className="font-body text-sm text-gold-primary hover:text-gold-champagne transition-colors">All FAQs →</Link>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-cta" className="section-padding bg-bg-base">
        <div className="container-width">
          <div className="relative max-w-3xl mx-auto text-center py-16 px-8 bg-bg-card border border-border-dark rounded-sm overflow-hidden">
            {/* BG decorative */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center" aria-hidden="true">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                <circle cx="150" cy="150" r="140" stroke="#C9A84C" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="100" stroke="#C9A84C" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="60"  stroke="#C9A84C" strokeWidth="0.5" />
              </svg>
            </div>
            <RevealDiv className="relative z-10 space-y-6">
              <p className="font-body text-xs text-gold-primary uppercase tracking-widest">Let's Connect</p>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light leading-tight">Let's plan your perfect mehndi</h2>
              <p className="font-body text-text-secondary max-w-md mx-auto leading-relaxed">
                Whether it's a bridal ceremony, an Eid celebration, or a quiet home appointment — send a message and let's make something beautiful.
              </p>
              <WhatsAppCTA message={SITE_CONFIG.whatsapp.defaultMessage} label="Send a Message on WhatsApp" size="xl" pulse />
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 border-t border-border-dark">
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors">
                  <Instagram size={15} /> {SITE_CONFIG.contact.instagram}
                </a>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-2 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors">
                  <Mail size={15} /> {SITE_CONFIG.contact.email}
                </a>
                <span className="flex items-center gap-2 font-body text-sm text-text-tertiary">
                  <MapPin size={15} /> {SITE_CONFIG.contact.serviceArea}
                </span>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {isOpen && (
        <GalleryLightbox
          images={GALLERY_IMAGES}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </main>
  )
}
