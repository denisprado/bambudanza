import React from 'react';
/** @jsx jsx */
import { Box, Container, Flex, Heading, jsx } from 'theme-ui';

const SubNavbar = ({ children, image, showImage = true, title, icon }) => (
    <Flex sx={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{
            borderBottom: '2px solid',
            borderColor: 'muted',
            flex: '1 1 auto'
        }}>

            <Container>
                <Flex pt={1} sx={{ alignItems: ['center', 'center', 'flex-end'], flexDirection: ['column', 'column', 'row'] }}>

                    <Flex sx={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: ['column', 'row', 'row'] }}>
                        <Heading as={'h2'} color={'gray'} pb={3} ml={[0, 0, 4]} mr={[0, 0, 1]}>{icon}</Heading>
                        <Heading as={'h2'} color={'primary'} pb={3} ml={2} mr={2}>{title}</Heading>
                    </Flex>

                    <Flex as='nav' sx={{

                        ml: [0, 0, 4],
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
        {showImage && <Flex sx={{ backgroundImage: `url(${image && image && showImage && image})`, backgroundPosition: 'center center', backgroundSize: 'cover', minHeight: '60vh' }}>
        </Flex >
        }
    </Flex >
)

export default SubNavbar;