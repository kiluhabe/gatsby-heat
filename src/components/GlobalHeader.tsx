import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface GlobalHeaderProps {
    color?: string
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ color }) => {
    const { site } = useSiteMetadata()
    return (
        <header
            sx={{
                paddingLeft: '15px',
                paddingRight: '15px',
                margin: 'auto',
                maxWidth: '1140px',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <nav sx={{ display: 'flex', alignItems: 'center' }}>
                <Styled.h1 sx={{ color: color ?? 'text', marginTop: '32px', marginBottom: '32px' }}>
                    <Link to="/" sx={{ color: 'inherit' }}>
                        {site?.siteMetadata?.title}
                    </Link>
                </Styled.h1>
                <Styled.p sx={{ margin: 'auto', marginLeft: '16px', color: color ?? 'text' }}>
                    {site?.siteMetadata?.description}
                </Styled.p>
            </nav>
        </header>
    )
}
