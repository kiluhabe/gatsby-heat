import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const GlobalHeader: React.FC = () => {
    const { site } = useSiteMetadata()
    return (
        <header sx={{ color: 'highlight', backgroundColor: 'primary', fontWeight: 600, letterSpacing: '.075rem' }}>
            <nav sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                <Styled.h1 sx={{ color: 'highlight' }}>
                    <Link to="/" sx={{ color: 'inherit' }}>
                        {site?.siteMetadata?.title}
                    </Link>
                </Styled.h1>
            </nav>
        </header>
    )
}
