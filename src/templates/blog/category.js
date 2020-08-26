// export const pageQuery = graphql`
//   query CategoryQuery($skip: Int!, $limit: Int!, $category: String) {
//     allContentfulCourse(
//       sort: { fields: createdAt, order: DESC }
//       filter: {
//         node_locale: { eq: "en-US" }
//         category: { elemMatch: { title: { eq: $category } } }
//       }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           id
//           slug
//           title
//           createdAt
//           category {
//             title
//           }
//           courseLength
//           featured
//           lengthType
//           coursePrice
//           image {
//             fluid(maxWidth: 1200, quality: 100) {
//               ...GatsbyContentfulFluid
//               src
//             }
//           }
//           teachers {
//             id
//             name
//             profileImage {
//               fixed(width: 40, quality: 100) {
//                 ...GatsbyContentfulFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `