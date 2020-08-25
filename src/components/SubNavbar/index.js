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
                            fontSize: 3,
                            fontVariantCaps: 'all-petite-caps',
                            mx: 2,
                            paddingY: '11px',
                            paddingX: 3,
                            minWidth: '150px',
                            textAlign: 'center',
                            color: 'text',
                            '&:hover': {
                                transition: 'all .5s',
                                fontWeight: '400'
                            }
                        },
                        'a.active': {
                            borderBottom: '3px solid',
                            color: 'highlight',
                            fontWeight: '600',
                            marginBottom: '-3px',
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