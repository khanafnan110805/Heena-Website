export type GalleryCategory = 'bridal' | 'arabic' | 'floral' | 'indian'
export type GalleryFilter = 'all' | GalleryCategory

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  featured?: boolean
  aspectRatio?: 'portrait' | 'landscape' | 'square'
}

export interface GallerySection {
  category: GalleryCategory
  title: string
  description: string
  images: GalleryImage[]
}
