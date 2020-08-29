const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
module.exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Create pages for each blog.
  const getBlog = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    result.data.allContentfulBlog.nodes.forEach(node => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog/blog.template.jsx`),
        context: {
          id: node.id,
        },
      })
    })
  })

  // Create archive page for all blogs, including pagination
  const getArchive = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.nodes
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve(
          "./src/templates/blog/blog-archive.template.jsx"
        ),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create guide category page, including pagination
  const getGuide = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: {
            node_locale: { eq: "en-US" }
            category: { elemMatch: { title: { eq: "Guides" } } }
          }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.nodes
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/guides` : `/category/guides/${i + 1}`,
        component: path.resolve(
          "./src/templates/blog/category-guide.template.jsx"
        ),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create sustainability category page, including pagination
  const getSustainability = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: {
            node_locale: { eq: "en-US" }
            category: { elemMatch: { title: { eq: "Sustainability" } } }
          }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.nodes
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/category/sustainability`
            : `/category/sustainability/${i + 1}`,
        component: path.resolve(
          "./src/templates/blog/category-sustainability.template.jsx"
        ),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create product category page, including pagination
  const getProduct = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: {
            node_locale: { eq: "en-US" }
            category: { elemMatch: { title: { eq: "Product" } } }
          }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.nodes
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/product` : `/category/product/${i + 1}`,
        component: path.resolve(
          "./src/templates/blog/category-product.template.jsx"
        ),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create tech category page, including pagination
  const getTech = makeRequest(
    graphql,
    `
      {
        allContentfulBlog(
          sort: { fields: [createdAt], order: DESC }
          filter: {
            node_locale: { eq: "en-US" }
            category: { elemMatch: { title: { eq: "Technology" } } }
          }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.nodes
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0 ? `/category/technology` : `/category/technology/${i + 1}`,
        component: path.resolve(
          "./src/templates/blog/category-tech.template.jsx"
        ),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  return Promise.all([
    getBlog,
    getArchive,
    getGuide,
    getSustainability,
    getProduct,
    getTech,
  ])
}

module.exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
