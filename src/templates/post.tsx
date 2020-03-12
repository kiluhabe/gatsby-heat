import * as React from 'react'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface PostProps {
    data: {
        markdownRemark: {
            html: string
            frontmatter: {
                title: string
                description: string
                image: string
            }
        }
    }
}

const Post: React.FC<PostProps> = ({ data }) => {
    const { html, frontmatter } = data.markdownRemark
    const { title, description, image } = frontmatter
    return (
        <Layout>
            <Seo title={title} description={description} />
            <Container Tag="section">
                <PageHeader title={title} />
                <img sx={{ width: '100%', marginTop: '40px', marginBottom: '40px' }} alt={title} src={image} />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                image
            }
        }
    }
`

export default Post
