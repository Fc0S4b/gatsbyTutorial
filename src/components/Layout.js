import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
// las propiedades css globales se aplicarán inclusive a los componentes que no estén en el layout en el modo local, una vez que se deploya dejará de aplicarse
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
