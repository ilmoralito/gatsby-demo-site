import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./nav.css"

export default props => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allSitePage(
          filter: { path: { nin: ["/success/", "/dev-404-page/"] } }
          sort: { fields: path, order: ASC }
        ) {
          edges {
            node {
              path
            }
          }
        }
      }
    `
  )

  const linkNodes = edgesToNavLinks(data.allSitePage.edges)

  return (
    <nav>
      <ul>
        {linkNodes.map(node => (
          <li>
            <Link to={node.path}>{node.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const edgesToNavLinks = edges => {
  return edges.map(edge => ({
    text: getTextFromPath(edge.node.path),
    path: edge.node.path,
  }))
}

const getTextFromPath = path => {
  if (path === "/") {
    return "Home"
  }

  const text = path.split("/")[1]

  return toCapitalize(text)
}

const toCapitalize = text => `${text[0].toUpperCase()}${text.substring(1)}`
