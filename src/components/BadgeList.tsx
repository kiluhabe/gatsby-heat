import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'

interface Badge {
    id: string
    title: string
    path: string
}

interface BadgeListProps {
    items: Badge[]
}

export const BadgeList: React.FC<BadgeListProps> = ({ items }) => (
    <Styled.ul
        sx={{
            display: 'flex',
            marginTop: 0,
        }}
    >
        {items.map(({ id, title, path }) => (
            <li
                key={id}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2px 8px',
                    marginRight: '4px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '.25rem',
                    verticalAlign: 'center',
                }}
            >
                <Link sx={{ color: 'text', fontSize: [0] }} to={path}>
                    {title}
                </Link>
            </li>
        ))}
    </Styled.ul>
)
