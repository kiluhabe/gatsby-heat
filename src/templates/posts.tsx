import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { CategoryList } from '../components/CategoryList'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
import { graphql } from 'gatsby'

interface PostsProps {
    data: {
        posts: {
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
        categories: {
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
}

const PostsPage: React.FC<PostsProps> = ({ data }) => {
    const { name, description, image } = data.categories.edges[0].node.frontmatter
    const posts = data.posts.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    return (
        <Layout>
            <Seo title={name} />
            <Hero title={name} description={description} src={image} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray' }}>Posts</Styled.h2>
                        <PostCardList posts={posts} />
                    </React.Fragment>
                    <CategoryList />
                </SideContentLayout>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query CategoryListQuery($post_ids: [String]!, $category_id: String!) {
        posts: allMarkdownRemark(filter: { id: { in: $post_ids }, fields: { sourceInstanceName: { eq: "posts" } } }) {
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
        categories: allMarkdownRemark(
            filter: { id: { eq: $category_id }, fields: { sourceInstanceName: { eq: "categories" } } }
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

export default PostsPage
