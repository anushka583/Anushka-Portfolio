/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#6366F1",
        darkbg: "#0B1120"
      }
    },
  },
  plugins: [],
}

