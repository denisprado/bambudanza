import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SalasPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return <PageContent title={title} content={content} />
}

SalasPageTemplate.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const SalasPage = () => {
    const data = useStaticQuery(graphql`
        query SalasPage {
            allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "salas-page" } } }
            ) {
                edges {
                    node {
                        id
                        html
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                            title
                        }
                    }
                }
            }
        }
    `)
    const { allMarkdownRemark: edges } = data
    const { node: post } = edges

    return (
        <Layout>
            <SalasPageTemplate
                contentComponent={HTMLContent}
                title={post && post.frontmatter.title}
                content={post && post.html}
            />
        </Layout>
    )
}

SalasPage.propTypes = {
    data: PropTypes.object,
}

export default SalasPage
