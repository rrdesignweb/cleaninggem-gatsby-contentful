import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"

import "./index.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulHero(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
        ) {
          nodes {
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
    `}
    render={data => (
      <header>
        {data.allContentfulHero.nodes.map(node => (
          <div key={node.id} className="header__section container">
            <div
              className="header__hero"
              style={{
                backgroundImage: `url(${node.heroImage.fluid.src})`,
              }}
            ></div>
            <div className="header__content">
              <div className="header__info">
                <h1 className="header__title">{node.title}</h1>
                <p className="header__subtitle">{node.subTitle}</p>
                <button
                  onClick={() => navigate(`/${node.slug}`)}
                  className="btn__med"
                >
                  {node.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </header>
    )}
  />
)
