/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
