import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
<Layout>
    <SEO title="Home" />
    <nav>
      <ul>
        <li>
          <Link to="/sails">Sails</Link>
        </li>
        <li>
          <Link to="/masts">Masts</Link>
        </li>
        <li>
          <Link to="/booms">Wishbones</Link>
        </li>
      </ul>
    </nav>
</Layout>

 
)

export default IndexPage
