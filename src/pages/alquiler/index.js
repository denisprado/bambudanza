import React from 'react'
import { Container, Flex, Image, jsx } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'

const Alquiler = ({ children }) => (
    <Layout>
        <Image src={escuelaHeader} width={'100%'}></Image>
        <Flex as='nav' sx={{

            'a': {
                padding: '1rem',
            }
        }}>
            <Link p={4} to='/alquiler/programas'>Salas</Link>
            <Link p={4} to='/alquiler/condiciones'>Condiciones</Link>
            <Link p={4} to='/alquiler/normas'>Normas</Link>
            <Link p={4} to='/alquiler/Presupuestos'>Presupuesto</Link>

        </Flex >
        <Container p={4}>
            {children}
        </Container>
    </Layout >
)

export default Alquiler;