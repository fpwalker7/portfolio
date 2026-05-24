'use client'

import { useState } from 'react'
import {
  ChartColumn, Sparkles, FlaskConical, Eye, Database, Building2,
} from 'lucide-react'
import { CAPABILITIES } from '@/lib/data'

const ICONS: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  ChartColumn, Sparkles, FlaskConical, Eye, Database, Building2,
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const cap = CAPABILITIES[active]
  const Icon = ICONS[cap.icon]

  return (
    <section id="capabilities" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
          What I build and <span className="shimmer-text">lead</span>
        </h2>

        <div className="mt-14 flex flex-col gap-6 lg:flex-row">
          {/* Active capability detail */}
          <div className="flex-1 rounded-2xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card))] p-8 shimmer-border-hover lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--secondary))]">
              {Icon && <Icon className="h-7 w-7 shimmer-icon" aria-hidden />}
            </div>

            <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">{cap.title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:text-base">
              {cap.description}
            </p>

            {cap.video && (
              <div className="mb-6 mt-6 rounded-2xl p-[2px] shimmer-frame">
                <div className="aspect-video overflow-hidden rounded-xl bg-[hsl(var(--secondary))]">
                  <video
                    src={cap.video}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[hsl(var(--accent))]">
              <span className="h-px flex-1 bg-[hsl(var(--accent)/0.2)]" />
              Core discipline
              <span className="h-px flex-1 bg-[hsl(var(--accent)/0.2)]" />
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {cap.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent)/0.6)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab list */}
          <div className="flex flex-1 flex-col gap-0">
            {CAPABILITIES.map((c, i) => {
              const TabIcon = ICONS[c.icon]
              const isActive = i === active

              return (
                <button
                  key={c.id}
                  type="button"
                  className={`group flex w-full cursor-pointer items-start gap-4 border-b border-[hsl(var(--border)/0.3)] py-5 text-left transition-all last:border-b-0 ${
                    isActive ? 'bg-[hsl(var(--card)/0.5)]' : 'hover:bg-[hsl(var(--card)/0.3)]'
                  }`}
                  onClick={() => setActive(i)}
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isActive
                        ? 'border-[hsl(var(--accent)/0.5)] bg-[hsl(var(--accent)/0.1)]'
                        : 'border-[hsl(var(--border)/0.3)] bg-[hsl(var(--card))] group-hover:border-[hsl(var(--accent)/0.3)]'
                    }`}
                  >
                    {TabIcon && (
                      <TabIcon
                        className={`h-5 w-5 ${isActive ? 'shimmer-icon' : 'text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))]'}`}
                        aria-hidden
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--foreground)/0.7)] group-hover:text-[hsl(var(--foreground))]'}`}>
                      {c.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {c.description}
                    </p>
                  </div>

                  {isActive && (
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
