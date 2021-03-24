module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dr. Carlie Amore, DDS`,
                short_name: `Dr. Carlie Amore, DDS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicons/favicon.png`,
                icons: [
                    {
                      src: `/src/images/favicons/android-chrome-192x192.png`,
                      sizes: `192x192`,
                      type: `image/png`,
                      purpose: `any maskable`
                    },
                    {
                      src: `/src/images/favicons/android-chrome-512x512.png`,
                      sizes: `512x512`,
                      type: `image/png`,
                    },
                    {
                        src: `/src/images/favicons/apple-touch-icon.png`,
                        sizes: `180x180`,
                        type: `image/png`,
                      },
                  ]
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`, `/education/, /services/, /broadmoor-holistic-dentistry/, /contact-me/`],
            },
          }
    ]
}