import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface ImageBackProps {
    image: string
}

export const ImageBack: React.FC<ImageBackProps> = ({ children, image }) => {
    return (
        <div
            sx={{
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: -3,
                position: 'relative',
            }}
        >
            <div
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -2,
                    background: 'rgba(0, 0, 0, 0.4)',
                }}
            />
            {children}
        </div>
    )
}
