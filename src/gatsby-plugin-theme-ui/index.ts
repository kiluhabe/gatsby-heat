import { Theme } from 'theme-ui'

const theme: Theme = {
    colors: {
        text: '#010202',
        background: '#FFFFFF',
        primary: '#48F5C8',
        secondary: '#010202',
    },
    fonts: {
        // eslint-disable-next-line max-len
        body: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        // eslint-disable-next-line max-len
        heading: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 'normal',
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    styles: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        h1: {
            margin: 0,
            padding: 0,
            color: 'inherit',
            fontFamily: 'heading',
            fontSize: 6,
            fontWeight: 'heading',
            textRendering: 'optimizeLegibility',
            lineHeight: 'heading',
        },
        h2: {
            margin: 0,
            padding: 0,
            color: 'inherit',
            fontFamily: 'heading',
            fontSize: 5,
            fontWeight: 'heading',
            textRendering: 'optimizeLegibility',
            lineHeight: 'heading',
        },
        h3: {
            margin: 0,
            padding: 0,
            color: 'inherit',
            fontFamily: 'heading',
            fontSize: 4,
            fontWeight: 'heading',
            textRendering: 'optimizeLegibility',
            lineHeight: 'heading',
        },
    },
}

export default theme
