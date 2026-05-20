import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../../../data/testimonials.data'
import { TestimonialCard } from '../../molecules/TestimonialCard'

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const total = TESTIMONIALS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  // Show 1 on mobile, 2 on tablet, 3 on desktop via grid
  return (
    <div className="space-y-8">
      {/* Desktop: show all in grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

      {/* Mobile/Tablet: carousel */}
      <div className="lg:hidden">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-full shrink-0 px-1">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 text-text-tertiary hover:text-gold-primary transition-colors
                       focus-visible:outline-2 focus-visible:outline-gold-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-primary ${
                  i === current ? 'w-5 h-1.5 bg-gold-primary' : 'w-1.5 h-1.5 bg-border-mid hover:bg-gold-muted'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 text-text-tertiary hover:text-gold-primary transition-colors
                       focus-visible:outline-2 focus-visible:outline-gold-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
