/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      rotate: {
        360: '360deg',
      },
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],  // 'MyCustomFont' is the name you defined in @font-face
      },
    },
  },
  plugins: [],
}

