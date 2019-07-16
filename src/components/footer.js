import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            pets {
              name
              type
              genre
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        rerum.
      </p>

      <PetsTable pets={data.site.siteMetadata.pets} />
    </div>
  )
}

const PetsTable = props => {
  const pets = props.pets
  const rows = pets.map(pet => (
    <Row name={pet.name} type={pet.type} genre={pet.genre} />
  ))

  return (
    <table>
      <caption>{pets.length} in Pets list</caption>
      <col width="80%"/>
      <col width="10%"/>
      <col width="10%"/>

      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

const Row = props => (
  <tr>
    <td>{props.name}</td>
    <td>{props.type}</td>
    <td>{props.genre}</td>
  </tr>
)
