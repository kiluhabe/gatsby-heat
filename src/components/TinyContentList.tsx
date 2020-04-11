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
    path: string
}

interface TinyContentListProps {
    contents: TinyContentListItemProps[]
}

const TinyContentListItem: React.FC<TinyContentListItemProps> = ({ id, title, description, image, path }) => {
    const fluid = useImage(image)
    return (
        <Styled.li key={id} sx={{ paddingBottom: '24px' }}>
            <Link sx={{ display: 'flex', alignItems: 'start' }} to={path}>
                <Img
                    sx={{
                        borderRadius: '.25rem',
                        marginRight: '8px',
                        marginTop: '6px',
                        backgroundColor: 'black',
                        flex: '0 0 30%',
                    }}
                    fluid={fluid}
                    alt={title}
                />
                <div>
                    <Styled.p>{title}</Styled.p>
                    <Styled.p
                        sx={{
                            margin: 0,
                            color: 'darkgray',
                            fontSize: [0, 0, 0],
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
