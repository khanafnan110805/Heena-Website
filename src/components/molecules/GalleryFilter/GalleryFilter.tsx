import type { GalleryFilter } from '../../../types/gallery.types'

const FILTERS: { value: GalleryFilter; label: string }[] = [
  { value: 'all', label: 'All Designs' },
  { value: 'bridal', label: 'Bridal' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'floral', label: 'Floral' },
  { value: 'indian', label: 'Indian' },
]

interface GalleryFilterProps {
  active: GalleryFilter
  onChange: (filter: GalleryFilter) => void
  className?: string
}

export function GalleryFilterBar({ active, onChange, className = '' }: GalleryFilterProps) {
  return (
    <div
      className={`flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide ${className}`}
      role="tablist"
      aria-label="Gallery filter"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter.value
        return (
          <button
            key={filter.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={`
              shrink-0 px-5 py-2.5 font-body text-sm tracking-wide rounded-sm
              transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-primary
              ${isActive
                ? 'bg-gold-primary text-bg-base font-medium'
                : 'bg-bg-card border border-border-dark text-text-tertiary hover:border-gold-muted hover:text-text-secondary'
              }
            `}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
