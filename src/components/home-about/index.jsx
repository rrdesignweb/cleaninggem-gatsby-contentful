import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const HomeAbout = () => {
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
            nodes {
              id
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
      `}
      render={data => (
        <section className="HomeAbout">
          {data.allContentfulAbout.nodes.map(node => (
            <div key={node.id} className="block__spacing container">
              <div >
                <h1 className="section__title">{node.title}</h1>
              </div>
              <div className="home-about__column--wrapper">
                <div>
                  {documentToReactComponents(node.columnOne.json, options)}
                </div>
                <div>
                  {documentToReactComponents(node.columnTwo.json, options)}
                </div>
                <div>
                  {documentToReactComponents(
                    node.columnThree.json,
                    options
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    />
  )
}

export default HomeAbout
