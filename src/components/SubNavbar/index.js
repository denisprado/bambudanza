import React from 'react'
import { Box, Flex, Image } from 'theme-ui'

const SubNavbar = ({ children, image, showImage = true }) => (
    <>
        <Box bg={'muted'}>
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
                justifyContent: 'center',
            }}>
                {children}
            </Flex >
        </Box>
        {image && showImage && <Image src={image} width={'100%'}></Image>}
    </>
)

export default SubNavbar;