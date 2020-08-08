import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = (props) => {
    const { children } = props;
    return (
        <Styled.a as={GatsbyLink}
            {...props}
            activeClassName={'active'}
        >
            {children}
        </Styled.a>
    )
}

export default Link;