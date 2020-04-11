import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
import { TinyContentList } from '../components/TinyContentList'
import { getNodeById } from '../nodeUtils/getNodeById'
import { graphql } from 'gatsby'

interface PostsProps {
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
    pageContext: {
        categoryId: string
    }
}

const PostsPage: React.FC<PostsProps> = ({ data, pageContext }) => {
    const posts = data.posts.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    const categories = data.categories.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/categories/${node.id}`,
    }))
    const { frontmatter } = getNodeById<CategoryNode>(data.categories.edges, pageContext.categoryId)
    const { title, description, image } = frontmatter
    return (
        <Layout>
            <Seo title={title} />
            <Hero title={title} description={description} src={image} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
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
    query CategoryListQuery($postIds: [String]!) {
        posts: allMarkdownRemark(filter: { id: { in: $postIds }, fields: { sourceInstanceName: { eq: "posts" } } }) {
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
        categories: allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "categories" } } }) {
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

export default PostsPage
