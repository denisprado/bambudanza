import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'
import { Flex, Box, Heading, Text } from 'theme-ui'

export const ProgramaPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Escuela>
      {helmet || ''}
      <Flex>
        <Box p={2} as='aside' sx={{
          flexGrow: 1,
          flexBasis: 'sidebar',
          minWidth: '300px'
        }}>
          <Heading as='h4'>Tags</Heading>
          <ul>
            {tags && tags.length ? (

              tags.map((tag) => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))
            )
              : null}
          </ul>
        </Box>
        <Box as='main'>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <PostContent content={content} />
        </Box>
      </Flex>
    </Escuela >
  )
}

ProgramaPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProgramaPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <ProgramaPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Programa">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

ProgramaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProgramaPost

export const pageQuery = graphql`
  query ProgramaPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
