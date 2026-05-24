'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/data'

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group border-b border-[hsl(var(--border)/0.3)] transition-colors">
      <button
        type="button"
        className="flex w-full cursor-pointer items-start gap-4 px-0 py-5 text-left md:px-2 md:py-6"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="mt-0.5 shrink-0 font-mono text-xs text-[hsl(var(--accent)/0.6)]">{num}</span>
        <span className="flex-1 text-sm font-medium text-[hsl(var(--foreground))] md:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pl-9 pr-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:pl-11 md:pr-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const half = Math.ceil(FAQ_ITEMS.length / 2)
  const left = FAQ_ITEMS.slice(0, half)
  const right = FAQ_ITEMS.slice(half)

  return (
    <section id="faq" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl lg:text-5xl">
          Common <span className="shimmer-text">questions</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
          Straight answers about how I work, what I build, and what to expect.
        </p>

        <div className="mt-12 flex flex-col gap-0 lg:flex-row lg:gap-12">
          <div className="flex-1">
            {left.map((item, i) => (
              <FAQItem key={item.question} item={item} index={i} />
            ))}
          </div>
          <div className="flex-1">
            {right.map((item, i) => (
              <FAQItem key={item.question} item={item} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
