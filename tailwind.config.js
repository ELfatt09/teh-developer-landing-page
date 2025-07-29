// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,mdx}",
    "./public/index.html",
    // tambahin folder lain kalau ada: components/, pages/, dll.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // kalo pake kelas dinamis, safelist di bawah:
  safelist: [
    // contoh:
    'bg-green-500',
    'text-xl',
    // atau regex:
    { pattern: /^bg-/, variants: ['sm','md','lg'] },
  ],
}
