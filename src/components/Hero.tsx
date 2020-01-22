import * as React from 'react'
import { Styled, jsx } from 'theme-ui'
import BackgroundImage from 'gatsby-background-image'
import { Container } from './Container'
/** @jsx jsx */
import { useImage } from '../hooks/useImage'

interface HeroProps {
    title: string
    filename: string
    description?: string
}

const BackgroundImageWrapper: React.FC<{ filename: string }> = ({ filename, children }) => {
    const sizes = useImage(filename)
    return (
        <BackgroundImage
            sx={{
                height: '250px',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: -3,
            }}
            Tag="section"
            fluid={sizes}
            backgroundColor="#102010"
        >
            {children}
        </BackgroundImage>
    )
}

export const Hero: React.FC<HeroProps> = ({ title, description, filename }) => {
    const Tag: React.FC = ({ children }) => (
        <BackgroundImageWrapper filename={filename}>{children}</BackgroundImageWrapper>
    )
    return (
        <Container Tag={Tag}>
            <Styled.h1 sx={{ color: 'background' }}>{title}</Styled.h1>
            {description ? <Styled.p>{description}</Styled.p> : null}
        </Container>
    )
}
