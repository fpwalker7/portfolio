import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PdfViewer from '@/components/PdfViewer'

export const metadata = {
  title: 'Global Localization Initiative | Fernanda Passos Walker',
  description: 'Global localization initiative — Fernanda Passos Walker',
}

export default function LocalizationPage() {
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
          Global Localization Initiative
        </h1>
        <PdfViewer
          src="/resume/localization.pdf"
          pagesDir="localization-pages"
          title="Global Localization Initiative"
        />
      </main>
    </div>
  )
}
