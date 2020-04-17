const path = require('path')
const dotenv = require('dotenv')

const hasEnvDot = path.resolve(`${__dirname}`, `./env.${process.env.NODE_ENV}`)

if(hasEnvDot) {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  })
} else {
  dotenv.config()
}


module.exports = {
  siteMetadata: {
    title: `title`,
    description: `desc`,
    author: `author`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Markkizz Starter`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/icons/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      // options: {
      //   javascriptEnabled: true,
      //   modifyVars: {
      //     "primary-color": `#da3043`,
      //     "font-family": `Arial`,
      //     "layout-body-background": `#66ff79`,
      //   },
      // },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
        // ignore: [`**/.*`],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {}
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
  ],
}
