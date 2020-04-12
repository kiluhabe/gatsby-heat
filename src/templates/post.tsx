import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { ArticleJsonLd } from '../components/ArticleJsonLd'
import { BadgeList } from '../components/BadgeList'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { PostBody } from '../components/PostBody'
import { PostHeader } from '../components/PostHeader'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
import { TableOfContents } from '../components/TableOfContents'
import { TinyContentList } from '../components/TinyContentList'
import { getNodeById } from '../nodeUtils/getNodeById'
import { graphql } from 'gatsby'
import { intersection } from 'ramda'

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
    pageContext: {
        id: string
    }
    path: string
}

const RELATED_POST_LIMIT = 10

function getRelatedPosts(postNodes: PostNode[], postNode: PostNode): PostNode[] {
    return postNodes
        .filter(({ id, frontmatter }) => {
            return !!intersection(frontmatter.categories, postNode.frontmatter.categories).length && id !== postNode.id
        })
        .slice(0, RELATED_POST_LIMIT)
}

function getPostCategories(categoryNodes: CategoryNode[], postNode: PostNode): CategoryNode[] {
    return categoryNodes.filter(({ frontmatter }) => {
        return postNode.frontmatter.categories.includes(frontmatter.title)
    })
}

const Post: React.FC<PostProps> = ({ data, pageContext, path }) => {
    const post = getNodeById<PostNode>(data.posts.edges, pageContext.id)
    const postNodes = data.posts.edges.map(({ node }) => node)
    const relatedPosts = getRelatedPosts(postNodes, post).map(({ id, frontmatter, fields }) => ({
        id,
        ...frontmatter,
        path: `/posts/${fields.slug}`,
    }))
    const categoryNodes = data.categories.edges.map(({ node }) => node)
    const categories = getPostCategories(categoryNodes, post).map(({ id, frontmatter, fields }) => ({
        id,
        title: frontmatter.title,
        path: `/categories/${fields.slug}`,
    }))
    return (
        <Layout>
            <Seo title={post.frontmatter.title} description={post.frontmatter.description} amp={true} path={path} />
            <ArticleJsonLd
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
                path={path}
                date={post.frontmatter.date}
            />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <BadgeList items={categories} />
                        <PostHeader path={path} {...post.frontmatter} />
                        <Styled.h2 sx={{ margin: 0 }}>Tbale Of Contents</Styled.h2>
                        <TableOfContents html={post.tableOfContents} />
                        <PostBody html={post.html} />
                    </React.Fragment>
                    <React.Fragment>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray', margin: 0 }}>
                            Related Posts
                        </Styled.h2>
                        <TinyContentList contents={relatedPosts} />
                    </React.Fragment>
                </SideContentLayout>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery {
        posts: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "posts" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    id
                    html
                    tableOfContents(absolute: false, pathToSlugField: "id")
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
        categories: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "categories" } } }
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
                        image
                    }
                }
            }
        }
    }
`

export default Post
