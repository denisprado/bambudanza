/** @jsx jsx */
import { Container, jsx, Heading } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'

const Escuela = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar image={escuelaHeader} showImage={showImage} title={'Escuela'}>
                <Link partiallyActive={true} to='/escuela/programas'>Programas</Link>
                <Link partiallyActive={true} to='/escuela/profesoras'>Profesoras</Link>
                <Link partiallyActive={true} to='/escuela/tarifas'>Tarifas</Link >
                <Link partiallyActive={true} to='/escuela/inscricion'>Inscricion</Link >
            </SubNavbar>
            <Container p={4}>
                {children}
            </Container>
        </Layout>
    )
}

export default Escuela;