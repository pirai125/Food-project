/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dm_sans :["DM Sans", "sans-serif"]
      },
      backgroundImage:{
        header_img: "url(src/assets/food-assests/header_img.png)"
      }
    },
  },
  plugins: [],
}