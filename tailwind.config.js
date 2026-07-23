/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          // Primary: scientific teal (trust, precision)
          teal: {
            50:  '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            500: '#14B8A6',
            600: '#0D9488',
            700: '#0F766E',
            800: '#115E59',
            900: '#134E4A',
          },
          // Agricultural authority: deep forest green
          forest: {
            50:  '#F0FDF4',
            100: '#DCFCE7',
            200: '#A7F3C0',
            400: '#4ADE80',
            500: '#2D6A4F',
            600: '#1F5C42',
            700: '#1A4A35',
            800: '#163D2C',
            900: '#0D2B1D',
          },
          // Certification & CTA: warm scientific amber/gold
          amber: {
            50:  '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
          },
          // Accent sky for info/aqua species
          sky: {
            50:  '#F0F9FF',
            100: '#E0F2FE',
            400: '#38BDF8',
            500: '#0284C7',
            600: '#0369A1',
            700: '#075985',
          },
          // Emerald for growth metrics
          green: {
            50:  '#F0FDF4',
            100: '#DCFCE7',
            500: '#22C55E',
            600: '#16A34A',
            700: '#15803D',
          },
          // Deep navy-slate for dark backgrounds
          navy: {
            900: '#0D1B2A',
            800: '#112031',
            700: '#162840',
          },
        },
      },
      boxShadow: {
        'teal-glow':   '0 0 24px -4px rgba(13, 148, 136, 0.35)',
        'forest-glow': '0 0 24px -4px rgba(45, 106, 79, 0.35)',
        'amber-glow':  '0 0 24px -4px rgba(245, 158, 11, 0.30)',
      },
      backgroundImage: {
        'gradient-forest-teal': 'linear-gradient(135deg, #1A4A35, #0F766E)',
        'gradient-teal-sky':    'linear-gradient(135deg, #0D9488, #0369A1)',
      },
    },
  },
  plugins: [],
}
