module.exports = {
  siteMetadata: {
    title: `Outland Country Club`,
    description: `Classic progression World of Warcraft PvE/RP guild on Deviate Delight`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `outland-country-club`,
        short_name: `occ`,
        start_url: `/`,
        background_color: `#23272a`,
        theme_color: `#23272a`,
        display: `minimal-ui`,
        icon: `src/images/occ-tabard.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
