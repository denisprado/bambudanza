import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SalasPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <PageContent className="content" content={content} />
    </section>
  )
}

SalasPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SalasPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SalasPageTemplate
        contentComponent={HTMLContent}
        sidebar={post.frontmatter.sidebar}
        description={post.frontmatter.description}
        content={post.html}
      />
    </Layout>
  )
}

SalasPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SalasPage

export const aboutPageQuery = graphql`
  query SalasPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        sidebar
        description
      }
    }
  }
`
