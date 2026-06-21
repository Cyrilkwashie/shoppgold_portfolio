'use client'

import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

type ThemeToggleProps = {
  className?: string
  inverted?: boolean
}

export default function ThemeToggle({ className, inverted = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'relative h-8 w-14 rounded-full border transition-colors duration-300',
        inverted
          ? 'border-white/30 bg-white/10'
          : 'border-theme bg-canvas-alt',
        className
      )}
    >
      <span
        className={cn(
          'absolute top-1 left-1 h-6 w-6 rounded-full transition-all duration-300',
          isDark
            ? 'translate-x-6 bg-baby-pink'
            : inverted
              ? 'translate-x-0 bg-white'
              : 'translate-x-0 bg-gold'
        )}
      />
    </button>
  )
}
