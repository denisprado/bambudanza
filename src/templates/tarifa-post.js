import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Heading, Text } from 'theme-ui'
import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'


export const TarifaPostTemplate = ({
  content,
  contentComponent,
  price,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Escuela>
      {helmet || ''}
      <Flex>

        <Box as='main'>
          <Heading>{title}</Heading>
          <Text>{price}</Text>
          <PostContent content={content} />
        </Box>
      </Flex>
    </Escuela >
  )
}

TarifaPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const TarifaPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <TarifaPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Tarifa">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
          />
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  )
}

TarifaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TarifaPost

export const pageQuery = graphql`
  query TarifaPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
