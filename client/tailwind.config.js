/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8EDED",
        action: {
          DEFAULT: "#FA2B0C",
          50: "#FFF8F7",
          100: "#FEE6E3",
          200: "#FEC4BB",
          300: "#FDA193",
          400: "#FC7E6B",
          500: "#FB5B43",
          600: "#FA2B0C",
          700: "#CA1E04",
          800: "#931603",
          900: "#5C0E02",
          950: "#400A01",
        },
        primary: "#173B45",
      },
    },
  },

  plugins: [],
};
