import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { FiXCircle } from 'react-icons/fi'
import _ from 'lodash'
import { Card, Flex, Text, AspectRatio, Box, Heading, Badge, Link } from 'theme-ui'
// @jsx jsx
import { jsx } from 'theme-ui'

const ProgramasRoll = ({ data }) => {

  const [filterTipo, setFilterTipo] = useState(null)
  const [filterNivel, setFilterNivel] = useState(null)

  const { edges: programas } = data.allMarkdownRemark;

  const tipos = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.tipo
  ), _.isEqual)

  const niveis = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.nivel
  ), _.isEqual)

  const clearFilters = () => {
    setFilterNivel(null);
    setFilterTipo(null);
  }


  return (
    <Flex mt={4} sx={{ minHeight: '50vh' }}>
      <Box mt={2} sx={{ minWidth: '20vh' }}>
        <Box>
          <Heading as={'h3'}>Tipos</Heading>

          {(tipos.map(t => <Box><Link onClick={() => setFilterTipo(t)}>{t}</Link></Box>))}
        </Box>

        <Box mt={3}>
          <Heading as={'h3'}>Nivel</Heading>
          {(niveis.map(nivel => <Box><Link onClick={() => setFilterNivel(nivel)}>{nivel}</Link></Box>))}
        </Box>
      </Box>


      {
        (filterNivel || filterNivel) &&
        <Flex>
          {filterNivel && <Badge p={2} mr={2} bg={'muted'} color={'primary'}>{filterNivel}</Badge>}
          {filterTipo && <Badge p={2} bg={'muted'} color={'primary'}>{filterTipo}</Badge>}
          {(filterNivel || filterTipo) && <Link onClick={() => clearFilters()}><FiXCircle /></Link>}
        </Flex>
      }{
        programas &&
        programas.map(({ node: programa }) => (
          (filterTipo === null || filterTipo === programa.frontmatter.tipo) &&
          (filterNivel === null || filterNivel === programa.frontmatter.nivel) &&
          <Card as='article'
            sx={{
              minWidth: '584px'
            }}
            key={programa.id}>
            <Link
              to={programa.fields.slug}
            >
              <AspectRatio ratio={16 / 9}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: programa.frontmatter.featuredimage,
                    alt: `featured image thumbnail for programas ${programa.frontmatter.title}`,
                  }}
                />
              </AspectRatio>
            </Link>
            <Flex>
              <Heading to={programa.fields.slug}>
                <Text>{programa.frontmatter.title}</Text>
              </Heading>
              <Link sx={{ marginLeft: 'auto' }}>
                <Badge>{programa.frontmatter.tipo}</Badge>
              </Link>
            </Flex>
          </Card>

        ))
      }
    </Flex >
  )
}


ProgramasRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProgramasRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "programa-post" } } }
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
                tipo
                nivel
                estilo
                horarios
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
    render={(data, count) => <ProgramasRoll data={data} count={count} />}
  />
)
