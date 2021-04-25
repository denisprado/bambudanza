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
    Close,
    Divider,
    Flex,
    Heading,
    Link,
    Text,
} from 'theme-ui'
import MyHr from './MyHr'

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

const OnlineRoll = ({ data }, location) => {
    console.log(location)
    const { edges: clases } = data.allMarkdownRemark

    return (
        <Flex p={4} sx={{ width: '100%' }}>
            <Box sx={{ minWidth: '100%' }}>
                <Flex
                    sx={{
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                    }}
                >
                    {clases &&
                        clases.map(({ node: clase }) => (
                            <Card
                                as="article"
                                sx={{
                                    flex: '1 1',
                                    maxWidth: ['90%', '33%'],
                                    minWidth: ['100%', '33%'],
                                    width: ['100%', '33%'],
                                }}
                                key={clase.id}
                            >
                                <AspectRatio ratio={4 / 3} bg={'gray'}>
                                    <Link href={clase.fields.slug}>
                                        <Box
                                            sx={{
                                                filter: 'grayscale(1)',
                                                backgroundSize: 'cover',
                                                height: '100%',
                                                backgroundImage: `url('${clase.frontmatter.featuredimage.childImageSharp.fluid.src}')`,
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
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Link
                                            href={clase.fields.slug}
                                            sx={{ flex: 1 }}
                                        >
                                            <Heading as={'h3'} pr={2} mr={2}>
                                                {clase.frontmatter.title}
                                            </Heading>
                                            <Text
                                                sx={{
                                                    fontSize: 1,
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {clase.frontmatter.estilo}
                                            </Text>
                                        </Link>
                                        <Badge
                                            bg={'primary'}
                                            px={2}
                                            sx={{ marginLeft: 'auto' }}
                                        >
                                            {clase.frontmatter.tipo}
                                        </Badge>
                                    </Flex>

                                    <Flex
                                        mt={1}
                                        sx={{
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Flex>
                                            {clase.frontmatter.nivel.map(
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
                                            {clase.frontmatter.dias}
                                        </Text>
                                        <Text mr={2}>»</Text>
                                        <Text>
                                            {clase.frontmatter.horarios}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Card>
                        ))}
                </Flex>
            </Box>
        </Flex>
    )
}

OnlineRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query OnlineRollQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___title] }
                    filter: {
                        frontmatter: { templateKey: { eq: "online-post" } }
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
        render={(data, count) => <OnlineRoll data={data} count={count} />}
    />
)
