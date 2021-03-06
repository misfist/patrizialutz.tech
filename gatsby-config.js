/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

// require("dotenv").config({
//   path: `.env`,
// })

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`, // or '.env'
// });

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

  console.log(`Using environment config: '${activeEnv}'`)

  require("dotenv").config({
    path: `.env.${activeEnv}`,
  })

const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: `Patrizia Lutz - WordPress Developer`,
    siteUrl: process.env.WEBSITE_URL,
    description: `Web Developer specializing in WordPress, and free and open-source technology.`,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://editor.patrizialutz.tech/graphql`,
        schema: {
          requestConcurrency: 6, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        verbose: true,
        debug: {
          preview: true,
          graphql: {
            showQueryVarsOnError: true,
            showQueryOnError: true,
          },
        },
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrizia Lutz - WordPress Developer`,
        short_name: `Patrizia Lutz`,
        description: `Web Developer specializing in WordPress, and free and open-source technology.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0b4f6c`,
        display: `browser`,
        icon: `src/assets/img/sneaky-cat-transparent.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-recaptcha/
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: true,
         args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/assets/scss"],
        },
        cssLoaderOptions: {
          camelCase: false,
        },
        useResolveUrlLoader: true,
      },
    },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-htaccess/
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: process.env.WEBSITE_DOMAIN, // if 'www' is set to 'false', be sure to also remove it here!
      },
    },
    
    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
    
  ],
}


