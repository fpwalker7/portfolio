import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { SITE, CONTACT } from '@/lib/data'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(var(--border)/0.5)] bg-[hsl(var(--background)/0.8)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[hsl(var(--accent))]">
          <Image
            src="/logos/fernanda-logo.svg"
            alt=""
            width={28}
            height={28}
            aria-hidden
            style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(75%) saturate(520%) hue-rotate(152deg) brightness(93%) contrast(91%)' }}
          />
          {SITE.name}
        </Link>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[hsl(var(--border)/0.5)] text-[hsl(var(--muted-foreground))] transition-colors hover:border-[hsl(var(--accent)/0.3)] hover:text-[hsl(var(--foreground))]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>

          <Link
            href="/#work"
            className="inline-flex h-9 items-center justify-center rounded-md border border-[hsl(var(--accent))] bg-transparent px-3 text-sm font-medium text-[hsl(var(--accent))] transition-colors hover:bg-[hsl(var(--accent)/0.1)]"
          >
            View my work
          </Link>
        </div>
      </nav>
    </header>
  )
}
