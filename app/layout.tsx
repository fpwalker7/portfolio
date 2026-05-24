import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ShimmerTracker from '@/components/ShimmerTracker'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

// ─── EDIT THESE ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Fernanda Passos Walker | Senior Web Developer',
  description: 'Senior web developer with 15+ years building high-performing websites, scalable CMS systems, and marketing technology integrations for enterprise teams.',
  keywords: ['web developer', 'senior web developer', 'enterprise WordPress', 'Next.js', 'CMS architecture', 'accessibility', 'technical SEO', 'Fernanda Passos Walker'],
  authors: [{ name: 'Fernanda Passos Walker' }],
  openGraph: {
    title: 'Fernanda Passos Walker — Senior Web Developer',
    description: 'Senior web developer with 15+ years building high-performing websites, scalable CMS systems, and marketing technology integrations for enterprise teams.',
    url: 'https://fpassos.com',
    siteName: 'Fernanda Passos Walker',
    images: [{ url: 'https://fpassos.com/images/social-share.png', alt: 'Fernanda Passos Walker' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernanda Passos Walker | Senior Web Developer',
    description: 'Senior web developer with 15+ years building high-performing websites, scalable CMS systems, and marketing technology integrations for enterprise teams.',
    images: ['https://fpassos.com/images/social-share.png'],
  },
}
// ─────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#1a1d21" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* SVG filter — sets logo to exact #22C4D3 while preserving transparency */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
          <defs>
            <filter id="logo-teal-filter">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.1333
                        0 0 0 0 0.7686
                        0 0 0 0 0.8275
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <ShimmerTracker />
        {children}
      </body>
    </html>
  )
}
