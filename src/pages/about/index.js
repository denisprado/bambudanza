import React from "react";
import { Box, Flex, Image, jsx, Container } from "theme-ui";
import Link from "../../components/Link";
import Layout from "../../components/Layout";
import SubNavbar from "../../components/SubNavbar";
import aboutHeader from "../../img/about-header.jpg";
import {
    RiDoorOpenLine,
    RiTeamLine,
    RiFingerprintFill,
    RiChatSmile2Line,
} from "react-icons/ri";

const About = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar
                title={"Sobre Nosotros"}
                image={aboutHeader}
                showImage={showImage}
                icon={<RiFingerprintFill />}
            >
                <Link p={4} to="/about/centro">
                    El Centro
                </Link>
                <Link p={4} to="/about/filosofia">
                    Filosofia
                </Link>
                <Link p={4} to="/contacto">
                    Contacto
                </Link>
            </SubNavbar>
            <Container>{children}</Container>
        </Layout>
    );
};

export default About;
