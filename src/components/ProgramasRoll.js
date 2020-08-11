import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { FiXCircle, FiCircle } from 'react-icons/fi'
import { BsFillCircleFill } from 'react-icons/bs'
import _ from 'lodash'
import { Card, Flex, Text, AspectRatio, Box, Heading, Badge, Link, Container } from 'theme-ui'
import { lightness } from '@theme-ui/color';

// @jsx jsx
import { jsx } from 'theme-ui'

export const IconsNivel = (props) => {
  const { nivel, sx } = props;
  const niveis = ["Iniciación", "Intermedio", "Avanzado"]
  const colors = ["#DFF8D5", "#5E8052", '#2E4F24'];
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

    <Flex mt={4} sx={{ minHeight: '50vh', width: '100%' }}>

      {/* Seletor de filtros */}
      <Box mt={2} sx={{ minWidth: '20vh' }}>
        <Box>
          {tipos && tipos.map(t => <Box key={t}><Link onClick={() => addFilter(t[0])}>{t[0]}</Link></Box>)}
        </Box>
        <Box mt={3}>
          {niveis && niveis.map(nivel =>
            <Box key={nivel}>
              <Link onClick={() => addFilter(nivel)}>
                <IconsNivel sx={{ mr: 1 }} nivel={nivel} />{nivel}
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
                <Badge key={filter} p={2} mr={2} bg={'muted'} color={'primary'}>{filter}
                  <Link onClick={() => clearFilter(filter)}>
                    <span sx={{ paddingX: 1 }}><FiXCircle /></span>
                  </Link>
                </Badge>)
              }
              <Badge p={2} mr={2} bg={'transparent'} color={'primary'}>Limpar Filtros
                  <Link onClick={() => clearFilters()}>
                  <span sx={{ paddingX: 1 }}><FiXCircle /></span>
                </Link>
              </Badge>
            </Flex>
          </Box>
        }

        {/* Listagem de programas */}
        <Flex sx={{
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          minWidth: '100%'
        }} >
          {
            programas && programas.map(({ node: programa }) =>
              ((filters && filters.length === 0) ||
                (filters && filters.length > 0 &&
                  filters && filters.filter(f => f === programa.frontmatter.tipo[0]).length > 0 ||
                  filters && filters.filter(n => n === programa.frontmatter.nivel[0]).length > 0)) &&
              <Card as='article'
                sx={{
                  flex: '1 1 33%',
                  maxWidth: '33%',
                  minmaxWidth: '33%',
                }}
                key={programa.id}>
                <AspectRatio ratio={16 / 9}>
                  <Link href={programa.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: programa.frontmatter.featuredimage,
                        alt: `featured image thumbnail for programas ${programa.frontmatter.title}`,
                      }}
                    />
                  </Link>
                </AspectRatio>
                <Flex>
                  <Box>

                    <Link href={programa.fields.slug}>
                      <Heading as={'h3'} sx={{ maxWidth: '60%' }}>
                        <Text>{programa.frontmatter.title}</Text>
                      </Heading>
                    </Link>
                    <Flex mt={1}>
                      {programa.frontmatter.nivel.map(n => <Box key={n} sx={{ marginRight: '1' }}><IconsNivel nivel={n} /></Box>)}
                    </Flex>
                  </Box>
                  <Box sx={{ maxWidth: '35%' }}>
                    <Badge>{programa.frontmatter.tipo}</Badge>
                    <Badge>{programa.frontmatter.horarios}</Badge>
                  </Box>
                </Flex>
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
