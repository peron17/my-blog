/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Tommypria',
    titleTemplate: '%s. a Full-stack Developer',
    description: 'Tommypria is a full-stack developer based on Jakarta, Indonesia. Have built many awesome websites and web-apps',
    url: 'https://tommypria.com',
    author: 'Tommy Priambodo',
    twitterUsername: '@tommypria',
    image: "/me.jpg",
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
