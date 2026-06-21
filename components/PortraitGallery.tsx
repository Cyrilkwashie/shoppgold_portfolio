'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LOCAL_IMAGES } from '@/lib/media'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

export default function PortraitGallery() {
  const doubled = [...LOCAL_IMAGES, ...LOCAL_IMAGES]

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="h-96 w-72 flex-shrink-0 relative overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="288px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
