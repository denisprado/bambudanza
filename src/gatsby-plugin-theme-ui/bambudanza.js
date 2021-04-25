export const bambudanza = {
    breakpoints: ['40em', '52em', '70em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

    /*
    Fira Sans Regular
font-family: fira-sans, sans-serif;
font-weight: 400;

Fira Sans Bold
font-family: fira-sans, sans-serif;
font-weight: 700;

Fira Sans Heavy
font-family: fira-sans-2, sans-serif;
font-weight: 700;

Fira Sans Hair
font-family: fira-sans-2, sans-serif;
font-weight: 400;


Fira Sans Compressed Bold
font-family: fira-sans-compressed, sans-serif;
font-weight: 700;

Fira Sans Compressed Regular
font-family: fira-sans-compressed, sans-serif;
font-weight: 400;

Fira Sans Compressed Hair
font-family: fira-sans-compressed-2, sans-serif;
font-weight: 400;

Fira Sans Compressed ExtraLight
font-family: fira-sans-compressed-2, sans-serif;
font-weight: 700;

Fira Sans Condensed Medium
font-family: fira-sans-condensed, sans-serif;
font-weight: 400;

Fira Sans Condensed ExtraBold
font-family: fira-sans-condensed, sans-serif;
font-weight: 700;

Fira Sans Condensed Hair
font-family: fira-sans-condensed-2, sans-serif;
font-weight: 400;

Fira Sans Condensed ExtraLight
font-family: fira-sans-condensed-2, sans-serif;
font-weight: 700;

  */
    fonts: {
        body:
            'century-gothic, source-sans, proxima-nova, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading:
            'century-gothic, source-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [9, 12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.75,
        heading: 1.25,
    },
    colors: {
        text: '#454f5b',
        background: '#fff',
        primary: '#768858',
        secondary: '#88976d',
        highlight: '#556b2f',
        muted: '#eef0ea',
        gray: '#EEF0EA',
        accent: '#6b2f55',
        darken: '#445525',
        iniciacion: 'primary',
        medio: 'accent',
        avanzado: 'red',
        modes: {
            dark: {
                text: '#EEF0EA',
                background: '#556b2f',
                primary: '#556b2f',
                secondary: '#EEF0EA',
                highlight: '#F3FCEF',
                muted: '#e6e6e6',
            },
        },
    },
    cards: {
        primary: {
            padding: 3,
            borderRadius: 4,
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    sizes: {
        container: 1260,
        sidebar: 256,
    },
    layout: {
        header: {
            color: 'white',
            bg: 'muted',
        },
        footer: {
            bg: 'highlight',
        },
    },
    buttons: {
        primary: {
            color: 'white',
            bg: 'primary',
            '&:hover': {
                bg: 'highlighted',
            },
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5,
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4,
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3,
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2,
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1,
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0,
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        a: {
            color: 'text',
            textDecoration: 'none',
            cursor: 'pointer',
            ':hover': {
                color: 'primary',
                textDecoration: 'bold',
                transition: 'all .5s',
            },
            '&.active': {
                color: 'Primary',
                fontWeight: '600',
            },
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
    },
}
