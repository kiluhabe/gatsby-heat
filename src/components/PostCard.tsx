import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useImage } from '../hooks/useImage'

export interface PostCardProps {
    id: string
    title: string
    description: string
    categories: string[]
    image: string
    path: string
}

export const PostCard: React.FC<PostCardProps> = ({ title, image, path }) => {
    const sizes = useImage(image)
    return (
        <article
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                minWidth: 0,
                height: '100%',
                wordWrap: 'break-word',
                backgroundClip: 'border-box',
                textDecoration: 'none',
            }}
        >
            <Link to={path}>
                <Img
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '.25rem',
                    }}
                    alt={title}
                    sizes={sizes}
                />
            </Link>
            <Link to={path}>
                <Styled.h3>{title}</Styled.h3>
            </Link>
        </article>
    )
}
