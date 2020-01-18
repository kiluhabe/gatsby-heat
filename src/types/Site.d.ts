declare type SiteMetadata = Partial<{
    title: string
    description: string
    author: string
    siteUrl: string
}>

declare type Site = Partial<{
    siteMetadata: SiteMetadata
}>
