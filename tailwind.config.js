module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          main: '#FA00FF',
          dark: '#1F0029',
          opacity: 'rgba(0, 0, 0, 0.15);',
        },
        backDrop: 'rgba(0, 0, 0, 0.4);',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
