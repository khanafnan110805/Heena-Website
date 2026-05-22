import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '../../data/siteConfig.js'
import WhatsAppCTA from '../ui/WhatsAppCTA.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40)
    const setIsScrolled = (v) => setScrolled(v)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-base/95 backdrop-blur-sm border-b border-border-dark py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-width flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            to="/"
            className="font-display text-2xl text-text-primary tracking-widest-lg hover:text-gold-champagne transition-colors duration-200"
            aria-label="HENNA — Home"
          >
            {SITE_CONFIG.brand.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-body text-sm tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-gold-primary' : 'text-text-tertiary hover:text-text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <WhatsAppCTA label="Book Now" size="sm" />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-gold-primary"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-bg-base flex flex-col transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gold-muted to-transparent" />
        <div className="flex-1 flex flex-col justify-center container-width py-16">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-display text-4xl font-light py-3 border-b border-border-dark transition-colors duration-200 ${
                    isActive ? 'text-gold-champagne' : 'text-text-secondary hover:text-text-primary'
                  }`
                }
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-12">
            <WhatsAppCTA label="Book via WhatsApp" size="lg" fullWidth pulse />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-text-muted hover:text-gold-primary transition-colors"
            >
              Instagram
            </a>
            <span className="text-border-mid">·</span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="font-body text-sm text-text-muted hover:text-gold-primary transition-colors"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
