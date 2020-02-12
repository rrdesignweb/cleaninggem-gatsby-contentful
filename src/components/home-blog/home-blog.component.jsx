import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"

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
          edges {
            node {
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
      }
    `}
    render={data => (
      <section className="section__wrapper">
        <h1 className="section__title">CleaningGem Blog Feed</h1>
        <div className="feed">
          {data.allContentfulBlog.edges.map(edge => (
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
      </section>
    )}
  />
)