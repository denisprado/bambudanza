import React from 'react'
import { Container, Flex, Image, jsx, Box } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'

const Alquiler = ({ children }) => (
    <Layout>
        <Box bg={'muted'}>

            <Flex as='nav' sx={{
                'a': {
                    marginTop: '3',
                    padding: '3',
                    paddingX: '4',
                    borderTopLeftRadius: '2',
                    borderTopRightRadius: '2',
                    color: 'primary'
                },
                'a.active': {
                    border: '1px solid "primary"',
                    borderBottom: '2px solid white',
                    backgroundColor: 'white',
                    pb: 3
                },
                borderBottom: '1px solid "primary"',
                lineHeight: .9,
                justifyContent: 'center',
            }}>
                <Link p={4} to='/alquiler/programas'>Salas</Link>
                <Link p={4} to='/alquiler/condiciones'>Condiciones</Link>
                <Link p={4} to='/alquiler/normas'>Normas</Link>
                <Link p={4} to='/alquiler/presupuesto'>Presupuesto</Link>

            </Flex >
        </Box>
        <Image src={escuelaHeader} width={'100%'}></Image>
        <Container p={4}>
            {children}
        </Container>
    </Layout >
)

export default Alquiler;