import { graphql, StaticQuery } from "gatsby";
import _ from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import {
    AspectRatio,
    Badge,
    Box,
    Card,
    Close,
    Divider,
    Flex,
    Heading,
    Link,
    Text,
} from "theme-ui";
import MyHr from "./MyHr";

const GalleryRoll = ({ data }, location) => {
    const { edges: gallery } = data.allMarkdownRemark;

    return (
        <Flex p={4} sx={{ width: "100%" }}>
            <Box sx={{ minWidth: "100%" }}>
                <Flex
                    sx={{
                        flexWrap: "wrap",
                        alignContent: "flex-start",
                    }}
                >
                    {gallery &&
                        gallery.map(({ node: item }) => (
                            <Card
                                as="article"
                                sx={{
                                    flex: "1 1 auto",
                                    maxWidth: "33%",
                                    minWidth: "33%",
                                }}
                                key={item.id}
                            >
                                <AspectRatio ratio={4 / 3} bg={"gray"}>
                                    <Link href={item.fields.slug}>
                                        <Box
                                            sx={{
                                                filter: "grayscale(1)",
                                                backgroundSize: "cover",
                                                height: "100%",
                                                backgroundImage: `url('${item.frontmatter.image.childImageSharp.fluid.src}')`,
                                                backgroundPosition:
                                                    "top center",
                                            }}
                                        />
                                    </Link>
                                </AspectRatio>

                                <Box>
                                    <Flex
                                        mt={2}
                                        sx={{
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                        }}
                                    ></Flex>
                                </Box>
                            </Card>
                        ))}
                </Flex>
            </Box>
        </Flex>
    );
};

GalleryRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query GalleryRollQuery {
                allMarkdownRemark(
                    sort: {
                        order: ASC
                        fields: [frontmatter___order, frontmatter___title]
                    }
                    filter: {
                        frontmatter: { templateKey: { eq: "gallery-post" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                featuredpost
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
                }
            }
        `}
        render={(data, count) => <GalleryRoll data={data} count={count} />}
    />
);
