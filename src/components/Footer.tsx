import * as React from 'react'
/** @jsx jsx */
import { Theme, jsx } from 'theme-ui'
import { CSSObject } from '@emotion/core'
import { useSite } from '../hooks/useSite'

export const Footer: React.FC = () => {
    const { site } = useSite()
    return (
        <footer sx={({ colors }: Theme): CSSObject => ({ background: colors?.text, color: colors?.background })}>
            <span sx={{ fontSize: '80%' }}>
                @{new Date().getFullYear()} {site?.siteMetadata?.title}
            </span>
        </footer>
    )
}
