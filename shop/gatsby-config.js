module.exports = {
  siteMetadata: {
    title: `Avalonstar Shop`,
    description: ``,
    author: `@avalonstarinc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: "avalonstartv", // or custom domain
        accessToken: "4b45da89c8ead28d7dfe3fb6885379dd",
        shouldConfigureSourcePlugin: false, // default
        shouldWrapRootElementWithProvider: false, // default
      },
    },
  ],
}
