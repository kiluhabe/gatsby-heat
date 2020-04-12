'use strict'

const { resolve } = require('path')
const { uniq, flatten } = require('ramda')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { permalink, layout } = node.frontmatter
            const { relativePath, sourceInstanceName } = getNode(node.parent)

            const slug = !permalink ? `/${relativePath.replace('.md', '')}/` : permalink

            createNodeField({
                node,
                name: 'slug',
                value: slug || '',
            })

            createNodeField({
                node,
                name: 'layout',
                value: layout || '',
            })

            createNodeField({
                node,
                name: 'sourceInstanceName',
                value: sourceInstanceName || '',
            })
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const allPostsMarkdown = await graphql(`
        {
            allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "posts" } } }) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            categories
                        }
                    }
                }
            }
        }
    `)
    const allCategoriesMarkdown = await graphql(`
        {
            allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "categories" } } }) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)

    if (allPostsMarkdown.errors) {
        console.error(allPostsMarkdown.errors)
        throw new Error(allPostsMarkdown.errors)
    }
    if (allCategoriesMarkdown.errors) {
        console.error(allCategoriesMarkdown.errors)
        throw new Error(allCategoriesMarkdown.errors)
    }

    allPostsMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { id, fields } = node
        const { slug } = fields
        const path = `/posts${slug}`
        createPage({
            path,
            component: resolve(`./src/templates/post.tsx`),
            context: { id },
        })
    })
    allCategoriesMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { id, frontmatter, fields } = node
        const { title } = frontmatter
        const { slug } = fields
        const path = `/categories${slug}`
        createPage({
            path,
            component: resolve(`./src/templates/posts.tsx`),
            context: { id },
        })
    })
}
