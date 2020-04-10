import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useImage } from '../hooks/useImage'

interface TinyContentListItemProps {
    id: string
    title: string
    description: string
    image: string
}

interface TinyContentListProps {
    contents: TinyContentListItemProps[]
}

const TinyContentListItem: React.FC<TinyContentListItemProps> = ({ id, title, description, image }) => {
    const sizes = useImage(image)
    return (
        <Styled.li key={id} sx={{ paddingBottom: '24px' }}>
            <Link sx={{ display: 'flex', alignItems: 'start' }} to={`/categories/${id}`}>
                <Img
                    sx={{
                        height: '100%',
                        width: ['15%', 0, '30%'],
                        borderRadius: '.25rem',
                        display: ['block', 'none', 'block'],
                        marginRight: '8px',
                        marginTop: '4px',
                        backgroundColor: 'black',
                    }}
                    sizes={sizes}
                    alt={title}
                />
                <div>
                    <Styled.p sx={{ margin: 0, fontSize: [2, 1, 2] }}>{title}</Styled.p>
                    <Styled.p
                        sx={{
                            margin: 0,
                            color: 'darkgray',
                            fontSize: [0, 0, 0],
                            display: ['inline', 'none', 'inline'],
                        }}
                    >
                        {description}
                    </Styled.p>
                </div>
            </Link>
        </Styled.li>
    )
}

export const TinyContentList: React.FC<TinyContentListProps> = ({ contents }) => {
    return (
        <Styled.ul sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {contents.map(content => (
                <TinyContentListItem key={content.id} {...content} />
            ))}
        </Styled.ul>
    )
}
