import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { useImage } from '../hooks/useImage'

interface ComponentProps {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    id: string
                    frontmatter: {
                        name: string
                        description: string
                        image: string
                    }
                }
            }
        ]
    }
}

interface ComponentUnitProps {
    id: string
    frontmatter: {
        name: string
        description: string
        image: string
    }
}

const ComponentUnit: React.FC<ComponentUnitProps> = ({ id, frontmatter }) => {
    const { name, description, image } = frontmatter
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
                        backgroundColor: 'black'
                    }}
                    sizes={sizes}
                    alt={name}
                />}
                <div>
                    <Styled.p sx={{  margin: 0, fontSize: [2, 1, 2] }}>{name}</Styled.p>
                    <Styled.p
                        sx={{
                            margin: 0,
                            color: 'darkgray',
                            fontSize: [0,0,0],
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

export const Component: React.FC<ComponentProps> = ({ allMarkdownRemark }) => {
    const nodes = allMarkdownRemark.edges.map(({ node }) => node)
    return (
        <nav sx={{ width: '100%' }}>
            <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray' }}>Categories</Styled.h2>
            <Styled.ul sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {nodes.map(node => (
                    <ComponentUnit key={node.id} {...node} />
                ))}
            </Styled.ul>
        </nav>
    )
}

const query = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { sourceInstanceName: { eq: "categories" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        description
                        image
                    }
                }
            }
        }
    }
`

export const CategoryList: React.FC = () => <StaticQuery query={query} render={Component} />
