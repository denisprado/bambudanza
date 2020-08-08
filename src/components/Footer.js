import { Box, Flex, NavLink, Styled } from 'theme-ui'
import React from 'react'
import Link from '../components/Link'
import logo from '../img/logo.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => (
  <Flex mt={4} bg="primary" color="muted" >



    <Box>
      <img
        src={logo}
        alt="Bambudanza"
        style={{ width: '14em', height: '10em' }}
      />
    </Box>
    <Box>
      <Link to="/" className="navbar-item">
        Home
                      </Link>
      <Link className="navbar-item" to="/about">
        About
                      </Link>
      <NavLink
        className="navbar-item"
        href="/admin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Admin
                      </NavLink>


    </Box>
    <Box>

      <Link className="navbar-item" to="/blog">
        Latest Stories
                      </Link>

      <Link className="navbar-item" to="/contact">
        Contact
                      </Link>

    </Box>
    <Box>

      <a title="facebook" href="https://facebook.com">
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="twitter" href="https://twitter.com">
        <img
          className="fas fa-lg"
          src={twitter}
          alt="Twitter"
          style={{ width: '1em', height: '1em', color: 'white' }}
        />
      </a>
      <a title="instagram" href="https://instagram.com">
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="vimeo" href="https://vimeo.com">
        <img
          src={vimeo}
          alt="Vimeo"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
    </Box>
  </Flex >
)


export default Footer
