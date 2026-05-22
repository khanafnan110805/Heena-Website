import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export default function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  const image = images[activeIndex]
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-bg-base/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Content */}
      <div
        className="lightbox-content relative max-w-5xl w-full mx-4 flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full max-h-[80vh] flex items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] max-w-full object-contain rounded-sm"
          />
        </div>
        {/* Caption */}
        <p className="font-body text-xs text-text-muted mt-4 text-center max-w-lg leading-relaxed">
          {image.alt}
        </p>
        {/* Counter */}
        <p className="font-body text-xs text-text-muted mt-2 uppercase tracking-widest">
          {activeIndex + 1} / {images.length}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary border border-border-dark rounded-sm transition-colors"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-text-secondary hover:text-gold-primary border border-border-dark rounded-sm transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-text-secondary hover:text-gold-primary border border-border-dark rounded-sm transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
