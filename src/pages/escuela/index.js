import React from 'react'
import { Box, Flex, Image, jsx } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'
import { Container } from '../../components/Container'

const Escuela = ({ children, showImage = true }) => (
    <Layout>
        {showImage && <Image src={escuelaHeader} width={'100%'} sx={{ lineHeight: 0 }}></Image>}

        <Flex as='nav' bg={'muted'} sx={{
            'a': {
                padding: '3',
                color: 'primary'
            },
            borderBottom: '1px solid "muted"',
            lineHeight: .9,
            justifyContent: 'center'
        }}>
            <Link p={4} to='/escuela/programas'>Programas</Link>
            <Link p={4} to='/escuela/profesoras'>Profesoras</Link>
            <Link p={4} to='/escuela/tarifas'>Tarifas</Link >
        </Flex>
        <Box p={4}>
            {children}
        </Box>


    </Layout >
)

export default Escuela;