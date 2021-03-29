module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hr: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
      },
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
        'facebook-color': '#3B5998',
        'font-color': '#374151',
        'instagram-color': '#125688',
        'linkedin-color': '#007bb5',
        'snapchat-color': '#fffc00',
        'twitter-color': '#55ACEE',
      },
      fontFamily: {
        'site-font-family': '"Open Sans Light", Arial',
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
