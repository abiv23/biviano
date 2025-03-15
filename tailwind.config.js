/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",      // Scan pages folder
      "./components/**/*.{js,jsx}", // Scan components folder (if you add one)
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-20px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          }
        },
        animation: {
          'fade-in-down': 'fade-in-down 0.3s ease-out'
        }
      },
    },
    plugins: [],
  }
