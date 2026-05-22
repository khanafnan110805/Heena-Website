import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../../data/contentData.js'
import TestimonialCard from './TestimonialCard.jsx'

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div className="space-y-8">
      {/* Desktop grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
      </div>

      {/* Mobile carousel */}
      <div className="lg:hidden">
        <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} aria-live="polite">
          <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="w-full shrink-0 px-1">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} className="p-2 text-text-tertiary hover:text-gold-primary transition-colors" aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${i === current ? 'w-5 h-1.5 bg-gold-primary' : 'w-1.5 h-1.5 bg-border-mid hover:bg-gold-muted'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 text-text-tertiary hover:text-gold-primary transition-colors" aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
