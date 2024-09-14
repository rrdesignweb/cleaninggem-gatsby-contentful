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
                src
                ...GatsbyContentfulFluid
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
                // Removed inline background image style
              }}
            >
              {node.heroImage && node.heroImage.fluid ? ( // Check if heroImage and fluid exist
                <picture>
                  <source type="image/avif" srcSet={`${node.heroImage.fluid.src}?fm=avif`} />
                  <source type="image/webp" srcSet={`${node.heroImage.fluid.src}?fm=webp`} />
                  <img
                    src={node.heroImage.fluid.src}
                    alt={node.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: 'auto' }} // Ensure responsive image
                  />
                </picture>
              ) : (
                <div>No image available</div> // Fallback if no image
              )}
            </div>
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
