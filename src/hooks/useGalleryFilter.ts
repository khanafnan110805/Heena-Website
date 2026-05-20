import { useState, useMemo } from 'react'
import type { GalleryFilter, GalleryImage } from '../types/gallery.types'

export function useGalleryFilter(images: GalleryImage[]) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all')

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return images
    return images.filter((img) => img.category === activeFilter)
  }, [images, activeFilter])

  return { activeFilter, setActiveFilter, filteredImages }
}
