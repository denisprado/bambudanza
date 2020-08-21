import React from 'react'
import { Box, Flex, Image, Container, Heading } from 'theme-ui'
import { lightness } from '@theme-ui/color';

const SubNavbar = ({ children, image, showImage = true, title, icon }) => (
    <Box>
        <Box sx={{
            borderBottom: '2px solid',
            borderColor: 'muted',
        }}>

            <Container>
                <Flex pt={1} sx={{ alignItems: 'flex-end' }}>

                    <Flex sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Heading as={'h1'} color={'primary'} py={2} ml={3} mr={1}>{icon}</Heading>
                        <Heading as={'h1'} color={'primary'} py={2} ml={1} mr={2}>{title}</Heading>
                    </Flex>

                    <Flex as='nav' sx={{
                        ml: 4,
                        'a': {
                            flex: 1,
                            mx: 2,
                            paddingY: 3,
                            paddingX: 3,
                            py: 2,
                            color: 'text'
                        },
                        'a.active': {
                            borderBottom: '3px solid',
                            color: 'highlight'
                        },
                        borderBottom: '1px solid "primary"',
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