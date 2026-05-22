import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'text-gold-primary fill-gold-primary' : 'text-border-mid'}
        />
      ))}
    </div>
  )
}
