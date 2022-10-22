const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      boxShadow: {
        project: '0 0px 10px 2px rgb(0 0 0 / 0.1)'
      },
      fontFamily: {
        sans: ['InterVariable', 'sans-serif']
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('fine-pointer', '@media (pointer: fine)')
    }),
  ],
}
