/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn:{
          '0%':{opacity: '0'},
          '100%':{opacity: '1'}
        }
      },
      colors: {
        'stronghold-red': '#E64747',
        'stronghold-eerie-black': '#191919',
        'stronghold-onyx': '#404040',
        'stronghold-platinum': '#E4E4E4',
        'stronghold-jet': '#343434',
        'stronghold-white': '#ffffff',
        'stronghold-green': '#4ADE80',
        'chewy-blue': '#3b82f6',
        'optum-orange': '#f97316',
        'link-blue': '#818cf8',
        'main-text': '#9CA3AF'
      },
      boxShadow: {
        'project-shadow': '10px 10px 0 0 rgba(230, 71, 71, 0.5)',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
  ],
}
