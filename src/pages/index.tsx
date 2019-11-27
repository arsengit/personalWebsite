import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container h-screen bg-purple-500">
      <h1 className="text-4xl">Hi people</h1>
    </div>
  </Layout>
)

export default IndexPage
