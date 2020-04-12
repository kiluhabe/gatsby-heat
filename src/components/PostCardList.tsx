import * as React from 'react'
import { PostCard, PostCardProps } from './PostCard'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

interface PostCardListProps {
    posts: PostCardProps[]
}

export const PostCardList: React.FC<PostCardListProps> = ({ posts }) => (
    <Styled.ul
        sx={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'start',
            flexWrap: 'wrap',
            width: '100%',
        }}
    >
        {posts.map(post => (
            <Styled.li
                key={post.id}
                sx={{
                    flex: ['0 0 100%', '0 0 47%', '0 0 30%'],
                    maxWidth: ['100%', '47%', '30%'],
                    marginRight: '16px',
                    marginBottom: '2rem',
                    position: 'relative',
                    boxSizing: 'border-box',
                }}
            >
                <PostCard {...post} />
            </Styled.li>
        ))}
    </Styled.ul>
)
