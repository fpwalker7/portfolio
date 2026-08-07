import fs from 'node:fs'
import path from 'node:path'
import { ExternalLink } from 'lucide-react'

type PdfPage = {
  src: string
  width: number
  height: number
}

type PdfViewerProps = {
  /** Path to the PDF under /public, e.g. /resume/accessibility.pdf */
  src: string
  /** Folder under /public/resume holding the rendered pages, e.g. accessibility-pages */
  pagesDir: string
  /** Human readable document name, used for the iframe title and image alt text */
  title: string
}

/**
 * Reads the manifest written by scripts/render-pdf-pages.py. This runs at build
 * time because the page is statically rendered, so there is no runtime fs cost.
 */
function readPages(pagesDir: string): PdfPage[] {
  const manifest = path.join(process.cwd(), 'public', 'resume', pagesDir, 'pages.json')
  try {
    return JSON.parse(fs.readFileSync(manifest, 'utf8')) as PdfPage[]
  } catch {
    return []
  }
}

/**
 * Renders a PDF two ways, because mobile browsers do not have an inline PDF
 * viewer: iOS Safari and Android Chrome both leave an <iframe> pointing at a
 * PDF blank. Desktop keeps the native viewer, phones get the pages rendered
 * ahead of time as images.
 *
 * Only one of the two is ever visible, and both halves are lazy loaded, so the
 * hidden half stays out of the viewport and is never fetched.
 */
export default function PdfViewer({ src, pagesDir, title }: PdfViewerProps) {
  const pages = readPages(pagesDir)

  return (
    <>
      <iframe
        src={src}
        loading="lazy"
        title={title}
        className="hidden w-full flex-1 rounded-xl border border-[hsl(var(--border)/0.5)] md:block"
        style={{ minHeight: 'calc(100vh - 180px)' }}
      />

      <div className="md:hidden">
        {pages.length > 0 && (
          <ol className="flex flex-col gap-4">
            {pages.map((page, index) => (
              <li key={page.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={page.src}
                  width={page.width}
                  height={page.height}
                  loading="lazy"
                  decoding="async"
                  alt={`${title} — page ${index + 1} of ${pages.length}`}
                  className="h-auto w-full rounded-lg border border-[hsl(var(--border)/0.5)]"
                />
              </li>
            ))}
          </ol>
        )}

        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 text-sm text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent))]"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Open the original PDF
        </a>
      </div>
    </>
  )
}
