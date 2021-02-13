import React from "react";
import { Container } from "theme-ui";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import SubNavbar from "../../components/SubNavbar";
import alquilerHeader from "../../img/alquiler-header.jpg";
import {
    RiDoorOpenLine,
    RiTeamLine,
    RiFingerprintFill,
    RiChatSmile2Line,
} from "react-icons/ri";

const Alquiler = ({ children, showImage }) => (
    <Layout>
        <SubNavbar
            image={alquilerHeader}
            showImage={showImage}
            icon={<RiDoorOpenLine />}
            title={"Alquiler de Salas"}
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
);

export default Alquiler;
