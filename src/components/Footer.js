/** @jsx jsx */
import { Box, Container, Flex, jsx, Link, Heading, Text } from 'theme-ui'
import logo from '../img/logo-footer.svg'
import Escuela from '../pages/escuela/index';
import Inscripcion from '../pages/escuela/inscripcion/index';
import MyHr from '../components/MyHr'
import React, { useState, useEffect } from 'react'
import { useStaticQuery } from 'gatsby'

const Footer = () => {
  const [blogList, setBlogList] = useState([])
  const data = useStaticQuery(graphql`
  query BlogListQuery {
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___tipo]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 10) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
      `)

  useEffect(() => {
    const { allMarkdownRemark } = data
    const { edges } = allMarkdownRemark

    const frontmatter = edges.map(({ node: item }) => item.frontmatter)
    const fields = edges.map(({ node: item }) => item.fields)

    frontmatter.map((f, i) => {
      f.slug = fields[i].slug
    })

    setBlogList(frontmatter)

  }, [data])

  return (

    <footer
      sx={{
        width: '100%',
        backgroundColor: 'primary',
        'a': {
          color: 'muted',
          '&:hover': { color: 'white' }
        },
      }}>
      <Container mt={3}>
        <Flex p={4} sx={{ flex: 1, justifyContent: `space-between`, alignItems: 'flex-start' }} >
          <Flex>
            <Link href="/">
              <img
                src={logo}
                alt="Bambudanza"
                style={{ width: '14em' }}
              />
            </Link>
          </Flex>
          <Flex mt={3} sx={{ flex: 1, justifyContent: `space-around`, alignItems: 'flex-start' }}>

            <Box>
              <Box pb={3}><Link href="/escuela"><Heading as={'h3'}>Escuela</Heading></Link></Box>

              <Box pb={1}><Link href="/escuela/programas">Programas</Link></Box>
              <Box pb={1}><Link href="/escuela/profesoras">Profesoras</Link></Box>
              <Box pb={1}><Link href="/escuela/tarifas">Tarifas</Link></Box>
              <Box pb={1}><Link href="/escuela/inscripcion">Inscripcion</Link></Box>
            </Box>
            <Box><Box pb={3}><Link href="/alquiler"><Heading as={'h3'}>Alquiler de Salas</Heading></Link></Box>

              <Box pb={1}><Link href="/escuela/salas">Salas</Link></Box>
              <Box pb={1}><Link href="/escuela/condiciones">Condiciones</Link></Box>
              <Box pb={1}><Link href="/escuela/normas">Normas</Link></Box>
              <Box pb={1}><Link href="/escuela/presupuestos">Presupuesto</Link></Box></Box>
            <Box>
              <Box pb={3}><Link py={3} href="/about"><Heading as={'h3'}>Nosotros</Heading></Link></Box>

              <Box pb={1}><Link href="/about/centro">El centro</Link></Box>
              <Box pb={1}><Link href="/about/filosofia">Filosofia</Link></Box>
              <Box pb={1}><Link href="/about/contacto">Contacto</Link></Box>
            </Box>
            <Box>
              <Box pb={3}><Link py={3} href="/blog"><Heading as={'h3'}>Blog</Heading></Link></Box>


              {blogList && blogList.map(entrie =>
                <Box pb={3} sx={{ maxWidth: '300px' }}><Link href={entrie.slug}>{entrie.title}</Link></Box>
              )}
            </Box>
          </Flex>
        </Flex>
      </Container>
    </footer >
  )
}
export default Footer
