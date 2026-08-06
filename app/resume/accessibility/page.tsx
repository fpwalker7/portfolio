import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Initiative | Fernanda Passos Walker',
  description: 'Accessibility initiative — Fernanda Passos Walker',
}

export default function AccessibilityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[hsl(var(--background))]">
      <div className="mx-auto w-full max-w-5xl px-6 pt-8">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to resume
        </Link>
      </div>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-10 pt-6">
        <h1 className="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">
          Accessibility Initiative
        </h1>
        <iframe
          src="/resume/accessibility.pdf"
          className="flex-1 w-full rounded-xl border border-[hsl(var(--border)/0.5)]"
          style={{ minHeight: 'calc(100vh - 180px)' }}
          title="Accessibility Initiative PDF"
        />
      </main>
    </div>
  )
}
