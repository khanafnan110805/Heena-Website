import { useState, useCallback } from 'react'
import type { GalleryImage } from '../types/gallery.types'

export function useLightbox(images: GalleryImage[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const isOpen = selectedIndex !== null
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const open = useCallback((index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setSelectedIndex(null)
    document.body.style.overflow = ''
  }, [])

  const next = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return (prev + 1) % images.length
    })
  }, [images.length])

  const prev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return (prev - 1 + images.length) % images.length
    })
  }, [images.length])

  return { isOpen, selectedIndex, selectedImage, open, close, next, prev }
}
