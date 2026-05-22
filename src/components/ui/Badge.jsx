// Badge
export function Badge({ children, variant = 'gold', className = '' }) {
  const variantClass = {
    gold:    'bg-gold-muted text-gold-champagne border border-gold-muted',
    dark:    'bg-bg-elevated text-text-secondary border border-border-dark',
    success: 'bg-success/20 text-success border border-success/30',
  }[variant]
  return (
    <span className={`inline-block px-2.5 py-0.5 font-body text-xs tracking-widest uppercase rounded-sm ${variantClass} ${className}`}>
      {children}
    </span>
  )
}
