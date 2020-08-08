import React from 'react'
// @jsx jsx
import { Styled, jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = (props) => {
    const { children } = props;
    const { onClick } = props;
    return (
        <Styled.a as={GatsbyLink}
            {...props}
            activeClassName={'active'}
            sx={{ cursor: 'pointer' }}
            onClick={onClick}
        >
            {children}
        </Styled.a>
    )
}

export default Link;