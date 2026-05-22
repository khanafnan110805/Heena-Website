// ── Testimonials ──────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Zainab A.',
    occasion: 'Bridal Mehndi',
    date: 'November 2024',
    rating: 5,
    quote:
      'Sara arrived 15 minutes early and spent nearly 5 hours making sure every detail of my bridal mehndi was perfect. The design was everything I had dreamed of — my family could not stop complimenting it throughout the ceremony.',
    designDescription: 'Full Indian bridal mehndi with hidden groom name',
  },
  {
    id: 't2',
    name: 'Ayesha M.',
    occasion: 'Eid Special',
    date: 'April 2024',
    rating: 5,
    quote:
      'Booked via WhatsApp and the whole process was so easy. The Arabic design she did for me was stunning — bold, clean, and exactly the style I had shown her. I got so many compliments on Eid!',
    designDescription: 'Arabic floral design with shading',
  },
  {
    id: 't3',
    name: 'Fatima K.',
    occasion: 'Engagement Party Group',
    date: 'September 2024',
    rating: 5,
    quote:
      "We had 12 guests for my daughter's engagement party and Sara handled the entire evening beautifully. Every guest got a gorgeous design and she managed time so efficiently that everyone was done before dinner. Truly professional.",
    designDescription: 'Group event — mixed Arabic and floral designs',
  },
  {
    id: 't4',
    name: 'Nadia R.',
    occasion: 'Home Service',
    date: 'December 2024',
    rating: 5,
    quote:
      'I was worried about home service logistics but it was completely seamless. Sara came fully equipped, set up in minutes, and the floral design she created was so delicate and beautiful. Will definitely book again.',
    designDescription: 'Floral mehndi with vine wrist bracelet detail',
  },
  {
    id: 't5',
    name: 'Sara H.',
    occasion: 'Bridal — Nikkah',
    date: 'January 2025',
    rating: 5,
    quote:
      'The most talented mehndi artist I have ever come across. She listened to exactly what I wanted, incorporated personal elements into the design, and the result was breathtaking. My photographs look incredible.',
    designDescription: 'Signature bridal — full hands and feet',
  },
]

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  { id: 'faq-1', group: 'About the Artist',     question: 'How many years of experience do you have?',                                   answer: 'I have been practising mehndi artistry for over 10 years, with specialisation in bridal, Arabic, floral, and Indian styles. I have worked with hundreds of brides and festive clients across Mumbai and surrounding areas.' },
  { id: 'faq-2', group: 'About the Artist',     question: 'Do you work alone or with a team?',                                           answer: 'For individual and small bookings (up to 4–5 guests) I work alone. For larger events and bridal ceremonies with 6+ guests, I can arrange a team of trained artists. Please mention your guest count when booking.' },
  { id: 'faq-3', group: 'Pricing & Packages',   question: 'Why are your prices shown as "starting from"?',                              answer: 'Mehndi is a custom art form — the final price depends on design complexity, coverage area, number of hands/feet, and whether home service is required. The "starting from" price represents the minimum for a simple design at that package tier. I always confirm the final price before starting.' },
  { id: 'faq-4', group: 'Pricing & Packages',   question: 'Is there a travel charge for home service?',                                  answer: 'Home service within a 10km radius of central Mumbai is complimentary for Signature Bridal bookings. For other packages, a travel charge applies depending on distance — typically ₹150–500. I will confirm this during our WhatsApp conversation.' },
  { id: 'faq-5', group: 'Home Service & Travel', question: 'What do you bring for home service sessions?',                               answer: 'I arrive fully equipped — henna cones, protective sheets, a portable light, and everything required for the session. You only need to provide a comfortable seating arrangement. I always carry wet wipes and aftercare information.' },
  { id: 'faq-6', group: 'Home Service & Travel', question: 'How far in advance should I book for home service?',                         answer: 'For home service, I recommend booking at least 5–7 days in advance. During peak seasons (Eid, wedding season October–March), I recommend booking 3–4 weeks ahead to secure your preferred date and time.' },
  { id: 'faq-7', group: 'Bridal Mehndi',        question: 'When should bridal mehndi be applied relative to the wedding date?',          answer: 'Bridal mehndi is typically applied 1–2 days before the wedding. This allows the design to fully develop and darken — mehndi reaches its deepest colour 24–48 hours after application. The night before the wedding (mehndi raat) is the traditional choice.' },
  { id: 'faq-8', group: 'Bridal Mehndi',        question: 'Can I bring design references for my bridal mehndi?',                         answer: 'Absolutely — I encourage it. Share your Pinterest board, Instagram saves, or specific design elements you love during our consultation. I combine your references with my own expertise to create something truly unique for you.' },
  { id: 'faq-9', group: 'Booking & Cancellation', question: 'How do I confirm my booking?',                                              answer: "Most bookings are confirmed through WhatsApp conversation — it's the fastest and most convenient way. For group events and bridal bookings, I require a small advance payment to secure the date. I will provide all details during our initial conversation." },
  { id: 'faq-10', group: 'Booking & Cancellation', question: 'What is your cancellation policy?',                                        answer: 'I understand plans change. For cancellations with 48+ hours notice, any advance payment is fully refunded. For cancellations within 48 hours of the booking, 50% of the advance is retained. For no-shows or same-day cancellations, the full advance is non-refundable.' },
]

