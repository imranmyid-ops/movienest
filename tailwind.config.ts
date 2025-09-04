import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0f',
        panel: '#121218',
        soft: '#1a1a24',
        text: '#f3f4f6',
        muted: '#a1a1aa',
        accent: '#ef4444',
        accent2: '#dc2626'
      },
      boxShadow: {
        glow: '0 0 24px rgba(239,68,68,.35)'
      }
    },
  },
  plugins: [],
} satisfies Config
