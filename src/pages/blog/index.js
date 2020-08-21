import React from 'react'
import { RiChatSmile2Line } from 'react-icons/ri'
import { Container } from 'theme-ui'
import BlogRoll from '../../components/BlogRoll'
import Layout from '../../components/Layout'
import SubNavbar from '../../components/SubNavbar'



const BlogIndexPage = ({ children }, ...rest) => {

  return (
    <Layout>
      <SubNavbar {...rest} title={"Blog"} icon={<RiChatSmile2Line />}>

      </SubNavbar>
      <Container p={4}>
        <BlogRoll /></Container>
    </Layout >
  )
}

export default BlogIndexPage;