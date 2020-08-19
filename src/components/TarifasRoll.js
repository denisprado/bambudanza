import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Flex, Text, Button } from 'theme-ui'
import Link from '../components/Link'


const TarifasRoll = ({ data }) => {

  const { edges: tarifas } = data.allMarkdownRemark;

  return (
    <Flex>
      <Box as='table' sx={{
        margin: 4,
        'th': {
          textAlign: 'left',
          'td:nth-child(even)': {
            backgroundColor: 'muted',
          }
        },

      }}>
        <tr>
          <th>Tipo</th>
          <th>Precio</th>
        </tr>
        {
          tarifas &&
          tarifas.map(({ node: tarifa }) => (
            <tr key={tarifa.id}>
              <td>
                <Text py={1}>{tarifa.frontmatter.title}</Text>
              </td>
              <td>
                <Text p={1} sx={{ textAlign: 'right' }}>{tarifa.frontmatter.price}€</Text>
              </td>
            </tr>
          ))
        }
      </Box>
      <Box sx={{ maxWidth: '250px', paddingr: '4' }}>
        <Link to={'/escuela/inscripcion'} ><Button sx={{ my: 4 }}>Inscripción</Button></Link>
      </Box>

    </Flex>
  )
}


TarifasRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TarifasRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "tarifa-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                price
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TarifasRoll data={data} count={count} />}
  />
)
