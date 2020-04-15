import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface PostBodyProps {
    html: string
}

export const PostBody: React.FC<PostBodyProps> = ({ html }) => (
    <section
        sx={{
            marginBottom: '160px',
            h2: {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: [2, 3, 4],
                marginTop: '48px',
            },
            p: {
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
                fontSize: [1, 2, 2],
                a: {
                    color: 'text',
                    borderBottom: 'solid 1px black',
                },
            },
            blockquote: {
                marginTop: '40px',
                marginBottom: '40px',
                padding: '16px 32px',
                border: '1px solid darkgray',
                color: 'gray',
                fontStyle: 'italic',
            },
            '.card': {
                boxShadow: '0 5px 10px 0 rgba(0,0,0,.1)',
                borderRadius: '3px',
                boxSizing: 'border-box',
                h2: {
                    backgroundColor: 'text',
                    color: 'background',
                    borderTopLeftRadius: '3px',
                    borderTopRightRadius: '3px',
                    margin: 0,
                    padding: '8px 16px',
                },
            },
            '.transpose-table': {
                table: {
                    padding: '8px 16px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    thead: {
                        width: '100%',
                        tr: {
                            width: '100%',
                            display: 'block',
                            float: 'left',
                            th: {
                                width: '100%',
                                display: 'block',
                                textAlign: 'left',
                                marginBottom: '8px',
                                paddingBottom: '8px',
                                borderBottom: '1px solid darkgray',
                            },
                            '>th:last-of-type': {
                                borderBottom: 'none',
                                marginBottom: 0,
                                paddingBottom: 0,
                            },
                        },
                    },
                    tbody: {
                        width: '100%',
                        tr: {
                            width: '100%',
                            display: 'block',
                            float: 'left',
                            td: {
                                width: '100%',
                                display: 'block',
                                textAlign: 'right',
                                marginBottom: '8px',
                                paddingBottom: '8px',
                                borderBottom: '1px solid darkgray',
                            },
                            '>td:last-of-type': {
                                borderBottom: 'none',
                                marginBottom: 0,
                                paddingBottom: 0,
                            },
                        },
                    },
                },
            },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
    />
)
