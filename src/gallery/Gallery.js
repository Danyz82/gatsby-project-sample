import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query SecondQuery {
    allFile {
      totalCount
      nodes {
        birthTime
        size
        absolutePath
      }
    }
  }
`

const Gallery = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(getData)

  return (
    <div>
      <ul>
        {(nodes || []).map((item, i) => (
          <li key={i}>{item.absolutePath}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery
