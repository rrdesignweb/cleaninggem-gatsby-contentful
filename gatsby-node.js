const path = require(`path`)

//Create Blog Post Single Page from Slug
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.slug}`,
      component: path.resolve(`./src/templates/blog/blog.template.jsx`),
      context: {
        id: edge.node.id,
      },
    })
  })
}
