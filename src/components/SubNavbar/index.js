import React from "react";
/** @jsx jsx */
import { Box, Container, Flex, Heading, jsx } from "theme-ui";
import { Link } from "gatsby";
import { HTMLContent } from "../Content";
import { Location } from "@reach/router";

const SubNavbar = ({
    children,
    image,
    showImage = true,
    title,
    link,
    text = false,
}) => (
    <Flex
        sx={{
            flexDirection: "column",
        }}
    >
        <Box
            sx={{
                borderBottom: "2px solid",
                borderColor: "muted",
                flex: "1 1 auto",

            }}
        >
            <Container>
                <Flex
                    pt={1}
                    sx={{
                        alignItems: ["center", "center", "flex-end"],
                        flexDirection: ["column", "column", "row"],
                        justifyContent:'center'
                    }}
                >
                    {/* <Flex
                        sx={{
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexDirection: ["column", "row", "row"],
                        }}
                    >
                        <Heading
                            as={"h2"}
                            color={"primary"}
                            pb={3}
                            ml={3}
                            mr={2}
                        >
                            <Link
                                style={{
                                    color: "#768858",
                                    textDecoration: "none",
                                }}
                                to={`/${link}`}
                            >
                                {title}
                            </Link>
                        </Heading>
                    </Flex> */}

                    <Flex
                        as="nav"
                        sx={{
                            ml: [0, 0, 4],
                            a: {
                                flex: "1 1 auto",
                                fontSize: 2,
                                mx: 2,
                                paddingY: 3,
                                paddingX: 3,
                                textAlign: "center",
                                color: "text",
                                "&:hover": {
                                    transition: "all .5s",
                                    fontWeight: "400",
                                },
                            },
                            "a.active": {
                                borderBottom: "3px solid",
                                color: "highlight",
                                fontWeight: "600",
                                marginBottom: "-3px",
                            },
                            borderBottom: '1px solid "primary"',
                            justifyContent: "flex-end",
                            flexDirection:['column','row'],
                            flexWrap:'wrap'

                        }}
                    >
                        {children}
                    </Flex>
                </Flex>
            </Container>
        </Box>
        <>
            {showImage && !text && (
                <Flex
                    sx={{
                        backgroundImage: `url(${
                            image && image && showImage && image
                        })`,
                        backgroundPosition: "center center",
                        backgroundPositionX: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        minHeight: "75vh",
                        width: "100vw",
                        margin: "0 auto",
                        //filter: "grayscale(100%)",
                    }}
                ></Flex>
            )}
            {text && (
                <Container>
                    <Flex sx={{ mt: 4,flexDirection:['column','row'] }}>
                        <img
                            src={`${image && showImage && image}`}
                            sx={{
                                minHeight: ["25vh"],
                                maxHeight:['25vh','50vh'],
                                maxWidth: ["100vw",'30vw'],
                                width:['100vw','25vw'],
                                mr: [0,4],
                                objectFit: "cover",
                            }}
                        />
                        <Flex>
                            <HTMLContent content={text} className={"text"} />
                        </Flex>
                    </Flex>
                </Container>
            )}
        </>
    </Flex>
);

export default SubNavbar;
