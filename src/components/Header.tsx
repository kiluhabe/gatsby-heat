import * as React from 'react'
/** @jsx jsx */
import { Theme, jsx } from 'theme-ui'
import { CSSObject } from '@emotion/core'
import { Link } from 'gatsby'
import { useSite } from '../hooks/useSite'

export const Header: React.FC = () => {
    const { site } = useSite()
    return (
        <header
            sx={({ colors }: Theme): CSSObject => ({
                color: colors?.background,
                backgroundColor: colors?.text,
            })}
        >
            <nav sx={{ display: 'flex', padding: '8px' }}>
                <h1>
                    <Link to="/">{site?.siteMetadata?.title}</Link>
                </h1>
                <ul
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 'auto',
                    }}
                >
                    <li>
                        <Link sx={{ margin: [8, 0] }} to="/posts">
                            POSTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
