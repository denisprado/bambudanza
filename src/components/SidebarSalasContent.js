/** @jsx jsx */
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex, jsx, Text } from 'theme-ui'

const SidebarSalas = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (
    <Flex>
      {posts &&
        posts.map(({ node: post }) => (
          <Text>
            {post.frontmatter.sidebar}
          </Text>

        ))
      }
    </Flex >
  )
}


SidebarSalas.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PageSalasQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "salas-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                sidebar
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SidebarSalas data={data} count={count} />}
  />
)
