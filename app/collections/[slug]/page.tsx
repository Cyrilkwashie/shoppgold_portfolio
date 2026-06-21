import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import EditorialSplit from '@/components/EditorialSplit'
import RevealOnScroll from '@/components/RevealOnScroll'
import { collections, getCollectionBySlug } from '@/lib/collections'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const collection = getCollectionBySlug(params.slug)
  if (!collection) return { title: 'Collection Not Found | SHOPP_GOLD' }
  return {
    title: `${collection.name} | SHOPP_GOLD`,
    description: collection.description,
  }
}

export default function CollectionDetailPage({ params }: Props) {
  const collection = getCollectionBySlug(params.slug)
  if (!collection) notFound()

  return (
    <>
      <section className="h-screen relative">
        <Image
          src={collection.heroImage}
          alt={collection.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-8 left-8 md:left-16">
          <p className="font-jost text-[11px] uppercase tracking-widest text-white/60">
            Collections / {collection.name}
          </p>
          <h1 className="font-cormorant font-light text-[clamp(2.5rem,6vw,4rem)] text-white leading-none mt-2">
            {collection.name}
          </h1>
        </div>
      </section>

      <EditorialSplit
        index={0}
        imageSrc={collection.images[0]}
        alt={collection.name}
        label={`${collection.season} ${collection.year}`}
        title={collection.name}
        body={collection.description}
      />

      <EditorialSplit
        index={1}
        bg="off-white"
        imageSrc={collection.images[1]}
        alt={`${collection.name} detail`}
        label="Materials"
        title="Fabric & detail."
        titleItalic
        body={collection.materials.join(' · ')}
      />

      <EditorialSplit
        index={2}
        imageSrc={collection.images[2]}
        alt={`${collection.name} editorial`}
        label="Design Notes"
        quote={collection.designerNote}
      />

      {collection.videoSrc && (
        <EditorialSplit
          index={3}
          bg="off-white"
          imageSrc={collection.images[3]}
          videoSrc={collection.videoSrc}
          alt={`${collection.name} film`}
          label="Film"
          title="Behind the collection."
          body={`A closer look at ${collection.name} — the movement, the craft, the intention.`}
        />
      )}

      <section className="py-16 md:py-24">
        <RevealOnScroll>
          <p className="font-jost text-[11px] uppercase tracking-[0.3em] text-ink-muted text-center mb-12">
            Lookbook
          </p>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {collection.images.map((img, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden">
              <Image
                src={img}
                alt={`Look ${i + 1}`}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-inset ring-2 ring-gold">
                <span className="font-cormorant text-4xl text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EditorialSplit
        index={collection.videoSrc ? 4 : 3}
        bg="ink"
        imageSrc={collection.heroImage}
        alt={collection.name}
        label="Commission"
        title="Make it yours."
        titleItalic
        body="Commission a piece from this collection — tailored to you, made by hand in Cape Coast."
        link={{ href: '/contact', label: 'Inquire →' }}
      />
    </>
  )
}
