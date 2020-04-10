import * as React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface SideContentLayoutProps {
    children: [React.ReactNode, React.ReactNode]
}

export const SideContentLayout: React.FC<SideContentLayoutProps> = ({ children }) => (
    <div sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>
        <div sx={{ flex: ['0 0 100%', '0 0 70%'] }}>{children[0]}</div>
        <nav sx={{ flex: ['0 0 100%', '0 0 25%'] }}>{children[1]}</nav>
    </div>
)
