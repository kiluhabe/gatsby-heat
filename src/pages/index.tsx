import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const IndexPage = React.memo(() => (
    <Layout>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    </Layout>
))

export default IndexPage
