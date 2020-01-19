import * as React from 'react'
import { Global, InterpolationWithTheme } from '@emotion/core'
import { Theme } from 'theme-ui'

export const styles: InterpolationWithTheme<Theme> = theme => ({
    html: {
        boxSizing: 'border-box',
        overflowY: 'scroll',
    },
    body: {
        margin: 0,
    },
    header: {
        display: 'block',
        color: theme.colors?.background,
        backgroundColor: theme.colors?.text,
    },
    main: {
        display: 'block',
        paddingTop: '40px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '1140px',
        width: '100%',
    },
    footer: {
        display: 'block',
        padding: '20px',
    },
    ul: {
        maring: 0,
        padding: 0,
        listStyle: 'none',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
        padding: ['8px', '8px'],
        textAlign: 'center',
    },
    p: {
        marginTop: 0,
        marginBottom: '8px',
    },
})

export const GlobalStyle: React.FC = () => <Global styles={styles} />
