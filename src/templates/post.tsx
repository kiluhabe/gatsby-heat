import * as React from 'react'
import { Container } from '../components/Container'
import Img from 'gatsby-image'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useImage } from '../hooks/useImage'

interface PostProps {
    data: {
        markdownRemark: {
            html: string
            frontmatter: {
                title: string
                description: string
                categories: string[]
                image: string
                date: string
            }
        }
    }
}

const Post: React.FC<PostProps> = ({ data }) => {
    const { html, frontmatter } = data.markdownRemark
    const { title, description, image } = frontmatter
    const sizes = useImage(image)
    return (
        <Layout>
            <Seo title={title} description={description} />
            <Container Tag="section">
                <PageHeader title={title} description={description} />
                <Img sx={{ width: '100%', marginTop: '32px', marginBottom: '32px' }} alt={title} sizes={sizes} />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }, sourceInstanceName: { eq: "posts" } }) {
            html
            frontmatter {
                title
                description
                categories
                image
            }
        }
    }
`

export default Post
