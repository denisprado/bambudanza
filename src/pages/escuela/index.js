import React from 'react'
import { Container, Flex, Image, jsx } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'

const Escuela = ({ children }) => (
    <Layout bg={'muted'}>
        <Image src={escuelaHeader} width={'100%'}></Image>
        <Container>
            <Flex as='nav' mb={2} sx={{

                'a': {
                    padding: '3',
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