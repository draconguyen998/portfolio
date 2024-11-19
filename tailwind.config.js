/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"], // Định nghĩa font Lato
      },
      colors: {
        primary: "#0047AB", // Thêm màu primary
        primary_dark: "#002E91", //Thêm màu primary_dark
        primary_light: "#4D7EC4", //Thêm màu primary_light
        bg_primary: "#000012", //Thêm màu bg_primary
        txt_heading: "#1A1A2A", //Thêm màu text-heading
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