module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // PurgeCSS setup
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        libertinus: ['Libertinus Sans', 'serif'],
        playwrite: ['Playwrite AU QLD', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#4a5568',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
