import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { WORK_ITEMS } from '@/lib/data'

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
          Featured work with <span className="shimmer-text">results</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
          A few chapters that show how I operate: modernize the platform, protect continuity, and grow outcomes.
        </p>

        <div className="mt-14 flex flex-col gap-5">
          {WORK_ITEMS.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.5)] shimmer-border-hover transition-colors md:flex-row md:items-center"
            >
              {/* Accent bar */}
              <div className="hidden w-1 shrink-0 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--primary))] md:block" />

              {/* Logo */}
              <div className="flex items-center justify-center bg-[hsl(var(--card))] p-6 md:w-40 md:shrink-0 md:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--secondary))]">
                  <Image
                    src={item.icon}
                    alt={`${item.company} logo`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 p-6 pt-0 md:p-8 md:pt-8">
                <span className="inline-flex w-fit rounded-full border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.05)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[hsl(var(--accent))]">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                  {item.company}
                  <span className="ml-2 text-base font-normal text-[hsl(var(--muted-foreground))]">
                    {item.tagline}
                  </span>
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden items-center pr-8 md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--secondary))] transition-colors group-hover:border-[hsl(var(--accent)/0.5)] group-hover:bg-[hsl(var(--accent)/0.1)]">
                  <ArrowUpRight className="h-4 w-4 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--accent))]" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
