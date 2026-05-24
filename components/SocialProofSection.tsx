'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

const SPEED = 0.6
const CARD_WIDTH = 405 // 380px card + 20px gap + 5px buffer

export default function SocialProofSection() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef<number | undefined>(undefined)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const animate = useCallback(() => {
    if (!trackRef.current) return
    posRef.current += SPEED
    const halfWidth = trackRef.current.scrollWidth / 2
    if (posRef.current >= halfWidth) posRef.current = 0
    trackRef.current.style.transform = `translateX(-${posRef.current}px)`
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (!paused) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [paused, animate])

  const pauseTemporarily = () => {
    setPaused(true)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => setPaused(false), 3000)
  }

  const scrollBy = (direction: 'left' | 'right') => {
    pauseTemporarily()
    if (!trackRef.current) return
    const halfWidth = trackRef.current.scrollWidth / 2
    posRef.current += direction === 'right' ? CARD_WIDTH : -CARD_WIDTH
    if (posRef.current < 0) posRef.current = 0
    if (posRef.current >= halfWidth) posRef.current = halfWidth - CARD_WIDTH
    trackRef.current.style.transform = `translateX(-${posRef.current}px)`
  }

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
            Trusted by teams who <span className="shimmer-text">ship</span>
          </h2>
      </div>

      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[hsl(var(--background))] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[hsl(var(--background))] to-transparent md:w-32" />

        <div ref={trackRef} className="flex gap-5" style={{ willChange: 'transform' }}>
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-[320px] shrink-0 flex-col rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.8)] p-5 shimmer-border-hover md:w-[380px]"
            >
              <Quote className="h-4 w-4 shimmer-icon" aria-hidden="true" />

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[hsl(var(--foreground))]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-7 w-7 overflow-hidden rounded-full bg-[hsl(var(--secondary))]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-[hsl(var(--foreground))]">{t.name}</p>
                  <p className="text-[10px] text-[hsl(var(--muted-foreground))]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
