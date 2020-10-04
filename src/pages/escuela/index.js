/** @jsx jsx */
import { RiTeamLine } from 'react-icons/ri'
import { Container, jsx } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/cortinas.jpg'

const Escuela = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar image={escuelaHeader} showImage={showImage} title={'Escuela'} icon={<RiTeamLine />}>
                <Link partiallyActive={true} to='/escuela/clases'>Clases Regulares</Link>
                <Link partiallyActive={true} to='/escuela/proyetos'>Proyetos</Link>
                <Link partiallyActive={true} to='/escuela/escuela-online'>Escuela Online</Link>
                <Link partiallyActive={true} to='/escuela/equipo'>Equipo</Link>
                <Link partiallyActive={true} to='/escuela/tarifas'>Tarifas</Link >
                <Link partiallyActive={true} to='/escuela/inscripcion'>Inscripción</Link >
            </SubNavbar>
            <Container>
                {children}
            </Container>
        </Layout>
    )
}

export default Escuela;
