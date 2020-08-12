import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { FiXCircle } from 'react-icons/fi'
import _ from 'lodash'
import { Card, Flex, Text, AspectRatio, Box, Heading, Badge, Link } from 'theme-ui'
// @jsx jsx
import { jsx } from 'theme-ui'

const TarifasRoll = ({ data }) => {

  const { edges: tarifas } = data.allMarkdownRemark;

  return (
    <Flex>
      <aside sx={{ maxWidth: '250px', paddingr: '4' }}>El aforo es limitado.
      Para participar es necesario reservar plaza con antelación.
      Más información en infobambudanza@gmail.com
    </aside>
      <table sx={{
        marginTop: 4,
        'th': {
          textAlign: 'left',
          '&:nth-child(even)': {
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
            <tr>
              <td>
                <Text py={1}>{tarifa.frontmatter.title}</Text>
              </td>
              <td>
                <Text p={1} sx={{ textAlign: 'right' }}>{tarifa.frontmatter.price}€</Text>
              </td>
            </tr>
          ))
        }
      </table>
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
