import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./home-about.styles.scss"

const AboutPage = () => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, file } = node.data.target.fields
        const alt = title["en-US"]
        const url = file["en-US"].url
        return <img alt={alt} src={url} className="img__alignCenter" />
      },
    },
  }
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          allContentfulAbout {
            edges {
              node {
                title
                columnOne {
                  json
                }
                columnTwo {
                  json
                }
                columnThree {
                  json
                }
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          {data.allContentfulAbout.edges.map(edge => (
            <div key={edge.node.id}>
              <div>
                <div>
                  <h1 className="section__title">{edge.node.title}</h1>
                </div>
                <div className="about__column--wrapper">
                  <div>
                    {documentToReactComponents(
                      edge.node.columnOne.json,
                      options
                    )}
                  </div>
                  <div>
                    {documentToReactComponents(
                      edge.node.columnTwo.json,
                      options
                    )}
                  </div>
                  <div>
                    {documentToReactComponents(
                      edge.node.columnThree.json,
                      options
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </header>
      )}
    />
  )
}

export default AboutPage
