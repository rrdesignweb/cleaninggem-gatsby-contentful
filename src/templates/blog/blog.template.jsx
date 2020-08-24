import React from "react"
import { graphql } from "gatsby"
import Nav from "../../components/nav/index"
import Layout from "../../components/layout/index"
import Footer from "../../components/footer/index"
import SEO from "../../components/seo"

import "../../scss/partials/blog-archive.scss"

export const query = graphql`
  query BlogTemplate($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      seoDescription
      seoAuthor
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200, quality: 85) {
          src
          ...GatsbyContentfulFluid
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 85) {
          src
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
const BlogTemplate = ({ data }) => {
  const post = data.contentfulBlog
  return (
    <Layout>
      <SEO title={post.seoTitle} description={post.seoDescription} />
      <header className="blog__header">
        <div
          className="blog__hero"
          style={{ backgroundImage: `url(${post.featuredImage.fluid.src})` }}
        />
        <div className="blog__info">
          <h1 className="blog__title">{post.title}</h1>
        </div>
      </header>
      <Nav />
      <section className="blog__wrapper">
        <div className="blog__content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.content.childMarkdownRemark.html}`,
            }}
          ></div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default BlogTemplate
