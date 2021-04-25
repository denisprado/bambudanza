/** @jsx jsx */
import { RiTeamLine } from 'react-icons/ri'
import { Container, jsx } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import escuelaHeader from '../../img/escuela.jpeg'

const Escuela = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar
                image={escuelaHeader}
                showImage={showImage}
                title={'Escuela'}
                link={'escuela'}
                icon={<RiTeamLine />}
            >
                <Link partiallyActive={true} to="/escuela/clases">
                    Clases Regulares
                </Link>
                <Link partiallyActive={true} to="/escuela/intensivos">
                    Intensivos
                </Link>
                <Link partiallyActive={true} to="/escuela/proyectos">
                    Proyectos
                </Link>
                <Link partiallyActive={true} to="/escuela/escuela-online">
                    Escuela Online
                </Link>
                <Link partiallyActive={true} to="/escuela/equipo">
                    Equipo
                </Link>
                <Link partiallyActive={true} to="/escuela/verano">
                    Verano
                </Link>
                <Link partiallyActive={true} to="/escuela/inscripcion">
                    Inscripción
                </Link>
            </SubNavbar>
            <Container>{children}</Container>
        </Layout>
    )
}

export default Escuela
