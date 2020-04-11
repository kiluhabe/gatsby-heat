import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { CarouselJsonLd } from '../components/CarouselJsonLd'
import { Container } from '../components/Container'
import { GlobalFooter } from '../components/GlobalFooter'
import { GlobalHeader } from '../components/GlobalHeader'
import { GlobalStyle } from '../components/GlobalStyle'
import { Hero } from '../components/Hero'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
import { TinyContentList } from '../components/TinyContentList'
import { graphql } from 'gatsby'

interface IndexProps {
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

const Layout: React.FC = ({ children }) => (
    <Styled.root>
        <GlobalStyle />
        <Hero title="Welcome!" description="Welcome To Gatsby Heat!" src="hero.jpg">
            <GlobalHeader color="background" />
        </Hero>
        <main sx={{ flex: 1 }}>{children}</main>
        <GlobalFooter />
    </Styled.root>
)

const IndexPage: React.FC<IndexProps> = ({ data }) => {
    const posts = data.posts.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    const paths = posts.map(({ path }) => path)
    const categories = data.categories.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/categories/${node.id}`,
    }))
    return (
        <Layout>
            <Seo title="Home" />
            <CarouselJsonLd paths={paths} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray' }}>Posts</Styled.h2>
                        <PostCardList posts={posts} />
                    </React.Fragment>
                    <React.Fragment>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray' }}>
                            Categories
                        </Styled.h2>
                        <TinyContentList contents={categories} />
                    </React.Fragment>
                </SideContentLayout>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        posts: allMarkdownRemark(
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
        categories: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { sourceInstanceName: { eq: "categories" } } }
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

export default IndexPage
