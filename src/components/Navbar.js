import React from 'react'
import Link from './Link'
import logo from '../img/logo.jpg'
import { FiSearch } from 'react-icons/fi'
import { Flex, Box, jsx } from 'theme-ui'

const Navbar = () => {
  return (

    <Flex as="nav"
      role="navigation"
      aria-label="main-navigation"
      sx={{
        alignItems: "center",
      }}
    >
      <Box px={4}>
        <Link to="/" title="Logo">
          <img src={logo} alt="Bambudanza" style={{ width: '164px' }} />
        </Link>
      </Box>

      <Box mx={'auto'} sx={{
        flex: '1',
        marginLeft: 'auto',
        textAlign: 'right',
        maxWidth: '680px',
        'a': {
          padding: '1rem'
        }
      }}
      >
        <Link to="/escuela">
          Escuela
              </Link>
        <Link to="/alquiler">
          Alquiler
              </Link>
        <Link to="/blog">
          Blog
              </Link>
        <Link to="/contact">
          Sobre nosotros
              </Link>
      </Box>
      <Box p={4}>
        <Link to="/contact/examples">
          <FiSearch />
        </Link>
      </Box>
    </Flex >
  )
}


export default Navbar;
