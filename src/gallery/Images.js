import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image_1.jpg"
import Image from "gatsby-image"
import style from "../components/modules/image.module.css"

const getImages = graphql`
  {
    fixed: file(
      relativePath: { eq: "Zrzut ekranu 2020-07-28 o 09.58.38.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fluidMax: file(relativePath: { eq: "image_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 110) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className={style.images}>
      <article className={style.singleImage}>
        <h3>Basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className={style.singleImage}>
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className={style.singleImage}>
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className={style.small}>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
      <article className={style.singleImage}>
        <h3>FluidMAx image/svg</h3>
        <Image fluid={data.fluidMax.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
