import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Link from './Link'
import { Card, Flex, Text } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ProgramasRoll = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (
    <Flex>
      {posts &&
        posts.map(({ node: post }) => (
          <Card as='article'
            sx={{
              maxWidth: 500,
            }}
            key={post.id}>
            <Link
              to={post.fields.slug}
            >
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            </Link>
            <Text>
              <Link
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>

            </Text>

          </Card>
        ))}
    </Flex>
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
