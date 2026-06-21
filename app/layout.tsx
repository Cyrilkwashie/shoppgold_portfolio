import type { Metadata } from 'next'
import { cormorant, jost } from '@/lib/fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHOPP_GOLD | Shikatel',
  description: 'Bespoke dresses. Singular women.',
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
