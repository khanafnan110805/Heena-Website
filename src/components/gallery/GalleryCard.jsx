import { ZoomIn } from 'lucide-react'

const aspectClasses = {
  portrait:  'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square:    'aspect-square',
}

export default function GalleryCard({ image, onClick, index }) {
  return (
    <button
      className="gallery-card w-full relative overflow-hidden rounded-sm cursor-pointer block focus-visible:outline-2 focus-visible:outline-gold-primary"
      onClick={() => onClick(index)}
      aria-label={`View: ${image.alt}`}
    >
      <div className={`relative ${aspectClasses[image.aspectRatio] || 'aspect-[3/4]'} overflow-hidden`}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div className="gallery-card-overlay absolute inset-0 bg-bg-base/60 flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold-primary/60 flex items-center justify-center">
            <ZoomIn size={18} className="text-gold-champagne" />
          </div>
          <p className="font-body text-xs text-gold-champagne tracking-widest uppercase">View</p>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100">
          <span className="font-body text-xs uppercase tracking-widest text-gold-primary bg-bg-base/80 px-2 py-0.5 rounded-sm">
            {image.category}
          </span>
        </div>
      </div>
    </button>
  )
}
