module.exports = {
    siteMetadata: {
        title: "Allen's Coding Blog",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-nodejs`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            },
        },
        `gatsby-plugin-mdx`,
    ]
}