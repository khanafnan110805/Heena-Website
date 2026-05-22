import { SITE_CONFIG } from './siteConfig.js'

export const PACKAGES = [
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
    imageUrl: 'https://i.pinimg.com/736x/e1/0a/75/e10a75abdbba4646773356a2c65fb495.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/a9/2e/f0/a92ef0372b8ea7fdf99fcaeb743b38fb.jpg',
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
    imageUrl: 'https://i.pinimg.com/1200x/94/7e/b4/947eb48eb9b71bbc7aedc9ddf9f9f82f.jpg',
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
