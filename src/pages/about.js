import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <h1>About me</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        commodi consequatur deleniti enim eveniet expedita illum labore
        molestias nobis nostrum, obcaecati pariatur repellat, reprehenderit
        soluta sunt suscipit temporibus, velit voluptatem. Aliquam assumenda
        deserunt eveniet expedita explicabo fugiat fugit iste iusto, libero
        magni maiores officiis, quia quibusdam suscipit tempora. A adipisci,
        aliquam amet atque debitis deleniti dolorum ea et ex, fuga harum illo in
        incidunt ipsam ipsum labore laboriosam laborum nostrum odio, omnis optio
        quos repellat. A animi cumque dicta, distinctio ea ex, fugit illo
        inventore, ipsum nemo odit placeat sapiente voluptas. Ex officiis
        placeat quaerat! Dignissimos error quibusdam reprehenderit vitae.
      </p>

      <Hobby hobbies={data.allFile.edges} />
      {/*<Page pages={data.allFile.edges} />*/}
    </Layout>
  )
}

const Hobby = props => {
  const hobbies = props.hobbies

  return (
    <div>
      <h3>My hobbies</h3>
      <ul>
        {hobbies.map(hobby => (
          <li>{hobby.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

const Page = props => {
  const pages = props.pages

  return (
    <div>
      <h3>Site pages</h3>
      <ul>
        {pages.map(hobby => (
          <li>{hobby.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "json" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`

export const pagesQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`
