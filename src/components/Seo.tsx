import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

interface Meta {
    name: string
    content: string
}

interface SeoProps {
    title: string
    description?: string
    lang?: string
    meta?: Meta[]
}

export const Seo = React.memo<SeoProps>(
    ({ description, lang, title, meta = [] }) => {
        const { site } = useStaticQuery(
            graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                            author
                        }
                    }
                }
            `
        )
        const metaDescription = description ?? site?.siteMetadata?.description

        return (
            <Helmet
                htmlAttributes={{
                    lang,
                }}
                title={title}
                titleTemplate={`%s | ${site?.siteMetadata?.title}`}
                meta={[
                    {
                        name: `description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:title`,
                        content: title,
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
                        content: site.siteMetadata.author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: metaDescription,
                    },
                ].concat(meta)}
            />
        )
    }
)
