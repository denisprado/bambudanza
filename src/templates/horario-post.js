import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Heading, Text } from 'theme-ui'
import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'


export const HorarioPostTemplate = ({
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

HorarioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const HorarioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <HorarioPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Horario">
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

HorarioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default HorarioPost

export const pageQuery = graphql`
  query HorarioPostByID($id: String!) {
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
