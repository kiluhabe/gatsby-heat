import * as React from 'react'

interface FooterProps {
    siteTitle: string
}

export const Footer = React.memo<FooterProps>(({ siteTitle }) => (
    <footer>
        <span>
            @{new Date().getFullYear()} {siteTitle}
        </span>
    </footer>
))
