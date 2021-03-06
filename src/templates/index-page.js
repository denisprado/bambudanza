import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
/** @jsx jsx */
import { Container, Box, Grid, Image, jsx } from "theme-ui";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    description,
    content,
    contentComponent,
}) => {
    const PageContent = contentComponent || Content;

    return (
        <Container sx={{ mt: 5 }}>
            <Grid gap={2} columns={["2fr 5fr"]}>
                <Box sx={{ ml: 3 }}>
                    <PageContent className="content" content={content} />
                </Box>
                <Box>
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: image,
                            alt: `featured image thumbnail ${title}`,
                            styles: { width: "100%" },
                        }}
                    />
                </Box>
            </Grid>
        </Container>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    description: PropTypes.string,
};

const IndexPage = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

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
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            html
            frontmatter {
                title
                heading
                subheading
                description
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
