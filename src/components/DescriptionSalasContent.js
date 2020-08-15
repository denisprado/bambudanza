/** @jsx jsx */
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex, jsx, Text } from 'theme-ui'

const DescriptionSalas = ({ data }) => {

  const { edges: salas } = data.allMarkdownRemark

  return (
    <Flex>
      {salas &&
        salas.map(({ node: post }) => (
          <Text>
            {post.frontmatter.description}
          </Text>

        ))
      }
    </Flex >
  )
}


DescriptionSalas.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DescriptionSalasQuery {
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
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DescriptionSalas data={data} count={count} />}
  />
)
