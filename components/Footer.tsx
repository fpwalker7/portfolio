import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { SITE } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[hsl(var(--background))]">
      <div className="glow-line mx-auto w-full max-w-4xl" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-[hsl(var(--accent))]">
              <Image
                src="/logos/fernanda-logo.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden
                style={{ filter: 'url(#logo-teal-filter)' }}
              />
              {SITE.name}
            </Link>
            <p className="max-w-xs whitespace-pre-line text-sm text-[hsl(var(--muted-foreground))]">
              {SITE.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--border)/0.5)] text-[hsl(var(--muted-foreground))] transition-colors hover:border-[hsl(var(--accent)/0.3)] hover:text-[hsl(var(--foreground))]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/#work" className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]">
                Work
              </Link>
              <Link href="/resume" className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]">
                Resume
              </Link>
            </div>
            <p className="mt-4 text-xs text-[hsl(var(--muted-foreground))]">
              © {year} {SITE.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
