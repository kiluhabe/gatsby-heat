import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container } from '../components/Container'
import Img from 'gatsby-image'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { Share } from '../components/Share'
import { graphql } from 'gatsby'
import { useImage } from '../hooks/useImage'

interface PostProps {
    data: {
        posts: {
            edges: [
                {
                    node: PostNode
                }
            ]
        }
        categories: {
            edges: [
                {
                    node: CategoryNode
                }
            ]
        }
    }
}

const Post: React.FC<PostProps> = ({ data }) => {
    const { html, frontmatter, id } = data.posts.edges[0].node
    const { title, description, image, date } = frontmatter
    const sizes = useImage(image)
    return (
        <Layout>
            <Seo title={title} description={description} />
            <Container Tag="section">
                <Img
                    sx={{
                        width: '100%',
                        marginBottom: '32px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        borderRadius: '.25rem',
                    }}
                    alt={title}
                    sizes={sizes}
                />
                <header
                    sx={{
                        marginBottom: '64px',
                    }}
                >
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
                    <Share path={`/posts/${id}`} />
                </header>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($id: String!, $categories: [String]!) {
        posts: allMarkdownRemark(filter: { id: { eq: $id }, fields: { sourceInstanceName: { eq: "posts" } } }) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        description
                        categories
                        image
                        date
                    }
                }
            }
        }
        categories: allMarkdownRemark(
            filter: {
                frontmatter: { title: { in: $categories } }
                fields: { sourceInstanceName: { eq: "categories" } }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image
                    }
                }
            }
        }
    }
`

export default Post
