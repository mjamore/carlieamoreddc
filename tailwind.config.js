module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0px 0px 5px 2px #808080',
        'circular-img': '2px 2px 5px #808080',
        container: '0px 0px 5px #808080',
        top: '0px -5px 5px -5px #808080',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          DEFAULT: '#9bded1',
        },
        aliceblue: {
          DEFAULT: 'aliceblue',
        },
        'font-color': '#374151',
      },
      maxWidth: {
        page: '1200px',
      },
      outline: {
        green: '2px solid #9bded1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
