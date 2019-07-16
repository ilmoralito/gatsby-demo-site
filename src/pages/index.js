import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Hello beautiful world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus
        eum fuga impedit neque nobis quaerat quasi quia quibusdam, saepe ullam
        veniam. Beatae blanditiis dolorum earum magnam necessitatibus porro
        quidem reprehenderit repudiandae saepe tempore. A culpa dignissimos
        dolor earum eius exercitationem iste laudantium molestias nam quae
        ratione sapiente soluta, tempore veritatis vitae?
      </p>

      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <Languages languages={data.allLanguagesJson.edges} />
    </div>
  </Layout>
)

const Languages = props => {
  const languages = props.languages
  return (
    <table>
      <caption>My favorite programing languages</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Site</th>
        </tr>
      </thead>

      <tbody>
        {languages.map(language => (
          <tr>
            <td>{language.node.name}</td>
            <td>
              <a href={language.node.site}>{language.node.site}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const query = graphql`
  query {
    allLanguagesJson {
      edges {
        node {
          name
          site
        }
      }
    }
  }
`
