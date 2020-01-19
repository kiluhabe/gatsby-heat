import * as React from 'react'
import { PostCard, PostCardProps } from './PostCard'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface PostCardListProps {
    posts: PostCardProps[]
}

export const PostCardList: React.FC<PostCardListProps> = ({ posts }) => (
    <ul
        sx={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            marginLeft: '-15px',
            marginRight: '-15px',
            boxSizing: 'border-box',
        }}
    >
        {posts.map(post => (
            <li
                key={post.title}
                sx={{
                    flex: '0 0 33.33333%',
                    maxWidth: '33.33333%',
                    marginBottom: '2rem',
                    position: 'relative',
                    width: '100%',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    boxSizing: 'border-box',
                }}
            >
                <PostCard {...post} />
            </li>
        ))}
    </ul>
)
