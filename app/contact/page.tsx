import type { Metadata } from 'next'
import Image from 'next/image'
import InquiryForm from '@/components/InquiryForm'
import EditorialSplit from '@/components/EditorialSplit'
import RevealOnScroll from '@/components/RevealOnScroll'
import { ABOUT_IMAGES, SITE_IMAGES } from '@/lib/media'
import { SOCIAL_LINKS, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/social'
import { BLUR_DATA_URL } from '@/lib/blur-placeholder'

export const metadata: Metadata = {
  title: 'Contact | SHOPP_GOLD',
  description: 'Commission a bespoke dress from Shikatel.',
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function SnapchatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c2 0 3.5 1.5 3.5 4.5 0 1.5-.5 2.5-1 3.5 1 .5 2 1 3 2-1 1.5-2.5 2-4 2s-3-.5-4-2c1-1 2-1.5 3-2-.5-1-1-2-1-3.5C8.5 3.5 10 2 12 2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
      <path d="M9 10.5c.5 1.5 2 3 3.5 3.5l1.5-1.5c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7-1 1-2.3 1.5-3.7 1-3.2-1.1-5.7-3.6-6.8-6.8-.5-1.4 0-2.7 1-3.7.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7L9 10.5z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socialIcons = {
  Instagram: InstagramIcon,
  Snapchat: SnapchatIcon,
  WhatsApp: WhatsAppIcon,
  TikTok: TikTokIcon,
} as const

export default function ContactPage() {
  return (
    <>
      <EditorialSplit
        index={0}
        imageSrc={SITE_IMAGES.img1}
        alt="Get in touch"
        label="Contact"
        title="Get in touch."
        titleItalic
        body="Every commission begins with a conversation. Share your vision and Shikatel will bring it to life — by appointment only, from her atelier in Cape Coast."
      />

      <section className="py-16 md:py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:[direction:rtl]">
          <RevealOnScroll direction="right" className="lg:[direction:ltr]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={ABOUT_IMAGES.shikatel}
                alt="Shikatel's Atelier"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} direction="left" className="lg:[direction:ltr] py-4">
            <p className="font-jost text-[11px] uppercase tracking-[0.3em] text-ink-muted mb-4">
              Atelier
            </p>
            <h2 className="font-cormorant font-light text-4xl">Shikatel&apos;s Atelier</h2>
            <div className="font-jost font-light text-sm text-ink-muted space-y-3 mt-6">
              <p>Location: Cape Coast, Ghana</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@shoppgold.com" className="hover:text-gold transition-colors">
                  hello@shoppgold.com
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              {SOCIAL_LINKS.filter((link) => link.label !== 'WhatsApp').map((link) => (
                <p key={link.label}>
                  {link.label}:{' '}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    @{link.handle}
                  </a>
                </p>
              ))}
              <p>By appointment only.</p>
            </div>
            <div className="mt-8 flex gap-6 text-ink">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.label]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
            <p className="font-jost italic font-light text-xs text-ink-muted mt-8">
              Commission timeline: 8–12 weeks from consultation to final fitting.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <RevealOnScroll>
            <p className="font-jost text-[11px] uppercase tracking-[0.3em] text-ink-muted mb-4">
              Commission
            </p>
            <h2 className="font-cormorant italic font-light text-4xl">Commission a dress.</h2>
            <p className="font-jost font-light text-sm text-ink-muted mt-4 max-w-md">
              Tell Shikatel about your vision — the occasion, the feeling, the dress you&apos;ve been imagining.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} direction="right">
            <InquiryForm />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ink py-32 text-center px-8">
        <h2 className="font-cormorant font-light text-6xl md:text-8xl text-gold">SHOPP_GOLD</h2>
        <p className="font-jost text-[11px] uppercase tracking-[0.4em] text-white/30 mt-4">
          CRAFTED BY SHIKATEL · CAPE COAST
        </p>
      </section>
    </>
  )
}
