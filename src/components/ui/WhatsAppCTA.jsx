import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl, SITE_CONFIG } from '../../data/siteConfig.js'

const sizeMap = {
  sm: 'px-4 py-2 text-sm gap-1.5 min-h-[36px]',
  md: 'px-5 py-3 text-base gap-2 min-h-[48px]',
  lg: 'px-7 py-3.5 text-lg gap-2 min-h-[52px]',
  xl: 'px-10 py-4 text-xl gap-3 min-h-[60px]',
}
const iconSizeMap = { sm: 16, md: 20, lg: 22, xl: 26 }

export default function WhatsAppCTA({
  message,
  label = 'Book via WhatsApp',
  size = 'md',
  variant = 'filled',
  fullWidth = false,
  pulse = false,
  className = '',
}) {
  const msg = message ?? SITE_CONFIG.whatsapp.defaultMessage
  const url = buildWhatsAppUrl(msg)

  const base = `inline-flex items-center justify-center font-body font-medium rounded-sm tracking-wide cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-primary transition-all duration-200 ${sizeMap[size]} ${fullWidth ? 'w-full' : ''} ${className}`
  const filled   = 'bg-whatsapp text-white hover:brightness-105 active:brightness-95'
  const outlined = 'bg-transparent text-whatsapp border border-whatsapp hover:bg-whatsapp/10'

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === 'filled' ? filled : outlined} ${pulse ? 'wa-pulse' : ''}`}
      aria-label={`${label} — opens WhatsApp`}
    >
      <MessageCircle size={iconSizeMap[size]} strokeWidth={2} />
      {label}
    </a>
  )
}
