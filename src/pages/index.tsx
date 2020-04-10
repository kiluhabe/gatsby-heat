import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { CategoryList } from '../components/CategoryList'
import { Container } from '../components/Container'
import { GlobalFooter } from '../components/GlobalFooter'
import { GlobalHeader } from '../components/GlobalHeader'
import { GlobalStyle } from '../components/GlobalStyle'
import { Hero } from '../components/Hero'
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

const Layout: React.FC = ({ children }) => (
    <Styled.root>
        <Seo title="Home" />
        <GlobalStyle />
        <Hero title="Welcome!" description="Welcome To Gatsby Heat!">
            <GlobalHeader color="background" />
        </Hero>
        <main sx={{ flex: 1 }}>{children}</main>
        <GlobalFooter />
    </Styled.root>
)

const IndexPage: React.FC<IndexProps> = ({ data }) => {
    const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    return (
        <Layout>
            <Container Tag="section">
                <div sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>
                    <div sx={{ flex: ['0 0 100%', '0 0 70%'] }}>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray' }}>Posts</Styled.h2>
                        <PostCardList posts={posts} />
                    </div>
                    <div sx={{ flex: ['0 0 100%', '0 0 20%'] }}>
                        <CategoryList />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { sourceInstanceName: { eq: "posts" } } }
        ) {
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
