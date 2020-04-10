import { Theme } from 'theme-ui'
import { mergeDeepRight } from 'ramda'

const heading = {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
}

const ownTheme: Theme = {
    styles: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        ul: {
            listStyle: 'none',
        },
        h1: {
            ...heading,
            fontSize: [3, 4, 5],
        },
        h2: {
            ...heading,
            fontSize: [2, 3, 4],
        },
        h3: {
            ...heading,
            fontSize: [1, 2, 3],
        },
        h4: {
            ...heading,
            fontSize: [0, 1, 2],
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
            fontSize: [0, 1, 2],
        },
    },
}

export default mergeDeepRight(require('@theme-ui/presets').roboto, ownTheme)
