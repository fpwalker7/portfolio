'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { HERO, SITE, CONTACT } from '@/lib/data'

export default function HeroSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(185,72%,48%,0.08),transparent)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card))] px-4 py-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
            {HERO.badge}
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[hsl(var(--foreground))] md:text-5xl lg:text-7xl">
            Building <span className="shimmer-text">modern</span> web experiences for enterprise growth
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))] md:text-lg">
            {HERO.subtext}
          </p>

          {/* Role label */}
          <p className="mt-3 font-mono text-xs tracking-wide text-[hsl(var(--muted-foreground))] md:text-sm">
            {HERO.roleLabel}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={HERO.ctas.primary.href}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[hsl(var(--primary))] px-8 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary)/0.9)]"
            >
              {HERO.ctas.primary.label}
            </Link>


            <Link
              href={HERO.ctas.tertiary.href}
              className="text-sm text-[hsl(var(--muted-foreground))] underline underline-offset-4 transition-colors hover:text-[hsl(var(--foreground))]"
            >
              {HERO.ctas.tertiary.label}
            </Link>
          </div>
        </div>

        {/* Video / thumbnail */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.5)] shimmer-border-hover md:mt-16">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {playing && HERO.videoId ? (
              <iframe
                src={`https://fast.wistia.net/embed/iframe/${HERO.videoId}?autoPlay=1&fitStrategy=fill`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                title="Intro video"
              />
            ) : (
              <button
                type="button"
                aria-label="Play intro video"
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center overflow-hidden text-[hsl(var(--foreground))] transition-colors"
              >
                {/* Thumbnail */}
                <Image
                  src={HERO.videoThumbnail}
                  alt="Intro video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 90vw, 100vw"
                  priority
                />
                <span className="absolute inset-0 bg-[hsl(var(--background)/0.4)]" />

                {/* Play button */}
                <span className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[hsl(var(--primary)/0.4)] bg-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] backdrop-blur-sm">
                  <Play className="h-6 w-6" aria-hidden="true" />
                </span>
              </button>
            )}

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[hsl(var(--foreground)/0.05)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
