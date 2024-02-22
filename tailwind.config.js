/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'hsl-green': 'hsl(75, 94%, 57%)',
        'hsl-12': 'hsl(0, 0%, 12%)',
        'hsl-8': 'hsl(0, 0%, 8%)',
        'hsl-20': 'hsl(0, 0%, 20%)',
        'hsl-100': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}