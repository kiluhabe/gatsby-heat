import * as React from 'react'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
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
        ...node.frontmatter,
        path: `/posts/${node.id}`,
    }))
    return (
        <Layout>
            <Seo title="Home" />
            <Hero
                title="Welcome!"
                image="https://cdn.packhacker.com/2019/10/80571196-budget-packing-list-flat-lay.jpg"
            />
            <Container Tag="section">
                <PageHeader title="Recently Posts" />
                <PostCardList posts={posts} />
            </Container>
        </Layout>
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
