import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const GlobalFooter: React.FC = () => {
    const { site } = useSiteMetadata()
    return (
        <footer sx={{ backgroundColor: 'primary', color: 'highlight' }}>
            <span sx={{ fontSize: '80%' }}>
                @{new Date().getFullYear()} {site?.siteMetadata?.title}
            </span>
        </footer>
    )
}
