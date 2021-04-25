import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import {
    AspectRatio,
    Badge,
    Box,
    Card,
    Flex,
    Heading,
    Link,
    Text,
} from 'theme-ui'

export const IconsNivel = (props) => {
    const { nivel } = props
    const niveis = ['Iniciación', 'Intermedio', 'Avanzado']
    const colors = ['#919f79', '#768858', '#5e6c46']
    return (
        <BsFillCircleFill
            mr={1}
            {...props}
            color={colors[niveis.indexOf(nivel)]}
        />
    )
}

const VeranoRoll = ({ data }) => {
    const { edges: verano } = data.allMarkdownRemark

    const [filters, setFilters] = useState([])

    return (
        <Flex p={4} sx={{ width: '100%' }}>
            {/* Seletor de filtros
      <Box mt={3} sx={{ minWidth: '200px', '& > div': { mb: 4 } }}>
        <Box>
          <Heading as={'h4'} color={'primary'}>Tipo de programa</Heading>
          <MyHr />
          {tipos && tipos.map(t => <Box key={t}><Link onClick={() => addFilter(t[0])}>{t[0]}</Link></Box>)}
        </Box>
        <Box>
          <Heading as={'h4'} color={'primary'}>Nível</Heading>
          <MyHr />
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
          <MyHr />
          {dias && dias.map(t => <Box key={t}><Link onClick={() => addFilter(t)}>{t}</Link></Box>)}
        </Box>
        <Box>
          <Heading as={'h4'} color={'primary'}>Horarios</Heading>
          <MyHr />
          {horas && horas.map(t => <Box key={t}><Link onClick={() => addFilter(t)}>{t}</Link></Box>)}
        </Box>
      </Box>
      */}
            <Box sx={{ minWidth: '100%' }}>
                {/* Filtros atuais
        {
          filters && filters.length > 0 &&
          <Box bx={'muted'} mb={1} ml={2} sx={{ width: '100%' }}>
            <Flex sx={{ alignItems: 'center' }}>
              <Heading as={'h4'} color={'primary'} mx={2}>Filtros: </Heading>
              {filters.map(filter =>
                <Badge variant='highlight'
                  key={filter} mr={1} px={2} bg={'gray'} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>{filter}</Box>
                  <Box sx={{ marginLeft: 'auto' }}>
                    <Link onClick={() => clearFilter(filter)}>
                      <Close pl={2} color={'white'} />
                    </Link>
                  </Box>
                </Badge>)
              }
              <Text variant='highlight' p={1} ml={2} bg={'transparent'} color={'primary'}>
                <Link onClick={() => clearFilters()}>
                  <Flex sx={{ alignItems: 'center', p: 0 }}>
                    <Text>Limpiar Todos los Filtros </Text><Close px={2} sx={{ width: '1' }} color={'primary'} />
                  </Flex>
                </Link>
              </Text>
            </Flex>
            <Divider />
          </Box>
        }

        {/* Listagem de verano */}
                <Flex
                    sx={{
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                    }}
                >
                    {verano &&
                        verano.map(
                            ({ node: programa }) =>
                                ((filters && filters.length === 0) ||
                                    (filters &&
                                        filters.length > 0 &&
                                        filters &&
                                        filters.filter(
                                            (f) =>
                                                f ===
                                                programa.frontmatter.tipo[0]
                                        ).length > 0) ||
                                    (filters &&
                                        filters.filter(
                                            (f) =>
                                                f ===
                                                programa.frontmatter.horarios
                                        ).length > 0) ||
                                    (filters &&
                                        filters.filter(
                                            (f) =>
                                                f === programa.frontmatter.dias
                                        ).length > 0) ||
                                    (filters &&
                                        filters.filter(
                                            (n) =>
                                                n ===
                                                programa.frontmatter.nivel[0]
                                        ).length > 0)) && (
                                    <Card
                                        as="article"
                                        sx={{
                                            flex: '1 1 auto',
                                            maxWidth: ['90%', '33%'],
                                            minWidth: ['100%', '33%'],
                                            width: ['100%', '33%'],
                                        }}
                                        key={programa.id}
                                    >
                                        <AspectRatio ratio={4 / 3} bg={'gray'}>
                                            <Link href={programa.fields.slug}>
                                                <Box
                                                    sx={{
                                                        filter: 'grayscale(1)',
                                                        backgroundSize: 'cover',
                                                        height: '100%',
                                                        backgroundImage: `url('${programa.frontmatter.featuredimage.childImageSharp.fluid.src}')`,
                                                        backgroundPosition:
                                                            'top center',
                                                    }}
                                                />
                                            </Link>
                                        </AspectRatio>

                                        <Box>
                                            <Flex
                                                mt={2}
                                                sx={{
                                                    justifyContent:
                                                        'space-between',
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <Link
                                                    href={programa.fields.slug}
                                                    sx={{ flex: 1 }}
                                                >
                                                    <Heading
                                                        as={'h3'}
                                                        pr={2}
                                                        mr={2}
                                                    >
                                                        {
                                                            programa.frontmatter
                                                                .title
                                                        }
                                                    </Heading>
                                                    <Text
                                                        sx={{
                                                            fontSize: 1,
                                                            fontStyle: 'italic',
                                                        }}
                                                    >
                                                        {
                                                            programa.frontmatter
                                                                .estilo
                                                        }
                                                    </Text>
                                                </Link>
                                                <Badge
                                                    bg={'primary'}
                                                    px={2}
                                                    sx={{ marginLeft: 'auto' }}
                                                >
                                                    {programa.frontmatter.tipo}
                                                </Badge>
                                            </Flex>

                                            <Flex
                                                mt={1}
                                                sx={{
                                                    justifyContent:
                                                        'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Flex>
                                                    {programa.frontmatter.nivel.map(
                                                        (n) => (
                                                            <IconsNivel
                                                                key={n}
                                                                mr={1}
                                                                nivel={n}
                                                            />
                                                        )
                                                    )}
                                                </Flex>
                                                <Text mx={2}>
                                                    {programa.frontmatter.dias}
                                                </Text>
                                                <Text mr={2}>»</Text>
                                                <Text>
                                                    {
                                                        programa.frontmatter
                                                            .horarios
                                                    }
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </Card>
                                )
                        )}
                </Flex>
            </Box>
        </Flex>
    )
}

VeranoRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query VeranoRollQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___title] }
                    filter: {
                        frontmatter: { templateKey: { eq: "verano-post" } }
                    }
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
        render={(data, count) => <VeranoRoll data={data} count={count} />}
    />
)
