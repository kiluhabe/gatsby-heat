import * as React from 'react'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'

interface PostsProps {
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
    pageContext: {
        category: string
    }
}

const PostsPage: React.FC<PostsProps> = ({ data, pageContext }) => {
    const { category } = pageContext
    const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    return (
        <Layout>
            <Seo title={category} />
            <Container Tag="section">
                <PageHeader title={category} />
                <PostCardList posts={posts} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query CategoryListQuery($ids: [String]!) {
        allMarkdownRemark(filter: { id: { in: $ids } }) {
            edges {
                node {
                    id
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
    }
`

export default PostsPage
