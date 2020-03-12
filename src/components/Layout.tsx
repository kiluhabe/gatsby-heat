import * as React from 'react'
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { GlobalFooter } from './GlobalFooter'
import { GlobalHeader } from './GlobalHeader'
import { GlobalStyle } from './GlobalStyle'

export const Layout: React.FC = ({ children }) => (
    <Styled.root>
        <GlobalStyle />
        <GlobalHeader />
        <main sx={{ flex: 1 }}>{children}</main>
        <GlobalFooter />
    </Styled.root>
)
