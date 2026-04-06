/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sweetsans: ['"Sweet Sans Pro"'],
        figtree: ['var(--font-figtree)'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}