import Image from 'next/image'
import { Crosshair, Layers, ShieldCheck } from 'lucide-react'
import { ABOUT } from '@/lib/data'

const ICONS: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  Crosshair,
  Layers,
  ShieldCheck,
}

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">

          {/* Portrait photo */}
          <div className="relative mx-auto w-full max-w-[300px] shrink-0 lg:mx-0">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent)/0.2)] via-transparent to-[hsl(var(--primary)/0.2)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.5)] shimmer-border-hover">
              <Image
                src="/images/fernanda.JPG.jpeg"
                alt="Fernanda Passos Walker"
                width={300}
                height={533}
                className="aspect-[9/16] w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
              {ABOUT.heading}{' '}
              <span className="shimmer-text">{ABOUT.headingShimmer}</span>
            </h2>

            <p className="mt-2 text-base font-medium text-[hsl(var(--muted-foreground))] md:text-lg">
              {ABOUT.subheading}
            </p>

            <div className="mt-8 space-y-6">
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`border-l-2 pl-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:text-base ${
                    i % 2 === 0
                      ? 'border-[hsl(var(--accent)/0.3)]'
                      : 'border-[hsl(var(--primary)/0.3)]'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {ABOUT.pillars.map((pillar) => {
                const Icon = ICONS[pillar.icon]
                return (
                  <div key={pillar.title} className="group flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--border)/0.4)] bg-[hsl(var(--secondary))] transition-colors group-hover:border-[hsl(var(--accent)/0.4)]">
                      {Icon && <Icon className="h-4 w-4 shimmer-icon" aria-hidden />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{pillar.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
