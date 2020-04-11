import * as React from 'react'
import BackgroundImage from 'gatsby-background-image'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useImage } from '../hooks/useImage'

interface ImageBackProps {
    src: string
}

export const ImageBack: React.FC<ImageBackProps> = ({ children, src }) => {
    const fluid = useImage(src)
    return (
        <BackgroundImage
            style={{
                width: '100%',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPositionX: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: -3,
                position: 'relative',
            }}
            sizes={fluid}
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
        </BackgroundImage>
    )
}
