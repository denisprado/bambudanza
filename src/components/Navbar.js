import React from 'react'
import Link from './Link'
import logo from '../img/logo.jpg'
import { FiSearch } from 'react-icons/fi'
import { Flex, Box } from 'theme-ui'

const Navbar = () => {
  return (

    <Flex as="nav"
      role="navigation"
      aria-label="main-navigation"
      sx={{
        justifyContent: "center"
      }}
    >
      <Box>
        <Link to="/" title="Logo" px={4}>
          <img src={logo} alt="Bambudanza" style={{ width: '164px' }} />
        </Link>
      </Box>

      <Box sx={{
        flex: '1 1 auto',
        'a': {
          padding: '1rem',
        }
      }}>
        <Link to="/escuela">
          Escuela
              </Link>
        <Link to="/products">
          Products
              </Link>
        <Link to="/blog">
          Blog
              </Link>
        <Link to="/contact">
          Contact
              </Link>
        <Link to="/contact/examples">
          Form Examples
              </Link>
      </Box>
      <Box>

        <Link to="/contact/examples">
          <FiSearch />
        </Link>
      </Box>
    </Flex >
  )
}


export default Navbar
