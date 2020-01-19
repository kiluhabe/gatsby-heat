import * as React from 'react'
import Helmet from 'react-helmet'
import { useSite } from '../hooks/useSite'

interface Meta {
    name: string
    content: string
}

type SeoProps = Partial<{
    title: string
    description: string
    lang: string
    meta: Meta[]
}>

export const Seo: React.FC<SeoProps> = ({ description, lang, title, meta = [] }) => {
    const { site } = useSite()
    const siteTitle = site?.siteMetadata?.title
    const siteDescription = site?.siteMetadata?.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={siteTitle}
            titleTemplate={`%s | ${title}`}
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
