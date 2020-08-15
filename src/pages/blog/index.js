import React from 'react'
import { Box, Flex, Image, jsx, Container } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

import BlogRoll from '../../components/BlogRoll'


const BlogIndexPage = ({ children }, ...rest) => {

  return (
    <Layout>
      <SubNavbar {...rest}>
        <Link p={4} to='/blog'>El Centro</Link>
      </SubNavbar>
      <Container p={4}>
        <BlogRoll /></Container>
    </Layout >
  )
}

export default BlogIndexPage;