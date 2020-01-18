import * as React from 'react'
import { Footer } from './Footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './Header'
/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Layout = React.memo(({ children }) => {
    return (
        <div sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <GlobalStyle />
            <Header />
            <main sx={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    )
})
