'use client'

import { useEffect } from 'react'

export default function ShimmerTracker() {
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const els = document.querySelectorAll<HTMLElement>('.shimmer-text')
      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const hovered =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        if (hovered) {
          const x = (e.clientX - rect.left) / rect.width
          // maps cursor left→right to background-position 200%→-200%
          el.style.backgroundPosition = `${200 - x * 400}% center`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}
