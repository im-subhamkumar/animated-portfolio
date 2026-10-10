/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace'],
      },
      colors: {
        orange: {
          DEFAULT: '#ff6b1a',
          glow: '#ff8533',
          dark: '#ea580c',
          subtle: 'rgba(255, 107, 26, 0.12)',
        },
        dark: {
          bg: '#080808',
          card: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#ffffff',
          muted: '#a0a0a0',
          subtle: '#666666',
        }
      },
      boxShadow: {
        'dark-glass': '0 20px 45px -12px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
        'dark-card': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px -3px rgba(255, 107, 26, 0.05)',
        'orange-glow': '0 0 30px -5px rgba(255, 107, 26, 0.45)',
      }
    },
  },
  plugins: [],
}
