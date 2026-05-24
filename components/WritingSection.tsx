import Link from 'next/link'
import Image from 'next/image'
import { Clock, Headphones, ArrowUpRight, Rocket, ExternalLink, Search, Sparkles, BarChart2 } from 'lucide-react'
import { BLOG_POSTS, WRITING_SECTION } from '@/lib/data'

// Generate deterministic sparkle positions
const SPARKLES = Array.from({ length: 80 }, (_, i) => ({
  left: `${(i * 31 + 17) % 100}%`,
  top: `${(i * 47 + 11) % 100}%`,
  width: [2, 3, 4][(i * 3) % 3],
  duration: `${1.5 + (i % 5) * 0.8}s`,
  delay: `${(i % 5) * 0.8}s`,
  opacity: i % 3 === 0 ? 1 : 0.7,
}))

export default function WritingSection() {
  const featured = BLOG_POSTS.find((p) => p.featured)
  const grid = BLOG_POSTS.filter((p) => !p.featured).slice(0, 4)

  return (
    <section id="writing" className="relative py-16 md:py-20">
      {/* Sparkle field */}
      <div className="sparkle-field" aria-hidden="true">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle-star"
            style={{
              left: s.left,
              top: s.top,
              width: s.width,
              height: s.width,
              '--duration': s.duration,
              '--delay': s.delay,
              '--peak-opacity': s.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
            Insights that <span className="shimmer-text">ship</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
            Frameworks, research, and real-world findings from the intersection of AI, digital growth, and platform transformation.
          </p>
        </div>

        {/* Agency card */}
        <div className="rounded-2xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] p-8 shimmer-border-hover backdrop-blur-sm md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1">
              <p className="text-lg font-medium leading-relaxed text-[hsl(var(--foreground))] md:text-xl">
                {WRITING_SECTION.agencyTagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {WRITING_SECTION.agencyDescription}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WRITING_SECTION.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary)/0.9)]"
                >
                  <Rocket className="h-4 w-4" aria-hidden="true" />
                  Visit {WRITING_SECTION.agencyName}
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[hsl(var(--border))] bg-transparent px-5 py-2.5 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent)/0.5)] hover:text-[hsl(var(--accent))]"
                >
                  Browse all articles
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Process steps */}
            <div className="flex shrink-0 flex-col gap-3">
              {[
                { icon: Search, title: 'Discovery & Analysis', desc: 'Understand brand, goals, and the competitive landscape' },
                { icon: Sparkles, title: 'AI-Driven Strategy', desc: 'Custom plans powered by cutting-edge technology' },
                { icon: BarChart2, title: 'Implement & Refine', desc: 'Execute with precision, optimize for growth' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--border)/0.3)] bg-[hsl(var(--secondary))]">
                    <Icon className="h-4 w-4 shimmer-icon" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</p>
                    <p className="text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog posts */}
        <div className="mt-10 flex flex-col gap-5">
          {/* Featured post */}
          {featured && (
            <Link
              href={featured.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.5)] shimmer-border-hover transition-transform hover:-translate-y-0.5 md:flex-row"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[hsl(var(--secondary))] md:h-auto md:w-2/5">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card)/0.6)] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[hsl(var(--card))]" />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 bg-[hsl(var(--card))] p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <time className="text-xs text-[hsl(var(--muted-foreground))]">{featured.date}</time>
                  <span className="inline-flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                  {featured.hasAudio && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[hsl(var(--accent)/0.2)] bg-[hsl(var(--accent)/0.05)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[hsl(var(--accent))]">
                      <Headphones className="h-3 w-3" aria-hidden="true" />
                      Audio
                    </span>
                  )}
                </div>
                <h3 className="line-clamp-2 text-xl font-bold text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--accent))] md:text-2xl">
                  {featured.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {featured.excerpt}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--accent))] opacity-0 transition-opacity group-hover:opacity-100">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </div>
            </Link>
          )}

          {/* Grid posts */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {grid.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group flex flex-col rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] shimmer-border-hover transition-transform hover:-translate-y-0.5"
              >
                <div className="relative h-36 w-full overflow-hidden rounded-t-xl bg-[hsl(var(--secondary))]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card)/0.8)] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <time className="text-xs text-[hsl(var(--muted-foreground))]">{post.date}</time>
                    <span className="inline-flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                    {post.hasAudio && (
                      <Headphones className="h-3 w-3 text-[hsl(var(--accent))]" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--accent))] md:text-base">
                    {post.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[hsl(var(--muted-foreground))] md:text-sm">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-medium text-[hsl(var(--accent))] opacity-0 transition-opacity group-hover:opacity-100">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
