interface DecorativeRuleProps {
  className?: string
}

export function DecorativeRule({ className = '' }: DecorativeRuleProps) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="flex-1 h-px bg-border-dark max-w-32" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
          fill="var(--color-gold-muted)"
        />
      </svg>
      <div className="flex-1 h-px bg-border-dark max-w-32" />
    </div>
  )
}

export function DecorativeCorner({ className = '' }: DecorativeRuleProps) {
  return (
    <div className={`absolute inset-3 pointer-events-none ${className}`}>
      {/* Top-left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-muted" />
      {/* Bottom-right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-muted" />
    </div>
  )
}
