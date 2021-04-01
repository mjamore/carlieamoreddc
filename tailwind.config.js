module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hr: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
        'jagged-image': 'linear-gradient(-135deg, #9bded1 10px, transparent 0), linear-gradient(135deg, #9bded1 10px, #fff 0)',
      },
      backgroundSize: {
        'jagged-size': '20px 20px',
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
        'site-font-family': '"Source Sans Light", Arial',
      },
      maxWidth: {
        page: '1200px',
      },
      outline: {
        green: '2px solid #9bded1',
      },
      textShadow: {
        snapchat: '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-textshadow'),
  ],
};
