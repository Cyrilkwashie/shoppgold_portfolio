import type { Metadata } from 'next'
import EditorialSplit from '@/components/EditorialSplit'
import { ABOUT_IMAGES } from '@/lib/media'

export const metadata: Metadata = {
  title: 'About | SHOPP_GOLD',
  description: 'Meet Shikatel — designer, maker, storyteller.',
}

const quotes = [
  'Every woman deserves a dress that knows her name.',
  'Heritage is not nostalgia — it is foundation.',
  'Luxury is the space between the stitch and the skin.',
]

export default function AboutPage() {
  return (
    <>
      <EditorialSplit
        index={0}
        imageSrc={ABOUT_IMAGES.shikatel}
        alt="Shikatel"
        label="About"
        title="SHIKATEL"
        body="Designer. Maker. Storyteller. Based in Cape Coast, Ghana — crafting bespoke gowns for singular women across the world."
      />

      <EditorialSplit
        index={1}
        bg="off-white"
        imageSrc={ABOUT_IMAGES.origins}
        alt="Atelier"
        label="Origins"
        title="Rooted in Cape Coast."
        titleItalic
        body="Shikatel founded SHOPP_GOLD in 2019 from a small studio in Cape Coast. What began as custom commissions for friends and family grew into one of West Africa&apos;s most sought-after bespoke ateliers — trained in Paris, rooted in Ghanaian textile tradition."
      />

      {quotes.map((quote, i) => (
        <EditorialSplit
          key={quote}
          index={i + 2}
          bg={i % 2 === 0 ? 'white' : 'off-white'}
          imageSrc={ABOUT_IMAGES.quotes[i]}
          alt="Shikatel"
          quote={quote}
        />
      ))}
    </>
  )
}
