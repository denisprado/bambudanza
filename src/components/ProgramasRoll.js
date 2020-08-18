import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { Alert, AspectRatio, Badge, Box, Card, Close, Flex, Heading, Link, Text, jsx, Divider } from 'theme-ui'
import PreviewCompatibleImage from './PreviewCompatibleImage'


export const IconsNivel = (props) => {
  const { nivel } = props;
  const niveis = ["Iniciación", "Intermedio", "Avanzado"]
  const colors = ["#21618C", "#6C3483", '#943126'];
  return (<BsFillCircleFill mr={1} {...props} color={colors[niveis.indexOf(nivel)]} />);
}

const ProgramasRoll = ({ data }) => {

  const { edges: programas } = data.allMarkdownRemark;

  const [filters, setFilters] = useState([])

  const tipos = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.tipo
  ), _.isEqual)

  const niveis = ["Iniciación", "Intermedio", "Avanzado"];
  const horas = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.horarios
  ), _.isEqual)
  const dias = _.uniqWith(programas.map(({ node: prog }) =>
    prog.frontmatter.dias
  ), _.isEqual)

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
      <Box mt={3} sx={{ minWidth: '200px', '& > div': { mb: 4 } }}>
        <Box>
          <Heading as={'h4'} color={'primary'}>Tipo de programa</Heading>
          <Divider />

          {tipos && tipos.map(t => <Box key={t}><Link onClick={() => addFilter(t[0])}>{t[0]}</Link></Box>)}
        </Box>
        <Box>
          <Heading as={'h4'} color={'primary'}>Nível</Heading>
          <Divider />
          {niveis && niveis.map(nivel =>
            <Box key={nivel}>
              <Link onClick={() => addFilter(nivel)}>
                <Flex sx={{ alignItems: 'center' }}>
                  <IconsNivel nivel={nivel} />
                  <Text ml={2}>{nivel}</Text>
                </Flex>
              </Link>
            </Box>)
          }
        </Box>
        <Box>
          <Heading as={'h4'} color={'primary'}>Dias</Heading>
          <Divider />
          {dias && dias.map(t => <Box key={t}><Link onClick={() => addFilter(t)}>{t}</Link></Box>)}
        </Box>
        <Box>
          <Heading as={'h4'} color={'primary'}>Horarios</Heading>
          <Divider />
          {horas && horas.map(t => <Box key={t}><Link onClick={() => addFilter(t)}>{t}</Link></Box>)}
        </Box>
      </Box>

      {/* Filtros atuais */}
      <Box sx={{ minWidth: '100%' }} >
        {
          filters && filters.length > 0 &&
          <Box bx={'muted'} mb={1} ml={2} sx={{ width: '100%' }}>
            <Flex sx={{ alignItems: 'center' }}>
              <Heading as={'h4'} color={'primary'} mr={2}>Filtros: </Heading>
              {filters.map(filter =>
                <Badge variant='highlight'
                  key={filter} my={0} px={2} bg={'gray'} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>{filter}</Box>
                  <Box>
                    <Link onClick={() => clearFilter(filter)}>
                      <Close px={2} color={'white'} />
                    </Link>
                  </Box>
                </Badge>)
              }
              <Text variant='highlight' p={1} ml={2} bg={'transparent'} color={'primary'}>
                <Link onClick={() => clearFilters()}>
                  <Flex sx={{ alignItems: 'center', p: 0 }}>
                    <Box>Limpiar Todos los Filtros </Box><Close px={2} sx={{ width: '1' }} color={'primary'} />
                  </Flex>
                </Link>
              </Text>
            </Flex>
            <Divider />
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
                  filters && filters.filter(f => f === programa.frontmatter.horarios).length > 0 ||
                  filters && filters.filter(f => f === programa.frontmatter.dias).length > 0 ||
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
                    <Link href={programa.fields.slug} sx={{ flex: 1 }}>
                      <Heading as={'h3'} pr={2} mt={2} mr={2}>
                        {programa.frontmatter.title}
                      </Heading>
                      <Text sx={{
                        fontSize: 1,
                        fontStyle: 'italic',
                      }}>{programa.frontmatter.estilo}</Text>
                    </Link>
                    <Badge bg={'gray'} px={2} sx={{ marginLeft: 'auto' }}>{programa.frontmatter.tipo}</Badge>
                  </Flex>

                  <Flex mt={1} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Flex>
                      {programa.frontmatter.nivel.map(n =>
                        <IconsNivel key={n} mr={1} nivel={n} />
                      )
                      }
                    </Flex>
                    <Text mx={2}>{programa.frontmatter.dias}</Text>
                    <Text mr={2}>»</Text><Text>{programa.frontmatter.horarios}</Text>
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
                dias
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
