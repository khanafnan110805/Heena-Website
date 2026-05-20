import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GALLERY_IMAGES } from '../../data/gallery.data'
import { GalleryGrid } from '../../components/organisms/GalleryGrid'
import { GalleryLightbox } from '../../components/organisms/GalleryLightbox'
import { GalleryFilterBar } from '../../components/molecules/GalleryFilter'
import { SectionHeader } from '../../components/atoms/SectionHeader'
import { ScrollReveal } from '../../components/atoms/ScrollReveal'
import { WhatsAppCTA } from '../../components/molecules/WhatsAppCTA'
import { useGalleryFilter } from '../../hooks/useGalleryFilter'
import { useLightbox } from '../../hooks/useLightbox'
import { SITE_CONFIG } from '../../config/site.config'
import type { GalleryFilter } from '../../types/gallery.types'
import { PageWrapper } from '../../components/layout/PageWrapper'

interface GalleryPageProps {
  category?: GalleryFilter
}

const categoryTitles: Record<string, string> = {
  all: 'All Designs',
  bridal: 'Bridal Mehndi',
  arabic: 'Arabic Mehndi',
  floral: 'Floral Mehndi',
  indian: 'Indian Mehndi',
}

const categorySubtitles: Record<string, string> = {
  all: 'The complete portfolio — browse every style and design.',
  bridal: 'Full bridal mehndi designs — intricate, elaborate, and deeply personal.',
  arabic: 'Bold, open-space Arabic designs — perfect for festive occasions.',
  floral: 'Delicate floral patterns — contemporary and quietly elegant.',
  indian: 'Rich traditional Indian mehndi — fine lines and dense storytelling patterns.',
}

export function GalleryPage({ category }: GalleryPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const { activeFilter, setActiveFilter, filteredImages } = useGalleryFilter(GALLERY_IMAGES)
  const { isOpen, selectedIndex, selectedImage, open, close, next, prev } =
    useLightbox(filteredImages)

  // Sync URL param → filter state
  useEffect(() => {
    const urlCategory = category || (searchParams.get('category') as GalleryFilter) || 'all'
    setActiveFilter(urlCategory)
  }, [category, searchParams, setActiveFilter])

  const handleFilterChange = (filter: GalleryFilter) => {
    setActiveFilter(filter)
    if (filter === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: filter })
    }
  }

  const activeTitle = categoryTitles[activeFilter] ?? 'Gallery'
  const activeSubtitle = categorySubtitles[activeFilter] ?? ''

  return (
    <PageWrapper>
      {/* Page header */}
      <section className="section-padding bg-bg-elevated border-b border-border-dark">
        <div className="container-width">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Portfolio"
              title={activeTitle}
              subtitle={activeSubtitle}
              className="mb-8"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GalleryFilterBar
              active={activeFilter}
              onChange={handleFilterChange}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding bg-bg-base">
        <div className="container-width">
          {filteredImages.length > 0 ? (
            <GalleryGrid
              images={filteredImages}
              onImageClick={open}
            />
          ) : (
            <div className="text-center py-24">
              <p className="font-body text-text-muted">No designs found in this category.</p>
            </div>
          )}

          {/* Bottom CTA */}
          <ScrollReveal className="mt-16 text-center space-y-4">
            <p className="font-body text-text-secondary">
              Inspired by a design? Book your session today.
            </p>
            <WhatsAppCTA
              message={SITE_CONFIG.whatsapp.defaultMessage}
              label="Book via WhatsApp"
              size="md"
              pulse
            />
          </ScrollReveal>
        </div>
      </section>

      <GalleryLightbox
        isOpen={isOpen}
        image={selectedImage}
        onClose={close}
        onNext={next}
        onPrev={prev}
        currentIndex={selectedIndex ?? 0}
        totalCount={filteredImages.length}
      />
    </PageWrapper>
  )
}
