import * as React from 'react'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
import { PostCardList } from '../components/PostCardList'
import { Seo } from '../components/Seo'

const posts = Array(10)
    .fill(0)
    .map(() => ({
        title: 'hoge',
        description: 'hoge fuga foo bar',
        tags: ['foo', 'bar'],
        picture: 'https://cdn.packhacker.com/2020/01/6dcf4f2a-aer-city-sling-vs-aer-day-sling-2.jpg',
        to: '/posts',
    }))

const IndexPage: React.FC = () => (
    <Layout>
        <Seo title="Home" />
        <Hero title="Welcome!" filename="hero.jpg" />
        <Container Tag="section">
            <PageHeader title="Recently Posts" />
            <PostCardList posts={posts} />
        </Container>
    </Layout>
)

export default IndexPage
