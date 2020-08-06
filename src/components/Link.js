/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = (props) => {
    const { children } = props;
    return (
        <GatsbyLink
            {...props}
            activeClassName={'active'}
            sx={{
                color: 'inherit',
                '&.active': {
                    color: 'primary',
                },
                '&.hover': {
                    color: 'highlight',
                }
            }}
        >
            {children}
        </GatsbyLink>
    )
}

export default Link;