import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage: React.FC = () => (
    <Layout>
        <Seo title="Page Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
)

export default NotFoundPage
