import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import MiddleSection from "./MiddleSection";
function Home()
{
  return (
    <StaticQuery
      query={graphql`
      query {
        homeBg: file(relativePath: { eq: "main/homeBg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
      render={data =>
      {
        const imageData = data.homeBg.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className="h-screen"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <MiddleSection />
          </BackgroundImage>
        )
      }}
    />
  )
}

export default Home;