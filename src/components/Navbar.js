import React from 'react'
import { RiDoorOpenLine, RiTeamLine, RiFingerprintFill, RiChatSmile2Line } from 'react-icons/ri'

/** @jsx jsx */
import { Box, Container, Flex, jsx } from 'theme-ui'
import Link from '../components/Link'
import Search from '../components/SearchContainer'
import logo from '../img/logo.svg'

const Navbar = () => (
  <Container py={4}>
    <Flex as="nav"
      role="navigation"
      aria-label="main-navigation"

      sx={{
        alignItems: "center",
        'a': {
          paddingY: 2,
          paddingX: 3,
          borderRadius: '8px',
          color: 'text'
        },
        'a.active': {
          backgroundColor: 'muted',
          color: "hightlight"
        },

      }}
    >

      {/* Logo */}
      <Box
        sx={{
          'a.active': {
            borderBottom: 'none',
            backgroundColor: 'transparent'
          },
        }}>
        <Link to="/" title="Logo">
          <img src={logo} alt="Bambudanza" style={{ width: '250px' }} />
        </Link>
      </Box>

      {/* Menu Principal */}
      <Flex sx={{ flexDirection: 'row', flex: 1, justifyContent: 'right', alignItems: 'center' }}>

        <Flex sx={{
          flex: 2,
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',

        }}
        >
          <Link partiallyActive={true} to="/escuela"><Flex sx={{ alignItems: 'center' }}><RiTeamLine sx={{ mr: 2 }} />Escuela</Flex></Link>
          <Link partiallyActive={true} to="/alquiler"><Flex sx={{ alignItems: 'center' }}><RiDoorOpenLine sx={{ mr: 2 }} />Alquiler</Flex></Link>
          <Link partiallyActive={true} to="/blog">
            <Flex sx={{ alignItems: 'center' }}><RiChatSmile2Line sx={{ mr: 2 }} />
            Blog
            </Flex>
          </Link>
          <Link partiallyActive={true} to="/about">
            <Flex sx={{ alignItems: 'center' }}>
              <RiFingerprintFill sx={{ mr: 2 }} />
              <Box>Nosotros</Box>
            </Flex>
          </Link>
        </Flex>

        <Flex sx={{
          flex: 1,
          justifyContent: 'flex-end'
        }}>
          <Search />
        </Flex>

      </Flex>
    </Flex >
  </Container>
)



export default Navbar;
