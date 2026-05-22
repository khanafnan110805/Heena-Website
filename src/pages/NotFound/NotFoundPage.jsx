import { Link } from 'react-router-dom'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="container-width text-center py-24">
        <p className="font-display text-[8rem] md:text-[12rem] text-gold-muted/20 leading-none font-light select-none" aria-hidden="true">404</p>
        <h1 className="font-display text-3xl md:text-4xl text-text-primary font-light -mt-8 mb-4">Page Not Found</h1>
        <p className="font-body text-text-secondary mb-10 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back to something beautiful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="inline-flex items-center justify-center px-8 py-3.5 font-body text-base text-gold-champagne border border-gold-muted rounded-sm hover:border-gold-primary hover:text-gold-primary transition-all duration-200 min-h-[52px]">
            Back to Home
          </Link>
          <WhatsAppCTA label="Contact Sara" size="lg" />
        </div>
      </div>
    </main>
  )
}
