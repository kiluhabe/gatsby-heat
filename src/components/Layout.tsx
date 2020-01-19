import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Footer } from './Footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './Header'

export const Layout = React.memo(({ children }) => {
    return (
        <Styled.root>
            <GlobalStyle />
            <Header />
            <main sx={{ flex: 1 }}>{children}</main>
            <Footer />
        </Styled.root>
    )
})
