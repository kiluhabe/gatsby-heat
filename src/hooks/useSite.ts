import { graphql, useStaticQuery } from 'gatsby'

type SiteData = Partial<{ site: Site }>

export function useSite(): SiteData {
    return useStaticQuery<SiteData>(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
}
