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
    },
}

export default mergeDeepRight(require('@theme-ui/presets').funk, ownTheme)
