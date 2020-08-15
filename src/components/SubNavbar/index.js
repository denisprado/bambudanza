import React from 'react'
import { Box, Flex, Image, Container, Heading } from 'theme-ui'

const SubNavbar = ({ children, image, showImage = true, title }) => (
    <Box bg={'muted'}>
        <Container>
            <Flex sx={{ alignItems: 'center' }}>

                <Heading as={'h2'} color={'primary'} m={'2'} ml={'4'} mr={'4'}>{title}</Heading>
                <Flex as='nav' sx={{
                    'a': {
                        marginTop: '3',
                        padding: '3',
                        paddingX: '4',
                        paddingBottom: '3',
                        borderTopLeftRadius: '2',
                        borderTopRightRadius: '2',
                        color: 'primary'
                    },
                    'a.active': {
                        border: '1px solid "primary"',
                        borderBottom: '2px solid white',
                        backgroundColor: 'white',
                        pb: 3
                    },
                    borderBottom: '1px solid "primary"',
                    lineHeight: .9,
                    justifyContent: 'flex-start',
                }}>
                    {children}
                </Flex >
            </Flex>
        </Container>
        {image && showImage && <Image src={image} width={'100%'}></Image>}
    </Box>
)

export default SubNavbar;