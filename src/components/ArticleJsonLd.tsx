import * as React from 'react'
import Helmet from 'react-helmet'
import { useImage } from '../hooks/useImage'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface ArticleJsonLdProps {
    title: string
    description: string
    image: string
    path: string
    date: string
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({ title, description, path, image, date }) => {
    const { site } = useSiteMetadata()
    const imageSizes = useImage(image)
    const iconSizes = useImage('icon.png')
    const url = `${site?.siteMetadata?.siteUrl}${path}`
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'http://schema.org',
                    '@type': 'NewsArticle',
                    mainEntityOfPage: url,
                    headline: title,
                    image: [`${site?.siteMetadata?.siteUrl}${imageSizes?.src}`],
                    datePublished: date,
                    dateModified: date,
                    author: {
                        '@type': 'Person',
                        name: site?.siteMetadata?.author,
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: site?.siteMetadata?.title,
                        logo: {
                            '@type': 'ImageObject',
                            url: `${site?.siteMetadata?.siteUrl}${iconSizes?.src}`,
                            width: 60,
                            height: 60,
                        },
                    },
                    description: description,
                })}
            </script>
        </Helmet>
    )
}
