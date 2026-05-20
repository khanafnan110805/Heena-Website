export interface Testimonial {
  id: string
  name: string
  occasion: string
  date: string
  rating: number
  quote: string
  designDescription?: string
}

export const TESTIMONIALS: Testimonial[] = [
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
      'We had 12 guests for my daughter\'s engagement party and Sara handled the entire evening beautifully. Every guest got a gorgeous design and she managed time so efficiently that everyone was done before dinner. Truly professional.',
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
