import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface TableOfContentsProps {
    html: string
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ html }) => (
    <section
        sx={{
            borderBottom: 'solid 1px lightgray',
            marginTop: '24px',
            marginBottom: '32px',
            paddingBottom: '16px',
            paddingLeft: '4px',
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
                '> li': {
                    marginBottom: '8px',
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
