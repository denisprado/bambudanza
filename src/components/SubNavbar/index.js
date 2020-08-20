import React from 'react'
import { Box, Flex, Image, Container, Heading } from 'theme-ui'

const SubNavbar = ({ children, image, showImage = true, title, icon }) => (
    <Box>
        <Box bg={'muted'}>

            <Container>
                <Flex pt={2} sx={{ alignItems: 'flex-end', height: '100%' }}>

                    <Flex sx={{ alignItems: 'center', justifyItems: 'center' }}>
                        <Heading as={'h2'} color={'highlight'} py={2} ml={4} mr={1}>{icon}</Heading>
                        <Heading as={'h3'} color={'highlight'} py={2} ml={1} mr={4}>{title}</Heading>
                    </Flex>

                    <Flex as='nav' sx={{
                        ml: 4,
                        'a': {
                            flex: 1,
                            mx: 2,
                            paddingY: 3,
                            paddingX: 3,
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            color: 'text'
                        },
                        'a.active': {

                            borderBottom: '2px solid',
                            backgroundColor: 'muted',
                            color: 'highlight'
                        },
                        borderBottom: '1px solid "primary"',
                        lineHeight: .9,
                        justifyContent: 'flex-end',
                    }}>
                        {children}
                    </Flex >
                </Flex>
            </Container>
        </Box>
        <Box>
            {image && showImage && <Image src={image} width={'100%'}></Image>}
        </Box>
    </Box>
)

export default SubNavbar;