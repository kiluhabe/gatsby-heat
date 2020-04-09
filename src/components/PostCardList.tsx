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
            flexWrap: 'wrap',
            width: '100%',
        }}
    >
        {posts.map((post, index) => (
            <Styled.li
                key={post.title}
                sx={{
                    flex: ['0 0 100%', '0 0 50%', '0 0 33.33333%'],
                    maxWidth: ['100%', '50%', '33.33333%'],
                    marginBottom: '2rem',
                    position: 'relative',
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingLeft: [0, !index ? 0 : '15px'],
                }}
            >
                <PostCard {...post} />
            </Styled.li>
        ))}
    </Styled.ul>
)
