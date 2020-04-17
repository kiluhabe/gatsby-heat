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
            width: '100%',
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
                paddingBottom: '16px',
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
                ul: {
                    listStyle: 'none',
                    width: '100%',
                    margin: 0,
                    fontSize: [1, 2, 2],
                },
                p: {
                    margin: 0,
                },
                li: {
                    wordBreak: 'break-word',
                },
                '>ul': {
                    marginTop: '16px',
                    '>li': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid gray',
                        paddingBottom: '4px',
                        marginBottom: '4px',
                        marginLeft: '8px',
                        marginRight: '8px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        '>ul': {
                            flex: '0 0 30%',
                        },
                    },
                    '>li:last-of-type': {
                        marginBottom: 0,
                    },
                },
            },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
    />
)
