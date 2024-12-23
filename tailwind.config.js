/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "green-site": "var(--green-site)",
        "white-site": "var(--white-site)",
        "gray-site-700": "var(--gray-site-700)",
        "gray-site-800": "var(--gray-site-800)",
        "gray-site-900": "var(--gray-site-900)"
      },

      fontFamily: {
        "font-family-normal": "var(--font-family-normal)"
      },

      fontSize: {
        "font-size-paragraph": "var(--font-size-paragraph)"
      },

      fontWeight: {
        "font-weights-400": "var(--font-weights-400)",
        "font-weights-600": "var(--font-weights-600)",
        "font-weights-700": "var(--font-weights-700)"
      }
    },
  },
  plugins: [],
}

