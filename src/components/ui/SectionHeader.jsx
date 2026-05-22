import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="font-body text-xs text-gold-primary uppercase tracking-widest-lg mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-light text-3xl md:text-4xl text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`w-12 h-px bg-gold-primary mt-5 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
