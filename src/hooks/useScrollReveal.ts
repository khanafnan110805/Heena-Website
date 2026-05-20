import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe element and all children with 'reveal' class
    el.classList.add('reveal')
    observer.observe(el)

    const children = el.querySelectorAll('.reveal')
    children.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

// Hook that adds reveal class to all children with stagger
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.05, rootMargin = '0px 0px -40px 0px' } = options
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    const children = container.children
    Array.from(children).forEach((child, index) => {
      child.classList.add('reveal', `reveal-delay-${Math.min(index + 1, 5)}`)
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return containerRef
}
