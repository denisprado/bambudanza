import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { FiXCircle, FiCircle } from 'react-icons/fi'
import { BsFillCircleFill } from 'react-icons/bs'
import _ from 'lodash'
import { Alert, Card, Flex, Close, Text, AspectRatio, Box, Heading, Badge, Link, Container } from 'theme-ui'
import { lightness } from '@theme-ui/color';

// @jsx jsx
import { jsx } from 'theme-ui'

export const IconsNivel = (props) => {
  const { nivel, sx } = props;
  const niveis = ["Iniciación", "Intermedio", "Avanzado"]
  const colors = ["#21618C", "#6C3483", '#943126'];
  return (<BsFillCircleFill {...props} color={colors[niveis.indexOf(nivel)]} />);
}

const ProgramasRoll = ({ data }) => {

  const { edges: programas } = data.allMarkdownRemark;

  const [filters, setFilters] = useState([])

  const tipos = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.tipo
  ), _.isEqual)

  const niveis = ["Iniciación", "Intermedio", "Avanzado"]

  const clearFilters = () => setFilters([]);

  const clearFilter = (filter) => {
    let newFilters = filters;
    newFilters = newFilters.filter(f => f !== filter);
    setFilters(newFilters && newFilters);
  }

  const addFilter = (newFilter) => {
    const filtersIsEmpty = filters && filters.length === 0;
    const filterExist = filters && !filtersIsEmpty && filters.filter(f => f === newFilter).length > 0 && true
    !filterExist && setFilters([...filters, newFilter]);
  }



  return (

    <Flex sx={{ width: '100%' }}>
      {/* Seletor de filtros */}
      <Box mt={3} sx={{ minWidth: '150px' }}>
        <Box>
          {tipos && tipos.map(t => <Box py={2} key={t}><Link onClick={() => addFilter(t[0])}>{t[0]}</Link></Box>)}
        </Box>
        <Box mt={3}>
          {niveis && niveis.map(nivel =>
            <Box py={1} key={nivel}>
              <Link onClick={() => addFilter(nivel)}>
                <Flex sx={{ alignItems: 'center' }}>
                  <IconsNivel sx={{ mr: 2 }} nivel={nivel} />{nivel}
                </Flex>
              </Link>
            </Box>)
          }
        </Box>
      </Box>

      {/* Filtros atuais */}
      <Box sx={{ minWidth: '100%' }}>
        {
          filters && filters.length > 0 &&
          <Box bx={'muted'} mb={2} sx={{ width: '100%' }}>
            <Flex sx={{ alignItems: 'center' }}>
              {filters.map(filter =>
                <Alert variant='highlight' key={filter} p={2} mx={2} bg={'muted'} color={'primary'} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>{filter}</Box>
                  <Link onClick={() => clearFilter(filter)}>
                      <Close px={2} sx={{ width: '1' }} color={'primary'} />
                  </Link>
                </Alert>)
              }
              <Alert variant='highlight' p={2} mr={2} bg={'transparent'} color={'primary'}>
                <Link onClick={() => clearFilters()}>
                  Limpar Filtros
                </Link>
              </Alert>
            </Flex>
          </Box>
        }

        {/* Listagem de programas */}
        <Flex sx={{
          flexWrap: 'wrap',
          alignContent: 'flex-start',
        }} >
          {

            programas && programas.map(({ node: programa }) =>
              ((filters && filters.length === 0) ||
                (filters && filters.length > 0 &&
                  filters && filters.filter(f => f === programa.frontmatter.tipo[0]).length > 0 ||
                  filters && filters.filter(n => n === programa.frontmatter.nivel[0]).length > 0)) &&
              <Card as='article'
                sx={{
                  flex: '1 1 auto',
                  maxWidth: '30%',

                }}
                key={programa.id}>
                <AspectRatio ratio={4 / 3}>
                  <Link href={programa.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: programa.frontmatter.featuredimage,
                        alt: `featured image thumbnail for programas ${programa.frontmatter.title}`,
                      }}
                    />
                  </Link>
                </AspectRatio>
                <Box>

                  <Flex sx={{ justifyContent: "space-between", alignItems: 'center' }}>
                    <Link href={programa.fields.slug}>
                      <Heading as={'h3'} sx={{ maxWidth: '60%' }}>
                        {programa.frontmatter.title}
                      </Heading>
                    </Link>
                    <Badge px={2} sx={{ marginLeft: 'auto' }}>{programa.frontmatter.tipo}</Badge>
                  </Flex>
                  <Flex mt={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Flex >
                      {programa.frontmatter.nivel.map(n =>
                        <IconsNivel key={n} sx={{ marginRight: 1 }} nivel={n} />
                      )
                      }
                    </Flex>
                    <Text sx={{ marginLeft: 'auto' }}>{programa.frontmatter.dias}</Text>
                    <Text sx={{ marginLeft: 'auto' }}>{programa.frontmatter.horarios}</Text>
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
          sort: { order: ASC, fields: [frontmatter___tipo] }
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
