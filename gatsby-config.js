const siteUrl = 'https://www.techomax.com.ar'

module.exports = {
  siteMetadata: {
    title: "Techomax Argentina",
    author: "Jerónimo Carlos & Mariano Murad",
    description: "...",
    siteUrl: 'https://www.techomax.com.ar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'techomax-website',
        short_name: 'techomax',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-techomax.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    { resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.techomax.com.ar',
        sitemap: 'https://www.techomax.com.ar/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-68408054-1", // Google Analytics / GA
          //e.g : "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //e.g: "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        excludes: ["", `/src/pages/404`],
      //   query: `
      //   {
      //     site {
      //       siteMetadata {
      //         siteUrl
      //       }
      //     }
      //
      //     allSitePage {
      //       nodes {
      //         path
      //       }
      //     }
      // }`,
        resolveSiteUrl: () => siteUrl,
        // serialize: ({ site, allSitePage }) =>
        //   allSitePage.nodes.map(node => {
        //     return {
        //       url: site.siteMetadata.siteUrl + node.path,
        //       changefreq: `daily`,
        //       priority: 0.7,
        //     }
        //   })
      }
    }
  ],
}
