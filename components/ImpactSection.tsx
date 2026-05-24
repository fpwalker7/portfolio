'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS, SKILLS_TAGS } from '@/lib/data'

function useCountUp(target: string, duration = 1500) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true

          // Parse prefix/suffix/number
          const match = target.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/)
          if (!match) { setDisplay(target); return }

          const prefix = match[1]
          const num = parseFloat(match[2])
          const suffix = match[3]
          const isDecimal = match[2].includes('.')
          const start = Date.now()

          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = num * eased
            setDisplay(`${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { display, ref }
}

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const { display, ref } = useCountUp(stat.value)

  return (
    <div ref={ref} className="text-center">
      <p className="counter-number text-5xl font-bold tracking-tight md:text-6xl">{display}</p>
      <p className="mt-2 text-sm font-medium text-[hsl(var(--foreground)/0.8)]">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">{stat.description}</p>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
          Web systems that move teams <span className="shimmer-text">faster</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Skills tags */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          {SKILLS_TAGS.map((tag, i) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className="text-xs text-[hsl(var(--muted-foreground)/0.8)] md:text-sm">{tag}</span>
              {i < SKILLS_TAGS.length - 1 && (
                <span className="text-[10px] text-[hsl(var(--accent)/0.4)]">▪</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
