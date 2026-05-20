import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-bg-base flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="font-display text-8xl text-gold-muted font-light">404</p>
        <h1 className="font-display text-3xl text-text-primary font-light">Page not found</h1>
        <p className="font-body text-text-tertiary leading-relaxed">
          The page you're looking for doesn't exist, or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            to={ROUTES.HOME}
            className="
              inline-flex items-center justify-center
              px-6 py-3 font-body text-base text-bg-base
              bg-gold-primary rounded-sm
              hover:bg-gold-amber transition-colors duration-200
            "
          >
            Back to Home
          </Link>
          <WhatsAppCTA
            label="Get in Touch"
            size="md"
            variant="outlined"
          />
        </div>
      </div>
    </main>
  )
}
