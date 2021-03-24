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
                icon: `src/images/favicon.png`,
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