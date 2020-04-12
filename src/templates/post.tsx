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

interface PostProps {
    pageContext: {
        post: PostNode
        posts: PostNode[]
        categories: CategoryNode[]
    }
    path: string
}

const Post: React.FC<PostProps> = ({ pageContext, path }) => {
    const { html, tableOfContents } = pageContext.post
    const { title, description, image, date } = pageContext.post.frontmatter
    const categories = pageContext.categories.map(({ id, frontmatter, fields }) => ({
        id,
        title: frontmatter.title,
        path: `/categories${fields.slug}`,
    }))
    const relatedPosts = pageContext.posts.map(({ id, frontmatter, fields }) => ({
        id,
        ...frontmatter,
        path: `/posts${fields.slug}`,
    }))
    return (
        <Layout>
            <Seo title={title} description={description} amp={true} path={path} />
            <ArticleJsonLd title={title} description={description} image={image} path={path} date={date} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <BadgeList items={categories} />
                        <PostHeader path={path} {...pageContext.post.frontmatter} />
                        <Styled.h2 sx={{ margin: 0 }}>Tbale Of Contents</Styled.h2>
                        <TableOfContents html={tableOfContents} />
                        <PostBody html={html} />
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

export default Post
