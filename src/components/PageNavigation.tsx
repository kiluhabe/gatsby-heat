import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { range } from 'ramda'

interface PageNavigationProps {
    basePath: string
    lastPage: number
    currentPage: number
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ basePath, lastPage, currentPage }) => {
    const start = currentPage - 2 < 1 ? 1 : currentPage - 2
    const end = currentPage + 2 > lastPage ? lastPage : currentPage + 2
    const pageList = range(start, end + 1)
    return (
        <nav sx={{ width: '100%' }}>
            <Styled.ul
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {pageList.includes(1) ? null : <li>…</li>}
                {pageList.map(page => (
                    <li
                        key={page}
                        sx={{
                            padding: '16px',
                            backgroundColor: page === currentPage ? 'text' : 'background',
                        }}
                    >
                        <Link
                            sx={{
                                pointerEvents: page === currentPage ? 'none' : 'inherit',
                                color: page === currentPage ? 'background' : 'text',
                            }}
                            to={`${basePath}${page === 1 ? '' : page}`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
                {pageList.includes(lastPage) ? null : <li>…</li>}
            </Styled.ul>
        </nav>
    )
}
