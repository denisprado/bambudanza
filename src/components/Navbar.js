import React from 'react'
import logo from '../img/logo.svg'
import { FiSearch } from 'react-icons/fi'
/** @jsx jsx */
import { Flex, Box, jsx, Container, Input } from 'theme-ui'
import Link from '../components/Link'

const Navbar = () => (
  <Container>
    <Flex as="nav"
      role="navigation"
      aria-label="main-navigation"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        'a': {
          paddingY: '3',
          paddingX: '4',
          borderTopLeftRadius: '2',
          borderTopRightRadius: '2',
          color: 'text'
        },
        'a.active': {
          backgroundColor: 'muted',
          color: "primary"
        },

      }}
    >

      {/* Logo */}
      <Box
        sx={{
          'a.active': {
            backgroundColor: 'transparent',
          },
        }}>
        <Link to="/" title="Logo"
        >
          <img src={logo} alt="Bambudanza" style={{ width: '200px' }} />
        </Link>
      </Box>

      {/* Menu Principal */}
      <Flex sx={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <Flex sx={{
          flex: 1,
          alignSelf: 'flex-start',
          marginLeft: 'auto',
          textAlign: 'right',
          py: 2,
          my: 4
        }}>
          <Input mr={2} />
          <Box p={2} >
            <FiSearch />
          </Box>
        </Flex>

        <Flex sx={{
          flex: '1',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end'
        }}
        >
          <Link partiallyActive={true} to="/escuela">Escuela</Link>
          <Link partiallyActive={true} to="/alquiler">Alquiler</Link>
          <Link partiallyActive={true} to="/blog">Blog</Link>
          <Link partiallyActive={true} to="/about" >Sobre nosotros</Link>
        </Flex>

      </Flex>
    </Flex >
  </Container>
)



export default Navbar;
