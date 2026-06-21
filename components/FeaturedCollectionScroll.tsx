'use client'

import { useRef, useState, useCallback } from 'react'
import CollectionCard from '@/components/CollectionCard'
import type { Collection } from '@/lib/collections'

type FeaturedCollectionScrollProps = {
  collections: Collection[]
}

export default function FeaturedCollectionScroll({ collections }: FeaturedCollectionScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0)
  }, [])

  return (
    <div>
      <p className="font-jost text-[11px] uppercase tracking-[0.3em] text-white/50 text-center mb-8 px-8">
        Current Collection
      </p>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto flex gap-6 px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {collections.map((collection) => (
          <div key={collection.slug} className="w-80 flex-shrink-0 snap-start">
            <CollectionCard
              slug={collection.slug}
              name={collection.name}
              imageSrc={collection.heroImage}
              pieces={collection.pieces}
              season={collection.season}
            />
          </div>
        ))}
      </div>
      <div className="px-8 mt-4">
        <div className="h-[1px] bg-white/20 relative">
          <div
            className="absolute top-0 left-0 h-full bg-gold transition-all duration-150"
            style={{ width: `${Math.max(progress * 100, 5)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
