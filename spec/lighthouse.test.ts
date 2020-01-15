import { launch } from 'chrome-launcher'

const lighthouse = require('lighthouse')
const {siteUrl} = require('../siteMetadata.js')

async function scores(url: string) {
    const chrome = await launch({chromeFlags: ['--headless'], port: 9222})
    const { lhr } = await lighthouse(url, {chromeFlags: ['--headless']}, null);
    await chrome.kill()
    return (category: string): number => lhr.categories[category].score
}

describe(`${siteUrl}: Lighthouse Score.`, () => {
    let subject: Function

    beforeAll(async () => {
        subject = await scores(siteUrl)
    })

    it(`Performance Score above 90.`, async () => {
        expect(subject('performance')).toBeGreaterThanOrEqual(0.9)
    })

    it(`PWA Score above 90.`, async () => {
        expect(subject('pwa')).toBeGreaterThanOrEqual(0.9)
    })

    it(`Accessibility Score above 90.`, async () => {
        expect(subject('accessibility')).toBeGreaterThanOrEqual(0.9)
    })

    it(`Best Practices Score above 90.`, async () => {
        expect(subject('best-practices')).toBeGreaterThanOrEqual(0.9)
})

    it(`${siteUrl}: SEO Score above 90.`, async () => {
        expect(subject('seo')).toBeGreaterThanOrEqual(0.9)
    })
})
