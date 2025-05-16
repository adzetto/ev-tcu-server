/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'voltaris-red': '#FF4254',
        'voltaris-blue': '#0044FF',
        'voltaris-light-blue': '#CEE5F2',
        'voltaris-light': '#FFFFFF',
        'voltaris-bg': '#FFFFFF',
        'voltaris-card': '#FFFFFF',
        'voltaris-card-dark': '#FAFAFA',
        'voltaris-text': '#3A506B',
        'voltaris-text-light': '#6B8CAD',
        'voltaris-soft-bg': '#F0F7FF',
        'voltaris-hover': '#EBF5FF',
        'voltaris-neutral-50': '#F8FAFC',
        'voltaris-neutral-100': '#F1F5F9',
        'voltaris-neutral-200': '#E2E8F0',
        'voltaris-neutral-300': '#CBD5E1',
        'voltaris-neutral-400': '#94A3B8',
        'voltaris-neutral-500': '#64748B',
        'voltaris-neutral-600': '#475569',
        'voltaris-neutral-700': '#334155',
        'voltaris-neutral-800': '#1E293B',
        'voltaris-neutral-900': '#0F172A',
      },
      animation: {
        loadingBar: 'loadingBar 2.5s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDelay: 'fadeInDelay 1.2s ease-out forwards',
        fadeInDelayLong: 'fadeInDelayLong 1.5s ease-out forwards',
        horizontalSweep: 'horizontalSweep 8s linear infinite',
        verticalSweep: 'verticalSweep 8s linear infinite',
        pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        rotate: 'rotate 20s linear infinite',
        scanLine: 'scanLine 3s linear infinite',
        dataStream: 'dataStream 5s linear infinite',
        barGrow: 'barGrow 1.5s ease-out forwards',
        'circuit-line-1': 'circuit-line-1 3s ease-in-out infinite',
        'circuit-line-2': 'circuit-line-2 3s ease-in-out infinite',
        'circuit-line-3': 'circuit-line-3 3s ease-in-out infinite',
        'circuit-line-4': 'circuit-line-4 3s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 3s ease-in-out infinite',
        'rotate-gradient': 'rotate-gradient 3s linear infinite',
        'sectionFadeIn': 'sectionFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'diagonalScan': 'diagonalScan 10s linear infinite',
        'diagonalScanReverse': 'diagonalScanReverse 10s linear infinite',
        'hide-scrollbar': 'hide-scrollbar 0.1s forwards',
        'sponsorSlide': 'sponsorSlide 30s linear infinite',
      },
      backgroundImage: {
        'circuit-pattern': `
          linear-gradient(to right, rgba(212, 83, 102, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(58, 110, 143, 0.05) 1px, transparent 1px)
        `,
        'technical-grid': `
          linear-gradient(to right, rgba(212, 83, 102, 0.05) 1px, transparent 1px), 
          linear-gradient(to bottom, rgba(58, 110, 143, 0.05) 1px, transparent 1px)
        `,
        'gradient-red-blue': 'linear-gradient(90deg, #D45366 0%, #3A6E8F 100%)',
        'gradient-blue-red': 'linear-gradient(90deg, #3A6E8F 0%, #D45366 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(212, 83, 102, 0.3)',
        'blue-glow': '0 0 15px rgba(58, 110, 143, 0.3)',
        'light-glow': '0 0 15px rgba(168, 218, 220, 0.3)',
        'card': '0 4px 12px rgba(29, 53, 87, 0.05)',
        'platinum': '0 0 15px rgba(255, 223, 0, 0.2)',
        'gold': '0 0 15px rgba(255, 215, 0, 0.2)',
        'silver': '0 0 15px rgba(192, 192, 192, 0.2)',
        'bronze': '0 0 15px rgba(205, 127, 50, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.03)' }
        },
        'circuit-line-1': {
          '0%': { transform: 'translateX(-100%)', opacity: 0.8 },
          '100%': { transform: 'translateX(100%)', opacity: 0.8 },
        },
        'circuit-line-2': {
          '0%': { transform: 'translateY(-100%)', opacity: 0.8 },
          '100%': { transform: 'translateY(100%)', opacity: 0.8 },
        },
        'circuit-line-3': {
          '0%': { transform: 'translateX(100%)', opacity: 0.8 },
          '100%': { transform: 'translateX(-100%)', opacity: 0.8 },
        },
        'circuit-line-4': {
          '0%': { transform: 'translateY(100%)', opacity: 0.8 },
          '100%': { transform: 'translateY(-100%)', opacity: 0.8 },
        },
        'circuit-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'rotate-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'sectionFadeIn': {
          'from': { opacity: 0, transform: 'translateY(30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'diagonalScan': {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' }
        },
        'diagonalScanReverse': {
          '0%': { transform: 'translateX(100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(-100%) rotate(-45deg)' }
        },
        'hide-scrollbar': {
          '0%': { '::-webkit-scrollbar': { width: '0px' } },
          '100%': { '::-webkit-scrollbar': { width: '0px' } }
        },
        'sponsorSlide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
      transitionProperty: {
        'theme': 'color, background-color, border-color, opacity, box-shadow',
      },
      transitionTimingFunction: {
        'tesla': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}