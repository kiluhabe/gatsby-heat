import { Theme } from 'theme-ui'
import { mergeDeepRight } from 'ramda'

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
    },
}

export default mergeDeepRight(require('@theme-ui/presets').funk, ownTheme)
