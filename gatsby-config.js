module.exports = {
  siteMetadata: {
    title: "Namis BLOG",
    pets: [
      {
        name: "lola",
        type: "rabbit",
        genre: "female",
      },
      {
        name: "nami",
        type: "dog",
        genre: "female",
      },
      {
        name: "bonita",
        type: "dog",
        genre: "female",
      },
      {
        name: "peluso",
        type: "dog",
        genre: "male",
      },
      {
        name: "hotch",
        type: "dog",
        genre: "male",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/src/data/json/`
      }
    },
    `gatsby-transformer-remark`
  ]
}
