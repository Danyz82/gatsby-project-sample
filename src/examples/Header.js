import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h1>title</h1>
      <h2>name: {data.site.siteMetadata.title}</h2>
    </div>
  )
}

export default Header

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ExamplesHeader = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           data
//           person {
//             name
//             age
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       {data.site.siteMetadata.person.name}
//       {data.site.siteMetadata.person.age}
//     </div>
//   )
// }

// export default ExamplesHeader
