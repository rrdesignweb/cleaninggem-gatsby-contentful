import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"

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
                ...GatsbyContentfulFluid
                src
                srcSet
              }
              // Add AVIF support here
              avif: fluid(maxWidth: 1200, quality: 85, transform: { format: AVIF }) {
                src
                srcSet
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="HomeFeatured">
        {data.allContentfulHero.nodes.map(node => (
          <div key={node.id} className="home-featured__section container">
            <div
              className="home-featured__hero"
              style={{
                backgroundImage: `url(${node.heroImage.fluid.src})`,
              }}
            ></div>
            <div className="home-featured__content">
              <div className="home-featured__info">
                <h1 className="home-featured__title">{node.title}</h1>
                <p className="home-featured__subtitle">{node.subTitle}</p>
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
