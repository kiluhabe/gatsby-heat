import * as React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface Meta {
    name: string
    content: string
}

type SeoProps = Partial<{
    title: string
    description: string
    lang: string
    path: string
    amp: boolean
    meta: Meta[]
}>

export const Seo: React.FC<SeoProps> = ({ description, title, lang = 'ja', path = '', amp = false, meta = [] }) => {
    const { site } = useSiteMetadata()
    const siteTitle = site?.siteMetadata?.title
    const siteDescription = site?.siteMetadata?.description

    const ampHtml = {
        rel: 'amphtml',
        href: `${site?.siteMetadata?.siteUrl}/amp${path}`,
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={siteTitle}
            titleTemplate={`${title} | %s`}
            link={[
                {
                    rel: 'canonical',
                    href: `${site?.siteMetadata?.siteUrl}${path}`,
                },
                amp ? ampHtml : {},
            ]}
            meta={[
                {
                    name: `description`,
                    content: description ?? siteDescription,
                },
                {
                    property: `og:title`,
                    content: title ?? siteTitle,
                },
                {
                    property: `og:description`,
                    content: description ?? siteDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        />
    )
}
