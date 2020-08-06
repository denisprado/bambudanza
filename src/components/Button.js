import React, { Children } from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = ({ children }) =>
    <button
        sx={{
            appearance: 'none',
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            fontWeight: 'bold',
            m: 0,
            px: 3,
            py: 2,
            border: 0,
            borderRadius: 4,
            variant: 'buttons.primary',
        }}>
        {children}
    </button>

export default Button;