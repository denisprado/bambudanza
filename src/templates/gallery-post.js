import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
/** @jsx jsx */
import { Box, Flex, AspectRatio, jsx } from "theme-ui";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "../pages/gallery";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const GalleryPostTemplate = ({
    content,
    contentComponent,
    image,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <Gallery showImage={false}>
            {helmet || ""}
            <Flex py={4}>
                <Box
                    px={4}
                    as="aside"
                    sx={{
                        flexGrow: 1,
                        flexBasis: "sidebar",
                        minWidth: "400px",
                    }}
                >
                    <AspectRatio ratio={4 / 3}>
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: image,
                                alt: `featured image thumbnail for Gallerys ${title}`,
                                styles: { width: "100%" },
                            }}
                        />
                    </AspectRatio>
                </Box>
            </Flex>
        </Gallery>
    );
};

GalleryPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const GalleryPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <GalleryPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            helmet={
                <Helmet titleTemplate="%s | Gallery">
                    <title>{`${post.frontmatter.title}`}</title>
                    <meta
                        name="description"
                        content={`${post.frontmatter.description}`}
                    />
                </Helmet>
            }
            //tags={post.frontmatter.tags}
            id={post.id}
            title={post.frontmatter.title}
            image={post.frontmatter.image}
        />
    );
};

GalleryPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default GalleryPost;

export const pageQuery = graphql`
    query GalleryPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
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
