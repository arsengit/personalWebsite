import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar: file(relativePath: { eq: "main/avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animeImg: file(relativePath: { eq: "main/animeImg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navasardi: file(relativePath: { eq: "portfolio/navasardi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ekn: file(relativePath: { eq: "portfolio/ekn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      credit: file(relativePath: { eq: "portfolio/credit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data[props.image].childImageSharp.fluid}
      className={props.className}
    />
  )
}

export default Image
