/** @jsx jsx */
import { Box, Flex, NavLink, Styled, Link, jsx, Grid } from 'theme-ui'
import React from 'react'

import logo from '../img/logo-footer.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => (

  <footer mt={4}
    sx={{
      backgroundColor: 'primary',
      'a': {
        padding: '2',
        color: 'muted',
        '&:hover': { color: 'muted' }
      },
    }}>
    <Grid>
      <Box>
        <Link href="/">
          <img
            src={logo}
            alt="Bambudanza"
            style={{ width: '14em', height: '10em' }}
          />
        </Link>
      </Box>
      <Box>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
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
        <Link href="/admin/"
          target="_blank"
          rel="noopener noreferrer"
        >Admin</Link>
      </Box>
    </Grid>
  </footer>
)


export default Footer
