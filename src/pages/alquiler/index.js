import React from 'react'
import { Container, Flex, Image, jsx, Box } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

const Alquiler = ({ children }) => (
    <Layout>
        <SubNavbar image={escuelaHeader}>
            <Link p={4} to='/alquiler/salas'>Salas</Link>
            <Link p={4} to='/alquiler/condiciones'>Condiciones</Link>
            <Link p={4} to='/alquiler/normas'>Normas</Link>
            <Link p={4} to='/alquiler/presupuesto'>Presupuesto</Link>
        </SubNavbar>
        <Container p={4}>
            {children}
        </Container>
    </Layout >
)

export default Alquiler;