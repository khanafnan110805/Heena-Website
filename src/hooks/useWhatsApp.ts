import { useCallback } from 'react'
import { buildWhatsAppUrl, SITE_CONFIG } from '../config/site.config'

export function useWhatsApp() {
  const openWhatsApp = useCallback((message?: string) => {
    const msg = message ?? SITE_CONFIG.whatsapp.defaultMessage
    const url = buildWhatsAppUrl(msg)
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  const getWhatsAppUrl = useCallback((message?: string) => {
    const msg = message ?? SITE_CONFIG.whatsapp.defaultMessage
    return buildWhatsAppUrl(msg)
  }, [])

  return { openWhatsApp, getWhatsAppUrl }
}
