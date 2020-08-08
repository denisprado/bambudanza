export const bambudanza = {
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
        text: "#404A3C",
        background: "#fff",
        primary: "#61B74A",
        secondary: "#A3AF9E",
        highlight: "#2E4F24",
        muted: "#F3FCEF",
        gray: "#A3AF9E",
        accent: "#08658C",
        darken: "#2E4F24",
        modes: {
            dark: {
                text: "#A3AF9E",
                background: "#2E4F24",
                primary: "#61B74A",
                secondary: "#A3AF9E",
                highlight: "#F3FCEF",
                muted: "#e6e6e6"
            }
        }
    },
    cards: {
        primary: {
            padding: 2,
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
        container: 1024,
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
            color: 'secondary',
            textDecoration: 'none',

            ':hover': {
                borderBottom: `2px solid`,
                borderColor: 'primary',
                "color": 'primary',
                "textDecoration": 'bold',
                backgroundColor: 'muted',
            },
            '&.active': {
                color: "primary",
                fontWeight: '600',
                borderBottom: '2px solid',
                borderColor: 'primary',
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
        }
    }
}