import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-gold-primary text-bg-base font-body font-medium
    hover:bg-gold-amber active:bg-gold-amber
    border border-gold-primary
    transition-all duration-200
  `,
  secondary: `
    bg-transparent text-gold-champagne font-body font-medium
    border border-gold-muted
    hover:border-gold-primary hover:text-gold-primary
    transition-all duration-200
  `,
  ghost: `
    bg-transparent text-text-secondary font-body font-medium
    hover:text-text-primary
    transition-colors duration-200
  `,
  whatsapp: `
    bg-whatsapp text-white font-body font-medium
    hover:bg-opacity-90 active:bg-opacity-80
    wa-pulse
    transition-all duration-200
  `,
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[48px]',
  lg: 'px-8 py-4 text-lg min-h-[56px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      fullWidth = false,
      className = '',
      as: Tag = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center gap-2
      rounded-sm tracking-wide
      focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      cursor-pointer
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `

    if (Tag === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
