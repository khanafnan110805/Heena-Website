import type { Package } from '../types/services.types'
import { SITE_CONFIG } from '../config/site.config'

export const PACKAGES: Package[] = [
  {
    id: 'essentials',
    tier: 'essentials',
    name: 'Essentials',
    tagline: 'Beautiful mehndi for every occasion',
    price: 'Starting from ₹800',
    priceNote: 'Final price depends on design complexity and coverage',
    duration: '20–45 minutes',
    includes: [
      'One person',
      'Small to medium design',
      'Single or both hands',
      'Arabic or floral style',
      'Home or salon visit',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=85',
    whatsappMessage: SITE_CONFIG.whatsapp.essentialsMessage,
  },
  {
    id: 'premium',
    tier: 'premium',
    name: 'Premium',
    tagline: 'Elaborate designs for special moments',
    price: 'Starting from ₹2,000',
    priceNote: 'Includes design consultation and detailed coverage',
    duration: '60–90 minutes',
    includes: [
      'One person',
      'High-complexity design',
      'Full arm or leg options',
      'Design consultation included',
      'All four styles available',
      'Home service available',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85',
    featured: true,
    whatsappMessage: SITE_CONFIG.whatsapp.premiumMessage,
  },
  {
    id: 'signature-bridal',
    tier: 'signature',
    name: 'Signature Bridal',
    tagline: 'Your most important mehndi — perfected',
    price: 'Starting from ₹8,000',
    priceNote: 'Custom quoted based on design complexity and travel',
    duration: '3–5 hours',
    includes: [
      'Full bridal mehndi — hands & feet',
      'Custom design consultation',
      'Dedicated session for the bride',
      'Groom name in design (optional)',
      'Home service standard',
      'Priority WhatsApp support',
      'Post-session care guide',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85',
    whatsappMessage: SITE_CONFIG.whatsapp.signatureBridalMessage,
  },
]

export const GROUP_PACKAGE = {
  name: 'Group & Event Package',
  description:
    'Perfect for mehndi ceremonies, bridal parties, and corporate events. Any of the above packages can be extended to cover multiple guests at a discounted group rate.',
  minGuests: 5,
  priceNote: 'Discounted per-person rate for 5+ guests · Custom quoted',
  includes: [
    '5+ guests',
    'Team booking available for large events',
    'Mix of design styles and complexity levels',
    'Flexible session timing',
    'Event coordination support',
  ],
  whatsappMessage: SITE_CONFIG.whatsapp.groupMessage,
}
