/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0047BA",
        secondary: "#FFD500",
        accentRed: "#E2211C",
        accentGreen: "#2BA84A",
        neutralDark: "#1A1A1A",
        neutralLight: "#F9FAFB",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
    },
  },
};
