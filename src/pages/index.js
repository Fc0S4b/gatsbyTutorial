import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1> Hello world!!!</h1>
      <div>
        {/* no refresh page with Link */}
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      {/* regular refresh with a link */}
      <a href="/about">regular link</a>
    </div>
  )
}
