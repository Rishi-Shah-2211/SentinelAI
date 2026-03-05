/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: "#00F5FF",
        darkbg: "#0B0F19",
        panel: "#111827"
      }
    },
  },
  plugins: [],
}