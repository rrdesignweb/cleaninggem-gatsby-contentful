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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`baskerville\:400`, `muli\:300,700`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          wp {
            generalSettings {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
      resolveSiteUrl: ({site, allSitePage}) => {
        //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.wp.generalSettings.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.wp.generalSettings.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        })
      }
    },
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
