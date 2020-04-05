import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface ContainerProps {
    Tag: string | React.ComponentType
}

export const Container: React.FC<ContainerProps> = ({ Tag, children }) => {
    return (
        <Tag
            sx={{
                display: 'block',
                paddingTop: '40px',
                paddingBottom: '40px',
                paddingLeft: '15px',
                paddingRight: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
                maxWidth: '1140px',
                width: '100%',
            }}
        >
            {children}
        </Tag>
    )
}
