'use client'

import { Download } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--accent)/0.5)] bg-[hsl(var(--secondary))] px-4 py-2 text-sm font-medium print:hidden"
    >
      <Download className="h-4 w-4 shimmer-icon" aria-hidden="true" />
      <span className="shimmer-text">Download PDF</span>
    </button>
  )
}
