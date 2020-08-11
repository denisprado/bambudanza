import React from 'react'
import Link from './Link'
import logo from '../img/logo.svg'
import { FiSearch } from 'react-icons/fi'
import { Flex, Box, jsx, Container } from 'theme-ui'

const Navbar = () => {
  return (
    <Flex as="nav"
      role="navigation"
      aria-label="main-navigation"
      sx={{
        alignItems: "center",
        justifyContent: "flex-start"

      }}
    >
      <Box px={4}>
        <Link to="/" title="Logo">
          <img src={logo} alt="Bambudanza" style={{ width: '164px' }} />
        </Link>
      </Box>

      <Box sx={{
        flex: '1',
        'a': {
          padding: '2rem'
        }
      }}
      >
        <Link to="/escuela">
          Escuela
              </Link>
        <Link to="/alquiler">
          Alquiler
              </Link>

      </Box>
      <Box sx={{
        flex: '1',
        marginLeft: 'auto',
        textAlign: 'right',
        'a': {
          padding: '2rem'
        }
      }}>
        <Link to="/blog">
          Blog
              </Link>
        <Link to="/contact">
          Sobre nosotros
              </Link>
        <Link to="/contact/examples">
          <FiSearch />
        </Link>
      </Box>
    </Flex >
  )
}


export default Navbar;
