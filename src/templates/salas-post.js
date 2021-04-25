import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
/** @jsx jsx */
import { AspectRatio, Box, Button, Flex, Heading, jsx } from 'theme-ui'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Alquiler from '../pages/alquiler'

export const SalasPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    featuredimage,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <Alquiler showImage={false}>
            <Flex p={4} sx={{flexDirection:['column','row']}}>
                <Box
                    px={4}
                    sx={{
                        flexGrow: 1,
                        flexBasis: 'sidebar',
                        minWidth: '400px',
                    }}
                >
                    <AspectRatio ratio={4 / 3}>
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: featuredimage,
                                alt: `featured image thumbnail for programas ${title}`,
                                styles: { width: '100%' },
                            }}
                        />
                    </AspectRatio>
                </Box>
                <Box>
                    <Heading>{title}</Heading>
                    <PostContent content={content} />
                </Box>
                <Box>
                    <Link
                        to={'/alquiler/presupuesto'}
                        state={{ selected: title }}
                    >
                        <Button>Solicitar presupuesto</Button>
                    </Link>
                </Box>
            </Flex>
        </Alquiler>
    )
}

SalasPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const SalasPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <>
            <SalasPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                featuredimage={post.frontmatter.featuredimage}
            />
        </>
    )
}

SalasPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default SalasPost

export const pageQuery = graphql`
    query salasPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
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
