import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import alquilerHeader from '../../img/alquiler-header.jpg'
import {
    RiDoorOpenLine,
    RiTeamLine,
    RiFingerprintFill,
    RiChatSmile2Line,
} from 'react-icons/ri'
const originalText =
    '<p>*Disponemos de 3 salas totalmente diáfanas y acondicionadas para la didáctica y el desarrollo de técnicas corporales, con suelo de tarima y una excelente iluminación natural.</p><p>Las salas están equipadas con espejos (con posibilidad        de taparlos con cortinas) y equipos de sonido con cables para conectar ipod        y ordenadores.</p><p>Además ofrecemos materiales como mantas, cojines, colchonetas,        sillas plegables, proyector etc.</p><p>El Centro de Arte y Movimiento Bambúdanza,está cuidadosamente decorado y ambientado para acoger cálidamente a las personas        que quieran disfrutar de sus servicios.`'
const Alquiler = ({ children, showImage, text = originalText }) => (
    <Layout>
        <SubNavbar
            image={alquilerHeader}
            showImage={showImage}
            text={text}
            link={'alquiler'}
            title={'Alquiler de Salas'}
            text={text}
        >
            <Link p={4} to="/alquiler/salas">
                Salas
            </Link>
            {/* <Link p={4} to="/alquiler/condiciones">
                Condiciones
            </Link>
            <Link p={4} to="/alquiler/normas">
                Normas
            </Link> */}
            <Link p={4} to="/alquiler/presupuesto">
                Presupuesto
            </Link>
        </SubNavbar>
        <Container>{children}</Container>
    </Layout>
)

export default Alquiler
