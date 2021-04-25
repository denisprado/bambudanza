import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'
import { Flex, Box, Heading, Text, Container } from 'theme-ui'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProfesoraPostTemplate = ({
    content,
    contentComponent,
    description,
    title,
    featuredimage,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <Escuela showImage={false}>
            {helmet || ''}
            <Flex p={4} sx={{flexDirection:['column','row']}}>
                <Box
                    pr={4}
                    as="aside"
                    sx={{
                        flexGrow: 1,
                        flexBasis: 'sidebar',
                        minWidth: '300px',
                        margin: '0 auto',
                    }}
                >
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: featuredimage,
                            alt: `featured image thumbnail for post ${title}`,
                            styles: {
                                borderRadius: '50%',
                                height: '250px',
                                width: '250px',
                            },
                        }}
                    />
                </Box>
                <Box as="main"  sx={{margin:[4,null]}}>
                    <Heading>{title}</Heading>

                    <PostContent content={content} />
                </Box>
            </Flex>
        </Escuela>
    )
}

ProfesoraPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const ProfesoraPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <ProfesoraPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            featuredimage={post.frontmatter.featuredimage}
            helmet={
                <Helmet titleTemplate="%s | Profesora">
                    <title>{`${post.frontmatter.title}`}</title>
                    <meta
                        name="description"
                        content={`${post.frontmatter.description}`}
                    />
                </Helmet>
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
        />
    )
}

ProfesoraPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default ProfesoraPost

export const pageQuery = graphql`
    query ProfesoraPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
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
`
