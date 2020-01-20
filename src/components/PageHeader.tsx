import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

interface PageHeaderProps {
    title: string
    description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <header sx={{ marginBottom: '8px' }}>
            <Styled.h1 sx={{ marginBottom: '8px' }}>{title}</Styled.h1>
            {description ? <p>{description}</p> : null}
        </header>
    )
}
