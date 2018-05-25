module.exports = {
  siteMetadata: {
    title: `Code Lead Grow`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      }
    },
    `gatsby-plugin-glamor`
  ],
}
