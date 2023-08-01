/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#d88523',
        'custom-orange-fade': '#96692b',

      },
      backgroundImage: {
        'hero-image': "url('/img/slide2.jpg')",
       },
      
    },
  },
  plugins: [],
};

