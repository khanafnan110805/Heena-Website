import { Link } from 'react-router-dom'
import WhatsAppCTA from '../ui/WhatsAppCTA.jsx'
import { SITE_CONFIG } from '../../data/siteConfig.js'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=85'

export default function HeroSection() {
  return (
    <section className="relative flex items-end min-h-[100dvh] overflow-hidden" aria-label="Hero — Premium Mehndi Artist">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Beautiful bridal mehndi design" className="w-full h-full object-cover object-center" fetchPriority="high" loading="eager" decoding="sync" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/60 to-transparent" />
      </div>

      {/* Decorative paisley */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <ellipse cx="200" cy="200" rx="180" ry="120" stroke="#C9A84C" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="140" ry="85"  stroke="#C9A84C" strokeWidth="0.5" />
          <circle  cx="200" cy="200" r="40"            stroke="#C9A84C" strokeWidth="0.5" />
          <path d="M200 80 Q240 140 200 200 Q160 140 200 80Z" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-width pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="hero-descriptor font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-6">
            {SITE_CONFIG.contact.serviceArea}
          </p>
          <h1 className="hero-wordmark font-display font-light text-text-primary leading-none mb-4" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', letterSpacing: '0.12em' }}>
            {SITE_CONFIG.brand.name}
          </h1>
          <p className="hero-descriptor font-body text-text-secondary text-sm md:text-base tracking-wider mb-6">
            {SITE_CONFIG.brand.tagline}
          </p>
          <div className="hero-statement w-16 h-px bg-gold-primary mb-6" />
          <p className="hero-statement font-body text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Handcrafted mehndi artistry for your most meaningful moments — bridal ceremonies, festive celebrations, and everything in between.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA label="Book via WhatsApp" size="lg" pulse />
            <Link to="/gallery" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[52px] font-body text-lg text-gold-champagne border border-gold-muted rounded-sm hover:border-gold-primary hover:text-gold-primary transition-all duration-200">
              Explore Designs
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce" aria-hidden="true">
        <div className="w-px h-10 bg-gold-muted" />
      </div>
    </section>
  )
}
