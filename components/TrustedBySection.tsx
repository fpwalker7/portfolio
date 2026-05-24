'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { TYPEWRITER_PHRASES, PARTNER_LOGOS } from '@/lib/data'

function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPEWRITER_PHRASES[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIndex])

  return (
    <p className="text-center text-lg font-medium leading-relaxed text-[hsl(var(--foreground))] md:text-2xl lg:text-3xl">
      <span className="text-[hsl(var(--muted-foreground))]">Focused on </span>
      <span className="shimmer-text">{displayed}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-[hsl(var(--accent))] align-middle" />
    </p>
  )
}

export default function TrustedBySection() {
  // Duplicate logos for seamless loop
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

  return (
    <section className="relative py-14 md:py-20">
      <div className="glow-line mx-auto mb-14 w-full max-w-4xl md:mb-16" />

      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
          How I work
        </p>

        <div className="mt-6 flex min-h-[4.5rem] items-center justify-center md:min-h-[3.5rem]">
          <Typewriter />
        </div>

        <div className="mt-14 md:mt-16">
          <p className="text-center text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
            Partnered with teams at
          </p>

          {PARTNER_LOGOS.length > 0 ? (
            <div className="relative mt-8 overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent md:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent md:w-24" />

              <div className="flex animate-marquee items-center gap-16 md:gap-20">
                {doubled.map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex h-8 shrink-0 items-center opacity-50 transition-opacity hover:opacity-90"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={32}
                      className="h-7 w-auto object-contain md:h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Placeholder when no logos are set
            <div className="mt-8 flex items-center justify-center gap-8 opacity-30">
              {['Company A', 'Company B', 'Company C', 'Company D'].map((name) => (
                <span key={name} className="font-mono text-sm font-bold text-[hsl(var(--muted-foreground))]">
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
