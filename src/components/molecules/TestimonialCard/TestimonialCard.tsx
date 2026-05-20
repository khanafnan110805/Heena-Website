import type { Testimonial } from '../../../data/testimonials.data'
import { StarRating } from '../../atoms/StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative bg-bg-card border border-border-dark rounded-sm p-6 md:p-7 flex flex-col gap-4">
      {/* Decorative quote */}
      <span
        className="absolute top-4 right-6 font-display text-7xl text-gold-muted/30 leading-none select-none"
        aria-hidden="true"
      >
        "
      </span>

      <StarRating rating={testimonial.rating} />

      <blockquote className="font-body text-text-secondary leading-relaxed text-[15px] flex-1">
        "{testimonial.quote}"
      </blockquote>

      <div className="pt-2 border-t border-border-dark">
        <p className="font-body text-text-primary text-sm font-medium">{testimonial.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="font-body text-xs text-gold-primary">{testimonial.occasion}</span>
          <span className="text-border-mid">·</span>
          <span className="font-body text-xs text-text-muted">{testimonial.date}</span>
        </div>
        {testimonial.designDescription && (
          <p className="font-body text-xs text-text-muted mt-1 italic">
            {testimonial.designDescription}
          </p>
        )}
      </div>
    </div>
  )
}
