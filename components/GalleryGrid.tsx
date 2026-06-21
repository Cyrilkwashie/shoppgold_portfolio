'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryItems, type GalleryItem } from '@/lib/gallery'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

function spanClass(span?: GalleryItem['span']) {
  if (span === 'wide') return 'col-span-2 row-span-1'
  if (span === 'tall') return 'col-span-1 row-span-2'
  return 'col-span-1 row-span-1'
}

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem
  index: number
  onOpen: (index: number) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative overflow-hidden bg-off-white min-h-[220px] md:min-h-0 ${spanClass(item.span)} focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
      aria-label={item.caption ?? 'View gallery item'}
    >
      {item.type === 'video' && item.videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={item.src}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        >
          <source src={item.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={item.src}
          alt={item.caption ?? ''}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

      {item.type === 'video' && (
        <span className="absolute top-4 right-4 font-jost text-[10px] uppercase tracking-[0.2em] text-white/90 bg-black/40 px-2 py-1">
          Film
        </span>
      )}

      {item.caption && (
        <p className="absolute bottom-0 left-0 right-0 p-4 font-jost text-[11px] uppercase tracking-widest text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
          {item.caption}
        </p>
      )}
    </button>
  )
}

function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[]
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[activeIndex]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-8 font-jost text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors z-10"
        aria-label="Close gallery"
      >
        Close
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors font-jost text-3xl z-10 p-4"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors font-jost text-3xl z-10 p-4"
        aria-label="Next"
      >
        ›
      </button>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl mx-4 aspect-[3/4] md:aspect-[4/5] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' && item.videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={item.src}
            className="w-full h-full object-contain bg-black"
          >
            <source src={item.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={item.src}
            alt={item.caption ?? ''}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        )}
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <p className="font-jost text-[11px] uppercase tracking-[0.2em] text-white/40">
          {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        {item.caption && (
          <p className="font-cormorant italic font-light text-xl text-white/80 mt-2">
            {item.caption}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
    )
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryItems.length))
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[260px] py-8 md:py-12">
        {galleryItems.map((item, index) => (
          <GalleryTile
            key={item.id}
            item={item}
            index={index}
            onOpen={openLightbox}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && galleryItems[lightboxIndex] && (
          <Lightbox
            items={galleryItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  )
}
