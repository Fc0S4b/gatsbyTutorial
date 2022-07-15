import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
          // height={300}
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="domminantColor"
          layout="fullWidth"
          width={200}
          className="example-img"
          as="article"
          // height={600} fullwidth no lleva este parámetro
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`
export default Images
