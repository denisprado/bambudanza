import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { AspectRatio, Badge, Box, Card, Close, Divider, Flex, Heading, Link, Text } from 'theme-ui'
import MyHr from './MyHr'

export const IconsNivel = (props) => {
  const { nivel } = props;
  const niveis = ["Iniciación", "Intermedio", "Avanzado"]
  const colors = ["#919f79", "#768858", '#5e6c46'];
  return (<BsFillCircleFill mr={1} {...props} color={colors[niveis.indexOf(nivel)]} />);
}



const ProyetosRoll = ({ data }) => {

  const { edges: proyetos } = data.allMarkdownRemark;

  return (

    <Flex p={4} sx={{ width: '100%' }}>

      <Box sx={{ minWidth: '100%' }} >
        <Flex sx={{
          flexWrap: 'wrap',
          alignContent: 'flex-start',
        }} >
          {

            proyetos && proyetos.map(({ node: proyeto }) =>
              <Card as='article'
                sx={{
                  flex: '1 1',
                  maxWidth: '33%',
                  minWidth: '33%'
                }}
                key={proyeto.id}>

                <AspectRatio ratio={4 / 3} bg={'gray'}>
                  <Link href={proyeto.fields.slug}>
                    <Box sx={{ filter: 'grayscale(1)', backgroundSize: 'cover', height: '100%', backgroundImage: `url('${proyeto.frontmatter.featuredimage.childImageSharp.fluid.src}')`, backgroundPosition: 'top center' }} />
                  </Link>
                </AspectRatio>

                <Box>
                  <Flex mt={2} sx={{ justifyContent: "space-between", alignItems: 'flex-start' }}>
                    <Link href={proyeto.fields.slug} sx={{ flex: 1 }}>
                      <Heading as={'h3'} pr={2} mr={2}>
                        {proyeto.frontmatter.title}
                      </Heading>
                    </Link>

                  </Flex>

                </Box>
              </Card>
            )
          }
        </Flex>
      </Box>
    </Flex >

  )
}


ProyetosRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProyetosRollQuery {
        allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {templateKey: {eq: "proyeto-post"}}}) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProyetosRoll data={data} count={count} />}
  />
)
