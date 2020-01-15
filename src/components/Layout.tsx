import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Footer } from './Footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './Header'

export const Layout = React.memo(({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <GlobalStyle />
            <Header siteTitle={data?.site?.siteMetadata?.title} />
            <main>{children}</main>
            <Footer siteTitle={data?.site?.siteMetadata?.title} />
        </>
    )
})
