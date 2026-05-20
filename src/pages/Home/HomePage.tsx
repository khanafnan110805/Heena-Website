import { HeroSectionWrapper } from './sections/HeroSectionWrapper'
import { ServicesOverview } from './sections/ServicesOverview'
import { GalleryPreview } from './sections/GalleryPreview'
import { CampaignSection } from './sections/CampaignSection'
import { PackagesOverview } from './sections/PackagesOverview'
import { ProductsPreview } from './sections/ProductsPreview'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { FAQSection } from './sections/FAQSection'
import { ContactCTA } from './sections/ContactCTA'

export function HomePage() {
  return (
    <>
      <HeroSectionWrapper />
      <ServicesOverview />
      <GalleryPreview />
      <CampaignSection />
      <PackagesOverview />
      <ProductsPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
