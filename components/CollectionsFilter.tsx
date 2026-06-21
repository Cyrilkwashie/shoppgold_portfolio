'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CollectionCard from '@/components/CollectionCard'
import EditorialSplit from '@/components/EditorialSplit'
import {
  collections,
  COLLECTION_FILTERS,
  type CollectionFilter,
  type Collection,
} from '@/lib/collections'
import { SITE_IMAGES } from '@/lib/media'

function CollectionGrid({ items }: { items: Collection[] }) {
  const firstThree = items.slice(0, 3)
  const rest = items.slice(3)

  return (
    <>
      {firstThree.map((collection, index) => (
        <motion.div
          key={collection.slug}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <CollectionCard
            slug={collection.slug}
            name={collection.name}
            imageSrc={collection.heroImage}
            pieces={collection.pieces}
            season={collection.season}
          />
        </motion.div>
      ))}
      {items.length > 3 && (
        <div className="col-span-full">
          <EditorialSplit
            index={1}
            bg="ink"
            imageSrc={SITE_IMAGES.img1}
            quote="She doesn't make clothes. She makes certainty."
          />
        </div>
      )}
      {rest.map((collection, index) => (
        <motion.div
          key={collection.slug}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (index + 3) * 0.05 }}
        >
          <CollectionCard
            slug={collection.slug}
            name={collection.name}
            imageSrc={collection.heroImage}
            pieces={collection.pieces}
            season={collection.season}
          />
        </motion.div>
      ))}
    </>
  )
}

export default function CollectionsFilter() {
  const [activeFilter, setActiveFilter] = useState<CollectionFilter>('ALL')

  const filtered =
    activeFilter === 'ALL'
      ? collections
      : collections.filter((c) => c.category === activeFilter)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 py-8 border-b border-theme">
        {COLLECTION_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`font-jost text-[11px] uppercase tracking-[0.2em] pb-2 transition-colors ${
              activeFilter === filter
                ? 'border-b border-gold text-gold'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <CollectionGrid items={filtered} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
