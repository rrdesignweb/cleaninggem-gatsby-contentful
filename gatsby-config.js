require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `CleaningGem Melbourne - Carpet and Upholstery Cleaners`,
    description: `Let CleaningGem Melbourne be your next call for carpet and upholstery cleaning services. You will be surprised by our amazing quality of work and competitive rates. You will not be disappointed`,
    author: `@Rowan Richardson`,
    siteUrl: `http://cleaninggem.com.au`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["/src/scss/styles.scss"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        fonts: [
          {
            family: `Prata`,
            variants: [`400`],
          },
          {
            family: `Muli`,
            variants: [`300`, `700`],
          },
        ],
      },
    },
    // Remove the old google fonts plugin
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`prata\:400`, `muli\:300,700`],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CleaningGem Melbourne`,
        short_name: `CleaningGem`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cg-leaf.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
