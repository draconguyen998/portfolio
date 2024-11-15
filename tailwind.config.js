/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",   // Mobile
        tablet: "834px",   // Tablet
        laptop: "1366px",  // Laptop
        desktop: "1920px", // Desktop
        imac: "2426px",    // iMac
      },
    },
  },
  plugins: [],
};