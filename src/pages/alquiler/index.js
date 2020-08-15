import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

const Alquiler = ({ children, showImage }) => (
    <Layout>
        <SubNavbar image={escuelaHeader} showImage={showImage} title={'Alquileres de Sala'}>
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