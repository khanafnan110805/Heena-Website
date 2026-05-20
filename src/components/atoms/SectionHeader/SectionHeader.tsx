interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-body text-xs text-gold-primary tracking-widest-lg uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-text-primary font-light leading-tight">
        {title}
      </h2>
      {align === 'center' && (
        <div className="w-12 h-px bg-gold-primary mt-1" />
      )}
      {subtitle && (
        <p className="font-body text-lg text-text-secondary max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  )
}
