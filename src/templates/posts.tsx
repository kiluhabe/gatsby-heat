import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { CarouselJsonLd } from '../components/CarouselJsonLd'
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
        id: string
    }
    path: string
}

function getCategoryPosts(postNodes: PostNode[], category: string): PostNode[] {
    return postNodes.filter(({ frontmatter }) => frontmatter.categories.includes(category))
}

const PostsPage: React.FC<PostsProps> = ({ data, pageContext, path }) => {
    const category = getNodeById<CategoryNode>(data.categories.edges, pageContext.id)
    const postNodes = data.posts.edges.map(({ node }) => node)
    const posts = getCategoryPosts(postNodes, category.frontmatter.title).map(({ id, frontmatter, fields }) => ({
        id,
        ...frontmatter,
        path: `/posts${fields.slug}`,
    }))
    const paths = posts.map(post => post.path)
    const categories = data.categories.edges.map(({ node }) => ({
        id: node.id,
        ...node.frontmatter,
        path: `/categories${node.fields.slug}`,
    }))
    return (
        <Layout>
            <Seo title={category.frontmatter.title} description={category.frontmatter.description} path={path} />
            <CarouselJsonLd paths={paths} />
            <Hero
                title={category.frontmatter.title}
                description={category.frontmatter.description}
                src={category.frontmatter.image}
            />
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
    query CategoryListQuery {
        posts: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "posts" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
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
                    fields {
                        slug
                    }
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
