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


  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i == 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`./src/templates/blog/blog-archive.template.jsx`),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
}
