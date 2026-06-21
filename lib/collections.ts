import { localImage, localVideo, SITE_VIDEOS } from '@/lib/media'

export type CollectionCategory = 'BRIDAL' | 'EVENING' | 'READY TO WEAR' | 'RESORT'

export type Collection = {
  slug: string
  name: string
  season: string
  year: number
  pieces: number
  category: CollectionCategory
  description: string
  designerNote: string
  materials: string[]
  heroImage: string
  images: string[]
  videoSrc?: string
}

export const collections: Collection[] = [
  {
    slug: 'lumiere-bridal',
    name: 'Lumière Bridal',
    season: 'Spring/Summer',
    year: 2024,
    pieces: 12,
    category: 'BRIDAL',
    description:
      'An ode to light — gowns that catch the sun at golden hour and hold it through the ceremony. Each piece is draped by hand in our Cape Coast atelier, with silhouettes that honour the body without constraining it.',
    designerNote:
      'I wanted every bride to feel like she was walking through light itself. We used layered silk organza to create that ethereal glow — as if the dress is lit from within.',
    materials: ['Silk Organza', 'French Lace', 'Pearl Embroidery', 'Hand-Dyed Chiffon'],
    heroImage: localImage(0),
    images: [localImage(1), localImage(2), localImage(3), localImage(4)],
    videoSrc: SITE_VIDEOS.vid1,
  },
  {
    slug: 'obsidian-evening',
    name: 'Obsidian Evening',
    season: 'Autumn/Winter',
    year: 2024,
    pieces: 8,
    category: 'EVENING',
    description:
      'Dark glamour for women who command a room. Structured silhouettes in deep blacks and midnight blues, with gold thread detailing that catches candlelight at every turn.',
    designerNote:
      'Evening wear should feel like armour and invitation at once. Obsidian is about power draped in elegance — the woman who needs no introduction.',
    materials: ['Italian Crepe', 'Gold Thread', 'Silk Satin', 'Hand-Beaded Tulle'],
    heroImage: localImage(5),
    images: [localImage(6), localImage(7), localImage(8), localImage(9)],
    videoSrc: SITE_VIDEOS.vid2,
  },
  {
    slug: 'cape-coast-bloom',
    name: 'Cape Coast Bloom',
    season: 'Spring/Summer',
    year: 2023,
    pieces: 10,
    category: 'READY TO WEAR',
    description:
      'Inspired by coastal blooms and garden colour along Cape Coast. Soft pinks, lavenders, and garden greens rendered in flowing day dresses and cocktail pieces.',
    designerNote:
      'This collection is my love letter to the city that raised me. Every colour was sampled from a walk along the coast at dawn.',
    materials: ['Cotton Voile', 'Ghanaian Wax Print', 'Silk Chiffon', 'Natural Dyes'],
    heroImage: localImage(10),
    images: [localImage(11), localImage(12), localImage(0), localImage(1)],
    videoSrc: SITE_VIDEOS.vid3,
  },
  {
    slug: 'ivory-ritual',
    name: 'Ivory Ritual',
    season: 'Autumn/Winter',
    year: 2023,
    pieces: 6,
    category: 'BRIDAL',
    description:
      'Ceremonial whites that transcend the traditional wedding gown. Architectural shapes, sculptural sleeves, and ivory tones ranging from warm cream to cool pearl.',
    designerNote:
      'Ritual dressing is sacred. I approached each gown as a ceremony in itself — something to be passed down, not discarded.',
    materials: ['Heavy Silk Mikado', 'Ivory Lace', 'Sculptural Organza', 'Mother of Pearl Buttons'],
    heroImage: localImage(2),
    images: [localImage(3), localImage(4), localImage(5), localImage(6)],
    videoSrc: SITE_VIDEOS.vid4,
  },
  {
    slug: 'midnight-kente',
    name: 'Midnight Kente',
    season: 'Spring/Summer',
    year: 2024,
    pieces: 9,
    category: 'EVENING',
    description:
      'A contemporary reimagining of Ghanaian kente woven into evening silhouettes. Deep indigos and golds, with handwoven accents that honour heritage while pushing forward.',
    designerNote:
      'Kente tells stories. I worked with weavers in Bonwire to create custom patterns for this collection — each one encodes a proverb about womanhood and strength.',
    materials: ['Handwoven Kente', 'Midnight Silk', 'Gold Lamé', 'Structured Crepe'],
    heroImage: localImage(7),
    images: [localImage(8), localImage(9), localImage(10), localImage(11)],
    videoSrc: localVideo(1),
  },
  {
    slug: 'resort-gold',
    name: 'Resort Gold',
    season: 'Resort',
    year: 2024,
    pieces: 14,
    category: 'RESORT',
    description:
      'Effortless luxury for sun-drenched escapes. Flowing maxi dresses, linen separates, and gold-accented swim cover-ups designed for the woman who travels beautifully.',
    designerNote:
      'Resort wear should feel like a second skin — something you reach for without thinking, that always makes you feel extraordinary.',
    materials: ['Italian Linen', 'Silk Crepe de Chine', 'Gold Hardware', 'Hand-Embroidered Cotton'],
    heroImage: localImage(12),
    images: [localImage(0), localImage(4), localImage(8), localImage(11)],
    videoSrc: localVideo(0),
  },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

export const COLLECTION_FILTERS = ['ALL', 'BRIDAL', 'EVENING', 'READY TO WEAR', 'RESORT'] as const
export type CollectionFilter = (typeof COLLECTION_FILTERS)[number]
