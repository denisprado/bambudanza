import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import Content, { HTMLContent } from '../components/Content'
import Escuela from '../pages/escuela'
import { Flex, Box, Heading, Text } from 'theme-ui'

export const ProgramaPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  profesora,
  tarifa,
  horarios,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Escuela>
      {helmet || ''}
      <Flex>
        <Box p={2} as='aside' sx={{
          flexGrow: 1,
          flexBasis: 'sidebar',
          minWidth: '400px'
        }}>

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
      }
    }
  }
`
