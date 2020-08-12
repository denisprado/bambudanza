import React from 'react'
import logo from '../img/logo.svg'
import { FiSearch } from 'react-icons/fi'
/** @jsx jsx */
import { Flex, Box, jsx, Container } from 'theme-ui'
import { Link } from 'gatsby';

const Navbar = () => {
  const partlyActive = (className) => ({ isPartiallyCurrent }) => ({
    className: className && className + (isPartiallyCurrent ? ` active` : ``),
  })

  const PartlyActiveLink = ({ className, ...rest }) => (
    <Link sx={{
      'a': {
        marginTop: '3',
        padding: '3',
        paddingX: '4',
      },
      'a.active': {
        borderTopLeftRadius: '2',
        borderTopRightRadius: '2',
        color: 'primary',
        backgroundColor: 'muted'
      }
    }}
      getProps={partlyActive(className)} {...rest} />
  )

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
        <PartlyActiveLink to="/" title="Logo">
          <img src={logo} alt="Bambudanza" style={{ width: '164px' }} />
        </PartlyActiveLink>
      </Box>

      <Box sx={{
        flex: '1',
        'a': {
          padding: '2rem'
        }
      }}
      >
        <PartlyActiveLink to="/escuela">
          Escuela
              </PartlyActiveLink>
        <PartlyActiveLink to="/alquiler">
          Alquiler
              </PartlyActiveLink>

      </Box>
      <Box sx={{
        flex: '1',
        marginLeft: 'auto',
        textAlign: 'right',
        'a': {
          padding: '2rem'
        }
      }}>
        <PartlyActiveLink to="/blog">
          Blog
              </PartlyActiveLink>
        <PartlyActiveLink to="/about" >
          Sobre nosotros
              </PartlyActiveLink>
        <Link to="/contact/examples">
          <FiSearch />
        </Link>
      </Box>
    </Flex >
  )
}


export default Navbar;
