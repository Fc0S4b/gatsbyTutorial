import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1> about page</h1>
          <h1> hello world</h1>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
            harum corrupti. Mollitia exercitationem eius eligendi ad ullam vero
            eum error?
          </p>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
