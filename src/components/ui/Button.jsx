const sizeMap = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-3.5 text-lg min-h-[52px]',
}

const variantMap = {
  primary:  'bg-gold-primary text-bg-base hover:bg-gold-champagne active:bg-gold-amber',
  secondary:'bg-bg-card text-text-primary border border-border-mid hover:border-gold-muted',
  ghost:    'bg-transparent text-gold-champagne border border-gold-muted hover:border-gold-primary hover:text-gold-primary',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-body font-medium rounded-sm tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-primary disabled:opacity-50 disabled:cursor-not-allowed ${sizeMap[size]} ${variantMap[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
