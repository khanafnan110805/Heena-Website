import { useState, useEffect } from 'react'
import GalleryGrid from '../../components/gallery/GalleryGrid.jsx'
import GalleryLightbox from '../../components/gallery/GalleryLightbox.jsx'
import GalleryFilterBar from '../../components/gallery/GalleryFilterBar.jsx'
import { GALLERY_IMAGES } from '../../data/galleryData.js'
import { useLightbox } from '../../hooks/useLightbox.js'

export default function GalleryPage({ category }) {
  const [activeFilter, setActiveFilter] = useState(category || 'all')
  const { isOpen, activeIndex, open, close, prev, next } = useLightbox(GALLERY_IMAGES)

  useEffect(() => {
    if (category) setActiveFilter(category)
  }, [category])

  const filtered = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter)

  return (
    <main className="pt-24">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="mb-12">
          <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">Portfolio</p>
          <h1 className="font-display font-light text-4xl md:text-5xl text-text-primary leading-tight mb-4">Gallery</h1>
          <div className="w-12 h-px bg-gold-primary" />
        </div>

        <GalleryFilterBar active={activeFilter} onChange={setActiveFilter} />

        {filtered.length > 0 ? (
          <GalleryGrid images={filtered} onImageClick={open} />
        ) : (
          <div className="text-center py-24">
            <p className="font-body text-text-muted">No images found for this category.</p>
          </div>
        )}
      </div>

      {isOpen && (
        <GalleryLightbox
          images={filtered}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </main>
  )
}
