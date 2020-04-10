import * as React from 'react'
import { Container } from './Container'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const GlobalFooter: React.FC = () => {
    const { site } = useSiteMetadata()
    return (
        <footer sx={{ backgroundColor: 'text', color: 'background', padding: '20px' }}>
            <Container Tag="section">
                <span sx={{ fontSize: '80%' }}>
                    @{new Date().getFullYear()} {site?.siteMetadata?.title}
                </span>
            </Container>
        </footer>
    )
}
