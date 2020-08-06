import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'
import { Flex, Box, Heading, Text } from 'theme-ui'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ProfesoraPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Escuela>
      {helmet || ''}
      <Flex>
        <Box as='aside' sx={{
          flexGrow: 1,
          flexBasis: 'sidebar',
        }}>

          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />
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

ProfesoraPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProfesoraPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <ProfesoraPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Profesora">
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

ProfesoraPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProfesoraPost

export const pageQuery = graphql`
  query ProfesoraPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
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
`
