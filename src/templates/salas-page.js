import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Image, AspectRatio } from 'theme-ui'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import SalasImage from '../img/index-image.jpeg'

export const SalasPageTemplate = ({
    sidebar,
    description,
}) => (
        <></>
    )

SalasPageTemplate.propTypes = {
    sidebar: PropTypes.string,
    description: PropTypes.string,
}

const SalasPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <SalasPageTemplate
                sidebar={frontmatter.sidebar}
                description={frontmatter.description}
            />
        </Layout>
    )
}

SalasPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default SalasPage

export const pageQuery = graphql`
  query SalasPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "salas-page" } }) {
      frontmatter {
        description
        sidebar
      }
    }
  }
`
