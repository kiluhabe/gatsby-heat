import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { ImageBack } from '../components/ImageBack'

interface HeroProps {
    title: string
    description: string
    src: string
}

export const Hero: React.FC<HeroProps> = ({ title, description, src, children }) => (
    <ImageBack src={src}>
        {children}
        <div
            sx={{
                color: 'background',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '216px',
                marginBottom: '288px',
            }}
        >
            <Styled.h2 sx={{ fontSize: [5, 6, 7], marginBottom: '8px', color: 'background', fontWeight: 'normal' }}>
                {title}
            </Styled.h2>
            <Styled.p sx={{ color: 'background', textAlign: 'center' }}>{description}</Styled.p>
        </div>
    </ImageBack>
)
