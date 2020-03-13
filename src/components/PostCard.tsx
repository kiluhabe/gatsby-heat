import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'

export interface PostCardProps {
    title: string
    description: string
    categories: string[]
    image: string
    path: string
}

export const PostCard: React.FC<PostCardProps> = ({ title, description, categories, image, path }) => (
    <Link
        sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            minWidth: 0,
            height: '100%',
            wordWrap: 'break-word',
            backgroundClip: 'border-box',
            borderRadius: '.25rem',
            border: '1px solid rgba(0,0,0,.125)',
            textDecoration: 'none',
        }}
        to={path}
    >
        <img
            sx={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                borderTopRightRadius: '.25rem',
                borderTopLeftRadius: '.25rem',
            }}
            alt={title}
            src={image}
        />
        <section sx={{ flex: '1 1 auto', padding: '1.25rem' }}>
            <p>
                {categories.map(category => (
                    <small sx={{ marginRight: '8px', color: 'gray' }} key={category}>
                        {category}
                    </small>
                ))}
            </p>
            <Styled.h3 sx={{ marginBottom: '8px' }}>{title}</Styled.h3>
            <p sx={{ color: 'gray' }}>{description}</p>
        </section>
    </Link>
)
