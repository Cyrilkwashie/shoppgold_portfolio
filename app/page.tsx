import HeroVideo from '@/components/HeroVideo'
import EditorialSplit from '@/components/EditorialSplit'
import { HERO_VIDEO, HOME_IMAGES, SEW_VIDEO } from '@/lib/media'

export default function Home() {
  return (
    <>
      <HeroVideo
        videoSrc={HERO_VIDEO}
        title="SHOPP_GOLD"
      />

      <EditorialSplit
        index={0}
        imageSrc={HOME_IMAGES.artOfTheDress}
        alt="The art of the dress"
        label="Atelier · Cape Coast"
        title="The art of the dress."
        titleItalic
        body="Every gown begins with a conversation — about who you are, where you're going, and how you want to feel when you arrive. Shikatel crafts each piece by hand, where West African heritage meets couture technique."
        link={{ href: '/about', label: 'About Shikatel →' }}
      />

      <EditorialSplit
        index={1}
        bg="off-white"
        imageSrc={HOME_IMAGES.collections}
        alt="Collections"
        label="Portfolio"
        title="Collections"
        body="Six distinct bodies of work — bridal, evening, ready-to-wear, and resort. Each collection tells a story through silhouette, fabric, and the woman who wears it."
        link={{ href: '/collections', label: 'View All Collections →' }}
      />

      <EditorialSplit
        index={2}
        mobileTextFirst
        imageSrc={HOME_IMAGES.sketch}
        alt="Sketch"
        label="Process · 01"
        title="Sketch"
        body="It starts on paper — exploring silhouette and proportion before a single thread is cut. Every line is intentional."
      />

      <EditorialSplit
        index={3}
        mobileTextFirst
        bg="off-white"
        imageSrc={HOME_IMAGES.drape}
        alt="Drape"
        label="Process · 02"
        title="Drape"
        body="Fabric is pinned directly on the form. The body dictates the shape — not the other way around."
      />

      <EditorialSplit
        index={4}
        mobileTextFirst
        alt="Sew"
        videoSrc={SEW_VIDEO}
        label="Process · 03"
        title="Sew"
        body="Every seam sewn by hand. Every detail placed with intention until the dress is ready to meet its woman."
      />

      <EditorialSplit
        index={5}
        bg="off-white"
        imageSrc={HOME_IMAGES.gallery}
        alt="Gallery"
        label="Gallery"
        title="Moments & details."
        titleItalic
        body="Editorial spreads, fabric close-ups, and the quiet beauty of the atelier — a visual diary of the work."
        link={{ href: '/gallery', label: 'View Gallery →' }}
      />
    </>
  )
}
