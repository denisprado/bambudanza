import React from 'react'
import { Box, Flex, Image, jsx, Container } from 'theme-ui'
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
                        padding: '4',
                        color: 'primary'
                    },
                    borderBottom: '1px solid "muted"',
                    lineHeight: .9,
                    justifyContent: 'flex-start',
                    marginLeft: '218px'
                }}>
                    <Link activeClassName={'activeMenu'} p={4} to='/escuela/programas'>Programas</Link>
                    <Link p={4} to='/escuela/profesoras'>Profesoras</Link>
                    <Link p={4} to='/escuela/tarifas'>Tarifas</Link >
                </Flex>
            </Box>
            {showImage && <Image src={escuelaHeader} width={'100%'} sx={{ lineHeight: 0 }}></Image>}
            <Container>
                <Box>
                    {children}
                </Box>
            </Container>
        </Layout >
    )
}

export default Escuela;