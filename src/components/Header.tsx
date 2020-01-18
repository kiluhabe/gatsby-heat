import * as React from 'react'
/** @jsx jsx */
import { SxProps, Theme, jsx } from 'theme-ui'
import { useSite } from '../hooks/useSite'

const sx: SxProps['sx'] = ({ colors }: Theme) => ({
    color: colors?.text,
    backgroundColor: colors?.primary,
})

export const Header: React.FC = () => {
    const { site } = useSite()
    return (
        <header sx={sx}>
            <h1>{site?.siteMetadata?.title}</h1>
        </header>
    )
}
