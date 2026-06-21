import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        'off-white': 'var(--canvas-alt)',
        night: 'var(--night)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        gold: 'var(--accent)',
        'baby-pink': '#F8C8DC',
        'on-night': 'var(--on-night)',
        'on-accent': 'var(--on-accent)',
      },
      borderColor: {
        theme: 'var(--border)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
