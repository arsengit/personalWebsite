import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioContainer from "../components/portfolio/PortfolioContainer"

function Portfolio()
{
  return (
    <Layout>
      <SEO title="Portfolio"/>
      <PortfolioContainer/>
    </Layout>
  )
}

export default Portfolio