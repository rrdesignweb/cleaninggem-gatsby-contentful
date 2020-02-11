import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"

import "./home-featured.styles.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulHero(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
        ) {
          edges {
            node {
              id
              title
              subTitle
              buttonText
              slug
              heroImage {
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
      <header>
        {data.allContentfulHero.edges.map(edge => (
          <div key={edge.node.id} className="header__section">
            <div
              className="header__hero"
              style={{
                backgroundImage: `url(${edge.node.heroImage.fluid.src})`,
              }}
            ></div>
            <div className="header__content">
              <div className="header__info">
                <h1 className="header__title">{edge.node.title}</h1>
                <p className="header__subtitle">{edge.node.subTitle}</p>
                <button
                  onClick={() => navigate(`/${edge.node.slug}`)}
                  className="btn__med"
                >
                  {edge.node.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </header>
    )}
  />
)
