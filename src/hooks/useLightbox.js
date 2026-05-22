import { useState, useEffect, useCallback } from 'react'

export function useLightbox(images) {
  const [activeIndex, setActiveIndex] = useState(null)

  const open  = useCallback((index) => setActiveIndex(index), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const prev  = useCallback(() => setActiveIndex(i => (i > 0 ? i - 1 : images.length - 1)), [images.length])
  const next  = useCallback(() => setActiveIndex(i => (i < images.length - 1 ? i + 1 : 0)), [images.length])

  useEffect(() => {
    if (activeIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, prev, next])

  return { activeIndex, isOpen: activeIndex !== null, open, close, prev, next }
}
