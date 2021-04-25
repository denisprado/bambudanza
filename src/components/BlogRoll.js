/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Link from '../components/Link'
import { Card, Flex, Heading } from 'theme-ui'

const BlogRoll = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Flex>
            {posts &&
                posts.map(({ node: post }) => (
                    <Card as="article" sx={{ flex: 1 }} key={post.id}>
                        <Link to={post.fields.slug}>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                            />
                        </Link>
                        <Heading>
                            <Link to={post.fields.slug}>
                                {post.frontmatter.title}
                            </Link>
                        </Heading>
                    </Card>
                ))}
        </Flex>
    )
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
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
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)
