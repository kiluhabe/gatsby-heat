import * as React from 'react'
import { Global, InterpolationWithTheme } from '@emotion/core'
import { Theme } from 'theme-ui'

export const styles: InterpolationWithTheme<Theme> = {
    html: {
        boxSizing: 'border-box',
        overflowY: 'scroll',
    },
    body: {
        margin: 0,
    },
    a: {
        textDecoration: 'none',
    },
    p: {
        marginTop: 0,
        marginBottom: '8px',
    },
    ul: {
        padding: 0,
    },
}

export const GlobalStyle: React.FC = () => <Global styles={styles} />
