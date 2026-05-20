export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  GALLERY_BRIDAL: '/gallery/bridal',
  GALLERY_ARABIC: '/gallery/arabic',
  GALLERY_FLORAL: '/gallery/floral',
  GALLERY_INDIAN: '/gallery/indian',
  SERVICES: '/services',
  PACKAGES: '/packages',
  PRODUCTS: '/products',
  BOOKING: '/booking',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
} as const

export type Route = typeof ROUTES[keyof typeof ROUTES]

export const NAV_LINKS = [
  { label: 'Gallery', href: ROUTES.GALLERY },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'Packages', href: ROUTES.PACKAGES },
  { label: 'Products', href: ROUTES.PRODUCTS },
  { label: 'Contact', href: ROUTES.CONTACT },
] as const
