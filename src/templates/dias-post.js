import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Heading, Text } from 'theme-ui'
import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'


export const DiasPostTemplate = ({
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
          <PostContent content={content} />
        </Box>
      </Flex>
    </Escuela >
  )
}

DiasPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const DiasPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <DiasPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Dias">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.title}`}
          />
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  )
}

DiasPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DiasPost

export const pageQuery = graphql`
  query DiasPostByID($id: String!) {
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
