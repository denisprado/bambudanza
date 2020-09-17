import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
/** @jsx jsx */
import { Box, Flex, Image, jsx } from 'theme-ui'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <PageContent className="content" content={content} />
    </section>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        image={frontmatter.image}
        content={html}
      />
    </Layout >
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate
        {
          markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
          html
          frontmatter {
            title
            heading
            subheading
            description
            image {
              childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
