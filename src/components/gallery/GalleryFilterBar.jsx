const FILTERS = [
  { value: 'all',    label: 'All Work' },
  { value: 'bridal', label: 'Bridal' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'floral', label: 'Floral' },
  { value: 'indian', label: 'Indian' },
]

export default function GalleryFilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Gallery filter">
      {FILTERS.map(f => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`font-body text-sm px-5 py-2 rounded-sm border transition-all duration-200 tracking-wide
            ${active === f.value
              ? 'bg-gold-primary text-bg-base border-gold-primary'
              : 'bg-transparent text-text-tertiary border-border-dark hover:border-gold-muted hover:text-text-secondary'
            }`}
          aria-pressed={active === f.value}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
