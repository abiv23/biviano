/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",      // Scan pages folder
      "./components/**/*.{js,jsx}", // Scan components folder (if you add one)
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }