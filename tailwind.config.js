/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D3B66",
        secondary: "#F4D35E",
        accentRed: "#EE6352",
        accentGreen: "#00A878",
        neutralLight: "#F9FAFB",
        neutralDark: "#1E1E1E",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
