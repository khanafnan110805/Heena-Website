import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base dark palette
        'bg-base': '#0A0A0A',
        'bg-elevated': '#141414',
        'bg-card': '#1C1C1C',
        'border-dark': '#2A2A2A',
        'border-mid': '#4A4A4A',

        // Gold accent palette
        'gold-primary': '#C9A84C',
        'gold-champagne': '#E8D5A0',
        'gold-amber': '#A67C35',
        'gold-pale': '#F5EDD6',
        'gold-muted': '#7A6028',

        // Text palette
        'text-primary': '#F5F0E8',
        'text-secondary': '#D4CBB8',
        'text-tertiary': '#A39B8A',
        'text-muted': '#6B6258',

        // Semantic
        'success': '#4CAF7C',
        'error': '#E85C4A',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.375rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '4xl': ['3rem', { lineHeight: '3.5rem' }],
        '5xl': ['4rem', { lineHeight: '4.5rem' }],
        '6xl': ['5rem', { lineHeight: '5.5rem' }],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A0 50%, #A67C35 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(10,10,10,0.40) 0%, rgba(10,10,10,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '70%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
