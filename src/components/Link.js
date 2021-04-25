import React from 'react'
// @jsx jsx
import { Styled, jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = (props) => {
    const { children, onClick, sx } = props
    return (
        <Styled.a
            as={GatsbyLink}
            {...props}
            activeClassName={'active'}
            onClick={onClick}
        >
            {children}
        </Styled.a>
    )
}

export default Link
