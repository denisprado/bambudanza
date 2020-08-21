import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Image, AspectRatio, Box, Flex, Container, Text } from 'theme-ui'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import IndexImage from '../img/grid-poesia-100.jpg'
import { grayscale } from '@theme-ui/color'

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

        <Flex>
          <Box sx={{ flex: '1' }}>
            <Text>en Movimiento Mi cadera y mis pies desobedecen,
            Cada uno tiene su propia independencia,
            Mis manos acarician el aire …disfruto
            Brazos ,hombros, cuello, piernas, pies, caderas, manos…
            Ahora todo tiene sentido.
            Soy danza
            Soy vida
            Soy poesía…
            es Poesia......donde el CuerpoMi oído escucha
            Mi corazón palpita
            El alma despierta
            Mi cuerpo cobra vida
          Se mueve</Text>
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
