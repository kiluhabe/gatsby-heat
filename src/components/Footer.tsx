import * as React from 'react'
import { useSite } from '../hooks/useSite'

export const Footer: React.FC = () => {
    const { site } = useSite()
    return (
        <footer>
            <span>
                @{new Date().getFullYear()} {site?.siteMetadata?.title}
            </span>
        </footer>
    )
}
