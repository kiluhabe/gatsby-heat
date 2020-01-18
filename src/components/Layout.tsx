import * as React from 'react'
import { Footer } from './Footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './Header'

export const Layout = React.memo(({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
})
