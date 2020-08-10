import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Link from './Link'
import { Card, Flex, Text, AspectRatio, Container } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ProfesorasRoll = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (
    <Container>
      <Flex>
        {posts &&
          posts.map(({ node: post }) => (
            <Card as='article'
              key={post.id}>
              <Link
                to={post.fields.slug}
              ><AspectRatio ratio={16 / 9}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </AspectRatio>
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
    </Container>
  )
}


ProfesorasRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProfesorasRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "profesora-post" } } }
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
    render={(data, count) => <ProfesorasRoll data={data} count={count} />}
  />
)
