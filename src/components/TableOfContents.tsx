import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface TableOfContentsProps {
    html: string
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ html }) => (
    <section
        sx={{
            marginTop: '8px',
            paddingLeft: '2px',
            paddingBottom: '8px',
            li: {
                listStyle: 'none',
            },
            a: {
                textDecoration: 'none',
            },
            p: {
                marginBottom: '4px',
            },
            '& > ul': {
                margin: 0,
                '> li': {
                    marginBottom: '8px',
                    '> a': {
                        color: 'text',
                        borderBottom: 'solid 1px black',
                        fontSize: [1, 2, 3],
                    },
                    '> p': {
                        '> a': {
                            color: 'text',
                            borderBottom: 'solid 1px black',
                            fontSize: [1, 2, 3],
                        },
                    },
                    '> ul': {
                        '> li': {
                            paddingLeft: '16px',
                            '> a': {
                                color: 'gray',
                                borderBottom: 'solid 1px black',
                                fontSize: [0, 1, 2],
                            },
                        },
                    },
                },
            },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
    />
)
