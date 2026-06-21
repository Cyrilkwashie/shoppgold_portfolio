import type { Metadata } from 'next'
import CollectionsFilter from '@/components/CollectionsFilter'
import EditorialSplit from '@/components/EditorialSplit'
import { SITE_IMAGES } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Collections | SHOPP_GOLD',
  description: 'Explore bespoke dress collections by Shikatel.',
}

export default function CollectionsPage() {
  return (
    <>
      <EditorialSplit
        index={0}
        imageSrc={SITE_IMAGES.img3}
        alt="Collections"
        label="Portfolio"
        title="Collections"
        body="Six bodies of work — bridal, evening, ready-to-wear, and resort. Each piece handmade in Cape Coast for the woman who knows exactly who she is."
      />

      <CollectionsFilter />
    </>
  )
}
