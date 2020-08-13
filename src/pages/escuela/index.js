/** @jsx jsx */
import { Box, Flex, Image, jsx, Container } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

const Escuela = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar image={escuelaHeader} showImage={showImage}>
                <Link partiallyActive={true} p={4} to='/escuela/programas'>Programas</Link>
                <Link partiallyActive={true} p={4} to='/escuela/profesoras'>Profesoras</Link>
                <Link partiallyActive={true} p={4} to='/escuela/tarifas'>Tarifas</Link >
            </SubNavbar>
            <Container p={4}>
                {children}
            </Container>
        </Layout>
    )
}

export default Escuela;