import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Share } from './Share'
import { useImage } from '../hooks/useImage'

interface PostHeaderProps {
    title: string
    description: string
    date: string
    image: string
    path: string
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, description, date, image, path }) => {
    const fluid = useImage(image)
    return (
        <header
            sx={{
                marginBottom: '32px',
                borderBottom: 'solid 1px lightgray',
            }}
        >
            <Img
                sx={{
                    width: '100%',
                    marginBottom: '32px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    borderRadius: '.25rem',
                }}
                alt={title}
                fluid={fluid}
            />
            <Styled.h1>{title}</Styled.h1>
            <Styled.p
                sx={{
                    color: 'gray',
                    marginBottom: '32px',
                    backgroundColor: '#f7f7f7',
                    padding: '16px',
                    borderRadius: '.25rem',
                }}
            >
                {description}
            </Styled.p>
            <time
                sx={{
                    display: 'block',
                    fontSize: 0,
                    color: 'lightgray',
                    textAlign: 'right',
                }}
                dateTime={date}
            >
                {new Date(date).toDateString()}
            </time>
            <Share path={path} imagePath={fluid?.src} />
        </header>
    )
}
