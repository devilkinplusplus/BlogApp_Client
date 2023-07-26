/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '128':'512px',
        '256':'768px'
      }
    },
  
    fontFamily:{
      gemunu:['Gemunu Libre', 'sans-serif']
    }
  },
  plugins: [],
}

