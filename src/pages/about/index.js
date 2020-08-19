import React from 'react'
import { Box, Flex, Image, jsx, Container } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

const About = ({ children }, ...rest) => {

    return (
        <Layout>
            <SubNavbar title={"Sobre Nosotros"}>
                <Link p={4} to='/about/centro'>El Centro</Link>
                <Link p={4} to='/about/filosofia'>Filosofia</Link>
                <Link p={4} to='/contacto'>Contacto</Link>
            </SubNavbar>
            <Container p={4}>
                {children}</Container>
        </Layout >
    )
}

export default About;