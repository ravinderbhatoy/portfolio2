/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'lightest-violet': "#C1C1D2",
        'ex-light-violet': '#8080A4',
        'light-violet': '#A6A6BF',
        'medium-violet': '#333346',
        'hard-violet': '#1A1A24',
        'ex-hard-violet': '#0E0E12',
      },
    },
    fontFamily: {
      'heading': ['Pixelify Sans'],
      'normal': ['Poppins']
    }
  },
  plugins: [],
}

