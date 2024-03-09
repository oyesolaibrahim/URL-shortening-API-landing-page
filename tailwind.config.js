/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {
      screens: {
        'sm':   [{'min': '200px', 'max': '767px'}],      
        'md': '768px', // medium screens
        'lg': '1024px', // large screens
        'xl': '1280px', // extra-large screens
      },
    },
  }

}

