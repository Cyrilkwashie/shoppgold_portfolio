'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

type EditorialSplitProps = {
  /** Even = image left, odd = image right */
  index: number
  imageSrc?: string
  alt?: string
  videoSrc?: string
  label?: string
  title?: string
  titleItalic?: boolean
  body?: string
  quote?: string
  link?: { href: string; label: string }
  bg?: 'white' | 'off-white' | 'ink'
  /** On mobile, show copy above the image instead of below */
  mobileTextFirst?: boolean
  children?: React.ReactNode
}

export default function EditorialSplit({
  index,
  imageSrc,
  alt = '',
  videoSrc,
  label,
  title,
  titleItalic = false,
  body,
  quote,
  link,
  bg = 'white',
  mobileTextFirst = false,
  children,
}: EditorialSplitProps) {
  const reverse = index % 2 === 1
  const dark = bg === 'ink'

  const bgClass =
    bg === 'ink' ? 'bg-ink' : bg === 'off-white' ? 'bg-off-white' : 'bg-white'

  const imageOrder = mobileTextFirst ? 'order-2 lg:order-none' : ''
  const textOrder = mobileTextFirst ? 'order-1 lg:order-none' : ''

  return (
    <section className={`${bgClass} py-16 md:py-24 lg:py-32`}>
      <div
        className={`max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <RevealOnScroll
          direction={reverse ? 'right' : 'left'}
          className={`relative aspect-[3/4] overflow-hidden lg:[direction:ltr] ${imageOrder}`}
        >
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={alt || undefined}
              {...(imageSrc ? { poster: imageSrc } : {})}
              className="absolute inset-0 h-full w-full object-cover bg-black"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.15}
          direction={reverse ? 'left' : 'right'}
          className={`flex flex-col justify-center lg:[direction:ltr] py-4 lg:py-0 ${textOrder}`}
        >
          {label && (
            <p
              className={`font-jost text-[11px] uppercase tracking-[0.3em] mb-4 ${
                dark ? 'text-gold' : 'text-ink-muted'
              }`}
            >
              {label}
            </p>
          )}
          {title && (
            <h2
              className={`font-cormorant font-light text-4xl md:text-5xl leading-tight ${
                titleItalic ? 'italic' : ''
              } ${dark ? 'text-white' : 'text-ink'}`}
            >
              {title}
            </h2>
          )}
          {quote && (
            <blockquote
              className={`font-cormorant italic font-light text-3xl md:text-4xl leading-snug mt-2 ${
                dark ? 'text-white' : 'text-ink'
              }`}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          )}
          {body && (
            <p
              className={`font-jost font-light text-sm leading-relaxed mt-6 max-w-md ${
                dark ? 'text-white/70' : 'text-ink-muted'
              }`}
            >
              {body}
            </p>
          )}
          {children}
          {link && (
            <Link
              href={link.href}
              className="font-jost text-xs sm:text-sm uppercase tracking-[0.22em] text-gold font-medium mt-8 inline-block border-b border-gold/60 pb-1 hover:border-gold hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}
