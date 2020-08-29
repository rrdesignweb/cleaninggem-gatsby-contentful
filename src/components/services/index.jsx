import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Services = () => {
  const List = ({ children }) => <li>{children}</li>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, file } = node.data.target.fields
        const alt = title["en-US"]
        const url = file["en-US"].url
        return <img alt={alt} src={url} className="full-width"/>
      },
    },
  }

  return (
    <StaticQuery
      query={graphql`
        query ServicesQuery {
          allContentfulServices(sort: { fields: [createdAt], order: ASC }) {
            nodes {
              id
              title
              subTitle
              content {
                json
              }
            }
          }
        }
      `}
      render={data => (
        <section className="Services">
          {data.allContentfulServices.nodes.map(node => (
            <div key={node.id} className="block__spacing container">
              <div>
                <h1 className="section__title">{node.title}</h1>
              </div>
              <div>
                <p>{node.subTitle}</p>
              </div>
              <div>{documentToReactComponents(node.content.json, options)}</div>
            </div>
          ))}
        </section>
      )}
    />
  )
}

export default Services
