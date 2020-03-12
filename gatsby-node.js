'use strict'

const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { permalink, layout } = node.frontmatter
            const { relativePath } = getNode(node.parent)

            let slug = !permalink ? `/${relativePath.replace('.md', '')}/` : permalink

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
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const allMarkdown = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        fields {
                            layout
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (allMarkdown.errors) {
        console.error(allMarkdown.errors)
        throw new Error(allMarkdown.errors)
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug, layout } = node.fields
        createPage({
            path: slug,
            component: path.resolve(`./src/templates/post.tsx`),
            context: { slug },
        })
    })
}
