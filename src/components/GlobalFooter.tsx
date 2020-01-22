import * as React from 'react'
/** @jsx jsx */
import { Theme, jsx } from 'theme-ui'
import { CSSObject } from '@emotion/core'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const GlobalFooter: React.FC = () => {
    const { site } = useSiteMetadata()
    return (
        <footer sx={({ colors }: Theme): CSSObject => ({ background: colors?.text, color: colors?.background })}>
            <span sx={{ fontSize: '80%' }}>
                @{new Date().getFullYear()} {site?.siteMetadata?.title}
            </span>
        </footer>
    )
}
