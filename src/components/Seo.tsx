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

export const Seo: React.FC<SeoProps> = ({
    description,
    lang,
    title,
    meta = [],
}) => {
    const { site } = useSite()
    const metaTitle = title ?? site?.siteMetadata?.title
    const metaDescription = description ?? site?.siteMetadata?.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site?.siteMetadata?.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}
