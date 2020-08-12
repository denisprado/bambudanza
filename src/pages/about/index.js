import React from 'react'
import { Container, Flex, Image, jsx } from 'theme-ui'
import Link from '../../components/Link'
import Layout from '../../components/Layout'
import escuelaHeader from '../../img/escuela-header.jpg'

const About = ({ children }) => {

    return (
        <Layout>
            <Image src={escuelaHeader} width={'100%'}></Image>
            <Container p={4} pt={0}>
                <Flex

                    as='nav' sx={{
                        'a': {
                            padding: '1rem',
                        }
                    }}>
                    <Link p={4} to='/about/centro'>El Centro</Link>
                    <Link p={4} to='/about/filosofia'>Filosofia</Link>

                </Flex >
                {children}
            </Container>
        </Layout >
    )
}

export default About;