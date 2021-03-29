module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        DEFAULT: '#9bded1',
      },
    },
    boxShadow: {
      DEFAULT: '0px 0px 5px 2px #808080',
      'circular-img': '2px 2px 5px #808080',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
