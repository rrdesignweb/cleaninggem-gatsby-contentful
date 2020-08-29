import React from "react"
import { graphql, StaticQuery } from "gatsby"

const GoogleMap = () => {
  return (
      <h1>Hello</h1>
    // <StaticQuery
    //   query={graphql`
    //     query StaticMapQuery {
    //         staticMap {
    //             mapUrl
    //         }
    //     }
    //   `}
    //   render={(data) => console.log(data)}
    // />
  )
}
export default GoogleMap
