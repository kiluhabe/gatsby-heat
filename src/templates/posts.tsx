import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { CarouselJsonLd } from '../components/CarouselJsonLd'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PageNavigation } from '../components/PageNavigation'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'
import { SideContentLayout } from '../components/SideContentLayout'
import { TinyContentList } from '../components/TinyContentList'

interface PostsProps {
    pageContext: {
        category: CategoryNode
        categories: CategoryNode[]
        posts: PostNode[]
        lastPage: number
        currentPage: number
    }
    path: string
}

const PostsPage: React.FC<PostsProps> = ({ pageContext, path }) => {
    const { slug } = pageContext.category.fields
    const basePath = `/categories${slug}`
    const { title, description, image } = pageContext.category.frontmatter
    const posts = pageContext.posts.map(({ id, frontmatter, fields }) => ({
        id,
        ...frontmatter,
        path: `/posts${fields.slug}`,
    }))
    const paths = posts.map(post => post.path)
    const categories = pageContext.categories.map(({ id, frontmatter, fields }) => ({
        id,
        ...frontmatter,
        path: `/categories${fields.slug}`,
    }))
    return (
        <Layout>
            <Seo title={title} description={description} path={path} />
            <CarouselJsonLd paths={paths} />
            <Hero title={title} description={description} src={image} />
            <Container Tag="section">
                <SideContentLayout>
                    <React.Fragment>
                        <PostCardList posts={posts} />
                        <PageNavigation
                            basePath={basePath}
                            lastPage={pageContext.lastPage}
                            currentPage={pageContext.currentPage}
                        />
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

export default PostsPage
