'use strict'

const path = require('path')
const { uniq, flatten } = require('ramda')

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

function extractCategories(allMarkdownRemark) {
    const categories = allMarkdownRemark.edges.map(({ node }) => {
        return node.frontmatter.categories.map(category => category)
    })
    return uniq(flatten(categories))
}

function idsOf(category, allMarkdownRemark) {
    return allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.categories.includes(category))
        .map(({ node }) => node.id)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const allMarkdown = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            layout
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

    if (allMarkdown.errors) {
        console.error(allMarkdown.errors)
        throw new Error(allMarkdown.errors)
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { id } = node
        const { slug, layout } = node.fields
        createPage({
            path: `/posts/${id}`,
            component: path.resolve(`./src/templates/post.tsx`),
            context: { slug },
        })
    })
    const categories = extractCategories(allMarkdown.data.allMarkdownRemark)
    categories.forEach(category => {
        createPage({
            path: `/categories/${category}`,
            component: path.resolve(`./src/templates/posts.tsx`),
            context: {
                category,
                ids: idsOf(category, allMarkdown.data.allMarkdownRemark),
            },
        })
    })
}
