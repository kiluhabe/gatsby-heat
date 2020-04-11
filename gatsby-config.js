const siteMetadata = require('./siteMetadata.js')

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-autolink-headers`],
            },
        },
        `gatsby-plugin-webpack-size`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/contents/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/contents/posts/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `categories`,
                path: `${__dirname}/contents/categories/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteMetadata.title,
                short_name: siteMetadata.title,
                description: siteMetadata.description,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                icon: `contents/images/icon.png`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-html2amp',
            options: {
                files: ['posts/**/index.html'],
                gaConfigPath: 'gaConfig.json',
                dist: 'public/amp',
                optimize: true,
            },
        },
    ],
}
