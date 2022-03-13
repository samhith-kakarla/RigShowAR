module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./js/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-one': '#1F1F1F',
        'gray-two': '#333333',
        'gray-three': '#7B8794',
        'orange-one': '#FDBB9B',
        'orange-two': '#FD9868',
        'orange-three': '#FC7636',
      },
    },
  },
  plugins: [],
}