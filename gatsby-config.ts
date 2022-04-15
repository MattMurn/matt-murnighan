import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `matt-murnighan`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet", {
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
    }
  ]
};

export default config;
