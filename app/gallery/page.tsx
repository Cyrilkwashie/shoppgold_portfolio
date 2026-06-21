import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | SHOPP_GOLD',
  description: 'Editorial gallery — dresses, details, and moments by Shikatel.',
}

export default function GalleryPage() {
  return (
    <>
      <header className="pt-28 pb-12 px-8 text-center">
        <p className="font-jost text-[11px] uppercase tracking-[0.4em] text-gold">
          Portfolio
        </p>
        <h1 className="font-cormorant font-light text-6xl md:text-8xl text-ink mt-4 tracking-wide">
          Gallery
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mt-8" />
        <p className="font-jost font-light text-sm text-ink-muted mt-6 max-w-sm mx-auto">
          Click any image to view full size
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <GalleryGrid />
      </section>
    </>
  )
}
