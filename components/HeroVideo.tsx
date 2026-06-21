'use client'

type HeroVideoProps = {
  videoSrc: string
  posterSrc?: string
  title?: string
  subtitle?: string
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  title = 'SHOPP_GOLD',
  subtitle,
}: HeroVideoProps) {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        {...(posterSrc ? { poster: posterSrc } : {})}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-start p-8 pb-24 md:p-16">
        <div>
          <h1 className="font-cormorant font-light text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 font-jost text-sm font-light uppercase tracking-[0.25em] text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-[1px] animate-scroll-pulse bg-gold" />
      </div>
    </section>
  )
}
