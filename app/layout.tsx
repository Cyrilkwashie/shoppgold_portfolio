import type { Metadata } from 'next'
import { cormorant, jost } from '@/lib/fonts'
import { getSiteUrl } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: 'SHOPP_GOLD | Shikatel',
    template: '%s | SHOPP_GOLD',
  },
  description:
    'Bespoke dresses. Singular women. Handcrafted gowns by Shikatel in Cape Coast, Ghana.',
  applicationName: 'SHOPP_GOLD',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'SHOPP_GOLD',
    title: 'SHOPP_GOLD | Shikatel',
    description:
      'Bespoke dresses. Singular women. Handcrafted gowns by Shikatel in Cape Coast, Ghana.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHOPP_GOLD | Shikatel',
    description: 'Bespoke dresses. Singular women.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  )
}
