import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
/** @jsx jsx */
import { Box, Container, Flex, Heading, Image, Text, jsx } from 'theme-ui'
import Layout from '../components/Layout'
import IndexImage from '../img/grid-poesia-100.jpg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <></>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Container>
        <Flex py={4} px={4}>
          <Box sx={{ flex: '1', 'p': { fontStyle: 'italic' } }}>
            <Text pl={0}>Mi oído escucha</Text>
            <Text pl={0}>Mi corazón palpita</Text>
            <Text pl={0}>El alma despierta</Text>
            <Text pl={0}>Mi cuerpo cobra vida</Text>
            <Text pl={0}>Se mueve</Text>
            <Heading py={2} pl={2}>...donde el <span sx={{ color: 'primary' }}>Cuerpo</span></Heading>
            <Text pl={3}>Mi cadera y mis pies desobedecen,</Text>
            <Text pl={3}>Cada uno tiene su propia independencia,</Text>
            <Text pl={3}>Mis manos acarician el aire …disfruto</Text>
            <Text pl={3}>Brazos ,hombros, cuello, pies, caderas, manos…</Text>
            <Heading py={2} pl={4}>en <span sx={{ color: 'primary' }}>Movimiento</span></Heading>
            <Text pl={5}>Ahora todo tiene sentido.</Text>
            <Text pl={5}>Soy danza</Text>
            <Text pl={5}>Soy vida</Text>
            <Text pl={5}>Soy poesía…</Text>
            <Text pl={5}>es Poesia......donde el Cuerpo</Text>
            <Heading py={2} pl={6}>es <span sx={{ color: 'primary' }}>Poesia...</span></Heading>
          </Box>
          <Box sx={{ flex: '2' }}><Image src={IndexImage} alt='Poesia' /></Box>
        </Flex>
      </Container>
    </Layout >
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
                          markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
                          frontmatter {
                          title
        image {
                          childImageSharp {
                          fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
          }
        }
        heading
        subheading
        mainpitch {
                          title
          description
        }
        description
        intro {
                          blurbs {
                          image {
                          childImageSharp {
                          fluid(maxWidth: 240, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
