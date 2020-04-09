'use strict'

const path = require('path')
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
    const allCategoriesMarkdown = await graphql(`
        {
            allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "categories" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            name
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
        createPage({
            path: `/posts/${id}`,
            component: path.resolve(`./src/templates/post.tsx`),
            context: { slug },
        })
    })
    allCategoriesMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { id, frontmatter } = node
        const { name } = frontmatter
        const ids = allPostsMarkdown.data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.categories.includes(name))
            .map(({ node }) => node.id)
        createPage({
            path: `/categories/${id}`,
            component: path.resolve(`./src/templates/posts.tsx`),
            context: { category: name, ids },
        })
    })
}
