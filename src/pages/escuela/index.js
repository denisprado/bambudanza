/** @jsx jsx */
import { Container, jsx, Heading } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela-header.jpg'
import { RiDoorOpenLine, RiTeamLine, RiFingerprintFill, RiChatSmile2Line } from 'react-icons/ri'

const Escuela = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar image={escuelaHeader} showImage={showImage} title={'Escuela'} icon={<RiTeamLine />}>
                <Link partiallyActive={true} to='/escuela/programas'>Programas</Link>
                <Link partiallyActive={true} to='/escuela/profesoras'>Profesoras</Link>
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