import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `matt-murnighan`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{

    resolve: "gatsby-plugin-sass", options: {
      implementation: require('node-sass')
    }
  }, "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
    "gatsby-transformer-json", {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './src/data/'
    }
  }, {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "matt-murnighan",
    },
  }
  ]
};

export default config;
