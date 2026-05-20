import { Link } from 'react-router-dom'
import { PACKAGES } from '../../../data/packages.data'
import { PackageCard } from '../../../components/molecules/PackageCard'
import { SectionHeader } from '../../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../../components/atoms/ScrollReveal'
import { ROUTES } from '../../../config/routes'

export function PackagesOverview() {
  return (
    <section id="packages" className="section-padding bg-bg-base">
      <div className="container-width">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Service Packages"
            subtitle="Clear, transparent pricing — every package is a starting point, not a ceiling."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 100}>
              <PackageCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            to={ROUTES.PACKAGES}
            className="font-body text-sm text-gold-primary hover:text-gold-champagne tracking-wide transition-colors"
          >
            View full packages & pricing →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
