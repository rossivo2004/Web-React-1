/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9F0D',
        'secondary': '#698141',
        'bg_popup': 'rgba(0, 0, 0, 0.8)',
        'hover_1': '#ffffff99',
        'price': '#e8b007',
        'text_1': '#828282',
        'page': '#E5E5E5',
      },
      backgroundImage: {
        'home_1': "url('/public/images/Group 1000002107.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}