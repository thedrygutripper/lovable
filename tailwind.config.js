/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8CCB2F",   // Logo neon tech green
          secondary: "#2E8B3C", // Darker green for hover / accents
          dark: "#2F2F2F",      // Dark gray (tech / text)
          gray: "#8A8A8A",      // Medium gray (secondary text)
        },
      },
    },
  },
  plugins: [],
};
