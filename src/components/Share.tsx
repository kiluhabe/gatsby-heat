import * as React from 'react'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LineIcon,
    LineShareButton,
    PocketIcon,
    PocketShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface ShareProps {
    path: string
}

export const Share: React.FC<ShareProps> = ({ path }) => {
    const { site } = useSiteMetadata()
    const url = `${site?.siteMetadata?.siteUrl}${path}`
    return (
        <div
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: ['60%', '25%'],
                marginTop: '16px',
                marginBottom: '16px',
                marginLeft: 'auto',
            }}
        >
            <TwitterShareButton url={url}>
                <TwitterIcon round={true} size={32} />
            </TwitterShareButton>
            <FacebookShareButton url={url}>
                <FacebookIcon round={true} size={32} />
            </FacebookShareButton>
            <LineShareButton url={url}>
                <LineIcon round={true} size={32} />
            </LineShareButton>
            <PocketShareButton url={url}>
                <PocketIcon round={true} size={32} />
            </PocketShareButton>
            <EmailShareButton url={url}>
                <EmailIcon round={true} size={32} />
            </EmailShareButton>
        </div>
    )
}
