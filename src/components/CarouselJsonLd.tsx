import * as React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface CarouselJsonLdProps {
    paths: string[]
}

export const CarouselJsonLd: React.FC<CarouselJsonLdProps> = ({ paths }) => {
    const { site } = useSiteMetadata()
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    itemListElement: paths.map((path, index) => ({
                        '@type': 'ListItem',
                        position: index + 1,
                        url: `${site?.siteMetadata?.siteUrl}${path}`,
                    })),
                })}
            </script>
        </Helmet>
    )
}
