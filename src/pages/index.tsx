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
                        frontmatter: {
                            title: string
                            description: string
                            categories: string[]
                            image: string
                            date: string
                            path: string
                        }
                    }
                }
            ]
        }
    }
}

const IndexPage: React.FC<IndexProps> = ({ data }) => (
    <Layout>
        <Seo title="Home" />
        <Hero title="Welcome!" filename="hero.jpg" />
        <Container Tag="section">
            <PageHeader title="Recently Posts" />
            <PostCardList posts={data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)} />
        </Container>
    </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
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
