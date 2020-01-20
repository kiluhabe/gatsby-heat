import * as React from 'react'
import { Layout } from '../components/Layout'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'

const contents = {
    title: 'Hi people',
    description: `Welcome to your new Gatsby site.
Now go build something great.`,
}

const IndexPage = React.memo(() => (
    <Layout>
        <Seo title="Home" />
        <PageHeader {...contents} />
    </Layout>
))

export default IndexPage
