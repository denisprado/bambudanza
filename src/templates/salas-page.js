import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SalasPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <PageContent className="content" content={content} />
  )
}

SalasPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SalasPage = ({ data }) => {
  const { allMarkdownRemark: edges } = data
  const {node: post} = edges

  return (
    <Layout>
      <SalasPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SalasPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SalasPage

export const pageQuery = graphql`
  query SalasPage {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "salas-page"}}}) {
    edges {
      node {
        id
        html
        fields {
          slug
        }
        frontmatter {
          tags
          templateKey
          title
        }
      }
    }
  }
  }
`
