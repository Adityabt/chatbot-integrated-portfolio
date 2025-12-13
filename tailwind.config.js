/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        glassLight: "rgba(255, 255, 255, 0.08)",
        glassDark: "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};


