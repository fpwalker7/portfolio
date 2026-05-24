'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Linkedin, Copy, Check } from 'lucide-react'
import { CONTACT, SITE } from '@/lib/data'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-5xl lg:text-6xl">
          {CONTACT.heading}{' '}
          <span className="shimmer-text">{CONTACT.headingShimmer}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
          {CONTACT.subtext}
        </p>


        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={copyEmail}
            className="group flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          >
            <Mail className="h-4 w-4 shimmer-icon" aria-hidden="true" />
            <span>{SITE.email}</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            )}
          </button>

          <span className="hidden h-4 w-px bg-[hsl(var(--border)/0.5)] sm:block" />

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          >
            <Linkedin className="h-4 w-4 shimmer-icon" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
