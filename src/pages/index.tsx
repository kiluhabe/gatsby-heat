import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container } from '../components/Container'
import { GlobalFooter } from '../components/GlobalFooter'
import { GlobalHeader } from '../components/GlobalHeader'
import { GlobalStyle } from '../components/GlobalStyle'
import { ImageBack } from '../components/ImageBack'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'

interface IndexProps {
    data: {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        id: string
                        frontmatter: {
                            title: string
                            description: string
                            categories: string[]
                            image: string
                            date: string
                        }
                    }
                }
            ]
        }
    }
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
    const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    return (
        <Styled.root>
            <Seo title="Home" />
            <GlobalStyle />
            <ImageBack src="hero.jpg">
                <GlobalHeader color="background" />
                <div
                    sx={{
                        color: 'background',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '216px',
                        marginBottom: '288px',
                    }}
                >
                    <Styled.p sx={{ fontSize: [5, 6, 7], marginBottom: '8px', color: 'background' }}>Welcome!</Styled.p>
                    <Styled.p sx={{ color: 'background' }}>Welcome to Gatsby Heat Theme!</Styled.p>
                </div>
            </ImageBack>
            <main sx={{ flex: 1 }}>
                <Container Tag="section">
                    <PostCardList posts={posts} />
                </Container>
            </main>
            <GlobalFooter />
        </Styled.root>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        categories
                        image
                        description
                    }
                }
            }
        }
    }
`

export default IndexPage
