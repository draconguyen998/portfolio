/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0047AB", // Thêm màu primary
        primary_dark: "#002E91", //Thêm màu primary_dark
      },
    },
    screens: {
      mobile: "375px",
      tablet: "834px",
      laptop: "1366px",
      desktop: "1920px",
      imac: "2426px",
    },
  },
  plugins: [],
};