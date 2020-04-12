'use strict'

const { resolve } = require('path')
const { uniq, flatten, prop, intersection } = require('ramda')

const POST_PER_PAGE = 15
const RELATED_POST_LIMIT = 10

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { permalink } = node.frontmatter
            const { relativePath, sourceInstanceName } = getNode(node.parent)

            const slug = !permalink ? `/${relativePath.replace('.md', '')}/` : permalink

            createNodeField({
                node,
                name: 'slug',
                value: slug || '',
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
            allMarkdownRemark(
                filter: { fields: { sourceInstanceName: { eq: "posts" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        id
                        html
                        tableOfContents
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            description
                            categories
                            image
                            date
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
                            description
                            image
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

    const postNodes = allPostsMarkdown.data.allMarkdownRemark.edges.map(prop('node'))
    const categoryNodes = allCategoriesMarkdown.data.allMarkdownRemark.edges.map(prop('node'))

    postNodes.forEach(node => {
        const { fields, frontmatter } = node
        const { categories } = frontmatter
        const { slug } = fields
        const path = `/posts${slug}`
        const posts = postNodes
            .filter(({ id, frontmatter }) => {
                return !!intersection(frontmatter.categories, categories).length && node.id !== id
            })
            .slice(0, RELATED_POST_LIMIT)
        const postCategories = categoryNodes.filter(({ frontmatter }) => categories.includes(frontmatter.title))

        createPage({
            path,
            component: resolve(`./src/templates/post.tsx`),
            context: { post: node, posts, categories: postCategories },
        })
    })

    categoryNodes.forEach(node => {
        const { id, frontmatter, fields } = node
        const { title } = frontmatter
        const { slug } = fields
        const allPosts = postNodes.filter(({ frontmatter }) => frontmatter.categories.includes(title))
        const lastPage = Math.ceil(allPosts.length / POST_PER_PAGE)
        Array.from({ length: lastPage }).forEach((_, index) => {
            const path = !index ? `/categories${slug}` : `/categories${slug}${index + 1}`
            const posts = allPosts.slice(index * POST_PER_PAGE, (index + 1) * POST_PER_PAGE)
            createPage({
                path,
                component: resolve(`./src/templates/posts.tsx`),
                context: {
                    category: node,
                    categories: categoryNodes,
                    posts,
                    lastPage,
                    currentPage: index + 1,
                },
            })
        })
    })
}
