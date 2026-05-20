import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '../../../config/site.config'
import { NAV_LINKS, ROUTES } from '../../../config/routes'
import { WhatsAppCTA } from '../../molecules/WhatsAppCTA'
import { DecorativeRule } from '../../atoms/DecorativeRule'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-elevated border-t border-border-dark">
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              to={ROUTES.HOME}
              className="font-display text-3xl text-text-primary tracking-widest-lg hover:text-gold-champagne transition-colors"
            >
              {SITE_CONFIG.brand.name}
            </Link>
            <p className="font-body text-text-tertiary text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.brand.tagline}
            </p>
            <p className="font-body text-text-muted text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.brand.artistBio}
            </p>
            <WhatsAppCTA
              label="Book a Session"
              size="sm"
            />
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-body text-xs text-gold-primary uppercase tracking-widest">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm text-text-tertiary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={ROUTES.BOOKING}
                className="font-body text-sm text-text-tertiary hover:text-text-primary transition-colors duration-200"
              >
                Booking
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-body text-xs text-gold-primary uppercase tracking-widest">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors"
              >
                <Instagram size={15} />
                {SITE_CONFIG.contact.instagram}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 font-body text-sm text-text-tertiary hover:text-gold-primary transition-colors"
              >
                <Mail size={15} />
                {SITE_CONFIG.contact.email}
              </a>
              <div className="flex items-start gap-2.5 font-body text-sm text-text-tertiary">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                {SITE_CONFIG.contact.serviceArea}
              </div>
              <div className="flex items-start gap-2.5 font-body text-sm text-text-tertiary">
                <Clock size={15} className="mt-0.5 shrink-0" />
                {SITE_CONFIG.contact.serviceHours}
              </div>
            </div>
          </div>
        </div>

        <DecorativeRule className="my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            © {currentYear} {SITE_CONFIG.brand.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-text-muted">
            Premium Mehndi Art · {SITE_CONFIG.contact.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  )
}
