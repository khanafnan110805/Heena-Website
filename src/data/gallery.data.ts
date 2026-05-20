import type { GalleryImage } from '../types/gallery.types'

// Using high-quality placeholder images — replace with actual mehndi photography
// Aspect ratios create natural masonry rhythm: portrait for full-arm/back designs,
// landscape for hand close-ups, square for detail shots

export const GALLERY_IMAGES: GalleryImage[] = [
  // Bridal
  {
    id: 'b01',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85',
    alt: 'Full hand bridal mehndi with intricate Indian floral patterns and wrist details',
    category: 'bridal',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'b02',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85',
    alt: 'Bridal mehndi full arm coverage with traditional paisley and floral motifs',
    category: 'bridal',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'b03',
    src: 'https://images.unsplash.com/photo-1609259886756-5b0e7c8bebc9?w=800&q=85',
    alt: 'Intricate bridal mehndi detail shot showing fine line work on palm',
    category: 'bridal',
    aspectRatio: 'square',
  },
  {
    id: 'b04',
    src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=85',
    alt: 'Bridal mehndi on feet with ankle details and toe patterns',
    category: 'bridal',
    aspectRatio: 'landscape',
  },
  {
    id: 'b05',
    src: 'https://images.unsplash.com/photo-1583937443488-61e51ed03b5e?w=800&q=85',
    alt: 'Traditional Indian bridal mehndi full hands with groom name hidden in design',
    category: 'bridal',
    aspectRatio: 'portrait',
  },
  {
    id: 'b06',
    src: 'https://images.unsplash.com/photo-1617196034082-e5bbbac7af57?w=800&q=85',
    alt: 'Bridal mehndi close-up showing mandala centre palm design',
    category: 'bridal',
    aspectRatio: 'square',
  },

  // Arabic
  {
    id: 'a01',
    src: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=85',
    alt: 'Arabic mehndi design with bold floral stems and geometric fills on hand',
    category: 'arabic',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'a02',
    src: 'https://images.unsplash.com/photo-1566996533071-2c578080c06e?w=800&q=85',
    alt: 'Modern Arabic mehndi with large rose motifs and shading technique',
    category: 'arabic',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'a03',
    src: 'https://images.unsplash.com/photo-1609259886949-b9acf3e2b371?w=800&q=85',
    alt: 'Arabic floral mehndi on back of hand with finger details',
    category: 'arabic',
    aspectRatio: 'landscape',
  },
  {
    id: 'a04',
    src: 'https://images.unsplash.com/photo-1611255583900-cb3a37c7d578?w=800&q=85',
    alt: 'Bold Arabic mehndi design with leaf clusters and negative space',
    category: 'arabic',
    aspectRatio: 'portrait',
  },
  {
    id: 'a05',
    src: 'https://images.unsplash.com/photo-1617196034238-d1ecb3a0cac5?w=800&q=85',
    alt: 'Simple elegant Arabic mehndi for Eid — single stem floral with shading',
    category: 'arabic',
    aspectRatio: 'square',
  },

  // Floral
  {
    id: 'f01',
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=85',
    alt: 'Delicate floral mehndi with fine vine details wrapping the wrist',
    category: 'floral',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'f02',
    src: 'https://images.unsplash.com/photo-1609259886978-8d11fb9d9c18?w=800&q=85',
    alt: 'Contemporary floral henna with lotus and trailing petals on forearm',
    category: 'floral',
    aspectRatio: 'portrait',
  },
  {
    id: 'f03',
    src: 'https://images.unsplash.com/photo-1580852300654-03c803a14e24?w=800&q=85',
    alt: 'Minimalist floral mehndi design — single bloom with fine leaf details',
    category: 'floral',
    aspectRatio: 'landscape',
  },
  {
    id: 'f04',
    src: 'https://images.unsplash.com/photo-1613207736748-1b14c4bd6f6d?w=800&q=85',
    alt: 'Bohemian floral henna with wildflower clusters on hand and wrist',
    category: 'floral',
    aspectRatio: 'square',
  },

  // Indian
  {
    id: 'i01',
    src: 'https://images.unsplash.com/photo-1576773689115-5cd2b0223523?w=800&q=85',
    alt: 'Traditional Indian mehndi with peacock motif and intricate filling on both hands',
    category: 'indian',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'i02',
    src: 'https://images.unsplash.com/photo-1609259887167-d9f8de45e2a0?w=800&q=85',
    alt: 'Full Indian bridal mehndi with fine line work and dense floral patterns',
    category: 'indian',
    aspectRatio: 'portrait',
  },
  {
    id: 'i03',
    src: 'https://images.unsplash.com/photo-1609259886789-2e4f87b2f636?w=800&q=85',
    alt: 'Indian mehndi with traditional kalash and mango motifs on palm',
    category: 'indian',
    aspectRatio: 'landscape',
  },
  {
    id: 'i04',
    src: 'https://images.unsplash.com/photo-1611255583825-caad61ee8a3e?w=800&q=85',
    alt: 'Rajasthani-inspired Indian mehndi with elephant and floral border motifs',
    category: 'indian',
    aspectRatio: 'portrait',
  },
]

export const FEATURED_GALLERY = GALLERY_IMAGES.filter(img => img.featured).slice(0, 8)
