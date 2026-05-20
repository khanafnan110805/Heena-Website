import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '../../../types/gallery.types'
import { WhatsAppCTA } from '../../molecules/WhatsAppCTA'
import { Badge } from '../../atoms/Badge'
import { SITE_CONFIG } from '../../../config/site.config'

const categoryMessages: Record<string, string> = {
  bridal: SITE_CONFIG.whatsapp.bridalMessage,
  arabic: SITE_CONFIG.whatsapp.arabicMessage,
  floral: SITE_CONFIG.whatsapp.floralMessage,
  indian: SITE_CONFIG.whatsapp.indianMessage,
}

const categoryLabels: Record<string, string> = {
  bridal: 'Bridal Mehndi',
  arabic: 'Arabic Mehndi',
  floral: 'Floral Mehndi',
  indian: 'Indian Mehndi',
}

interface GalleryLightboxProps {
  isOpen: boolean
  image: GalleryImage | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  totalCount: number
}

export function GalleryLightbox({
  isOpen,
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}: GalleryLightboxProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [isOpen, onClose, onNext, onPrev]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!isOpen || !image) return null

  const whatsappMessage = categoryMessages[image.category] ??
    `Hi! I love your ${categoryLabels[image.category]} designs. I'd like to book an appointment.`

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${image.alt}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg-base/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox content */}
      <div className="lightbox-content relative z-10 flex flex-col w-full max-w-5xl max-h-[95dvh] mx-4">
        {/* Top bar */}
        <div className="flex items-center justify-between px-2 pb-3">
          <Badge variant="gold">{categoryLabels[image.category]}</Badge>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-text-muted">
              {currentIndex + 1} / {totalCount}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-text-tertiary hover:text-text-primary transition-colors
                         focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative flex items-center justify-center flex-1 min-h-0">
          {/* Prev button */}
          <button
            onClick={onPrev}
            className="absolute left-0 z-10 p-3 text-text-tertiary hover:text-gold-primary
                       bg-bg-base/60 backdrop-blur-sm rounded-sm
                       focus-visible:outline-2 focus-visible:outline-gold-primary
                       transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[70dvh] max-w-full object-contain rounded-sm"
            loading="eager"
          />

          {/* Next button */}
          <button
            onClick={onNext}
            className="absolute right-0 z-10 p-3 text-text-tertiary hover:text-gold-primary
                       bg-bg-base/60 backdrop-blur-sm rounded-sm
                       focus-visible:outline-2 focus-visible:outline-gold-primary
                       transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom bar — WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 px-2">
          <p className="font-body text-sm text-text-tertiary text-center sm:text-left">
            Love this design? Book this style for your occasion.
          </p>
          <WhatsAppCTA
            message={whatsappMessage}
            label="Book This Style"
            size="sm"
            pulse
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
