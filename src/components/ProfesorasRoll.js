import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Link from './Link'
import { Card, Flex, Text, AspectRatio, Container, Heading, Box } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ProfesorasRoll = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (

    <Flex p={4} sx={{
      flexWrap: 'wrap',
      alignContent: 'flex-start',
    }}>
      {posts &&
        posts.map(({ node: post }) => (
          <Card as='article'
            sx={{
              flex: '1 1 33%',
              maxWidth: '33%',
              minWidth: '33%',
            }}
            key={post.id}>

            <Link
              to={post.fields.slug}
            ><AspectRatio ratio={4 / 3}>
                <Box sx={{ filter: 'grayscale(1)', backgroundSize: 'cover', height: '100%', backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.fluid.src}')`, backgroundPosition: 'top center' }} />
              </AspectRatio>
            </Link>
            <Text>
              <Link
                to={post.fields.slug}
              ><Heading as={'h3'}>
                  {post.frontmatter.title}
                </Heading>
              </Link>

            </Text>

          </Card>
        ))}
    </Flex>
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
