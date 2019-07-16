import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql, Link } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <Header title={data.site.siteMetadata.title} />
      <nav>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline-block" }}>
            <Link to={"/"}>Home</Link>
          </li>
          <li style={{ display: "inline-block", paddingLeft: "10px" }}>
            <Link to={"/about/"}>About</Link>
          </li>
        </ul>
      </nav>
      {children}
      <Footer />
    </div>
  )
}
