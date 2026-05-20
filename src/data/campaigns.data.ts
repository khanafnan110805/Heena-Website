export interface Campaign {
  id: string
  title: string
  subtitle: string
  description: string
  ctaLabel: string
  whatsappMessage: string
  imageUrl: string
  badgeText?: string
  isActive: boolean
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'eid-special',
    title: 'Eid Mehndi',
    subtitle: 'Special Festive Offer',
    description: 'Celebrate Eid in style. Beautiful Arabic and floral mehndi designs — perfect for the occasion. Limited slots available.',
    ctaLabel: 'Book Your Eid Appointment',
    whatsappMessage: "Hi! I'm interested in your Eid Special mehndi package. Can you share availability and pricing?",
    imageUrl: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=85',
    badgeText: 'Limited Slots',
    isActive: true,
  },
  {
    id: 'bridal-season',
    title: 'Bridal Season',
    subtitle: '2025 Wedding Calendar',
    description: 'Booking open for 2025 wedding season. Signature bridal packages with full design consultation — secure your date before the calendar fills.',
    ctaLabel: 'Enquire About Bridal Booking',
    whatsappMessage: "Hi! I'd like to enquire about bridal mehndi booking for my 2025 wedding. Can we discuss availability?",
    imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=85',
    badgeText: 'Booking Open',
    isActive: true,
  },
]

export const ACTIVE_CAMPAIGNS = CAMPAIGNS.filter(c => c.isActive)
