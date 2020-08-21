import React from 'react';
import { Box, Container, Flex, Heading, Image, AspectRatio } from 'theme-ui';

const SubNavbar = ({ children, image, showImage = true, title, icon }) => (
    <Flex sx={{ flexDirection: 'column' }}>
        <Box sx={{
            borderBottom: '2px solid',
            borderColor: 'muted',
            flex: '1 1 auto'
        }}>

            <Container>
                <Flex pt={1} sx={{ alignItems: ['center', 'center', 'flex-end'], flexDirection: ['column', 'column', 'row'] }}>

                    <Flex sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Heading as={'h2'} color={'gray'} pb={3} ml={4} mr={1}>{icon}</Heading>
                        <Heading as={'h2'} color={'primary'} pb={3} ml={2} mr={2}>{title}</Heading>
                    </Flex>

                    <Flex as='nav' sx={{
                        flexDirection: ['column', 'row', 'row'],
                        ml: 4,
                        'a': {
                            flex: '1 1 auto',
                            mx: 2,
                            paddingY: 3,
                            paddingX: 3,
                            py: 2,
                            color: 'text',
                            '&:hover': {
                                transition: 'all .5s'
                            }
                        },
                        'a.active': {
                            borderBottom: '3px solid',
                            color: 'highlight',
                            marginBottom: '-3px'
                        },
                        borderBottom: '1px solid "primary"',
                        justifyContent: 'flex-end',
                    }}>
                        {children}
                    </Flex >
                </Flex>
            </Container>
        </Box>
        <Flex sx={{ backgroundImage: `url(${image && image && showImage && image})`, backgroundPosition: 'center center', backgroundSize: 'cover', flex: '1 1 auto' }}>
            <Box></Box>


        </Flex >
    </Flex >
)

export default SubNavbar;