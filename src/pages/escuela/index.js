/** @jsx jsx */
import { Box, Flex, Image, jsx, Container } from 'theme-ui'
import React from 'react'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'


const isPartiallyActive = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { className: "item active" } : null;


const Escuela = ({ children, showImage = true }) => {
    return (
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
                        backgroundColor: 'white'
                    },
                    borderBottom: '1px solid "primary"',
                    lineHeight: .9,
                    justifyContent: 'flex-start',
                    marginLeft: '218px'
                }}>
                    <Link p={4} to='/escuela/programas'>Programas</Link>
                    <Link p={4} to='/escuela/profesoras'>Profesoras</Link>
                    <Link p={4} to='/escuela/tarifas'>Tarifas</Link >
                </Flex>
            </Box>
            {showImage && <Image src={escuelaHeader} width={'100%'} sx={{ lineHeight: 0 }}></Image>}
            <Container p={4}>
                {children}
            </Container>
        </Layout>
    )
}

export default Escuela;