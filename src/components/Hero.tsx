import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { ImageBack } from '../components/ImageBack'

interface HeroProps {
    title: string
    description: string
}

export const Hero: React.FC<HeroProps> = ({ title, description, children }) => (
    <ImageBack src="hero.jpg">
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
            <Styled.p sx={{ fontSize: [5, 6, 7], marginBottom: '8px', color: 'background' }}>{title}</Styled.p>
            <Styled.p sx={{ color: 'background' }}>{description}</Styled.p>
        </div>
    </ImageBack>
)
