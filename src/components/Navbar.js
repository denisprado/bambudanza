import React from 'react'

/** @jsx jsx */
import { Box, Container, Flex, jsx } from 'theme-ui'
import Link from '../components/Link'
import logo from '../img/logo.svg'

const Navbar = () => (
    <Container py={2}>
        <Flex
            as="nav"
            role="navigation"
            aria-label="main-navigation"
            sx={{
                flexDirection: ['column', 'column', 'row'],
                alignItems: 'center',
                a: {
                    fontSize: 2,
                    paddingY: 2,
                    paddingX: 3,
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: 'text',
                    '&:hover': {
                        transition: 'all .2s',
                    },
                },
                'a.active': {
                    //backgroundColor: "muted",
                    color: 'primary',
                    borderBottomColor: 'primary',
                    borderBottomWidth: '2px',
                    borderBottomStyle: 'solid',
                    borderRadius: '0px',
                },
                mt:[4,0]
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    'a.active': {
                        borderBottom: 'none',
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Link to="/" title="Logo" >
                    <img
                        src={logo}
                        alt="Bambudanza"
                        style={{ width: '220px', }}
                    />
                </Link>
            </Box>

            {/* Menu Principal */}
            <Flex
                sx={{
                    flexDirection: ['column-reverse', 'column-reverse', 'row'],
                    flex: 1,
                    justifyContent: 'right',
                    alignItems: 'center',
                }}
            >
                <Flex
                    sx={{
                        flex: 2,
                        textAlign: 'center',
                        justifyContent: 'flex-end',
                        alignSelf: ['center', 'center', 'flex-end'],
                        py: [4, null, null],
                    }}
                >
                    <Link partiallyActive={true} to="/escuela">
                        <Flex sx={{ alignItems: 'center' }}>
                            {/* <RiTeamLine sx={{ mr: 2 }} /> */}
                            Escuela
                        </Flex>
                    </Link>
                    <Link partiallyActive={true} to="/alquiler">
                        <Flex sx={{ alignItems: 'center' }}>
                            {/* <RiDoorOpenLine sx={{ mr: 2 }} /> */}
                            Alquiler
                        </Flex>
                    </Link>
                    <Link partiallyActive={true} to="/gallery">
                        <Flex sx={{ alignItems: 'center' }}>
                            {/* <RiChatSmile2Line sx={{ mr: 2 }} /> */}
                            Gallery
                        </Flex>
                    </Link>
                    <Link partiallyActive={true} to="/about">
                        <Flex sx={{ alignItems: 'center' }}>
                            {/* <RiFingerprintFill sx={{ mr: 2 }} /> */}
                            <Box>Nosotros</Box>
                        </Flex>
                    </Link>
                </Flex>
                {/*
                <Flex
                    sx={{
                        flex: 1,
                        py: [2, null, null],
                        justifyContent: "flex-end",
                    }}
                >
                    <Search />
                </Flex> */}
            </Flex>
        </Flex>
    </Container>
)

export default Navbar
