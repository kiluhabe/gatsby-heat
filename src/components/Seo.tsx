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
    meta: Meta[]
}>

export const Seo: React.FC<SeoProps> = ({ description, title, lang = 'ja', meta = [] }) => {
    const { site } = useSiteMetadata()
    const siteTitle = site?.siteMetadata?.title
    const siteDescription = site?.siteMetadata?.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={siteTitle}
            titleTemplate={`${title} | %s`}
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
