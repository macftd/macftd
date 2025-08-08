/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0f',
        'cyber-gray': '#1a1a2e',
        'cyber-blue': '#16213e',
        'cyber-green': '#0f3460',
        'cyber-accent': '#e94560',
      },
      fontFamily: {
        'arabic': ['var(--font-tajawal)', 'system-ui'],
        'cyber': ['var(--font-orbitron)', 'monospace'],
        'condensed': ['var(--font-roboto-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}