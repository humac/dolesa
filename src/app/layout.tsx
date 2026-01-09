import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dolesa Eco Learning | Sustainable Education for Tomorrow',
  description: 'Empowering communities through sustainable education, environmental awareness, and eco-conscious learning experiences. Join us in building a greener future.',
  keywords: ['eco learning', 'sustainability', 'environmental education', 'green education', 'climate action'],
  authors: [{ name: 'Dolesa Eco Learning' }],
  openGraph: {
    title: 'Dolesa Eco Learning',
    description: 'Sustainable Education for Tomorrow',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
