export interface FAQItem {
  id: string
  group: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  // About
  {
    id: 'faq-1',
    group: 'About the Artist',
    question: 'How many years of experience do you have?',
    answer:
      'I have been practising mehndi artistry for over 10 years, with specialisation in bridal, Arabic, floral, and Indian styles. I have worked with hundreds of brides and festive clients across Mumbai and surrounding areas.',
  },
  {
    id: 'faq-2',
    group: 'About the Artist',
    question: 'Do you work alone or with a team?',
    answer:
      'For individual and small bookings (up to 4–5 guests) I work alone. For larger events and bridal ceremonies with 6+ guests, I can arrange a team of trained artists. Please mention your guest count when booking.',
  },
  // Pricing
  {
    id: 'faq-3',
    group: 'Pricing & Packages',
    question: 'Why are your prices shown as "starting from"?',
    answer:
      'Mehndi is a custom art form — the final price depends on design complexity, coverage area, number of hands/feet, and whether home service is required. The "starting from" price represents the minimum for a simple design at that package tier. I always confirm the final price before starting.',
  },
  {
    id: 'faq-4',
    group: 'Pricing & Packages',
    question: 'Is there a travel charge for home service?',
    answer:
      'Home service within a 10km radius of central Mumbai is complimentary for Signature Bridal bookings. For other packages, a travel charge applies depending on distance — typically ₹150–500. I will confirm this during our WhatsApp conversation.',
  },
  // Home Service
  {
    id: 'faq-5',
    group: 'Home Service & Travel',
    question: 'What do you bring for home service sessions?',
    answer:
      'I arrive fully equipped — henna cones, protective sheets, a portable light, and everything required for the session. You only need to provide a comfortable seating arrangement. I always carry wet wipes and aftercare information.',
  },
  {
    id: 'faq-6',
    group: 'Home Service & Travel',
    question: 'How far in advance should I book for home service?',
    answer:
      'For home service, I recommend booking at least 5–7 days in advance. During peak seasons (Eid, wedding season October–March), I recommend booking 3–4 weeks ahead to secure your preferred date and time.',
  },
  // Bridal
  {
    id: 'faq-7',
    group: 'Bridal Mehndi',
    question: 'When should bridal mehndi be applied relative to the wedding date?',
    answer:
      'Bridal mehndi is typically applied 1–2 days before the wedding. This allows the design to fully develop and darken — mehndi reaches its deepest colour 24–48 hours after application. The night before the wedding (mehndi raat) is the traditional choice.',
  },
  {
    id: 'faq-8',
    group: 'Bridal Mehndi',
    question: 'Can I bring design references for my bridal mehndi?',
    answer:
      'Absolutely — I encourage it. Share your Pinterest board, Instagram saves, or specific design elements you love during our consultation. I combine your references with my own expertise to create something truly unique for you.',
  },
  // Booking
  {
    id: 'faq-9',
    group: 'Booking & Cancellation',
    question: 'How do I confirm my booking?',
    answer:
      'Most bookings are confirmed through WhatsApp conversation — it\'s the fastest and most convenient way. For group events and bridal bookings, I require a small advance payment to secure the date. I will provide all details during our initial conversation.',
  },
  {
    id: 'faq-10',
    group: 'Booking & Cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'I understand plans change. For cancellations with 48+ hours notice, any advance payment is fully refunded. For cancellations within 48 hours of the booking, 50% of the advance is retained. For no-shows or same-day cancellations, the full advance is non-refundable.',
  },
]

export const FAQ_HOME_PREVIEW = FAQ_ITEMS.slice(0, 5)
