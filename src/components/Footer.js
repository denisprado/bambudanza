
import { Box, Flex, NavLink, Styled, Link, jsx } from 'theme-ui'
import React from 'react'

import logo from '../img/logo-footer.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => (

  <footer mt={4} color="text" sx={{
    display: 'grid',
    gridTemplateRows: 'repeat(4, 32px)',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
    ],
    gridAutoFlow: 'column',
    px: 2,
    py: 4,
    backgroundColor: 'primary',
    'a': {
      padding: '4',
      color: 'primary'
    },
  }}>


    <img
      src={logo}
      alt="Bambudanza"
      style={{ width: '14em', height: '10em' }}
    />
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link
      href="/admin/"
      target="_blank"
      rel="noopener noreferrer"
    >Admin</Link>
    <Link href="/blog">        Latest Stories
                      </Link>

    <Link href="/contact">
      Contact
                      </Link>


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
  </footer>
)


export default Footer
