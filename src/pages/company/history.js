import React from "react"
import { Link } from "gatsby"

// para acceder a este componente en la url se debe escribir localhost:8000/company/history
//la carpeta company por sí sola en la url no entrega nada debes crear index en esa carpeta para que tenga su home
const history = () => {
  return (
    <div>
      <h2>this is history of our company</h2>
      <Link to="/">home page</Link>
    </div>
  )
}

export default history
