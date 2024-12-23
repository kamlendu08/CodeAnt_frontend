/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_blue: '#081735',
        light_gray: '#E6E8F0',
        light_text: '#171717',
        whitebg: '#FAFAFA',
        text_gray: '#181D27'
      },
      fontFamily: {
        inter: ['Inter, serif'],
        satoshi: ['Satoshi','sans-serif']
      },
      boxShadow: {
        custom: '0px 0px 16px rgba(8, 23, 53, 0.2)', // Custom shadow
      },
    },
  },
  plugins: [],
}

