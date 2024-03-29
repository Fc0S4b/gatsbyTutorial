import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
    <SEO title='Error' />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

const Wrapper = styled.section``

export default Error
