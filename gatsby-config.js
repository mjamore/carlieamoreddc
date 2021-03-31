module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dr. Carlie Amore, DDS',
        short_name: 'Dr. Carlie Amore, DDS',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        cache_busting_mode: 'none',
        prefer_related_applications: false,
        icon: 'src/images/favicons/favicon.png',
        icons: [
          {
            src: '/src/images/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/src/images/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/src/images/favicons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
