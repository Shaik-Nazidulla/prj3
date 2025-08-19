//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // adjust if you're using ts/tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif', 'Space Grotesk' ],
      },
      fontSize: {
        'hero': '7rem', // for the big "A Web branding"
      },
      spacing: {
        'circle-xl': '150%',
        'circle-lg': '120%',
        'circle-md': '100%',
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
      },
      borderColor: {
        faintWhite: 'rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}
