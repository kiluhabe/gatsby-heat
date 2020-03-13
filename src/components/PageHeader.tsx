import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface PageHeaderProps {
    title: string
    description?: string
    tag?: HeadingTag
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, tag = 'h1' }) => {
    const Heading = Styled[tag]
    return (
        <header>
            <Heading>{title}</Heading>
            {description ? <p sx={{ color: 'gray', margin: 0 }}>{description}</p> : null}
        </header>
    )
}
