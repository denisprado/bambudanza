import { lightness, lighten, shade } from '@theme-ui/color'

export const bambudanza = {
    breakpoints: ['40em', '52em', '64em'],
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
        heading: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
        monospace: "Menlo, monospace"
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {
        "body": 400,
        "heading": 600,
        "bold": 700
    },
    lineHeights: {
        body: 1.75,
        heading: 1.25
    },
    colors: {
        text: "#3d4c53",
        background: "#fff",
        primary: "#428365",
        secondary: "#b4c8c4",
        highlight: "#496d50",
        muted: "#eaf2f1",
        gray: "#b4c8c4",
        accent: "#545479",
        darken: "#496d50",
        iniciacion: 'primary',
        medio: 'accent',
        avanzado: 'red',
        modes: {
            dark: {
                text: "#b4c8c4",
                background: "#496d50",
                primary: "#428365",
                secondary: "#b4c8c4",
                highlight: "#F3FCEF",
                muted: "#e6e6e6"
            }
        }
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
            }
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        },
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body"
        },
        h1: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 5
        },
        h2: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 4
        },
        h3: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 3
        },
        h4: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 2
        },
        h5: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 1
        },
        h6: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 0
        },
        p: {
            "color": "text",
            "fontFamily": "body",
            "fontWeight": "body",
            "lineHeight": "body"
        },
        a: {
            color: 'text',
            textDecoration: 'none',
            cursor: 'pointer',
            ':hover': {
                "color": 'primary',
                "textDecoration": 'bold',
            },
            '&.active': {
                color: "Primary",
                fontWeight: '600',
            }
        },
        "pre": {
            "fontFamily": "monospace",
            "overflowX": "auto",
            "code": {
                "color": "inherit"
            }
        },
        "code": {
            "fontFamily": "monospace",
            "fontSize": "inherit"
        },
        "table": {
            "width": "100%",
            "borderCollapse": "separate",
            "borderSpacing": 0
        },
        "th": {
            "textAlign": "left",
            "borderBottomStyle": "solid"
        },
        "td": {
            "textAlign": "left",
            "borderBottomStyle": "solid"
        },
        "img": {
            "maxWidth": "100%"
        },

    }
}