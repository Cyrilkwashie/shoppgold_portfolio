import Image from 'next/image'
import Link from 'next/link'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

type CollectionCardProps = {
  slug: string
  name: string
  imageSrc: string
  pieces: number
  season: string
}

export default function CollectionCard({
  slug,
  name,
  imageSrc,
  pieces,
  season,
}: CollectionCardProps) {
  return (
    <Link href={`/collections/${slug}`} className="block group overflow-hidden cursor-none relative">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="font-cormorant text-2xl font-light text-white">{name}</h3>
          <p className="font-jost text-[11px] uppercase tracking-widest text-gold mt-1">
            {pieces} Pieces · {season}
          </p>
          <p className="font-jost text-[11px] uppercase tracking-widest text-white/80 mt-3">
            VIEW COLLECTION →
          </p>
        </div>
      </div>
    </Link>
  )
}
