import React from 'react'
import logo from '../img/logo.svg'
import { FiSearch } from 'react-icons/fi'
/** @jsx jsx */
import { Flex, Box, jsx, Container } from 'theme-ui'
import Link from '../components/Link'

const Navbar = () => {


  return (
    <Container>
      <Flex as="nav"
        role="navigation"
        aria-label="main-navigation"
        m={3}
        ml={0}
        mb={3}
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          'a': {
            paddingY: '3',
            paddingX: '4',
            borderTopLeftRadius: '2',
            borderTopRightRadius: '2',
            color: 'text'
          },
          'a.active': {
            backgroundColor: 'muted',
            color: "text"

          },

        }}
      >

        {/* Logo */}
        <Box mr={3} mt={2}>
          <Link to="/" title="Logo">
            <img src={logo} alt="Bambudanza" style={{ width: '200px' }} />
          </Link>
        </Box>

        {/* Menu Principal */}
        <Flex mt={4} sx={{
          flex: '1',
        }}
        >
          <Link
            partiallyActive={true}
            to="/escuela">
            Escuela
              </Link>
          <Link partiallyActive={true} to="/alquiler">
            Alquiler
              </Link>
        </Flex>

        {/* Menu direita */}
        <Box sx={{
          flex: '1',
          marginLeft: 'auto',
          textAlign: 'right',
        }}>
          <Link partiallyActive={true} to="/blog">Blog</Link>
          <Link partiallyActive={true} to="/about" >Sobre nosotros</Link>
        </Box>

        {/* Busca */}
        <Box sx={{
          flex: '1',
        }}
        >
          <FiSearch />
        </Box>
      </Flex >
    </Container>
  )
}


export default Navbar;
