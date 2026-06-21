'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/collections', label: 'COLLECTIONS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const pathname = usePathname()
  const scrolled = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/collections') {
      return pathname === href || pathname.startsWith('/collections/')
    }
    return pathname === href
  }

  const isHome = pathname === '/'
  const heroNav = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b',
          heroNav
            ? 'border-transparent bg-transparent'
            : 'border-theme bg-canvas/95 backdrop-blur-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="relative group">
            <span
              className={cn(
                'font-cormorant text-lg font-light tracking-widest transition-colors',
                heroNav ? 'text-white' : 'text-ink'
              )}
            >
              SHOPP_GOLD
            </span>
            <span className="absolute -bottom-1 left-0 h-[1px] bg-gold w-[30%]" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link transition-colors',
                  heroNav
                    ? 'text-white/70 hover:text-white'
                    : 'text-ink-muted hover:text-ink',
                  isActive(link.href) &&
                    (heroNav ? 'text-white after:!w-full' : 'text-ink after:!w-full')
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle inverted={heroNav} />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle inverted={heroNav} />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className={cn('block w-6 h-[1px]', heroNav ? 'bg-white' : 'bg-ink')} />
              <span className={cn('block w-6 h-[1px]', heroNav ? 'bg-white' : 'bg-ink')} />
              <span className={cn('block w-6 h-[1px]', heroNav ? 'bg-white' : 'bg-ink')} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-canvas z-[60] flex items-center justify-center flex-col gap-8 md:hidden"
          >
            <button
              type="button"
              className="absolute top-6 right-8 text-ink font-jost text-[11px] tracking-[0.2em] uppercase"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'font-cormorant text-5xl font-light tracking-wide',
                  isActive(link.href) ? 'text-gold' : 'text-ink'
                )}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
