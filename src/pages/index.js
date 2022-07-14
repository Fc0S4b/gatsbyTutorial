import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      <h1> home page</h1>
      <div>
        {/* no refresh page with Link */}
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      {/* regular refresh with a link */}
      <a href="/about">regular link</a>
    </Layout>
  )
}
