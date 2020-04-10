import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadata = Partial<{
    title: string
    description: string
    author: string
    siteUrl: string
}>

type Site = Partial<{
    siteMetadata: SiteMetadata
}>

export function useSiteMetadata(): Partial<{ site: Site }> {
    return useStaticQuery<Partial<{ site: Site }>>(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                }
            }
        }
    `)
}
