export type ProductCategory = 'henna-cones' | 'nail-cones' | 'kits' | 'accessories'

export interface Product {
  id: string
  category: ProductCategory
  name: string
  description: string
  features: string[]
  price: string
  imageUrl: string
  badge?: string
  whatsappMessage: string
}
