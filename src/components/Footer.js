/** @jsx jsx */
import { Container, Box, Flex, NavLink, Styled, Link, jsx, Grid } from 'theme-ui'
import React from 'react'

import logo from '../img/logo-footer.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => (

  <footer mt={4}
    sx={{
      width: '100%',
      backgroundColor: 'gray',

      'a': {
        padding: '2',
        color: 'muted',
        '&:hover': { color: 'muted' }
      },
    }}>
    <Container>
      <Flex p={4} sx={{ flex: 1, justifyContent: `space-between`, alignItems: 'flex-start' }} >
        <Flex>
          <Link href="/">
            <img
              src={logo}
              alt="Bambudanza"
              style={{ width: '14em' }}
            />
          </Link>
        </Flex>
        <Flex sx={{ flex: 1, justifyContent: `space-around`, alignItems: 'flex-start' }}>
          <Box>
            <Box><Link py={3} href="/about">About</Link></Box>
            <Box><Link py={3} href="/blog">Blog</Link></Box>
            <Box><Link py={3} href="/contact">Contact</Link></Box>
          </Box>
          <Box>
            <Flex>
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em', color: 'white' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em', color: '#fff' }}
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
            </Flex>
            <Link href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >Admin</Link>
          </Box>
        </Flex>
      </Flex>
    </Container>
  </footer>
)

export default Footer
