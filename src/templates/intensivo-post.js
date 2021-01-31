import { graphql } from "gatsby";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
/** @jsx jsx */
import { Box, Flex, Heading, Text, jsx, AspectRatio } from "theme-ui";
import Content, { HTMLContent } from "../components/Content";
import Button from "../components/Button";
import Link from "../components/Link";
import Escuela from "../pages/escuela";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import MyHr from "../components/MyHr";

export const IntensivoPostTemplate = ({
    content,
    contentComponent,
    description,
    nivel,
    featuredimage,
    dias,
    profesora,
    tarifa,
    horarios,
    title,
    id,
    helmet,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <Escuela showImage={false}>
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
                                image: featuredimage,
                                alt: `featured image thumbnail for intensivos ${title}`,
                                styles: { width: "100%" },
                            }}
                        />
                    </AspectRatio>

                    <Heading as={"h4"} color={"primary"} mt={4}>
                        Profesora
                    </Heading>
                    <Link to={`/escuela/profesoras/${kebabCase(profesora)}/`}>
                        {profesora}
                    </Link>

                    <MyHr />
                    <Heading as={"h4"} color={"primary"}>
                        Horario
                    </Heading>
                    <Flex>
                        {dias &&
                            dias.length &&
                            dias.map((dia) => (
                                <Box key={dia + `dia`}>
                                    <Text>{dia}</Text>
                                </Box>
                            ))}
                        {horarios &&
                            horarios.length &&
                            horarios.map((horarios) => (
                                <Box key={horarios + `horarios`}>
                                    <Text ml={2}> - {horarios}</Text>
                                </Box>
                            ))}
                    </Flex>

                    <MyHr />

                    <Heading as="h4" color={"primary"}>
                        Tarifas
                    </Heading>
                    {tarifa &&
                        tarifa.length &&
                        tarifa.map((t) => (
                            <Box key={t + `tarifa`}>
                                <Link to="/escuela/tarifas">{t}</Link>
                            </Box>
                        ))}
                </Box>
                <Box as="main">
                    <Heading mb={2}>{title}</Heading>
                    <Link
                        to={"/escuela/inscripcion"}
                        state={{ selected: title }}
                    >
                        <Button sx={{ my: 4 }}>Inscripción</Button>
                    </Link>

                    <PostContent content={content} />
                </Box>
            </Flex>
        </Escuela>
    );
};

IntensivoPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const IntensivoPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <IntensivoPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
                <Helmet titleTemplate="%s | Intensivo">
                    <title>{`${post.frontmatter.title}`}</title>
                    <meta
                        name="description"
                        content={`${post.frontmatter.description}`}
                    />
                </Helmet>
            }
            tags={post.frontmatter.tags}
            id={post.id}
            title={post.frontmatter.title}
            profesora={post.frontmatter.profesora}
            tarifa={post.frontmatter.tarifa}
            horarios={post.frontmatter.horarios}
            dias={post.frontmatter.dias}
            nivel={post.frontmatter.nivel}
            featuredimage={post.frontmatter.featuredimage}
        />
    );
};

IntensivoPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default IntensivoPost;

export const pageQuery = graphql`
    query IntensivoPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                profesora
                tarifa
                horarios
                nivel
                dias
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
`;
