import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { window } from "browser-monads"
import Nav from "../../components/nav/nav.component"
import Layout from "../../components/layout/layout.component"
import SEO from "../../components/seo"
import Footer from "../../components/footer/footer.component"
import "./blog-archive.styles.scss"
import "../../components/home-blog/home-blog.styles.scss"

export const pageQuery = graphql`
  query ArchiveQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [createdAt], order: DESC }
      filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          createdAt
          category {
            title
            id
          }
          featuredImage {
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const ArchiveTemplate = (props) => {
  const blogContent = props.data.allContentfulBlog

  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `blog` : `blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          `cleaning`,
          `cleaninggem blog feed`,
          `carpet cleaning tips and tricks`,
        ]}
      />
      <header>
        <div className="archive__section">
          <div
            className="archive__hero"
          >
            <div className="archive__nav">
              <Link
                to="/blog"
                className={
                  window.location.href.indexOf("/blog") > 0
                    ? "archive__nav--link selected"
                    : "archive__nav--link"
                }
              >
                All
              </Link>
              <Link
                to="/category/guides"
                className={
                  window.location.href.indexOf("/category/guides") > 0
                    ? "archive__nav--link selected"
                    : "archive__nav--link"
                }
              >
               Guides
              </Link>
              <Link
                to="/category/sustainability"
                className={
                  window.location.href.indexOf("category/sustainability") > 0
                    ? "archive__nav--link selected"
                    : "archive__nav--link"
                }
              >
                Sustainability
              </Link>
              <Link
                to="/category/product"
                className={
                  window.location.href.indexOf("category/product") > 0
                    ? "archive__nav--link selected"
                    : "archive__nav--link"
                }
              >
                Product
              </Link>
              <Link
                to="/category/technology"
                className={
                  window.location.href.indexOf("category/technology") > 0
                    ? "archive__nav--link selected"
                    : "archive__nav--link"
                }
              >
                Technology
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Nav />
      <div className="feed">
        {blogContent.edges.map(edge => (
          <div
            key={edge.node.id}
            className="card"
            style={{
              backgroundImage: `linear-gradient(
          to bottom, 
          rgba(10,10,10,0) 0%,
          rgba(10,10,10,0) 50%,
          rgba(10,10,10,0.7) 100%),
          url(${edge.node.featuredImage.fluid.src})`,
            }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
            onKeyDown={() => navigate(`/blog/${edge.node.slug}`)}
            role="button"
            tabIndex={0}
          >
            {edge.node.category.map(category => (
              <p key={category.id} className="card__category">
                {category.title}
              </p>
            ))}
            <p className="card__title">{edge.node.title}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div className="pagination__item">
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              <div className="arrow__back"></div>
            </Link>
          )}
        </div>
        <div className="pagination__item">
          {!isLast && (
            <Link to={nextPage} rel="next">
              <div className="arrow__next"></div>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default ArchiveTemplate
