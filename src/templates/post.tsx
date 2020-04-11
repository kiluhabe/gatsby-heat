import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { ArticleJsonLd } from '../components/ArticleJsonLd'
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
        categories: string[]
    }
}

const Post: React.FC<PostProps> = ({ data, pageContext }) => {
    const { id, html, frontmatter, tableOfContents } = getNodeById<PostNode>(data.posts.edges, pageContext.id)
    const path = `/posts/${id}`
    const posts = data.posts.edges
        .filter(({ node }) => intersection(node.frontmatter.categories, pageContext.categories))
        .map(({ node }) => ({
            id: node.id,
            ...node.frontmatter,
            path: `/posts/${node.id}`,
        }))
        .slice(0, 10)
    return (
        <Layout>
            <Seo title={frontmatter.title} description={frontmatter.description} amp={true} path={path} />
            <ArticleJsonLd
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
                path={path}
                date={frontmatter.date}
            />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <PostHeader id={id} {...frontmatter} />
                        <Styled.h2 sx={{ margin: 0 }}>Tbale Of Contents</Styled.h2>
                        <TableOfContents html={tableOfContents} />
                        <PostBody html={html} />
                    </React.Fragment>
                    <React.Fragment>
                        <Styled.h2 sx={{ paddingBottom: '16px', borderBottom: 'solid 1px lightgray', margin: 0 }}>
                            Related Posts
                        </Styled.h2>
                        <TinyContentList contents={posts} />
                    </React.Fragment>
                </SideContentLayout>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($categories: [String]!) {
        posts: allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "posts" } } }) {
            edges {
                node {
                    id
                    html
                    tableOfContents(absolute: false, pathToSlugField: "id")
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
