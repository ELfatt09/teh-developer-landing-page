/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        background: '#EDEDED',
        text: '#333333',
        primary: '#302815',
        secondary: '#cbcbcb',
        accent: '#6c3a10',
      
        whatsapp: '#25D366',
        instagram: '#C13584',
      },
    },
  }
}