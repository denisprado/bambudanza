import React from 'react'
import { Container, Flex, Image, jsx } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'

const Escuela = ({ children }) => (
    <Layout>
        <Image src={escuelaHeader} width={'100%'}></Image>
        <Container>
            <Flex as='nav' sx={{
                'a': {
                    padding: '1rem',
                }
            }}>
                <Link p={4} to='/escuela/programas'>Programas</Link>
                <Link p={4} to='/escuela/profesoras'>Profesoras</Link>
                <Link p={4} to='/escuela/tarifas'>Tarifas</Link >
            </Flex >
            {children}
        </Container>
    </Layout >
)

export default Escuela;