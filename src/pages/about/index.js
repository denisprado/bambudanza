import React from 'react'
import { RiFingerprintFill } from 'react-icons/ri'
import { Container } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
import aboutHeader from '../../img/nosotros.jpeg'

const About = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar
                title={'Sobre Nosotros'}
                image={aboutHeader}
                showImage={showImage}
                link={'about'}
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
            <Container p={4}>{children}</Container>
        </Layout>
    )
}

export default About
