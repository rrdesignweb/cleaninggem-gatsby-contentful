import React from "react"
import { graphql, Link, navigate, StaticQuery } from "gatsby"
import "./home-blog.styles.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulBlog(
          limit: 9
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
        ) {
          nodes {
            id
            slug
            title
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
    `}
    render={data => (
      <section className="container-fluid green">
        <div className="block__spacing container">
          <h1 className="section__title">CleaningGem Blog Feed</h1>
          <div className="feed">
            {data.allContentfulBlog.nodes.map(node => (
              <div
                key={node.id}
                className="card"
                style={{
                  backgroundImage: `linear-gradient(
              to bottom, 
              rgba(10,10,10,0) 0%,
              rgba(10,10,10,0) 50%,
              rgba(10,10,10,0.7) 100%),
              url(${node.featuredImage.fluid.src})`,
                }}
                onClick={() => navigate(`/blog/${node.slug}`)}
                onKeyDown={() => navigate(`/blog/${node.slug}`)}
                role="button"
                tabIndex={0}
              >
                {node.category.map(category => (
                  <p key={category.id} className="card__category">
                    {category.title}
                  </p>
                ))}
                <p className="card__title">{node.title}</p>
              </div>
            ))}
          </div>
          <Link to="/blog" className="view__more--white">
            View More
          </Link>
        </div>
      </section>
    )}
  />
)
