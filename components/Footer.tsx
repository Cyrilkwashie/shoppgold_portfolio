import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/social'

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-night text-on-night overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-8 text-center">
        <h2 className="font-cormorant font-light text-[clamp(1.75rem,9vw,3.75rem)] text-gold tracking-[0.12em] sm:tracking-widest break-words max-w-full leading-none">
          SHOPP_GOLD
        </h2>
        <p className="font-jost text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.4em] uppercase text-on-night/40 mt-4">
          CRAFTED BY SHIKATEL
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 mt-12 border-t border-on-night/10 text-left md:text-center">
          <div>
            <p className="font-jost text-[11px] uppercase tracking-widest text-on-night/40 mb-4">
              Follow
            </p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jost text-[11px] uppercase tracking-widest text-on-night/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-jost text-[11px] uppercase tracking-widest text-on-night/40 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-jost text-[11px] uppercase tracking-widest text-on-night/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:justify-center items-start md:items-center">
            <Link
              href="/contact"
              className="border border-gold text-gold font-jost text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-on-accent transition-colors inline-block"
            >
              INQUIRE
            </Link>
          </div>
        </div>

        <p className="font-jost text-[10px] sm:text-[11px] text-on-night/25 border-t border-on-night/10 mt-8 pt-6 break-words">
          © {new Date().getFullYear()} SHOPP_GOLD. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
