import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import AllRecipes from "../components/AllRecipes"
const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

const Wrapper = styled.section``

export default Recipes
