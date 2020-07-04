import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col items-center justify-center px-10">
      <h1 className="font-semibold text-lg mb-1">
        @palauisaac
      </h1>
      <p className="text-gray-600 mb-2">
        Welcome to my personal website.
      </p>
      <p className="text-gray-600 text-sm">
        I will create something nice here soon. In the meantime, you can <a className="underline" title="Write an email" href="mailto:pepalauisaac@gmail.com;" target="_blank" rel="noopener noreferrer">get in touch</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
