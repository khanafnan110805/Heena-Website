import type { GalleryCategory } from './gallery.types'

export interface Service {
  id: string
  category: GalleryCategory
  title: string
  subtitle: string
  description: string
  details: string[]
  duration: string
  idealFor: string[]
  imageUrl: string
  whatsappMessage: string
}

export interface Package {
  id: string
  tier: 'essentials' | 'premium' | 'signature'
  name: string
  tagline: string
  price: string
  priceNote: string
  duration: string
  includes: string[]
  imageUrl: string
  featured?: boolean
  whatsappMessage: string
}
