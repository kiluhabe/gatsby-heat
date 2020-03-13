import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container } from './Container'

interface HeroProps {
    title: string
    image: string
    description?: string
}

const HeroInner: React.FC<{ image: string }> = ({ children, image }) => {
    return (
        <section
            sx={{
                height: '250px',
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
                    background: 'rgba(0, 0, 0, 0.2)',
                }}
            />
            {children}
        </section>
    )
}

export const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
    const Tag: React.FC = ({ children }) => <HeroInner image={image}>{children}</HeroInner>
    return (
        <Container Tag={Tag}>
            <Styled.h1 sx={{ color: 'background' }}>{title}</Styled.h1>
            {description ? <Styled.p>{description}</Styled.p> : null}
        </Container>
    )
}
