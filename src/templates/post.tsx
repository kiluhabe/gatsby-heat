import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { PostHeader } from '../components/PostHeader'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
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
    const { id, html, frontmatter } = getNodeById<PostNode>(data.posts.edges, pageContext.id)
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
            <Seo title={frontmatter.title} description={frontmatter.description} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <PostHeader id={id} {...frontmatter} />
                        <div sx={{ marginBottom: '128px' }} dangerouslySetInnerHTML={{ __html: html }} />
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
