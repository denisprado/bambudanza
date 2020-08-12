import { graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
/** @jsx jsx */
import { Box, Flex, Heading, Text, jsx, AspectRatio } from 'theme-ui'
import Content, { HTMLContent } from '../components/Content'
import Link from '../components/Link'
import Escuela from '../pages/escuela'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProgramaPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  profesora,
  tarifa,
  horarios,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Escuela showImage={false}>
      {helmet || ''}
      <Flex>
        <Box px={4} as='aside' sx={{
          flexGrow: 1,
          flexBasis: 'sidebar',
          minWidth: '400px'
        }}>
          <AspectRatio ratio={4 / 3}>

            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: `featured image thumbnail for programas ${title}`,
                styles: { width: '100%' }
              }}
            />

          </AspectRatio>


          <Heading as='h4' pt={4}>Profesora</Heading>
          <Link to={`/escuela/profesoras/${kebabCase(profesora)}/`}>{profesora}</Link>

          <Heading as='h4' pt={4}>Horário</Heading>
          <ul>
            {horarios && horarios.length ? (
              horarios.map((horarios) => (
                <li key={horarios + `horarios`}>
                  <Text>{horarios}</Text>
                </li>
              ))
            )
              : null}
          </ul>

          <Heading as='h4' pt={4}>Tarifa</Heading>
          <ul>

            {tarifa && tarifa.length ? (
              tarifa.map((t) => (
                <li key={t + `tarifa`}>
                  <Link to="/escuela/tarifas">{t}</Link>
                </li>
              ))
            )
              : null}
          </ul>

        </Box>
        <Box as='main'>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <PostContent content={content} />
        </Box>
      </Flex>
    </Escuela >
  )
}

ProgramaPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProgramaPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (

    <ProgramaPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Programa">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      profesora={post.frontmatter.profesora}
      tarifa={post.frontmatter.tarifa}
      horarios={post.frontmatter.horarios}
      featuredimage={post.frontmatter.featuredimage}
    />
  )
}

ProgramaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProgramaPost

export const pageQuery = graphql`
  query ProgramaPostByID($id: String!) {
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
`
