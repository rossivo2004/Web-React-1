/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#015001',
        'secondary': '#698141',
        'bg_popup': 'rgba(0, 0, 0, 0.8)',
        'hover_1': '#ffffff99',
        'price': '#e8b007'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}