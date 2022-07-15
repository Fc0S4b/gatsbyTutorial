import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
const Images = () => {
  return (
    <Wrapper>
      {/* a pesar de que la imagen se modifica a 200px en gatsby se sigue enviando 2.5 mb para modificar esto, es necesario el plugin gatsby-image-plugin*/}
      <img src={big} alt="food" />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`
export default Images
