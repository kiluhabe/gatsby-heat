import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface HeaderProps {
    siteTitle: string
}

export const Header = React.memo<HeaderProps>(({ siteTitle }) => (
    <header sx={{ color: 'background', backgroundColor: 'primary' }}>
        <h1>{siteTitle}</h1>
    </header>
))
