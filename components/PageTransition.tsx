'use client'

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </m.main>
      </AnimatePresence>
    </LazyMotion>
  )
}
