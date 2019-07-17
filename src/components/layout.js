import React from "react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import { useStaticQuery, graphql } from "gatsby"

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
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
