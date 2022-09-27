import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Generapro App`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-env-variables",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    }, {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          modifyVars: {
            // 'layout-header-background': '#060712',
            //  'text-color': 'fade(@white, 85%)', 
            //  'heading-color': 'fade(@white, 85%)', 
            //   'layout-body-background':'#05060f',
            //  'component-background': '#0e101e',
            //  'table-bg': '#0e101e',
            // 'table-header-bg' : '#0e101e',
            // 'table-color': 'fade(@white, 75%)',
            //  'table-row-hover-bg': '#2d3748',
            //   'item-hover-bg': '#1b1d2a',
            //   'menu-dark-inline-submenu-bg': '#0e101e',            
            // 'input-bg': "#1b1d2a",
            // 'input-border-color': '#1b1d2a',
            // 'primary-color': '#176155',
            //'border-color-base' : '#0e101e',
            // 'link-color': '#176155',
            //  'menu-item-group-title-color': 'rgb(255,255,255,0.45)',
            // 'image-color': '#ff005d',
            // 'border-radius-base': '12px',
            // 'select-item-selected-bg': '#ff005d',
            // 'font-family': "Poppins, Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'"
          },
          javascriptEnabled: true,
        }
      }
    },]
};

export default config;
