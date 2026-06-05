/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        forest: '#1A4A6A',
        sage: '#2D9E8E',
        'sage-light': '#5BB8AB',
        gold: '#2D9E8E',
        'gold-light': '#7DCFC6',
        cream: '#EAF5F2',
        'cream-dark': '#D5EDE8',
        charcoal: '#2C2C2C',
        muted: '#5A6B7A',
      },
    },
  },
  plugins: [],
}