export const FAQ_HOME_PREVIEW = FAQ_ITEMS.slice(0, 5)

// ── Campaigns ────────────────────────────────────────────────────
export const CAMPAIGNS = [
  {
    id: 'eid-special',
    title: 'Eid Mehndi',
    subtitle: 'Special Festive Offer',
    description: 'Celebrate Eid in style. Beautiful Arabic and floral mehndi designs — perfect for the occasion. Limited slots available.',
    ctaLabel: 'Book Your Eid Appointment',
    whatsappMessage: "Hi! I'm interested in your Eid Special mehndi package. Can you share availability and pricing?",
    imageUrl: 'https://i.pinimg.com/736x/52/ed/ba/52edba4513269b069863208ce45da9d8.jpg',
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
    imageUrl: 'https://i.pinimg.com/1200x/dc/cc/a4/dccca4fc5cd2216e1479c97919f941ec.jpg',
    badgeText: 'Booking Open',
    isActive: true,
  },
]

export const ACTIVE_CAMPAIGNS = CAMPAIGNS.filter(c => c.isActive)

// ── Products ─────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: 'p1',
    category: 'henna-cones',
    name: 'Natural Henna Cones — Classic Brown',
    description: 'Pure, chemical-free henna cones made from 100% natural henna powder. Rich, dark stain with smooth flow — the same cones used in every professional session.',
    features: ['100% natural ingredients', 'Chemical & PPD free', 'Rich dark brown stain', 'Smooth, consistent flow', 'Pack of 12 cones'],
    price: '₹450 per pack',
    imageUrl: 'https://i.pinimg.com/736x/92/3f/3b/923f3b3a6ded6526a509e6339c7c8f09.jpg',
    badge: 'Bestseller',
    whatsappMessage: "Hi! I'd like to order the Natural Henna Cones (Classic Brown). Can you confirm availability and delivery?",
  },
  {
    id: 'p2',
    category: 'henna-cones',
    name: 'Natural Henna Cones — Midnight Black',
    description: 'Deep, rich black henna cones for bold Arabic and contemporary designs. Made with natural ingredients — no harmful chemicals, no skin irritation.',
    features: ['100% natural black henna', 'Deep, opaque finish', 'Ideal for Arabic and bold designs', 'Long-lasting stain', 'Pack of 12 cones'],
    price: '₹550 per pack',
    imageUrl: 'https://herhennas.com/wp-content/uploads/2025/02/1000232007-scaled-2.jpg',
    whatsappMessage: "Hi! I'd like to order the Natural Henna Cones (Midnight Black). Can you confirm availability?",
  },
  {
    id: 'p3',
    category: 'nail-cones',
    name: 'Nail Art Cones — Classic Collection',
    description: 'Professional-grade nail art cones for intricate nail mehndi designs. Fine tip for precision work, rich pigment for lasting colour.',
    features: ['Extra-fine application tip', 'Rich, opaque pigment', 'Suitable for all nail types', 'Long-lasting colour', 'Pack of 8 cones'],
    price: '₹380 per pack',
    imageUrl: 'https://herhennas.com/wp-content/uploads/2025/02/1000040038-scaled-2.jpg',
    badge: 'New',
    whatsappMessage: "Hi! I'd like to order the Nail Art Cones. Can you share more details and confirm availability?",
  },
  {
    id: 'p4',
    category: 'kits',
    name: 'Starter Henna Kit',
    description: 'Everything you need to begin your mehndi journey at home. Curated with the same products used professionally — quality guaranteed.',
    features: ['6 natural henna cones', '2 nail art cones', 'Design template booklet', 'Aftercare instruction card', 'Practice sheet included'],
    price: '₹750 per kit',
    imageUrl: 'https://herhennas.com/wp-content/uploads/2025/02/1000040048-scaled-2.jpg',
    badge: 'Great Gift',
    whatsappMessage: "Hi! I'm interested in the Starter Henna Kit. Can you confirm availability and share delivery details?",
  },
]
