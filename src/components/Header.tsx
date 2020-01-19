import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useSite } from '../hooks/useSite'

export const Header: React.FC = () => {
    const { site } = useSite()
    return (
        <header>
            <nav sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                <Styled.h1>
                    <Link to="/">{site?.siteMetadata?.title}</Link>
                </Styled.h1>
                <ul sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <li>
                        <Link to="/posts">POSTS</Link>
                    </li>
                    <li>
                        <Link to="/posts">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
