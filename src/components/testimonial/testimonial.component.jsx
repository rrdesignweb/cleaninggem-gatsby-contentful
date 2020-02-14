import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./testimonial.styles.scss"

const Testimonial = () => {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialQuery {
          allContentfulTestimonial {
            nodes {
              id
              message {
                childMarkdownRemark {
                  html
                }
              }
              fullName
              nameTitle
            }
          }
        }
      `}
      render={data => (
        <section className="testimonial__wrapper container__inner">
          {data.allContentfulTestimonial.nodes.map(node => (
            <div key={node.id}>
              <div
                className="testimonial__message"
                dangerouslySetInnerHTML={{
                  __html: `${node.message.childMarkdownRemark.html}`,
                }}
              ></div>
              <div className="testimonial__info">
                <div>{node.fullName}</div>
                <div>{node.nameTitle}</div>
              </div>
            </div>
          ))}
        </section>
      )}
    />
  )
}

export default Testimonial
