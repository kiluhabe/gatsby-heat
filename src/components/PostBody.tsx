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
            },
            p: {
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
                fontSize: [1, 2, 3],
            },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
    />
)
