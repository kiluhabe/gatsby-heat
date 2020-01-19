import * as React from 'react'
/** @jsx jsx */
import { Styled, Theme, jsx } from 'theme-ui'
import { CSSObject } from '@emotion/core'
import { Link } from 'gatsby'

export interface PostCardProps {
    title: string
    description: string
    tags: string[]
    picture: string
    to: string
}

export const PostCard: React.FC<PostCardProps> = ({ title, description, tags, picture, to }) => (
    <article
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
        }}
    >
        <img
            sx={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                borderTopRightRadius: '.25rem',
                borderTopLeftRadius: '.25rem',
            }}
            alt="headline"
            src={picture}
        />
        <section sx={{ flex: '1 1 auto', padding: '1.25rem' }}>
            <p>
                {tags.map(tag => (
                    <small sx={{ marginRight: '8px', color: 'rgba(0,0,0,.8)' }} key={tag}>
                        {tag}
                    </small>
                ))}
            </p>
            <Styled.h3 sx={{ marginBottom: '8px' }}>{title}</Styled.h3>
            <p>{description}</p>
        </section>
        <Link
            sx={(theme: Theme): CSSObject => ({
                backgroundColor: theme.colors?.primary,
                fontWeight: 'bold',
                padding: '.75rem 1.25rem',
            })}
            to={to}
        >
            View Post
        </Link>
    </article>
)
